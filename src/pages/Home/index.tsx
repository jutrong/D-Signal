import KakaoMap from '@_components/KakaoMap';
import * as S from './Home.styles';
import PostList from '@_components/PostList';
import { useEffect, useState } from 'react';
import { Toilet } from '@_types/toilet';
import { getToiletsBySimilarAddress } from '@_remote/toiletData';
import { usePositionStore } from '@_store/currentPosition';




const Home = () => {
  const [toiletData, setToiletData] = useState<Toilet[]>([]);
  const { currentPosition } = usePositionStore()

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
        const fetchedToilets = await getToiletsBySimilarAddress(currentPosition.address);
        setToiletData(fetchedToilets);
      } catch (error) {
        console.error("Error fetching toilets:", error);
      }
    };
    fetchToilets();
  }, [currentPosition.address]);
  return (
    <S.Wrap>
      <KakaoMap toiletData={toiletData} />
      <PostList toiletData={toiletData} />
    </S.Wrap>
  )
}

export default Home;
