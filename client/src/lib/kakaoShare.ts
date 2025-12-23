// 카카오 SDK 초기화 유틸리티
// .env 파일의 VITE_KAKAO_JS_KEY를 사용하여 초기화합니다

declare global {
  interface Window {
    Kakao: any;
  }
}

export const initKakao = () => {
  if (typeof window === 'undefined') return;
  
  const kakaoKey = import.meta.env.VITE_KAKAO_JS_KEY;
  
  if (!kakaoKey) {
    console.error('⚠️ 카카오 JavaScript 키가 .env 파일에 설정되지 않았습니다.');
    console.error('📝 .env 파일에 VITE_KAKAO_JS_KEY=여기에_키_입력 형식으로 추가해주세요.');
    return;
  }

  if (window.Kakao && !window.Kakao.isInitialized()) {
    try {
      window.Kakao.init(kakaoKey);
      console.log('✅ 카카오 SDK 초기화 성공:', window.Kakao.isInitialized());
    } catch (error) {
      console.error('❌ 카카오 SDK 초기화 실패:', error);
    }
  }
};

// 카카오톡 공유하기 함수
interface ShareKakaoParams {
  koreanName: string;
  englishName: string;
  runeText: string;
}

export const shareToKakao = ({ koreanName, englishName, runeText }: ShareKakaoParams) => {
  if (!window.Kakao) {
    alert('카카오톡 공유 기능을 불러오는 중입니다. 잠시 후 다시 시도해주세요.');
    return;
  }

  const shareUrl = `${window.location.origin}?shared=${encodeURIComponent(koreanName)}&rune=${encodeURIComponent(runeText)}`;

  try {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `🛡️ 전사 [${koreanName}]의 룬 문자가 도착했습니다`,
        description: `${englishName}님의 이름이 고대 바이킹 룬 문자로 변환되었습니다: ${runeText}\n\n고대 북유럽 전사가 기록한 당신의 운명적인 이름을 확인해보세요!`,
        imageUrl: 'https://viking-rune-converter.netlify.app/og-image.png',
        link: {
          mobileWebUrl: shareUrl,
          webUrl: shareUrl,
        },
      },
      buttons: [
        {
          title: '🔮 룬 문자 확인하기',
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
        {
          title: '⚔️ 나도 이름 만들기',
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
