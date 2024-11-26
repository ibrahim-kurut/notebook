import React from 'react'

const HomePageComp = () => {
    return (
        <div className="w-full h-[calc(100vh-3.5rem)] bg-gray-700 flex justify-center items-center">
            <div className="bg-gray-800 flex flex-col items-center text-yellow-400 capitalize p-10 rounded">
                <p>Welcome to <span className="font-bold text-xl">My Notes</span> 🌟</p>
                <p>Easily create and save your thoughts securely.</p>
                <p>Get started now by signing up or logging in to enjoy all the features! ✨</p>
            </div>
        </div>
    )
}

export default HomePageComp