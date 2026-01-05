// 카카오 SDK 초기화 유틸리티
// .env 파일의 VITE_KAKAO_JS_KEY를 사용하여 초기화합니다

import { getSeoData } from "../../../shared/seo";

declare global {
  interface Window {
    Kakao: any;
  }
}

export const initKakao = () => {
  // 브라우저 환경이 아니면 실행하지 않음 (빌드 타임 체크)
  if (typeof window === 'undefined') return;
  
  // 환경 변수가 없어도 빌드는 성공하도록 처리
  const kakaoKey = import.meta.env.VITE_KAKAO_JS_KEY;
  
  if (!kakaoKey) {
    console.warn('⚠️ 카카오 JavaScript 키가 설정되지 않았습니다. 공유 기능이 비활성화됩니다.');
    return;
  }

  // 카카오 SDK가 로드되지 않았으면 대기
  if (!window.Kakao) {
    console.warn('⚠️ 카카오 SDK가 아직 로드되지 않았습니다.');
    return;
  }

  // 이미 초기화되었으면 스킵
  if (window.Kakao.isInitialized()) {
    return;
  }

  try {
    window.Kakao.init(kakaoKey);
    console.log('✅ 카카오 SDK 초기화 성공');
  } catch (error) {
    console.error('❌ 카카오 SDK 초기화 실패:', error);
  }
};

// 카카오톡 공유하기 함수
interface ShareKakaoParams {
  koreanName: string;
  englishName: string;
  runeText: string;
  language?: string;
}

function getCurrentLanguage(): string {
  if (typeof window === 'undefined') return 'en';

  try {
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    if (urlLang) return urlLang;
  } catch {
    // ignore
  }

  try {
    const saved = window.localStorage.getItem('rune-converter-language');
    if (saved) return saved;
  } catch {
    // ignore
  }

  return (navigator.language || 'en').toLowerCase();
}

function normalizeSeoLang(lang: string): 'ko' | 'en' {
  const clean = (lang || '').toLowerCase().split('-')[0];
  return clean === 'ko' ? 'ko' : 'en';
}

export const shareToKakao = ({ koreanName, englishName, runeText, language }: ShareKakaoParams) => {
  if (!window.Kakao) {
    alert('카카오톡 공유 기능을 불러오는 중입니다. 잠시 후 다시 시도해주세요.');
    return;
  }

  const resolvedLang = language || getCurrentLanguage();
  const seoLang = normalizeSeoLang(resolvedLang);
  const seo = getSeoData(resolvedLang);

  const shareName = seoLang === 'ko' ? (koreanName || englishName) : (englishName || koreanName);
  const shareUrl = `${window.location.origin}/og?name=${encodeURIComponent(shareName)}&rune=${encodeURIComponent(runeText)}&lang=${encodeURIComponent(resolvedLang)}`;
  const imageUrl = `${window.location.origin}/og-image.jpg`;

  const title = shareName ? `${shareName} • ${seo.ogTitle}` : seo.ogTitle;
  const description = seoLang === 'ko'
    ? `${seo.ogDesc}\n\n${runeText}`
    : `${seo.ogDesc}\n\n${runeText}`;

  const primaryButtonTitle = seoLang === 'ko' ? '룬 문자 확인하기' : 'View runes';
  const secondaryButtonTitle = seoLang === 'ko' ? '나도 이름 만들기' : 'Convert your name';

  try {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title,
        description,
        imageUrl,
        link: {
          mobileWebUrl: shareUrl,
          webUrl: shareUrl,
        },
      },
      buttons: [
        {
          title: primaryButtonTitle,
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
        {
          title: secondaryButtonTitle,
          link: {
            mobileWebUrl: window.location.origin,
            webUrl: window.location.origin,
          },
        },
      ],
    });

    // GA4 이벤트 추적 (선택사항)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'share', {
        method: 'kakao',
        content_type: 'viking_rune',
        item_id: koreanName,
      });
    }
  } catch (error) {
    console.error('카카오톡 공유 실패:', error);
    alert('카카오톡 공유에 실패했습니다. 다시 시도해주세요.');
  }
};

// 공유 링크로 들어온 사용자 처리
export const getSharedUserInfo = (): { sharedName: string | null; runeText: string | null } => {
  if (typeof window === 'undefined') return { sharedName: null, runeText: null };
  
  const params = new URLSearchParams(window.location.search);
  return {
    sharedName: params.get('shared'),
    runeText: params.get('rune'),
  };
};
