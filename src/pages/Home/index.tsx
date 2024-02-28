import KakaoMap from '@_components/KakaoMap';
import * as S from './Home.styles';
import { useQuery } from '@tanstack/react-query';
import { getToiletData } from '@_apis/toiletData';
import PostList from '@_components/PostList';

const Home = () => {

  const { data: toiletData } = useQuery({
    queryKey: ['toiletData'],
    queryFn: getToiletData,
  });

  return (
    <S.Wrap>
      <KakaoMap toiletData={toiletData} />

      <PostList toiletData={toiletData} />

    </S.Wrap>
  )
}

export default Home;