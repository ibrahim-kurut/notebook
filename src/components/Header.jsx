import React from 'react'
import { GiNotebook } from "react-icons/gi";
import { FiLogIn } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const { user } = useSelector((state) => state.user);
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
                        <Link to="/login" className="flex items-center gap-2 capitalize text-yellow-400 font-semibold cursor-pointer">
                            <span>login</span>
                            <span className=""><FiLogIn size={30} /></span>
                        </Link>

                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header