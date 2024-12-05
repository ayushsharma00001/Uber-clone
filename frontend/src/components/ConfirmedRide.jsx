import React from "react";

const ConfirmedRide = (props) => {
  return (
    <div>
      <h5
        onClick={() => props.setConfirmRidePanel(false)}
        className="p-3 absolute top-0 w-[93%] flex items-center justify-center"
      >
        <svg
          className="w-6 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 15.6315L20.9679 10.8838L20.0321 9.11619L12 13.3685L3.96788 9.11619L3.0321 10.8838L12 15.6315Z"></path>
        </svg>{" "}
      </h5>
      <h3 className="text-2xl font-semibold mb-2">Confirm your Ride</h3>
      <div className="flex gap-2 flex-col justify-betwee items-center">
        <img
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt="vehicle"
          className="h-20"
        />
        <div className="w-full mt-2">
          <div className="flex items-center gap-5 py-3 border-b-2">
            <svg
              className="h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"></path>
            </svg>
            <div className="flex justify-center flex-col">
            <h3 className="text-lg font-medium">Pickup</h3>
            <p className="text-sm text-gray-400 font-base">{props.pickup}</p>
            </div>
          </div>
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
            <p className="text-sm text-gray-400 font-base">{props.destination}</p>
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
              <h3 className="text-lg font-medium">&#8377;{props.fare[props.vehicleType]}</h3>
              <p className="text-sm text-gray-600 -mt-1">Cash</p>
            </div>
          </div>
        </div>
        <button
          onClick={() =>{
            props.setVehicleFound(true);
            props.setConfirmRidePanel(false);
            props.createRide();
          }}
          className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmedRide;
