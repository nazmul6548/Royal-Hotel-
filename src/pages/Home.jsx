import Banner from "../component/Banner/Banner";
import {useLoaderData} from "react-router-dom"
import Card from "../component/Card";
 


const Home = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className="mt-8">
            <Banner></Banner>
           <div className="grid grid-cols-1 md:grid-cols-3 mt-12">
           {
            data.map((card) =><Card key={card.id} card={card}></Card> )
           }
           </div>
        </div>
    );
};

export default Home;