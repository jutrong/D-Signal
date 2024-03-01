export type Toilet = {
  id?: string;
  번호: string;
  구분: string;
  화장실명: string;
  소재지도로명주소: string;
  소재지지번주소: string;
  남성용대변기수: number;
  남성용소변기수: number;
  남성용장애인용대변기수: number;
  남성용장애인용소변기수: number;
  남성용어린이용대변기수: number;
  남성용어린이용소변기수: number;
  여성용대변기수: number;
  여성용장애인용대변기수: number;
  여성용어린이용대변기수: number;
  관리기관명: string;
  전화번호: string;
  개방시간: string;
  설치연월: string;
  WGS84위도: number;
  WGS84경도: number;
  화장실소유구분: string;
  오물처리방식: string;
  비상벨설치여부: 'Y' | 'N';
  비상벨설치장소: string;
  화장실입구CCTV설치유무: 'Y' | 'N';
  기저귀교환대유무: 'Y' | 'N';
  기저귀교환대장소: string;
  데이터기준일자: string;
  distance?: number;
};

export type ToiletResponse = {
  toilet: Toilet[];
};

export type Markers = {
  markers: Toilet[];
};
