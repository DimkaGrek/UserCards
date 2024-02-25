import { changeFilter, selectFilter } from 'my-redux/User/userSlice';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const filter = useSelector(selectFilter);
  const summaryRef = useRef(null);
  const dispatch = useDispatch();

  const location = useLocation();

  const handleChangeFilter = filter => {
    dispatch(changeFilter(filter));
  };

  const handleToggleMenu = event => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const closeDropdown = () => {
    summaryRef.current.click();
  };

  return (
    <div className="navbar bg-my-fiolet">
      <div className="dropdown" onClick={handleCloseMenu}>
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost lg:hidden text-my-white hover:bg-my-menu-hover"
          onClick={handleToggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        {isOpen && (
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-my-white rounded-box w-52"
          >
            <li>
              <Link to="/" onClick={handleCloseMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/tweets" onClick={handleCloseMenu}>
                Tweets
              </Link>
            </li>
          </ul>
        )}
      </div>

      <Link to="/" className="text-xl text-my-white px-4">
        UserCards
      </Link>

      {location.pathname === '/' && (
        <details className="dropdown mx-auto">
          <summary
            ref={summaryRef}
            className="m-1 text-my-white cursor-pointer"
          >
            Filter ({filter})
          </summary>

          <ul className="p-2 shadow menu dropdown-content z-[1] bg-my-white rounded-box w-52">
            <li
              onClick={() => {
                handleChangeFilter('all');
                closeDropdown();
              }}
              className="hover:bg-my-menu-hover hover:text-my-white cursor-pointer"
            >
              show all
            </li>
            <li
              onClick={() => {
                handleChangeFilter('follow');
                closeDropdown();
              }}
              className="hover:bg-my-menu-hover hover:text-my-white cursor-pointer"
            >
              follow
            </li>
            <li
              onClick={() => {
                handleChangeFilter('followings');
                closeDropdown();
              }}
              className="hover:bg-my-menu-hover hover:text-my-white cursor-pointer"
            >
              followings
            </li>
          </ul>
        </details>
      )}

      <div className="navbar-end hidden lg:flex">
        <ul className="flex gap-4 px-1 text-my-white">
          <li className="hover:bg-my-menu-hover hover:rounded-md px-3 py-2">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-my-menu-hover hover:rounded-md px-3 py-2">
            <Link to="/tweets">Tweets</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
