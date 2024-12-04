import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
        <div className="flex items-center justify-between">
            <div className="flex items-center justify-start gap-3">
              <img className="h-10 w-10 rounded-full object-cover" src="https://preview.redd.it/created-random-people-using-chatgpt-midjourney-do-you-know-v0-q1aa450i5dqb1.png?width=1024&format=png&auto=webp&s=c4e9abc47d193474a2fa1a7e337d9d9340dce947" alt="" />
              <h4 className="text-lg font-medium">Harsh Patel</h4>
            </div>
            <div>
              <h4 className="text-lg font-medium">&#8377;295.2</h4>
              <p className="text-sm text-gray-600">Earned</p>
            </div>
          </div>

          <div className="flex justify-center gap-5 mt-6 items-start p-3 bg-gray-100 rounded-xl">
            <div className="flex flex-col justify-center items-center">
              <svg
                className="h-8 mb-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM15.5355 7.05025L16.9497 8.46447L12 13.4142L10.5858 12L15.5355 7.05025Z"></path>
              </svg>
              <h5 className="text-lg font-medium">10.2</h5>
              <p className="txet-sm text-gray-600">Hours Online</p>
            </div>
            <div className="flex flex-col justify-center items-center" >
              <svg
                className="h-8 mb-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 13C20 15.2091 19.1046 17.2091 17.6569 18.6569L19.0711 20.0711C20.8807 18.2614 22 15.7614 22 13 22 7.47715 17.5228 3 12 3 6.47715 3 2 7.47715 2 13 2 15.7614 3.11929 18.2614 4.92893 20.0711L6.34315 18.6569C4.89543 17.2091 4 15.2091 4 13 4 8.58172 7.58172 5 12 5 16.4183 5 20 8.58172 20 13ZM15.293 8.29297 10.793 12.793 12.2072 14.2072 16.7072 9.70718 15.293 8.29297Z"></path>
              </svg>
              <h5 className="text-lg font-medium">10.2</h5>
              <p className="txet-sm text-gray-600">Hours Online</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <svg
                className="h-8 mb-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.0049 2C21.1068 2 22 2.89821 22 3.9908V20.0092C22 21.1087 21.1074 22 20.0049 22H4V18H2V16H4V13H2V11H4V8H2V6H4V2H20.0049ZM8 4H6V20H8V4ZM20 4H10V20H20V4Z"></path>
              </svg>
              <h5 className="text-lg font-medium">10.2</h5>
              <p className="txet-sm text-gray-600">Hours Online</p>
            </div>
          </div>
    </div>
  )
}

export default CaptainDetails