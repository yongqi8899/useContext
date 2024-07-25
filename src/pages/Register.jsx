import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Register() {
  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const registerUser = async (formData) => {
    try {
      const res = await fetch(
        "https://bookstorebackend-3qw1.onrender.com/register/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Registration failed");
        toast.error("Registration failed");
        return null;
      }
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleOnchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const isRegisted = await registerUser(
        firstname,
        lastname,
        email,
        password
      );
      if (isRegisted) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="min-h-screen hero bg-base-200">
        <div className="text-center hero-content">
          <div className="max-w-md">
            <h3 className="mb-5 text-5xl font-bold text-teal-400">Register</h3>
            <form className="p-10 shadow-xl card" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label" htmlFor="firstname">
                  <span className="label-text">Firstname</span>
                </label>
                <input
                  type="text"
                  placeholder="Firstname"
                  className="input input-bordered"
                  value={formData.firstname}
                  name="firstname"
                  onChange={handleOnchange}
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="lastname">
                  <span className="label-text">Lastname</span>
                </label>
                <input
                  type="text"
                  placeholder="Lastname"
                  className="input input-bordered"
                  value={formData.lastname}
                  name="lastname"
                  onChange={handleOnchange}
                />
              </div>
              <div className="flex form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  value={formData.email}
                  name="email"
                  onChange={handleOnchange}
                  required
                />
              </div>
              <div className="flex form-control">
                <label className="label" htmlFor="password">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  value={formData.password}
                  name="password"
                  onChange={handleOnchange}
                  required
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <br />
              <p>
                already have account?{" "}
                <NavLink to="/login" className="text-teal-400">
                  Login
                </NavLink>
              </p>
              <div className="flex mt-6 form-control">
                <button
                  type="submit"
                  className="text-white bg-teal-400 border-transparent btn btn-primary hover:bg-teal-600 hover:border-transparent"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
