import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const InstallationPage = () => {
  const allApps = useLoaderData();
  const [installedApps, setInstalledApps] = useState([]);
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    loadInstalledApps();
  }, []);

  const loadInstalledApps = () => {
    const apps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    setInstalledApps(apps);
  };

  const handleUninstall = (appId) => {
    const updatedApps = installedApps.filter(app => app.id !== appId);
    localStorage.setItem('installedApps', JSON.stringify(updatedApps));
    setInstalledApps(updatedApps);
  };

  const getSortedApps = () => {
    const sorted = [...installedApps];
    switch(sortBy) {
      case 'size':
        return sorted.sort((a, b) => b.size - a.size);
      case 'rating':
        return sorted.sort((a, b) => b.ratingAvg - a.ratingAvg);
      case 'name':
      default:
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
    }
  };

  const sortedApps = getSortedApps();

  return (
    <div className="container mx-auto px-10 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Your Installed Apps</h1>
        <p className="text-gray-600 mt-2">Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-700 font-medium">
          {installedApps.length} {installedApps.length === 1 ? 'App' : 'Apps'} Found
        </p>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-sm bg-white text-gray-500 border border-gray-300">
            Sort by: {sortBy === 'name' ? 'Name' : sortBy === 'size' ? 'Size' : 'Rating'} ▼
          </label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52 mt-2">
            <li><a onClick={() => setSortBy('name')}>Name</a></li>
            <li><a onClick={() => setSortBy('size')}>Size</a></li>
            <li><a onClick={() => setSortBy('rating')}>Rating</a></li>
          </ul>
        </div>
      </div>

      {installedApps.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500">No apps installed yet</p>
          <p className="text-gray-400 mt-2">Browse apps and install them to see them here</p>
        </div>
      ) : (
        <div className="space-y-4">
          {sortedApps.map(app => (
            <div key={app.id} className="bg-white shadow-sm rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <img 
                  src={app.image} 
                  alt={app.title} 
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{app.title}</h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-sm text-yellow-600 flex items-center gap-1">
                      ⭐ {app.ratingAvg}
                    </span>
                    <span className="text-sm text-gray-600">{app.size} MB</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app.id)}
                className="btn btn-sm bg-gradient-to-br from-red-600 via-red-500 to-red-400 text-white border-0 hover:bg-gradient-to-tl"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InstallationPage;