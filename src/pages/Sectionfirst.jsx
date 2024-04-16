import { Link } from "react-router-dom";


const Sectionfirst = () => {
    return (
        <div className="mt-12">
            <div className="font-[sans-serif] text-[#333]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-2">Choose a Subscription</h2>
          <p className="text-sm text-gray-500">Change your plant according your needs</p>
        </div>
        <div className="flex mx-auto mt-12 bg-gray-100 rounded-full max-w-[200px]">
          <button className="text-white font-semibold w-full text-sm bg-blue-600 py-2.5 px-4 rounded-full">
            Regular</button>
          <button
            className="text-gray-400 font-semibold w-full text-sm py-2.5 px-4 rounded-full">
            Premium</button>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 mt-6 max-sm:max-w-sm max-sm:mx-auto">
          <div className="shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] rounded-md overflow-hidden transition-all duration-500 hover:scale-105">
            <div className="h-28 bg-gray-700 text-center p-4">
              <h3 className="text-2xl text-white font-semibold mb-1">General</h3>
              <p className="text-xs text-white">1 Month</p>
            </div>
            <div className="h-24 w-24 mx-auto -mt-8 shadow-xl rounded-full bg-gray-700 text-white border-4 flex flex-col items-center justify-center border-white">
              <h3 className="text-2xl font-semibold">$10</h3>
            </div>
            <div className="px-6 py-4 mt-4">
              <ul className="space-y-4">
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Toiletries
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Personal care
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Coffee Kit (maker, coffee)
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Tissue box
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Bathrobes and slippers
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Free breakfast
                </li>
              </ul>
             <Link to="/login">
             <button type="button" className="w-full mt-8 px-2 py-2 text-sm font-semibold text-white bg-gray-700 hover:bg-gray-800 rounded-full">Get Started</button>
             </Link>
            </div>
          </div>
          <div className="shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] rounded-md overflow-hidden transition-all duration-500 hover:scale-105 relative">
            <span className="px-2 py-1 text-[10px] font-semibold text-white bg-orange-400 rounded-md ml-3 absolute -left-4 top-0">Most popular</span>
            <div className="h-28 bg-blue-600 text-center p-4">
              <h3 className="text-2xl text-white font-semibold mb-1">Luxury</h3>
              <p className="text-xs text-white">2 Months</p>
            </div>
            <div className="h-24 w-24 mx-auto -mt-8 shadow-xl rounded-full bg-blue-600 text-white border-4 flex flex-col items-center justify-center border-white">
              <p className="text-[10px] font-bold">Save 29%</p>
              <h3 className="text-2xl font-semibold">$70</h3>
            </div>
            <div className="px-6 py-4 mt-4">
              <ul className="space-y-4">
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Gym or fitness center
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Premium coffee
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Free parking
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Free WiFi internet access
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Options for pillows
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  VIP Shopping at Local Merchants
                </li>
              </ul>
              <Link to="/login">
              <button type="button" className="w-full mt-8 px-2 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full">Get Started</button>
              </Link>
            </div>
          </div>
          <div className="shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] rounded-md overflow-hidden transition-all duration-500 hover:scale-105">
            <div className="h-28 bg-pink-700 text-center p-4">
              <h3 className="text-2xl text-white font-semibold mb-1">Business</h3>
              <p className="text-xs text-white">3 Month</p>
            </div>
            <div className="h-24 w-24 mx-auto -mt-8 shadow-xl rounded-full bg-pink-700 text-white border-4 flex flex-col items-center justify-center border-white">
              <p className="text-[10px] font-bold">Save 33%</p>
              <h3 className="text-2xl font-semibold">$99</h3>
            </div>
            <div className="px-6 py-4 mt-4">
              <ul className="space-y-4">
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Powerbank for the Road
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Relaxation Devices
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Room Purification
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Local History at Turndown
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  In-Room Cocktail Station
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                  Enthusiast & Hobbyist Tech
                </li>
              </ul>
              <Link to="/login">
              <button type="button" className="w-full mt-8 px-2 py-2 text-sm font-semibold text-white bg-pink-700 hover:bg-pink-800 rounded-full">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Sectionfirst;