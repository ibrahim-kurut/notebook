import React from 'react'
import { Oval } from 'react-loader-spinner'

const LoaderSpinner = () => {
    return (
        <div className="flex justify-center items-center" >
            <Oval
                visible={true}
                height="30"
                width="30"
                color="#fff"
                secondaryColor="#011d4a"
                strokeWidth="4"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}

export default LoaderSpinner