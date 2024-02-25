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

  console.log('TWEETS: ', tweets);
  return (
    <div className="w-max-[800px] mx-auto">
      <h2>Tweets</h2>
      <div className="mb-5"></div>

      {/* <ul>
        {tweets.map(item => (
          <li key={item.id}>
            userId: {item.userId}; <br />
            createdAt: {item.createdAt}; <br />
            author: {item.author}; <br />
            text: {item.text}; <br />
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Tweets;
