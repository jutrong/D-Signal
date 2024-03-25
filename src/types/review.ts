import { User } from './user';

export interface IReview {
  id: string;
  userId: string | null;
  postId: string;
  content: string;
  rating: number;
  tissue: boolean;
  createdAt: Date;
}

export interface IReviewExtended extends IReview {
  user?: User;
}
