import React, { useEffect, useState } from 'react';

import {Display} from './Display'
import {getTopRatedTvUrl} from '../API/url'
import withRefetch from '../hoc/withRefetch';
 function Tvtoprated()
{
  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const rated="Top Rated";
  
  const Movie=getTopRatedTvUrl(1);
  useEffect(() => {
    fetch(Movie)
      .then((response) => response.json())
      .then((json) => setData(json.results))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  },
   [Movie]);

  return (
          
     Display({data,isLoading,rated})
  );
};

export default withRefetch(Tvtoprated)