import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from './firebaseApp';

/**
 * @description 주소 키워드를 받아와 해당 주소와 유사한 화장실 데이터를 가져오는 함수
 * @param addressKeyword
 * @returns 화장실 데이터를 저장한 배열
 */

export const getToiletsBySimilarAddress = async (addressKeyword: string) => {
  const toiletsCol = collection(db, 'toilet');
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
