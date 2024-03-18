import KakaoMap from '@_components/KakaoMap';
import * as S from './Home.styles';
import PostList from '@_components/PostList';
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { Toilet } from '@_types/toilet';
import { db } from '@_firebase';
import { getToiletsBySimilarAddress } from '@_apis/toiletData';
import { useRecoilValue } from 'recoil';
import { currentPositionState } from '@_recoil/atom/currentPosition';




const Home = () => {
  const [toiletData, setToiletData] = useState<Toilet[]>([]);
  const currentLocation = useRecoilValue(currentPositionState);
  // const getPost = async () => {
  //   const data = await getDocs(collection(db, "toilet"));


  //   data?.forEach((doc) => {
  //     const dataObj = { ...doc.data() as Toilet, id: doc.id }
  //     setToiletData((prev) => [...prev, dataObj as Toilet]);
  //   })
  // }


  // useEffect(() => {
  //   getPost()
  // }, [])
  useEffect(() => {
    const fetchToilets = async () => {
      try {
        const fetchedToilets = await getToiletsBySimilarAddress(currentLocation.address);
        setToiletData(fetchedToilets);
      } catch (error) {
        console.error("Error fetching toilets:", error);
      }
    };
    fetchToilets();
  }, [currentLocation.address]);
  return (
    <S.Wrap>
      <KakaoMap toiletData={toiletData} />
      <PostList toiletData={toiletData} />
    </S.Wrap>
  )
}

export default Home;
