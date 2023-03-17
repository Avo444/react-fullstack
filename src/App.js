import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/header/header";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./sources/css/style.css";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import AllUsers from "./pages/allUsers";
import DeleteUser from "./pages/deleteUser";
import ShowUser from "./pages/showUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/allusers" element={<AllUsers />} />
          <Route exact path="/delete" element={<DeleteUser />} />
          <Route exact path="/getuser" element={<ShowUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
