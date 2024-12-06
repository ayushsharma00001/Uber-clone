import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import{useEffect,useContext} from "react";
import {SocketContext} from "../context/SocketContext.jsx";
import {useNavigate} from "react-router-dom";
import LiveTracking from "../components/LiveTracking.jsx";
const Riding = () => {
  const {socket} = useContext(SocketContext);
  const location = useLocation();
  const {ride} = location.state || {};
  const navigate = useNavigate();

  socket.on("ride-ended",()=>{
    navigate("/home");
  })




  return (
    <div className="h-screen">
      <Link to="/home" className="right-2 top-2 fixed h-10 w-10 bg-white flex items-center justify-center rounded-full">
        <svg
          className="h-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M13 19H19V9.97815L12 4.53371L5 9.97815V19H11V13H13V19ZM21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20Z"></path>
        </svg>
      </Link>

      <div className="h-1/2">
        <LiveTracking/>

        <div className="h-1/2 p-4">
          <div className="flex items-center justify-between">
            <img
              src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
              alt="vehicle"
              className="h-12"
            />
            <div className="text-right">
              <h2 className="text-lg font-medium capitalize">{ride?.captain?.fullname.firstname} {ride?.captain?.fullname.lastname}</h2>
              <h4 className="text-xl font-semibold -mt-1 -mb-1">
                {ride?.captain.vehicle.plate}
              </h4>
              <p className="text-sm text-gray-600">{ride?.captain?.vehicle.vehicleType}</p>
            </div>
          </div>

          <div className="flex gap-2 flex-col justify-betwee items-center">
            <div className="w-full mt-5">
              <div className="flex items-center gap-5 py-3 border-b-2">
                <svg
                  className="h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 14V16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM20.8284 21.0711L18 24L15.1716 21.0711C13.6095 19.4535 13.6095 16.8308 15.1716 15.2132C16.7337 13.5956 19.2663 13.5956 20.8284 15.2132C22.3905 16.8308 22.3905 19.4535 20.8284 21.0711ZM19.3897 19.6818C20.2034 18.8392 20.2034 17.4451 19.3897 16.6025C18.614 15.7992 17.386 15.7992 16.6103 16.6025C15.7966 17.4451 15.7966 18.8392 16.6103 19.6818L18 21.1209L19.3897 19.6818Z"></path>
                </svg>
                <div className="flex justify-center flex-col">
                  <h3 className="text-lg font-medium">Destination</h3>
                  <p className="text-sm text-gray-600 -mt-1">
                    {ride?.destination}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5 py-3">
                <svg
                  className="h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.5003 8C13.8278 8.43606 14.0625 8.94584 14.175 9.5H16V11H14.175C13.8275 12.7117 12.3142 14 10.5 14H10.3107L14.0303 17.7197L12.9697 18.7803L8 13.8107V12.5H10.5C11.4797 12.5 12.3131 11.8739 12.622 11H8V9.5H12.622C12.3131 8.62611 11.4797 8 10.5 8H8V6.5H16V8H13.5003Z"></path>
                </svg>
                <div className="flex justify-center flex-col">
                  <h3 className="text-lg font-medium">&#8377; {ride?.fare} </h3>
                  <p className="text-sm text-gray-600 -mt-1">Cash</p>
                </div>
              </div>
            </div>
          </div>
          <button className="w-full mt-5 bg-green-600 text-white font-base p-2 rounded-lg">
            Make Payment to Driver in cash
          </button>
        </div>
      </div>
    </div>
  );
};

export default Riding;
