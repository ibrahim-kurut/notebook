import React from 'react'
import { GiNotebook } from "react-icons/gi";
import { FiLogIn } from "react-icons/fi";

const Header = () => {
    return (
        <div className="bg-gray-800 h-14">
            <div className="text-white container mx-auto h-14 flex justify-between items-center">
                <div className="flex items-center gap-2 capitalize text-yellow-400 font-semibold">
                    <span className=""><GiNotebook size={30} /></span>
                    <span>my notes</span>
                </div>
                <div className="flex items-center gap-2 capitalize text-yellow-400 font-semibold cursor-pointer">
                    <span>login</span>
                    <span className=""><FiLogIn size={30} /></span>
                </div>
            </div>
        </div>
    )
}

export default Header