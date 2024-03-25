import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import { Pagination, Navigation } from 'swiper';
import { Toilet } from "@_types/toilet";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from './PostDetail.styles'
import KakaoStaticMap from "@_components/KakaoMap/KakaoStaticMap";
import { db } from "@_remote/firebaseApp";
import PostContent from "@_components/PostContent";
import { ModalName, useModalStore } from "@_store/modal";
import Modal from "@_components/common/Modal";
import Review from "@_components/Review";
import { useReview } from "@_hooks/Review/useReview";
import ReviewDisplay from "@_components/ReviewDisplay";
import Button from "@_components/shared/Button";

// TODO : 로그인한 유저만 리뷰 작성, 삭제
const PostDetail = () => {
  const { id } = useParams()
  const [post, setPost] = useState<Toilet>()
  const { fetchReviews, reviews } = useReview(id)
  const { setModal } = useModalStore()
  const navigate = useNavigate()

  const getPostDetail = async (postId: string) => {
    if (postId) {
      const docRef = doc(db, "toilet", postId);
      const docSnap = await getDoc(docRef);
      setPost({ id: docSnap.id, ...(docSnap.data() as Toilet) })
    }
  }

  const onClickPrevBtn = () => {
    navigate(-1)
  }

  const onClickReviewBtn = () => {
    setModal({ name: ModalName.review, isActive: true })
  }

  useEffect(() => {
    if (id) getPostDetail(id)
  }, [id])

  useEffect(() => {
    if (id) fetchReviews()
  }, [id])

  return (
    <>
      <Modal name={ModalName.review} >
        {id ? <Review postId={id} /> : null}
      </Modal>
      <S.Wrap>
        <S.PrevBtnWrap>
          <S.PrevBtn size={30} onClick={onClickPrevBtn} />
          <S.ToiletName>
            {post?.화장실명}
          </S.ToiletName>
        </S.PrevBtnWrap>
        <S.DataType>
          <span>공공 데이터</span>
        </S.DataType>
        {post && <PostContent post={post} />}
        <S.Line />
        <S.ReviewBtnWrap>
          <Button
            $buttonColor="subColor"
            $fontColor="blackColor"
            width="100px"
            height="30px"
            $hasBorder={false}
            onClick={onClickReviewBtn}>
            리뷰 작성
          </Button>
        </S.ReviewBtnWrap>

        <KakaoStaticMap lat={post?.WGS84위도 || 0} lng={post?.WGS84경도 || 0} toiletName={post?.화장실명} />
        {reviews.length > 0 ? (
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={320} // 슬라이드 간의 간격
            slidesPerView={3} // 한 번에 보여질 슬라이드 개수
            pagination={{ clickable: true }} // 페이지네이션 활성화
            navigation // 네비게이션 활성화
            style={{ width: '100%', padding: '10px 0' }} // Swiper 컨테이너 스타일링
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <ReviewDisplay review={review} postId={id || ''} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p>리뷰가 없습니다.</p>
        )}

      </S.Wrap >
    </>
  )

}

export default PostDetail;