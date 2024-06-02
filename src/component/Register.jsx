import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";

const Register = () => {

    const {createUser}=useContext(AuthContext)

    const handleRegister = e=>{
        e.preventDefault()
        const form =e.target
        const email =form.email.value
        const photo =form.photo.value
        const name =form.name.value
        const password =form.password.value

        if(password.length<6){
            return toast.error('Password Length must be at least 6 character');
        }
        else if(!/[A-Z]/.test(password)){
            return toast.error('Must have an Uppercase letter in the password')
        }
        else if(!/[a-z]/.test(password)){
            return toast.error('Must have a Lowercase letter in the password')
        }

        console.log(email,password);
        createUser(email,password)
        .then(result=>{
            console.log(result);
            updateProfile(result.user,{
                displayName:name,
                photoURL:photo
            })
            toast.success('success')
        })
        .catch(error=>{
            console.error(error);
            toast.error('error')
        })
    }
    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
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
                                <input type="password" name="password" placeholder="password"  className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoUrl</span>
                                </label>
                                <input type="photo" name="photo" placeholder="photourl"  className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type="submit">Register</button>
                            </div>
                        </form>
                    </div>
                    <p className="text-center mt-2 pb-2">Already have a account <Link className="text-blue-600 font-bold" to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;