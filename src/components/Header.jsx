import { NavLink, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { LocalisationContext } from "@/context";

export default function Header() {
  const { language, setLanguage, translations } = useContext(LocalisationContext);

  const handleChange = event => setLanguage(event.target.value);

  const navigate = useNavigate()
  const [token, setToken] = useState(!!localStorage.getItem("token"));
  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className=" fixed top-0 flex text-gray-700 align-middle bg-teal-400 navbar bold">
      <div className="flex-1">
        <NavLink to="/" className="text-xl btn btn-ghost">
          <img
            src="https://img.icons8.com/?size=100&id=wsaXI0aea252&format=png&color=000000"
            alt="logo"
            className="w-10 h-10"
          />
        </NavLink>
      </div>
 
      <ul className="flex gap-8 mr-6">
        <li>
          <NavLink to="/book">My Book</NavLink>
        </li>
        <li>
          <select value={language} onChange={handleChange} className="bg-teal-400">
            <option value="en">English</option>
            <option value="de">Deutsch</option>
            <option value="ch">中文</option>
          </select>
        </li>
        {!token && (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </>
        )}
        {token && (
          <li>
            <NavLink to="/login" onClick={handleLogout}>Logout</NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}
