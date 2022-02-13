import { Tweet as Itweet } from "../api/tweets";
import TweetInfo from "./TweetInfo";
import TweetBody from "./TweetBody";
import TweetBtns from "./TweetBtns";

interface Props {
  tweet: Itweet;
  toggleLike: (tweet_id: string) => void;
  toggleRetweet: (tweet_id: string) => void;
}

const Tweet = ({ tweet, toggleLike, toggleRetweet }: Props) => {
  return (
    <div className="p-2 w-full border-t border-neutral-300 last:border-b">
      {["like", "retweet"].includes(tweet.type) && <TweetInfo {...tweet} />}
      <TweetBody
        tweet={tweet}
        toggleLike={toggleLike}
        toggleRetweet={toggleRetweet}
      />
    </div>
  );
};

export default Tweet;
