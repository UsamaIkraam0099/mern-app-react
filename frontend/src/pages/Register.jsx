import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { reset, register } from "../features/auth/authSlice";
import Spinner from "../components/spinner";

function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("password do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  const { name, email, password, confirmPassword } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, message, isError, isSuccess, isLoading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) toast.error(message);

    if (isSuccess || user) navigate("/");

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) return <Spinner />;

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser />
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            {/* User Name */}
            <input
              id="name"
              type="text"
              name="name"
              value={name}
              className="form-control"
              placeholder="Enter your name..."
              onChange={onChange}
            />

            {/* User Email */}
            <input
              id="email"
              type="text"
              name="email"
              value={email}
              className="form-control"
              placeholder="Enter your email..."
              onChange={onChange}
            />

            {/* User Password */}
            <input
              id="password"
              type="text"
              name="password"
              value={password}
              className="form-control"
              placeholder="Enter your password..."
              onChange={onChange}
            />

            {/* User Confirm Password */}
            <input
              id="confirmPassword"
              type="text"
              name="confirmPassword"
              value={confirmPassword}
              className="form-control"
              placeholder="Conform password..."
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Index;
