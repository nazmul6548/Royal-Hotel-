// import {useLoaderData} from "react-router-dom"
import {useParams} from "react-router-dom";
import {useLoaderData} from "react-router-dom";
import 'animate.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const CardDetails = () => {
   const {id} = useParams()
//    console.log(id);
   const card = useLoaderData()
   const detailsCard = card.find(item => item.id == id)
    return (
        
        <div>
            <section className="mt-10">
                <h1 className="text-center text-5xl font-bold pb-5">Details</h1>
	<div className="bg-violet-600 ">
		<div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-50">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50 animate__animated animate__backInUp transition-3s">{detailsCard.estate_title}</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">{detailsCard.description}</p>

            <div className="flex flex-col justify-between w-2/2 m-auto">
            <div data-aos="fade-up"><p className="font bold text-2xl flex justify-start">Status : <span className="text-black font-xl"> {detailsCard.status}</span></p></div>


            <div data-aos="fade-down"><p className="font bold text-2xl flex justify-start">Facilities :<span className="text-black font-xl "> {detailsCard.facilities[0]},{detailsCard.facilities[1]},{detailsCard.facilities[2]},{detailsCard.facilities[3]}</span></p></div>

            

            <div data-aos="fade-right"><p className="font bold text-2xl flex justify-start">Our Location : <span className="text-black font-xl"> {detailsCard.location}</span></p></div>


            <div data-aos="fade-left"><p className="font bold text-2xl  flex justify-start">Price : <span className="text-black"> {detailsCard.price}</span></p></div>


            <div data-aos="fade-left"><p className="font bold text-2xl  flex justify-start">Area : <span className="text-black"> {detailsCard.area}</span></p></div>


            


            </div>
			
		</div>
	</div>
	<img src={detailsCard.image} alt="" className="w-5/6 mx-auto mb-12 -mt-20 bg-gray-500 rounded-lg shadow-md lg:-mt-40 md:h-[100vh] object-cover" />
</section>
        </div>
        
    );
};

export default CardDetails;