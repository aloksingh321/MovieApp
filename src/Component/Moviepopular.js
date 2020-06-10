import React, { useEffect, useState } from 'react';

import {Display} from './Display'
import {getPopularMoviesUrl} from '../API/url'
import withRefetch from '../hoc/withRefetch';

 function Moviepopular()
{
  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const rated="TOP POPULAR";
  
  const Movie=getPopularMoviesUrl(1);
  useEffect(() => {
    fetch(Movie)
      .then((response) => response.json())
      .then((json) => setData(json.results))
      .catch((error) => alert(error))
      .finally(() => setLoading(false));
  },
   [Movie]);

  return (
     Display({data,isLoading,rated})
  );
};

export default withRefetch(Moviepopular)