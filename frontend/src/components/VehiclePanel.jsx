import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>

        <h5
          onClick={() => props.setVehiclePanelOpen(false)}
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

        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>


        {/* Vehicle divs  */}
        <div onClick={()=>{
            props.setVehiclePanelOpen(false);
            props.setConfirmRidePanel(true);
            props.selectVehicle("car");
        }} className="flex border-2 mb-2 active:border-black rounded-xl w-full items-center justify-between p-3 ">
          <img
            className="h-14"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt="car"
          />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">UberGo </h4>
            <span className="flex items-center">
              <svg
                className="w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"></path>
              </svg>
              4
            </span>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable, compact rides
            </p>
          </div>
          <h2 className="font-semibold text-lg"> &#8377;{Math.floor(props.fare["car"])}</h2>
        </div>

        <div onClick={()=>{
            props.setVehiclePanelOpen(false);
            props.setConfirmRidePanel(true)
            props.selectVehicle("moto");
        }} className="flex border-2 mb-2 active:border-black rounded-xl w-full items-center justify-between p-3 ">
          <img
            className="h-14"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
            alt="motorcycle"
          />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">Moto </h4>
            <span className="flex items-center">
              <svg
                className="w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"></path>
              </svg>
              1
            </span>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable motorcycle rides
            </p>
          </div>
          <h2 className="font-semibold text-lg"> &#8377;{Math.floor(props.fare["moto"])}</h2>
        </div>

        <div onClick={()=>{
            props.setVehiclePanelOpen(false);
            props.setConfirmRidePanel(true)
            props.selectVehicle("auto");
        }} className="flex border-2 mb-2 active:border-black rounded-xl w-full items-center justify-between p-3 ">
          <img
            className="h-14"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            alt="auto"
          />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">UberAuto </h4>
            <span className="flex items-center">
              <svg
                className="w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"></path>
              </svg>
              3
            </span>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable Auto rides
            </p>
          </div>
          <h2 className="font-semibold text-lg"> &#8377;{Math.floor(props.fare["auto"])}</h2>
        </div>
    </div>
  )
}

export default VehiclePanel