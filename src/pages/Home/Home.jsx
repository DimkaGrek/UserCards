import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { checkLastPage, getUsers } from 'my-redux/User/operations';
import { Card } from 'components/Card/Card';
import { selectIsAll, selectLimit, selectPage } from 'my-redux/User/userSlice';
import { selectFilteredUsers } from 'my-redux/selectors';

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectFilteredUsers);
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);
  const isAll = useSelector(selectIsAll);

  const [showLoadMore, setShowLoadMore] = useState(true);

  useEffect(() => {
    getMoreUsers();
    // eslint-disable-next-line
  }, []);

  const getMoreUsers = () => {
    if (!isAll) {
      dispatch(getUsers({ page, limit }))
        .unwrap()
        .then(() => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
          dispatch(checkLastPage({ page: page + 1, limit }));
        });
    }
  };

  if (isAll && showLoadMore) {
    setShowLoadMore(false);
  }

  return (
    <>
      {users.length !== 0 && (
        <ul>
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-4">
            {users.map(user => {
              return <Card key={user.id} user={user} />;
            })}
          </div>
        </ul>
      )}
      {users.length !== 0 && showLoadMore && (
        <div className="flex justify-center mt-8">
          <button onClick={getMoreUsers} className="btn btn-wide">
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default Home;
