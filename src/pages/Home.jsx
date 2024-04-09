import Banner from "../component/Banner/Banner";
import {useLoaderData} from "react-router-dom"
import Card from "../component/Card";
 


const Home = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className="mt-8">
            <Banner></Banner>
          <div className="mt-12">
            <h1 className="text-5xl font-bold text-center" >All Cards</h1>
          <div >
        
          <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {
         data.map((card) =><Card key={card.id} card={card}></Card> )
        }
          </div>
        </div>
          </div>
        </div>
    );
};

export default Home;