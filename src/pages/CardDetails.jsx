// import {useLoaderData} from "react-router-dom"
import { ScrollRestoration } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import "animate.css";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Helmet } from "react-helmet-async";
// ..
AOS.init();
const CardDetails = () => {
  const { id } = useParams();
  //    console.log(id);
  const card = useLoaderData();
  const detailsCard = card.find((item) => item.id == id);
  return (
    <div>
      <Helmet>
        <title>detailsCart</title>
      </Helmet>
      <section className="mt-10">
        <h1 className="text-center text-5xl font-bold pb-5">Details</h1>
        <div className="bg-violet-600 ">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-50">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50 animate__animated animate__backInUp transition-3s">
              {detailsCard.estate_title}
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">
              {detailsCard.description}
            </p>

            <div className="flex flex-col  w-2/3  m-auto">
              <div className="overflow-x-auto rounded-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% dark:bg-neutral-700">
                <table className="min-w-full  text-left text-sm whitespace-nowrap">
                  <tbody>
                    <tr className="text-black  font-bold text-md hover:bg-neutral-100 dark:hover:bg-neutral-600">
                      <th scope="row" className="px-6 py-3">
                        Status
                      </th>
                      <td className="px-6 py-3 text-end">{detailsCard.status}</td>
                    </tr>

                    <tr className="text-black font-bold text-md hover:bg-neutral-100 dark:hover:bg-neutral-600  dark:bg-neutral-800">
                      <th scope="row" className="px-6 py-3">
                        Facilities
                      </th>
                      <td className="px-6 py-3 text-end">
                        {detailsCard.facilities[0]},{detailsCard.facilities[1]},
                        {detailsCard.facilities[2]},{detailsCard.facilities[3]}
                      </td>
                    </tr>

                    <tr className="text-black font-bold text-md hover:bg-neutral-100 dark:hover:bg-neutral-600">
                      <th scope="row" className="px-6 py-3">
                        Our Location
                      </th>
                      <td className="px-6 py-3 text-end">{detailsCard.location}</td>
                    </tr>

                    <tr className="text-black font-bold text-md hover:bg-neutral-100 dark:hover:bg-neutral-600 dark:bg-neutral-800">
                      <th scope="row" className="px-6 py-3">
                        Price
                      </th>
                      <td className="px-6 py-3 text-end">{detailsCard.price}</td>
                    </tr>

                    <tr className="text-black font-bold text-md hover:bg-neutral-100 dark:hover:bg-neutral-600">
                      <th scope="row" className="px-6 py-3 ">
                        Area
                      </th>
                      <td className="px-6 py-3 text-end">{detailsCard.area}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <img
          src={detailsCard.image}
          alt=""
          className="w-5/6 mx-auto mb-12 -mt-20 bg-gray-500 rounded-lg shadow-md lg:-mt-40 md:h-[100vh] object-cover"
        />
      </section>
      <ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default CardDetails;
