import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {

    let navigate = useNavigate();

    const [user, setUser] = useState({
        name: '',
        nickname: '',
        password: ''
    });

    const {name, nickname, password} = user;

    const inputChange = (e) => {
        setUser({...user,[e.target.name]: e.target.value});        
    }

    const postUser = async (e) => {
        e.preventDefault();

        await axios.post("http://localhost:8080/adduser",user);
        navigate("/allusers");
    }

    return (
        <div className="main">

        <section className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="htmlForm-title">Sign up</h2>
                        <form method="POST" onSubmit={(e) => postUser(e)} className="register-form" id="register-form">
                            <div className="form-group">
                                <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="name" placeholder="Your Name" value={name} onChange={(e) => inputChange(e)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="nickname"><i className="zmdi zmdi-name"></i></label>
                                <input type="text" name="nickname" id="nickname" placeholder="Your Nickname" value={nickname} onChange={(e) => inputChange(e)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="pass" placeholder="Password" value={password} onChange={(e) => inputChange(e)}/>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img src="images/signup-image.jpg" alt="sing up image" /></figure>
                        <Link to="/" className="signup-image-link">I am already member</Link>
                        <Link to="/allusers" className="signup-image-link">Show all account</Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
}