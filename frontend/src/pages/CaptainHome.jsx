import React, { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import { SocketContext } from "../context/SocketContext.jsx";
import axios from "axios";

const CaptainHome = () => {
  const [ridePopopPanel, setRidePopupPanel] = useState(false);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);
  const [ride, setRide] = useState(null);
  const ridePopupPanelRef = useRef(null);
  const ConfirmRidePopupPanelRef = useRef(null);

  const { socket } = useContext(SocketContext);
  const captain = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    socket.emit("join", { userType: "captain", userId: captain?._id });

    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          socket.emit("update-location-captain", {
            captainId: captain._id,
            location: {
              ltd: position.coords.latitude,
              lng: position.coords.longitude,
            },
          });
        });
      }
    };
    const locationInterval = setInterval(updateLocation, 10000);
    updateLocation();
    return () => clearInterval(locationInterval);
  }, []);

  socket.on("new-ride", (data) => {
    setRide(data);
    setRidePopupPanel(true);
  });

  async function confirmRide() {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/rides/confirm`,
      {
        rideId: ride._id,
        captainId: captain._id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    setRidePopupPanel(false);
    setConfirmRidePopupPanel(true);
  }

  // gsap for ride Pop up
  useGSAP(() => {
    if (ridePopopPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(ridePopupPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [ridePopopPanel]);

  // Post confirm ride popup panel
  useGSAP(() => {
    if (confirmRidePopupPanel) {
      gsap.to(ConfirmRidePopupPanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(ConfirmRidePopupPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePopupPanel]);

  return (
    <div className="h-screen">
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

      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2019/07/CRM_180435-COR-D-US-BP1_HI1_2160x1080.jpg"
        />

        <div className="h-2/5 p-6">
          <CaptainDetails />
        </div>

        {/* Accept ride panel  */}
        <div
          ref={ridePopupPanelRef}
          className="fixed z-10 bg-white bottom-0 w-full py-6 pt-12 px-3"
        >
          <RidePopUp
            setRidePopupPanel={setRidePopupPanel}
            setConfirmRidePopupPanel={setConfirmRidePopupPanel}
            ride={ride}
            confirmRide={confirmRide}
          />
        </div>

        {/* Post accept ride panel  */}
        <div
          ref={ConfirmRidePopupPanelRef}
          className="fixed z-10 bg-white bottom-0 w-full py-6 pt-12 px-3 h-screen"
        >
          <ConfirmRidePopUp
            ride={ride}
            setConfirmRidePopupPanel={setConfirmRidePopupPanel}
            setRidePopupPanel={setRidePopupPanel}
          />
        </div>
      </div>
    </div>
  );
};

export default CaptainHome;
