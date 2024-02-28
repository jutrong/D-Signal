import { ToiletResponse } from '@_types/toilet';
import axios from 'axios';

export const getToiletData = async () => {
  const { data } = await axios.get<ToiletResponse>('/data/toilet.json');

  return data.toilet;
};
