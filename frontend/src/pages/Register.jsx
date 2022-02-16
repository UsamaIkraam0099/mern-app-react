import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

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
  };

  const { name, email, password, confirmPassword } = formData;

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
