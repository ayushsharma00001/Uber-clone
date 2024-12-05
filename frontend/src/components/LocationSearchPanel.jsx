import React from "react";

const LocationSearchPanel = (props) => {
  const handleSuggestionClick = (suggestion) => {
    if (props.activeField === "pickup") {
      props.setPickup(suggestion.description); // Set the description
    } else if (props.activeField === "destination") {
      props.setDestination(suggestion.description); // Set the description
    }
  };

  return (
    <div>
      {/* Display fetched data */}
      {props.suggestions.map((elem, idx) => {
        return (
          <div
            key={idx}
            onClick={() => handleSuggestionClick(elem)}
            className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start w-[100%]"
          >
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
                <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"></path></svg>
            </h2>
            {/* Render the description */}
            <h4 className="font-medium">{elem.description}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
