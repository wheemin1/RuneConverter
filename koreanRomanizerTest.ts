// koreanRomanizerTest.ts
import { romanizeKorean, commonNameMappings } from './client/src/lib/koreanRomanizer';

// 테스트할 한국어 이름들
const testNames = [
  '김', '이', '박', '최', '정', '강', '조', '윤',
  '임', '한', '오', '서', '신', '권', '황', '안',
  '송', '전', '홍', '유', '지', '천',
  '조휘민', '김민수', '이영희', '박지민', '최수연',
  '정현우', '강나연', '임태현', '오세훈', '한지민',
  // 자주 문제가 발생할 수 있는 특수 케이스
  '양', '량', '략', '류', '률', '차', '차량',
  '충', '청', '촉', '측', '카', '캬', '쿄',
  '하나', '햇님', '현지', '흥부', '히말라야',
  // 추가 테스트
  '쌍', '빛', '짧', '밟', '닫', '밭', '낯', '겁',
  '낱', '읊', '옯', '값'
];

console.log("=== 한국어 이름 로마자 변환 테스트 ===");
console.log("----------------------------------------");

testNames.forEach(name => {
  const romanized = romanizeKorean(name);
  const commonMapping = commonNameMappings[name] || '(매핑 없음)';
  console.log(`한글: ${name.padEnd(6)} → 로마자: ${romanized.padEnd(20)} (공통 매핑: ${commonMapping})`);
});

console.log("----------------------------------------");
console.log("테스트 완료");
