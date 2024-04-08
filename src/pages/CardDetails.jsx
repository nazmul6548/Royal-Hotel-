// import {useLoaderData} from "react-router-dom"
import {useParams} from "react-router-dom";
import {useLoaderData} from "react-router-dom";

const CardDetails = () => {
   const {id} = useParams()
   console.log(id);
   const card = useLoaderData()
   const detailsCard = card.find(item => item.id == id)
    return (
        <div>
            <section>
	<div className="bg-violet-600 mt-12">
		<div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-50">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">{detailsCard.estate_title}</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">{detailsCard.description}</p>
			
		</div>
	</div>
	<img src={detailsCard.image} alt="" className="w-5/6 mx-auto mb-12 -mt-20 bg-gray-500 rounded-lg shadow-md lg:-mt-40" />
</section>
        </div>
    );
};

export default CardDetails;