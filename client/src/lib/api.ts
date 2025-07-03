// 로컬 테스트를 위한 API 연결 설정

import { RuneConversion } from "@shared/schema";

// API 기본 URL 설정
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? '/api' 
  : 'http://localhost:5000/api';

/**
 * 룬 변환 결과를 서버에 저장
 */
export async function saveRuneConversionToServer(
  koreanName: string, 
  englishName: string, 
  runeText: string
): Promise<RuneConversion> {
  try {
    const response = await fetch(`${API_BASE_URL}/rune-conversions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        koreanName,
        englishName,
        runeText,
        createdAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to save rune conversion:', error);
    throw error;
  }
}

/**
 * 모든 룬 변환 결과 가져오기
 */
export async function getAllRuneConversions(): Promise<RuneConversion[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/rune-conversions`);

    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch rune conversions:', error);
    return [];
  }
}

/**
 * 인기 있는 룬 변환 결과 가져오기
 */
export async function getPopularRuneConversions(): Promise<RuneConversion[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/rune-conversions/popular`);

    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch popular rune conversions:', error);
    return [];
  }
}

/**
 * API 서버 상태 확인
 */
export async function checkServerStatus(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/rune-conversions`, {
      method: 'HEAD',
      headers: { 'Cache-Control': 'no-cache' },
    });
    return response.ok;
  } catch (error) {
    console.error('Server status check failed:', error);
    return false;
  }
}

/**
 * 서버 연결 테스트 (로컬 테스트용)
 */
export async function testServerConnection(): Promise<{ connected: boolean, message: string }> {
  try {
    const isConnected = await checkServerStatus();
    return {
      connected: isConnected,
      message: isConnected 
        ? '서버 연결이 성공적으로 확립되었습니다.' 
        : '서버 연결에 실패했습니다.'
    };
  } catch (error) {
    return {
      connected: false,
      message: `서버 연결 중 오류가 발생했습니다: ${error}`
    };
  }
}
