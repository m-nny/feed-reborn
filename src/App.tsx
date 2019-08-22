import * as React from 'react';
import useAxios from 'axios-hooks';
import Feed from './components/Feed/Feed';

type Props = {
  apiUrl: string
};

const FeedPage: React.FC<Props> = ({ apiUrl }) => {
  const [{ data, loading, error }, refetch] = useAxios<[{ poster: string }]>(apiUrl);
  if (loading)
    return <div> loading... </div>;
  if (error) {
    console.log(error);
    return <div> error... </div>;
  }
  const posters = data.map(d => d.poster);
  return (
    <Feed data={posters} />
  )
}

export default FeedPage;