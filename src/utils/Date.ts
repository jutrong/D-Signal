import { Timestamp } from 'firebase/firestore';
import { format } from 'date-fns';

export function convertTimestampToDate(timestamp: any): Date {
  if (timestamp instanceof Timestamp) {
    return timestamp.toDate();
  } else {
    return timestamp;
  }
}

// Date 객체를 원하는 포맷의 문자열로 변환하는 함수
export function formatDate(date: Date): string {
  return format(date, 'yyyy-MM-dd');
}
