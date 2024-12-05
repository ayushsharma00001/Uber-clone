import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [color, setVehicleColor] = useState("");
  const [plate, setVehiclePlate] = useState("");
  const [capacity, setVehicleCapacity] = useState();
  const [vehicleType, setVehicleType] = useState("car");

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
      vehicle: {
        vehicleType: vehicleType,
        color: color,
        capacity: capacity,
        plate: plate,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );
    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      localStorage.setItem("profile", JSON.stringify(data.captain));
      navigate("/captain-home");
    }
  };
  return (
    <div className="py-5 px-5 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-3"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="Uber logo"
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">
            What's our Captain's Name
          </h3>
          <div className="flex gap-4 mb-5">
            <input
              type="text"
              placeholder="Firstname"
              required
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base outline-none"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Lastname"
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base outline-none"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <h3 className="text-lg font-medium mb-2">
            What's our Captain's email
          </h3>
          <input
            type="email"
            placeholder="example@email.com"
            required
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            type="password"
            placeholder="password"
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <h3 className="text-lg font-medium mb-2">Vehicle Details</h3>
          <div className="flex flex-col">
            <div className="flex gap-5 mb-5 ">
              <select
                className="bg-[#eeeeee] mb-5 w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base outline-none"
                onChange={(e) => setVehicleType(e.target.value)}
                value={vehicleType}
              >
                <option value="car">Car</option>
                <option value="motorcycle">MotorCycle</option>
                <option value="auto">Auto</option>
              </select>
              <input
                type="text"
                placeholder="Vehicle Color"
                className="bg-[#eeeeee] mb-5 w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base outline-none"
                value={color}
                onChange={(e) => setVehicleColor(e.target.value)}
                required
              />
            </div>
            <div className="flex gap-5 mb-5">
              <input
                type="text"
                placeholder="Vehicle Number Plate"
                className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base outline-none"
                value={plate}
                onChange={(e) => setVehiclePlate(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Vehicle Capacity"
                className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base outline-none"
                value={capacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg "
            type="submit"
          >
            Create Captain Account
          </button>
        </form>
        <p className="text-center">
          Already have an account?
          <Link to="/captain-login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight py-4">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Policy</span> and{" "}
          <span className="underline">Terms of Service</span> apply
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
