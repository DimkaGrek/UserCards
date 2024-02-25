import { getTweetsByUser } from 'my-redux/User/operations';
import { selectTweets, selectUsers } from 'my-redux/User/userSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Tweets = () => {
  const users = useSelector(selectUsers);
  const tweets = useSelector(selectTweets);
  const dispatch = useDispatch();

  useEffect(() => {
    users.forEach(user => {
      dispatch(getTweetsByUser(user.id));
    });
    // eslint-disable-next-line
  }, []);

  const toLocalDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div className="p-4 mx-auto">
      <h2 className="text-[25px] mb-4 font-bold text-my-white">Tweets</h2>
      {Object.keys(tweets).map(key => (
        <div className="mb-5" key={key}>
          <h2 className="text-[20px] font-bold mb-3 text-my-white">{key}</h2>
          <div className="pl-5">
            {tweets[key].map(tweet => (
              <div
                key={tweet.id}
                className="bg-my-fiolet border-gray-300 rounded-lg p-4 mb-4"
              >
                <p className="mb-1 text-my-white">{tweet.text}</p>
                <hr />
                <p className="text-[12px] text-[#acacac] mt-1">
                  {toLocalDate(tweet.createdAt)}
                </p>
                <p className="text-[14px] text-[#acacac]">
                  Author: {tweet.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tweets;
