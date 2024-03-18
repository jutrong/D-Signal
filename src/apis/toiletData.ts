// import { ToiletResponse } from '@_types/toilet';
// import axios from 'axios';

// export const getToiletData = async () => {
//   const { data } = await axios.get<ToiletResponse>('/data/toilet.json');

//   return data.toilet.slice(0, 100);
// };

import { db } from '@_firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

// 주어진 주소 키워드로 문서를 필터링하는 함수
export const getToiletsBySimilarAddress = async (addressKeyword: string) => {
  const toiletsCol = collection(db, 'toilet'); // 'toilet' 컬렉션 참조
  // 소재지지번주소 필드에서 주소 키워드를 포함하는 문서 검색
  const q = query(
    toiletsCol,
    where('소재지지번주소', '>=', addressKeyword),
    where('소재지지번주소', '<=', addressKeyword + '\uf8ff'),
  );
  const querySnapshot = await getDocs(q);
  const toilets: any[] = [];
  querySnapshot.forEach((doc) => {
    toilets.push({ id: doc.id, ...doc.data() });
  });
  return toilets;
};
