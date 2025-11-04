import React from 'react'
import { Link } from "react-router-dom";
import icondownloads from "../../assets/icondownloads.png"
import iconratings from "../../assets/iconratings.png"
import { useNavigate } from 'react-router-dom';

const TrendingApps = ({ trendingAppdata }) => {
  const navigate = useNavigate();

  const handleCardClick = (appId) => {
    navigate(`/AppDetails/${appId}`);
  };
  
  return (
    <>
    <div>
      <h1 className='text-3xl text-gray-700 font-bold text-center mt-5 mb-2'>Trending Applications</h1>
      <p className='text-center text-sm text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
    </div>
    <div className="grid grid-cols-4 gap-5 justify-center m-10 max-sm:block ">
      {trendingAppdata.map((app, index) => (
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
              <div className="badge text-green-500 bg-green-100 border-green-500"><img src={icondownloads} alt="download" className='w-3 h-3'/>{app.downloads.toLocaleString()}</div>
              <div className="badge text-orange-500 bg-orange-100 border-orange-500"><img src={iconratings} alt="ratings" className='w-3 h-3'/>{app.ratingAvg.toFixed(1)}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className='flex justify-center items-center m-5'>
          <Link to="/myapps" className="btn bg-gradient-to-br from-purple-700 via-purple-400 to-purple-500 outline-0 border-0 hover:bg-gradient-to-tl">
         Show More</Link>
    </div>
    </>
  )
}

export default TrendingApps;