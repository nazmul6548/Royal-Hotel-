import Banner from "../component/Banner/Banner";
import {useLoaderData} from "react-router-dom"
import Card from "../component/Card";
import { Helmet } from "react-helmet-async";
import 'animate.css';



const Home = () => {
  
  
    const data = useLoaderData()
    console.log(data);
    return (
      
        <div className="mt-8">
          <Helmet>
    <title>home</title>
  </Helmet>
            <Banner></Banner>
          <div className="mt-12">
            <h1 className="text-5xl font-bold text-center animate__animated animate__backInLeft" >Best Hotels for Your Next Trip</h1>
            <p className=" font-bold text-center py-6 w-full md:w-2/4 m-auto animate__animated animate__backInRight">Luxurious or budget-friendly hotels, villas or resorts, browse accommodations at ShareTrip that meet the need. Book Long-term or short-term accommodation from our hotel deals</p>
          <div >
        
          <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {
         data.map((card) =><Card key={card.id} card={card}></Card> )
        }
          </div>
        </div>
          </div>
        </div>
    )
};

export default Home;