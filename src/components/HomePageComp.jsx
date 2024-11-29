import React from 'react';
import { Link } from 'react-router-dom';

const HomePageComp = () => {
    return (
        <div className="w-full h-[calc(100vh-3.5rem)] bg-gradient-to-br from-blue-700 via-blue-900 to-gray-800 text-white flex justify-center items-center">
            <div className="max-w-lg text-center bg-opacity-50 bg-black p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-4">Welcome to <span className="text-yellow-400">My Notes</span> ✍️</h1>
                <p className="text-lg mb-6">
                    Your thoughts, ideas, and plans deserve a safe and organized space. With <span className="text-yellow-400 font-medium">My Notes</span>, you can:
                </p>
                <ul className="list-disc list-inside text-left space-y-2 mb-6">
                    <li>Securely save your notes.</li>
                    <li>Organize your ideas efficiently.</li>
                    <li>Access your notes anytime, anywhere.</li>
                </ul>
                <div className="flex space-x-4">
                    <Link to="/signup" className="px-6 py-2 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-300 transition">
                        Sign Up
                    </Link>
                    <Link to="/login" className="px-6 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition">
                        Log In
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePageComp;
