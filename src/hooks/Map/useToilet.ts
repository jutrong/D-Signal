import { useEffect, useState } from 'react';
import { Toilet } from '@_types/toilet';
import { getToiletsBySimilarAddress } from '@_remote/toiletData';

const useToilet = (keyword: string) => {
  const [toiletData, setToiletData] = useState<Toilet[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchToilets = async () => {
      setIsLoading(true);
      try {
        const fetchedToilets = await getToiletsBySimilarAddress(keyword);
        setToiletData(fetchedToilets);
      } catch (error) {
        console.error('Error fetching toilets:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (keyword) {
      fetchToilets();
    }
  }, [keyword]);

  return { toiletData, isLoading };
};

export default useToilet;
