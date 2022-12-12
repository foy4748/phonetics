import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { logAuser, logoutAuser } from "../../slices/loginSlice";
import { useState } from "react";

export default function Header() {
  const loginState = useSelector((state) => {
    return state.login;
  });
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const username = form.username.value;
    dispatch(logAuser({ email, username }));
    setIsOpen(false);
    form.reset();
  };
  const navItems = (
    <>
      <li>
        <Link href="/lessons">Lessons</Link>
      </li>
      <li>
        <Link href="/pricing">Pricing</Link>
      </li>
      <li>
        <Link href="/teachers">Teachers</Link>
      </li>
      <li>
        <Link href="/feedbacks">Feedbacks</Link>
      </li>
      <li>
        <Link href="/books">Books</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {/* The button to open modal */}
        {!loginState.loggedIn ? (
          <label
            htmlFor="login-modal"
            className="btn"
            onClick={() => setIsOpen(true)}
          >
            Login
          </label>
        ) : (
          <>
            <label
              htmlFor="login-modal"
              className="btn mx-3"
              onClick={() => {
                dispatch(logoutAuser());
              }}
            >
              Logout
            </label>
            <label htmlFor="login-modal" className="btn">
              {loginState.username}
            </label>
          </>
        )}
      </div>
      {isOpen && (
        <div>
          {/* Put this part before </body> tag */}
          <input type="checkbox" id="login-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                onClick={() => setIsOpen(false)}
                htmlFor="login-modal"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold my-4">Login</h3>
              <form onSubmit={handleSubmit}>
                <input
                  required
                  type="email"
                  placeholder="Email"
                  id="email"
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  required
                  type="text"
                  placeholder="User Name"
                  id="username"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="my-4">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
