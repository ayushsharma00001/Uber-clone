import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);


  // To trigger address panel
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);


  // To trigger vehicle panel
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null);


  // To trigger Confirm ride panel
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const confirmRidePanelRef = useRef(null);


  // To trigger Looking for a Driver panel
  const [vehicleFound,setVehicleFound] = useState(false);
  const vehicleFoundRef  = useRef(null);


  // To trigger waiting for Driver panel
  const [waitingForDriver,setWaitingForDriver] = useState(false);
  const waitingForDriverRef  = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  // gsap for address panel 
  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          opacity: 1,
          padding: 25,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          opacity: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  // gsap for vehicle panel
  useGSAP(() => {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePanelOpen]);



  // Looking for a Driver panel
  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehicleFound]);



  // gsap for confirm ride panel
  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePanel]);


  // gsap for waiting for driver
  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [waitingForDriver]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Uber logo"
      />

      <div className="h-screen w-screen ">
        {/* Image for temporary use  */}
        <img
          className="h-full w-full object-cover"
          src="https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2019/07/CRM_180435-COR-D-US-BP1_HI1_2160x1080.jpg"
        />
      </div>


      {/* Adresses panel  */}
      <div className="absolute top-0 w-full h-screen flex flex-col justify-end">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className="opacity-0 absolute right-2 top-8"
          >
            <svg
              className="w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 15.6315L20.9679 10.8838L20.0321 9.11619L12 13.3685L3.96788 9.11619L3.0321 10.8838L12 15.6315Z"></path>
            </svg>
          </h5>
          <h4 className="text-3xl font-semibold ">Find a Trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 top-[45%] left-10 w-1 bg-gray-900 rounded-full"></div>
            <input
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              onClick={() => setPanelOpen(true)}
            />
            <input
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Add your destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onClick={() => setPanelOpen(true)}
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white h-0 opacity-0">
          <LocationSearchPanel
            panelOpen={panelOpen}
            setPanelOpen={setPanelOpen}
            vehiclePanelOpen={vehiclePanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
          />
        </div>
      </div>


      {/* Vehicle panel  */}
      <div
        ref={vehiclePanelRef}
        className="fixed z-10 bg-white bottom-0 translate-y-full w-full py-6 px-3 pt-12"
      >
        <VehiclePanel setVehiclePanelOpen={setVehiclePanelOpen} setConfirmRidePanel={setConfirmRidePanel}/>
      </div>


      {/* Confirm your Ride panel  */}
      <div
        ref={confirmRidePanelRef}
        className="fixed z-10 bg-white bottom-0 translate-y-full w-full py-6 pt-12 px-3"
      >
        <ConfirmedRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} setVehiclePanelOpen={setVehiclePanelOpen}/>
      </div>


      {/* Ride confirmed panel  */}
      <div
        ref={vehicleFoundRef}
        className="fixed z-10 bg-white bottom-0 translate-y-full w-full py-6 pt-12 px-3"
      >
        <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>


      {/* Waiting for driver panel  */}
      <div
        ref={waitingForDriverRef}
        className="fixed z-10 bg-white bottom-0 w-full py-6 pt-12 px-3"
      >
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
