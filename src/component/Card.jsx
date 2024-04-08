

const Card = ({card}) => {
    const {estate_title,description} = card;
    return (
        <div className=" max-w-full m-8 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
	<img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{estate_title}</h2>
			<p className="dark:text-gray-800">{description}</p>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide  bg-cyan-400 rounded-md dark:bg-violet-600 dark:text-gray-50">Read more</button>
	</div>
</div>
    );
};

export default Card;