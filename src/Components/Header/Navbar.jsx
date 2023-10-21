import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";




const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        
            
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addProduct">Add Product</NavLink></li>
        <li><NavLink to="/myCard">My Card</NavLink></li>
        <li><NavLink to="/login">Login/Sign UP</NavLink></li>
    </>
    return (
        <div >
            <div className="navbar bg-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-yell-600 rounded-box w-52 text-white navbar">
                            {navLinks}
                        </ul>
                    </div >

                    <img className="h-16" src="https://i.ibb.co/0XD4J6m/download.webp" alt="" />


                    <h3 className="text-2xl font-bold text-black md:ml-8">FASHION<span className="text-orange-600">FUSHION</span></h3>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-black font-bold px-1">
                        {navLinks}
                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        user ? (
                            <>
                              <span>{user.email}</span>
                              <button onClick={handleLogOut} className="btn btn-small">
                                Sign Out
                              </button>
                            </>
                          ) : (
                            <Link to="/register">
                              <button className="btn btn-small">Sign In</button>
                            </Link>
                          )

                    }

                </div>

            </div>
        </div>
    );
};

export default Navbar;