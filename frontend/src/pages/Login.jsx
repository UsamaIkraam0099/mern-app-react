import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

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
  };

  const { email, password } = formData;

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
