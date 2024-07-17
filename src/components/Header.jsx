import { NavLink, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { LocalisationContext } from "@/context";

export default function Header() {
  const { language, setLanguage, translations } =
    useContext(LocalisationContext);
  const handleChange = (event) => setLanguage(event.target.value);

  const navigate = useNavigate();

  const [token, setToken] = useState(!!localStorage.getItem("token"));

  const handleNavigation = (e) => {
    navigate(e.target.value);
  };

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    // <header className="bg-base-300">
    //   <div className="container mx-auto navbar">
    //     <div className="flex-1">
    //       <NavLink to="/" className="text-xl btn btn-ghost">
    //         <img
    //           src="https://img.icons8.com/?size=100&id=wsaXI0aea252&format=png&color=000000"
    //           alt="logo"
    //           className="w-10 h-10"
    //         />
    //       </NavLink>
    //     </div>
    //   </div>
    //   <nav className="flex-none">
    //     <ul className="px-1 menu menu-horizontal">
    //       <li>
    //         <NavLink
    //           to="/book"
    //           className={({ isActive }) =>
    //             isActive ? "font-bold text-#F7C07B" : "text-white"
    //           }
    //         >
    //           My Book
    //         </NavLink>
    //       </li>
    //       <li>
    //         <select
    //           value={language}
    //           onChange={handleChange}
    //           className="bg-teal-400 "
    //         >
    //           <option value="en">English</option>
    //           <option value="de">Deutsch</option>
    //           <option value="ch">中文</option>
    //         </select>
    //       </li>
    //       {!token && (
    //         <select onChange={handleNavigation} className="bg-teal-400">
    //           <option value="/login" onChange={handleNavigation}>
    //             Login
    //           </option>
    //           <option value="/register" onChange={handleNavigation}>
    //             Register
    //           </option>
    //         </select>
    //       )}
    //       {token && (
    //         <li>
    //           <NavLink to="/login" onClick={handleLogout}>
    //             Logout
    //           </NavLink>
    //         </li>
    //       )}
    //     </ul>
    //   </nav>
    // </header>
    <header className="fixed top-0 z-50 bg-teal-400 navbar">
      <div className="flex-1">
        <NavLink to="/" className="text-xl btn btn-ghost">
          <img
            src="https://img.icons8.com/?size=100&id=wsaXI0aea252&format=png&color=000000"
            alt="logo"
            className="w-10 h-10"
          />
        </NavLink>
      </div>
      <nav className="flex-none">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <NavLink
              to="/book"
            >
              My Book
            </NavLink>
          </li>
          <li>
            <select
              value={language}
              onChange={handleChange}
              className="bg-teal-400 "
            >
              <option value="en">English</option>
              <option value="de">Deutsch</option>
              <option value="ch">中文</option>
            </select>
          </li>
          <li>
            <details>
              <summary>Login</summary>
              <ul className="p-2 rounded-t-none bg-base-100">
                <li>
                  <NavLink
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/register"
                  >
                    Register
                  </NavLink>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>
    </header>
  );
}
