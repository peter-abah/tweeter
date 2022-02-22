import { Tweet as Itweet, TweetsResponse } from "../api/tweets";
import { QueryKey, UseInfiniteQueryResult } from "react-query";

import Tweet from "./SmallTweet";
import Loader from "./Loader";
import ErrorPage from "./Error";
import { concatInfiniteQueryData } from "../helpers";

import { useLikeTweet, useRetweetTweet, useDeleteTweet } from "../hooks";

interface Props {
  tweetsValues: UseInfiniteQueryResult<TweetsResponse>;
  queryKey: QueryKey;
}
const Tweets = (props: Props) => {
  const { tweetsValues, queryKey } = props;
  const { data, isLoading, isError } = tweetsValues;

  const { toggleLike } = useLikeTweet(queryKey);
  const { toggleRetweet } = useRetweetTweet(queryKey);
  const deleteTweet = useDeleteTweet(queryKey);

  if (isLoading) return <Loader />;
  if (isError) return <ErrorPage />;
  if (!data) return <Loader />;

  const tweets = concatInfiniteQueryData(data);
  return (
    <div className="grow">
      {tweets.map((tweet) => (
        <Tweet
          key={`${tweet.id}${tweet.type}`}
          tweet={tweet}
          deleteTweet={deleteTweet}
          toggleLike={toggleLike}
          toggleRetweet={toggleRetweet}
        />
      ))}
    </div>
  );
};

export default Tweets;
