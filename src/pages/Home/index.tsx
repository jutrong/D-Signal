import KakaoMap from '@_components/KakaoMap';
import * as S from './Home.styles';
import PostList from '@_components/PostList';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseApp";
import { useEffect, useState } from 'react';
import { Toilet } from '@_types/toilet';




const Home = () => {
  const [toiletData, setToiletData] = useState<Toilet[]>([]);


  const getPost = async () => {
    const data = await getDocs(collection(db, "toilet"));

    data?.forEach((doc) => {
      setToiletData((prev) => [...prev, doc.data() as Toilet]);
    })
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <S.Wrap>
      <KakaoMap toiletData={toiletData} />
      <PostList toiletData={toiletData} />
    </S.Wrap>
  )
}

export default Home;