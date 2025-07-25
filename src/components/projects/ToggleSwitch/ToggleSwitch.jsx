import "./ToggleSwitch.css";
import {useState} from "react";
import { IoIosSwitch } from "react-icons/io";
import { FaUsers } from "react-icons/fa";

export const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(true);

    const handleToggleSwitch = () => {
        setIsOn(!isOn);
    }
    
const checkIsOn = isOn ? "on" : "off";
const toggleBGColor = {backgroundColor: isOn ? "#f44336" : "#4caf50"};
const toggleswitchcolor = {color: isOn ? "#f44336" : "#4caf50"};
const toggleusercolor = {color: isOn ? "#4caf50" : "#f44336"};

    return (
        <>
        <h1 style={{ color: "#000", textAlign: "center"}}> Toggle Switch 
            <IoIosSwitch style={toggleswitchcolor}
              onClick={handleToggleSwitch}
            /> 
            <FaUsers style={toggleusercolor}/>
        </h1>

        <div className="toggle-switch" 
        style={toggleBGColor }
        onClick={handleToggleSwitch}
        >
            <div className={`switch ${checkIsOn}`}>
                <span className="switch-state">{checkIsOn}</span>
            </div>
        </div>
        </>
    );
};