import { Link } from "react-router-dom";
import videoBg from '../../assets/bgVideo.mp4'
import './login.css'
import Countdown from "../CountDown/Countdown";
const Login = () => {
    return (
        <div className='video-container'>
            <div className='overlay'></div>
            <video src={videoBg} autoPlay loop muted>
            </video>
            <div >
                <div className='content'>
                    <div className="z-30">
                        <Countdown></Countdown>
                    </div>
                    <div className="form-body">
                        <form className="card-body text-color">
                            <h2 className="text-3xl font-semibold "> Sign In</h2>
                            <label className="label ">
                                <span className="text-2xl">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input-size" required />
                            <label className="label">
                                <span className="text-2xl">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input-size" required />

                            <div className="form-control mt-6">
                                <button className="btn glass">Login</button>
                            </div>
                        </form>
                        <p>Need an account ? <Link to='/signUp'>Create an account</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;