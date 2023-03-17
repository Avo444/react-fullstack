import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function DeleteUser() {

    const [id, setId] = useState()

     const submitDelete = async  (e) => {
        e.preventDefault();

        const check = axios.get("http://localhost:8080/user/"+id);

        if(check){
            deleteUser();
            alert("Is deleted");

        }
        else alert("User not Found")
     }

    const deleteUser = async () => {
        

        await axios.delete(`http://localhost:8080/user/${id}`);
    }




    return (
        <div className="main">

        <section className="sign-in">
            <div className="container">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure><img src="images/signin-image.jpg" alt="sing up image" /></figure>
                        <Link to="/signup" className="signup-image-link">Create an account</Link>
                        <Link to="/allusers" className="signup-image-link">Show all account</Link>
                    </div>

                    <div className="signin-htmlForm">
                        <h2 className="htmlForm-title">Delete User</h2>
                        <form method="POST" onSubmit={(e) => submitDelete(e)} className="register-htmlForm" id="login-htmlForm">
                            <div className="htmlForm-group">
                                <label htmlFor="your_id"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="id" id="id" placeholder="Delete Id" onChange={(e) => setId(e.target.value)}/>
                            </div>
                            <div className="htmlForm-group htmlForm-button">
                                <input type="submit" name="signin" id="signin" className="htmlForm-submit" value="Delete"/>
                            </div>
                        </form>
                        <div className="social-login">
                            <span className="social-label">Or login with</span>
                            <ul className="socials">
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
    );
}