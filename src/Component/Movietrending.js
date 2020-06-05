import React, { useEffect, useState } from 'react';

import {Movieview, Display} from './Display'
import { getTrendingDailyMoviesUrl} from '../API/url'
import withRefetch from '../hoc/withRefetch';
 function Movietrending()
{
  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const rated="Trending Daily"
 
  const Movie= getTrendingDailyMoviesUrl(1);
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

export default withRefetch(Movietrending)