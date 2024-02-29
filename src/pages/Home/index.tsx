import KakaoMap from '@_components/KakaoMap';
import * as S from './Home.styles';
import { useQuery } from '@tanstack/react-query';
import { getToiletData } from '@_apis/toiletData';
import PostList from '@_components/PostList';
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from 'react';
import { db } from '../../firebaseApp'

const Home = () => {

  const { data: toiletData } = useQuery({
    queryKey: ['toiletData'],
    queryFn: getToiletData,
  });


  const getPost = async () => {
    const data = await getDocs(collection(db, "toiletData"));
    console.log(data)

  }

  // useEffect(() => {
  //   getPost()
  // }, [])

  return (
    <S.Wrap>
      <KakaoMap toiletData={toiletData} />

      <PostList toiletData={toiletData} />

    </S.Wrap>
  )
}

export default Home;