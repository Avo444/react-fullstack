import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src="https://www.tutorialrepublic.com//examples/images/logo.svg" height="28" alt="CoolBrand" />
                </Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-item nav-link active">Signin</Link>
                        <Link to="/signup" className="nav-item nav-link">Signup</Link>
                        <Link to="/allusers" className="nav-item nav-link">All Users</Link>
                        <Link to="/delete" className="nav-item nav-link">Delete User</Link>
                        <Link to="/getuser" className="nav-item nav-link">Get User</Link>
                    </div>
                    <div className="navbar-nav ms-auto">
                        <Link to="/" className="nav-item nav-link">Home</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}