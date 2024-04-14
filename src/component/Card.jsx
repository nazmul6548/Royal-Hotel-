import { Link } from "react-router-dom";



const Card = ({card}) => {
    const {estate_title,description,image,segment_name,id} = card;
    return (
        <div className=" max-w-full m-8 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
        {/*  */}
        <div className="relative  overflow-hidden bg-cover bg-no-repeat">
  <img
    src={image}
    className=" w-[100%] object-cover h-72 object-center transition duration-300 ease-in-out hover:scale-110"
    alt="Louvre" />
</div>

{/* <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" /> */}
        {/*  */}
        <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">{estate_title}</h2>
                <p className="dark:text-gray-800">{description}</p>
            </div>
            <Link to={`/detailscard/${id}`}>
            <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide  bg-cyan-400 rounded-md dark:bg-violet-600 dark:text-gray-50">View Property</button>
            </Link>
        </div>
    </div>
    );
};

export default Card;