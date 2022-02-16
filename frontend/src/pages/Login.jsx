import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { reset, login } from "../features/auth/authSlice";
import Spinner from "../components/spinner";

function Index() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email && !password) {
      toast.error("Please fill all creaditionals ");
    } else {
      const userData = {
        email,
        password,
      };

      dispatch(login(userData));
    }
  };

  const { email, password } = formData;
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
          <FaSignInAlt />
        </h1>
        <p>Login with your credationals</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            {/* User Email */}
            <input
              id="email"
              type="text"
              name="email"
              value={email}
              className="form-control"
              placeholder="Enter your name..."
              onChange={onChange}
            />

            {/* User Password */}
            <input
              id="password"
              type="text"
              name="password"
              value={password}
              className="form-control"
              placeholder="Enter your email..."
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Index;
