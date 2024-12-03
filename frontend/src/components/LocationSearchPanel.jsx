import React from 'react'

const LocationSearchPanel = (props) => {
    // sample array of location 

    const locations = [
        "72/47 Patel Marg Mansarovar, Jaipur",
        "534/33 Meera Marg Mansarovar, Jaipur",
        "72/47 Lajpat colony, Shree Marg,Ramnagar, Jaipur",
        "163B civil lines, Jaipur",
    ]
  return (
    <div>
        {/* This is just a sample data  */}
        {
            locations.map((elem,idx)=>{
                return(
                    <div onClick={()=>{
                        props.setVehiclePanelOpen(true)
                        props.setPanelOpen(false)
                    }
                    } key={idx} className='flex items-center my-2 gap-2 border-2 border-gray-100 active:border-black px-2 p-3 rounded-xl'>
                        <h2 className='bg-[#eee] h-8 w-8 flex items-center justify-center rounded-full'><svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path></svg></h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default LocationSearchPanel;