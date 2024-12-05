import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext.jsx';
import axios from 'axios';

const CaptainProtectedWrapper = ({children}) => {
    const {captain,setCaptain} = useContext(CaptainDataContext);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const [isLoading,setIsLoading] = useState(true);
    useEffect(() => {
        const fetchCaptainData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (response.status === 200) {
                    setCaptain(response.data);
                    setIsLoading(false);
                }
            } catch (err) {
                console.log(err);
                localStorage.removeItem("token");
                navigate("/captain-login");
            }
        };
    
        if (token) {
            fetchCaptainData();
        }
    }, [token]);
    

    if(isLoading){
        return(
            <div className='flex h-screen justify-center items-center'>Loading...</div>
        )
    }

    return(
        <>
            {children}
        </>
    );
}

export default CaptainProtectedWrapper;