export interface IReview {
  id: string;
  userId: string;
  postId: string;
  content: string;
  rating: number;
  tissue: boolean;
  createdAt: Date;
}
