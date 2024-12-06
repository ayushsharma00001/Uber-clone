import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import FinishRide from "../components/FinishRide.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LiveTracking from "../components/LiveTracking.jsx";
const CaptainRiding = () => {
  const [finishRidePanel, setfinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);
  const location = useLocation();
  const rideData = location.state?.ride


  // gsap for finish ride panel
  useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [finishRidePanel]);
  return (
    <div className="h-screen relative">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="h-6"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/user/logout"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <svg
            className="h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z"></path>
          </svg>
        </Link>
      </div>

      <div className="h-[80%]">
        <LiveTracking/>

        <div
          onClick={() => {
            setfinishRidePanel(true);
          }}
          className="flex justify-between items-center h-[25%] p-6 bg-yellow-400 relative"
        >
          <h5 className="p-3 absolute top-0 w-[93%] flex items-center justify-center">
            <svg
              className="w-6 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 15.6315L20.9679 10.8838L20.0321 9.11619L12 13.3685L3.96788 9.11619L3.0321 10.8838L12 15.6315Z"></path>
            </svg>{" "}
          </h5>
          <h4 className="text-xl font-semibold">4 KM away</h4>
          <button className="bg-green-600 text-white font-semibold p-3 rounded-lg px-10">
            Complete Ride
          </button>
        </div>
        {/* Post accept ride panel  */}
        <div
          ref={finishRidePanelRef}
          className="fixed z-10 bg-white bottom-0 w-full py-6 pt-12 px-3 h-screen"
        >
          <FinishRide rideData={rideData} setfinishRidePanel={setfinishRidePanel} />
        </div>
      </div>
    </div>
  );
};

export default CaptainRiding;
