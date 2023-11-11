import { Link } from 'react-router-dom';
import videoBg from '../../assets/bgVideo.mp4'
import './SignUp.css'
import Countdown from '../CountDown/Countdown';
const SignUp = () => {
    return (
        <div className='video-container' >
            <video src={videoBg} autoPlay loop muted>
            </video>
            <div >
                <div className='overlay'></div>
                <div className='content'>
                    <div className="z-30">
                        <Countdown></Countdown>
                    </div>
                    <div className="form-body">
                        <form className="card-body ">
                            <h2 className="text-3xl font-semibold text-left"> Sign Up</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-2xl">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input-size" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-2xl">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input-size" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn glass ">Login</button>
                            </div>
                        </form>
                        <p>Already have an<Link to='/login'> Account</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;