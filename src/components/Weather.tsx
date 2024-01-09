import React, { useState } from 'react';

export default function Weather() {
  const [city, setCity] = useState('');
  const [showCity, setShowCity] = useState('');

  const getCity = (e:any) => {
    setCity(e.target.value);
  };

  const showCityHandle = () => {
    setShowCity(city);
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen relative">
        <div className="w-full h-full absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >

            <source src="your-video-source.mp4" type="video/mp4" />
          </video>
        </div>


        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-black bg-opacity-40 p-4 rounded w-2/3 h-4/5 mx-auto text-center">
            <p className="text-white font-bold">Your Content Over Video</p>
            <div className="flex items-center justify-start">
              <input
                className="bg-gray-800 text-white px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                onChange={getCity}
              />
              <button
                className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={showCityHandle}
              >
                Шукати
              </button>
              <p className='ml-2'>{showCity}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
