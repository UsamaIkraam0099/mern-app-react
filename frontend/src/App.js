import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Files
import Header from "./components/header";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashbord from "./pages/dashbord";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Dashbord />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
