import React, { useEffect, useState } from "react";
import icondownloads from "../../assets/icondownloads.png";
import iconratings from "../../assets/iconratings.png";
import { useLoaderData } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import AppNotFound from "../../components/AppNotFound/AppNotFound";

export const MyApps = () => {
  const myApp = useLoaderData();
  const [myAppData, setMyAppData] = useState([]);
  const [filteredApps, setFilteredApps] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (myApp) {
      setMyAppData(myApp);
      setFilteredApps(myApp);
    }
  }, [myApp]);

  const navigate = useNavigate();
  
    const handleCardClick = (appId) => {
      navigate(`/AppDetails/${appId}`);
    };

  // Handle search functionality
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === "") {
      setFilteredApps(myAppData);
    } else {
      const filtered = myAppData.filter((app) =>
        app.title.toLowerCase().includes(query)
      );
      setFilteredApps(filtered);
    }
  };

  // Handle empty or loading states gracefully
  if (!myAppData || myAppData.length === 0) {
    return <p className="text-center mt-10">Loading apps...</p>;
  }

  return (
    <>
      <div>
        <h1 className="text-3xl text-gray-700 font-bold text-center mt-5 mb-2">
          Our All Applications
        </h1>
        <p className="text-center text-sm text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {/* Apps count and search bar section */}
      <div className="flex justify-between items-center mx-10 mt-8 mb-5">
        <p className="text-sm font-semibold text-gray-500 bg-white rounded shadow-sm p-2">
          Apps Found ({filteredApps.length})
        </p>
        <label className="input input-bordered flex items-center gap-2 bg-white outline-0 shadow-sm">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input 
            type="search" 
            placeholder="Search Apps" 
            value={searchQuery}
            onChange={handleSearch}
            className="grow"
          />
        </label>
      </div>

      <div className="grid grid-cols-4 gap-5 justify-center m-10 max-sm:block">
        {filteredApps.map((app, index) => (
          <div key={index} className="card bg-white w-70 shadow-md" onClick={() => handleCardClick(app._id || app.id || index)}>
            <figure>
              <img
                src={app.image}
                alt={app.title}
                className="p-2 rounded-lg h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-sm pb-2">{app.title}</h2>
              <div className="card-actions justify-between flex items-center gap-2">
                <div className="badge text-green-500 bg-green-100 border-green-500">
                  <img src={icondownloads} alt="download" className="w-3 h-3" />
                  {app.downloads.toLocaleString()}
                </div>
                <div className="badge text-orange-500 bg-orange-100 border-orange-500">
                  <img src={iconratings} alt="ratings" className="w-3 h-3" />
                  {app.ratingAvg.toFixed(1)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No results message */}
      {filteredApps.length === 0 && searchQuery && <AppNotFound />}
    </>
  );
};