import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Navebar = () => {
    const { user,logOut} = useContext(AuthContext)

    
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    };
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
      }, [theme]);
    
    

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allac'>All Art & craft Items</NavLink></li>
        <li><NavLink to='/manc'>My Art&Craft List</NavLink></li>
        <li><NavLink to='/aci'>Add Craft Item</NavLink></li>
    </>
    return (
        <div className="my-3 lg:mx-10 md:mx-0 sm:mx-0">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[3] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost lg:text-3xl md:text-xl font-extrabold"><span className="text-green-700">Crafts</span> Life</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                <label className="switch">
          <input type="checkbox" className="toggle" checked={theme === 'dark'} onChange={toggleTheme} />
          <span className="slider round"></span>
        </label>
                {
                    user ?
                        <div className=" flex items-center">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar  tooltip tooltip-left" data-tip={user?.displayName}>
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                                </div>
                                
                            </div>
                            <button onClick={handleSignOut} className="btn bg-emerald-500 text-white">SignOut</button>
                        </div>
                        : <div className="navbar-end flex gap-2">
                            <a className="btn"><Link to='/login'>Login</Link></a>
                            <a className="btn"><Link to='/register'>Register</Link></a>
                        </div>
                }
                </div>

                

            </div>
        </div>
    );
};

export default Navebar;