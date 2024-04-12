import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "./Banner.css";
import 'animate.css';
// import required modules

const Banner = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Autoplay, Pagination]}
        loop={true}
        autoplay={{ delay: 2000 }}
      >
        <SwiperSlide>
          <div className="slide slide1 flex flex-col">
            <div>
              <h1 className="text-3xl md:text-6xl font-bold w-3/4 m-auto text-center text-white animate__animated animate__fadeInDownBig">
                Super 8 By Wyndham Toronto East On
              </h1>
            </div>
            <div className="mt-6">
              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide slide2 flex flex-col">
            <div>
              <h1 className="text-3xl md:text-6xl font-bold w-3/4 m-auto text-center text-white animate__animated animate__fadeInTopLeft">
                Homewood Suites by Hilton Toronto Airport Corporate Centre
              </h1>
            </div>
            <div className="mt-6">
              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide slide3 flex flex-col">
            <div>
              <h1 className="text-3xl md:text-6xl font-bold w-3/4 m-auto text-center text-white animate__animated animate__fadeInBottomRight">
                Holiday Inn Toronto Downtown Centre
              </h1>
            </div>
            <div className="mt-6">
              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
