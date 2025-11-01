import playstore from "../../assets/playstore.png"
import appstore from "../../assets/appstore.png"
import hero from "../../assets/hero.png"

const Banner = () => {
  return (
    <>
    <div className="mt-10">
        <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-center mt-5">We Build <br /><span className="bg-gradient-to-br from-purple-800 via-purple-600 to-purple-400 text-transparent bg-clip-text">Productive</span> Apps</h1>
        <p className="text-center text-sm text-gray-500 my-5">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p></div>
        <div className="flex justify-center items-center gap-2 mb-6">
            <button className="rounded-lg btn border-gray-200 w-30 text-gray-600 bg-white flex items-center p-2"><img src={playstore} alt="playstore" className="w-5 h-5" />Google Play</button>
            <button className="rounded-lg btn w-30 border-gray-200 text-gray-600 bg-white flex items-center p-2"><img src={appstore} alt="appstore" className="w-5 h-5" />App Store</button>
        </div>
        <div className="flex flex-col justify-center items-center">
            <img src={hero} alt="hero" className="w-160 h-80"/>
        </div>
    </div>
    </>
  )
}

export default Banner;
