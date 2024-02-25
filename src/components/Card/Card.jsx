import imgBigElement from '../../assets/images/big-element.png';
import imgGoitLogo from '../../assets/images/goit-logo.png';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFollowing,
  deleteFromFollowing,
  selectFollowing,
} from 'my-redux/User/userSlice';
import { changeUser } from 'my-redux/User/operations';
import { ReactComponent as CircleSvg } from '../../assets/images/circle.svg';

export const Card = ({ user }) => {
  const following = useSelector(selectFollowing);
  const dispatch = useDispatch();

  const hangleAddToFollowing = id => {
    dispatch(changeUser({ id, followers: user.followers + 1 }));
    dispatch(addToFollowing(id));
  };

  const hangleDeleteFromFollowing = id => {
    dispatch(changeUser({ id, followers: user.followers - 1 }));
    dispatch(deleteFromFollowing(id));
  };

  return (
    <div className="mx-auto w-[380px] h-[460px] rounded-[20px] bg-[linear-gradient(142deg,_#471ca9_0%,_#5736a3_69.1%,_#4b2a99_100%)] shadow-[-3px_7px_21px_0_rgba(0,0,0,0.23)] relative flex flex-col justify-between items-center userCard">
      <img
        className="w-[76px] h-[22px] absolute top-5 left-5"
        src={imgGoitLogo}
        alt="GoIT logo"
      />
      <img
        className="w-[308px] h-[168px] absolute top-7 left-9"
        src={imgBigElement}
        alt="big element"
      />
      <img
        src={`/UserCards/images/${user.avatar}`}
        alt="Avatar"
        className="w-[63px] h-[63px] rounded-full top-[194px] absolute"
      />

      <CircleSvg className="circle"></CircleSvg>

      <p className="font-sans mt-auto text-[20px] font-medium uppercase text-my-white">
        {user.tweets} tweets
      </p>
      <p className="font-sans text-[20px] font-medium uppercase text-my-white mt-4">
        {user.followers.toLocaleString('en-US')} followers
      </p>
      {following.includes(user.id) ? (
        <button
          className="btn font-sans uppercase bg-[#5CD3A8]  w-[196px] h-[50px] rounded-[10px] text-[#373737] text-[18px] font-semibold mt-[26px] mb-9 border-[#5CD3A8] hover:bg-[#53c299] hover:border-[#53c299]"
          onClick={() => hangleDeleteFromFollowing(user.id)}
        >
          following
        </button>
      ) : (
        <button
          className="btn font-sans uppercase bg-my-white w-[196px] h-[50px] rounded-[10px] text-[#373737] text-[18px] font-semibold mt-[26px] mb-9"
          onClick={() => hangleAddToFollowing(user.id)}
        >
          follow
        </button>
      )}
    </div>
  );
};
