import React from "react";
import AppError from "../../assets/AppError.png"; // ✅ Make sure the extension matches your actual file

const AppNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <img src={AppError} alt="App Not Found" className="w-64 h-64 mb-5" />
      <h2 className="text-gray-600 font-semibold text-lg">
        No apps found matching your search.
      </h2>
      <a href="/" className="btn bg-gradient-to-br from-purple-700 via-purple-400 to-purple-500 outline-0 border-0 hover:bg-gradient-to-tl">
      Go Back</a>
    </div>
  );
};

export default AppNotFound;
