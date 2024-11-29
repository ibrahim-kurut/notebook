import React from 'react'
import { GiNotebook } from "react-icons/gi";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/Slices/userSlice';
import swal from "sweetalert";
const Header = () => {
    const { user } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate()
    // handle logout
    const handleLogout = () => {

        swal({
            title: "Are you sure?",
            text: `To make an exit?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((isOk) => {
                if (isOk) {
                    dispatch(logout());
                    navigate("/")

                } else {
                    swal("The exit is not done ...");
                }
            });










    };



    return (
        <div className="bg-gray-800 h-14">
            <div className="text-white container mx-auto h-14 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 capitalize text-yellow-400 font-semibold">
                    <span className=""><GiNotebook size={30} /></span>
                    <span>my notes</span>
                </Link>
                <nav>
                    <ul className="flex gap-6">
                        {
                            user && <Link to="/table" className="flex items-center gap-2 capitalize text-yellow-400 font-semibold cursor-pointer">
                                <span>table</span>
                            </Link>
                        }
                        {
                            !user && <Link to="/login" className="flex items-center gap-2 capitalize text-yellow-400 font-semibold cursor-pointer">
                                <span>login</span>
                                <span className=""><FiLogIn size={25} /></span>
                            </Link>
                        }

                        {
                            user &&
                            <p
                                onClick={handleLogout}
                                className="flex items-center gap-2 capitalize text-yellow-400 font-semibold cursor-pointer">
                                <span>logout</span>
                                <span className=""><FiLogOut size={25} /></span>
                            </p>
                        }

                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header