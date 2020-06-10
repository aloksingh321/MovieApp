import React, { useEffect, useState } from 'react';

import {Display} from './Display'
import {getPopularTvUrl} from '../API/url'
import withRefetch from '../hoc/withRefetch';
 function Tvpopular()
{
  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const rated="Top Popular";
  
  const Movie=getPopularTvUrl(1);
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


export default withRefetch(Tvpopular)