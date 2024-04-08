import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/bundle'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Navigation,Autoplay,Pagination} from "swiper/modules"
import './Banner.css';


// import required modules



const Banner = () => {
    
    
    return (
    <div>
      <Swiper 
      navigation={true}
      
      pagination={
        {clickable:true}
      }
      modules={[Navigation,Autoplay,Pagination]}
      loop={true}
      autoplay={
        {delay:2000}
      }

      
      >
        


        <SwiperSlide>
            <div className='slide slide1'>
                
            </div>
        </SwiperSlide>



        <SwiperSlide>
            <div className='slide slide2'>
               
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='slide slide3'>
                
            </div>
        </SwiperSlide>
        
       
       
      </Swiper>
      
      </div>
    );
};

export default Banner;