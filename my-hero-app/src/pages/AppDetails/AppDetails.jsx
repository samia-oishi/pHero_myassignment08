import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import icondownloads from "../../assets/icondownloads.png";
import iconratings from "../../assets/iconratings.png";
import iconreview from "../../assets/iconreview.png";
import RatingsChart from "../../components/RatingsChart/RatingsChart";
import AppNotFound from '../../components/AppNotFound/AppNotFound';

const AppDetails = () => {
  const { allApps, id } = useLoaderData();
  const [isInstalled, setIsInstalled] = useState(false);

  const [isDisabled, setIsDisabled] = useState(false);

  
  // Find the specific app from all apps
  const app = allApps.find(app => String(app.id) === id || String(app._id) === id);

  // Check if app is installed on component mount
  useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    const installed = installedApps.some(installedApp => installedApp.id === app?.id);
    setIsInstalled(installed);
  }, [app?.id]);
  const handleInstall = () => {
  const installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');

  if (isInstalled) {
    // Uninstall: Remove from localStorage
    const updatedApps = installedApps.filter(installedApp => installedApp.id !== app.id);
    localStorage.setItem('installedApps', JSON.stringify(updatedApps));
    setIsInstalled(false);
    setIsDisabled(false);
  } else {
    // Install: Add to localStorage
    installedApps.push(app);
    localStorage.setItem('installedApps', JSON.stringify(installedApps));
    setIsInstalled(true);
    setIsDisabled(true); // disable after installing
  }
};

  const handleClick=()=>{
        setIsDisabled(true);
  }
  
  if (!app) {
    return <p className="text-center mt-10"><AppNotFound></AppNotFound></p>;
  }
  
  return (
    <>
    <div>
    <div className='flex items-center m-10 gap-5 max-sm:block'>
      <img src={app.image} alt={app.title} className='rounded-lg w-70 h-70' />
      <div>
      <div>
        <h1 className="text-2xl text-gray-700 font-bold mt-5">{app.title}</h1>
        <p className='text-sm text-gray-600 mb-5'>Developed by <span className='text-purple-700 font-medium'>{app.companyName}</span> </p>
        <hr className='w-[880px] border-t border-gray-300 pr-10 max-sm:w-[20%]'/>
      </div>
      <div className='flex items-center gap-5 my-5'>
        <div>
          <div className='flex items-center gap-2'>
          <img src={icondownloads} alt="downloads" className='w-7 h-7' />
          <div>
          <p className='text-sm text-gray-600'>Total Downloads</p>
          <p className='text-sm text-gray-700 font-bold'>{app.downloads}</p></div>
          </div>
        </div>
        <div>
          <div className='flex items-center gap-2'>
          <img src={iconratings} alt="downloads" className='w-7 h-7' />
          <div>
          <p className='text-sm text-gray-600'>Average Ratings</p>
          <p className='text-sm text-gray-700 font-bold'>{app.ratingAvg}</p></div>
          </div>
        </div>
        <div>
          <div className='flex items-center gap-2'>
          <img src={iconreview} alt="downloads" className='w-8 h-8' />
          <div>
          <p className='text-sm text-gray-600'>Total Reviews</p>
          <p className='text-sm text-gray-700 font-bold'>{app.reviews}</p></div>
          </div>
        </div>
      </div>
      <button 
  onClick={handleInstall}
  disabled={isDisabled}
  className={`btn outline-0 border-0 ${
    isInstalled 
      ? 'bg-gradient-to-br from-gray-600 via-gray-500 to-gray-400 cursor-not-allowed'
      : 'bg-gradient-to-br from-green-700 via-green-600 to-green-500 hover:bg-gradient-to-tl'
  } ${isDisabled ? 'opacity-50' : ''}`}
>
  {isInstalled ? 'Already Installed' : `Install Now (${app.size}MB)`}
</button>
      </div>
    </div>
     <hr className='w-[1180px] border-t border-gray-300 my-2 mx-10 max-sm:w-[20%]'/>
     <div>
        <h1 className="text-2xl text-gray-700 font-bold  m-10">Ratings</h1>
        <RatingsChart ratings={app.ratings}></RatingsChart>
     </div>
     <hr className='w-[1180px] border-t border-gray-300 my-2 mx-10 max-sm:w-[20%]'/>
     <div>
      <h1 className="text-2xl text-gray-700 font-bold  m-10">Description</h1>
      <p className='text-sm text-gray-600 m-10'>{app.description}</p>
     </div>
    </div>
    </>
  );
}

export default AppDetails;