import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/Slices/userSlice';
import { toast } from "react-toastify";
import LoaderSpinner from "../components/LoaderSpinner";
const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { status } = useSelector((state) => state.user);


    const handleSubmit = (e) => {
        e.preventDefault();

        const formDatad = { username, password }

        if (username.trim() === '' || password.trim() === '') {
            toast.error('Please fill in all fields');
        } else {
            dispatch(login(formDatad))
                .unwrap()
                .then(() => {
                    toast.success("Login successful")
                    navigate('/table')
                })
                .catch((error) => {
                    toast.error(`Login failed: ${error}`);
                });
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-center mb-6">Login to My Notes</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">User Name</label>
                        <input
                            type="text"
                            id="username"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            autoComplete="username"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {
                            status === "loading" ? <LoaderSpinner /> : "login"
                        }
                    </button>

                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;