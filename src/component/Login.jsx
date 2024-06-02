import { FaGithub, FaGoogle} from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "./AuthProvider";
import { useContext } from "react";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth/web-extension";

const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();

const Login = () => {

    const {signIN,signInPop}=useContext(AuthContext)


    const handleGitHUb = () => {
        signInPop(githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.error(error);
        });
    }
    
    const handleGoogle = () => {
        signInPop(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.error(error);
        });
    }

    const handleLogin = e=>{
        e.preventDefault()
        const from =new FormData(e.currentTarget)
        const email =from.get('email')
        const password =from.get('password')

        signIN(email,password)
        .then(result=>{
            toast.success('success')
            console.log(result);
            
        })
        .catch(error=>{
            console.error(error);
            toast.error('error')
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                    <div className="flex justify-center gap-10 mt-5 p-5 rounded-xl border">
                <button onClick={handleGoogle} className="flex btn items-center gap-1"><FaGoogle></FaGoogle> Google</button>
                <button onClick={handleGitHUb} className="flex btn  items-center gap-1"><FaGithub></FaGithub> GitHub</button>
            </div>
            <p className="text-center mt-2 pb-2">Do not have a account<Link className="text-blue-600 font-bold" to='/register'>  Register</Link></p>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;