import React, { useEffect, useState } from 'react';

import {Display} from './Display'
import { getTrendingDailyTvUrl} from '../API/url'
import withRefetch from '../hoc/withRefetch';
 function Tvtrending()
{
  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const rated="Trending Daily";
  
  const Movie= getTrendingDailyTvUrl(1);
  useEffect(() => {
    fetch(Movie)
      .then((response) => response.json())
      .then((json) => setData(json.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  },
   [Movie]);

  return (
     Display({data,isLoading,rated})
  );
};

export default withRefetch(Tvtrending)