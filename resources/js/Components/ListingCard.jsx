import { Link } from "@inertiajs/react";

export default function ListingCard({
    image,
    propType,
    title,
    address,
    sqm,
    price,
    link = "",
    bath = "0",
    bed = "0",
    typeColor = "emerald",
}) {
    return (
        <article className="relative mb-4 overflow-hidden rounded-xl border text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl">
            <div className="relative h-60">
                <img
                    src={image}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                    alt=""
                />
                <span
                    className={`uppercase absolute top-0 right-0 m-2 rounded-lg bg-${typeColor}-500 px-4 py-1 text-center text-white text-sm font-medium`}
                >
                    {propType}
                </span>
                <span className="absolute bottom-0 left-0 right-0  text-white text-md font-medium  bg-gradient-to-t from-slate-950 ...">
                    <div className="flex justify-left px-4 py-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-6 mr-2"
                        >
                            <path
                                fillRule="evenodd"
                                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span>{address}</span>
                    </div>
                </span>
            </div>
            <div className="p-4">
                <div className="pb-6">
                    <Link
                        href={link}
                        className="text-xl hover:text-green-600 font-semibold duration-500 ease-in-out"
                    >
                        {title}
                    </Link>
                </div>
                <ul className="box-border flex list-none items-center border-t border-b border-solid border-gray-200 px-0 py-6">
                    <li className="mr-4 flex items-center text-left">
                        <i className="mr-2 text-2xl text-green-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                className="h-5 w-5"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M10.38 13.08A1 1 0 0 0 10 13H6a1 1 0 0 0 0 2h1.59l-5.3 5.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L9 16.41V18a1 1 0 0 0 2 0v-4a1 1 0 0 0-.08-.38a1 1 0 0 0-.54-.54ZM10 5a1 1 0 0 0-1 1v1.59l-5.29-5.3a1 1 0 0 0-1.42 1.42L7.59 9H6a1 1 0 0 0 0 2h4a1 1 0 0 0 .38-.08a1 1 0 0 0 .54-.54A1 1 0 0 0 11 10V6a1 1 0 0 0-1-1Zm3.62 5.92A1 1 0 0 0 14 11h4a1 1 0 0 0 0-2h-1.59l5.3-5.29a1 1 0 1 0-1.42-1.42L15 7.59V6a1 1 0 0 0-2 0v4a1 1 0 0 0 .08.38a1 1 0 0 0 .54.54ZM16.41 15H18a1 1 0 0 0 0-2h-4a1 1 0 0 0-.38.08a1 1 0 0 0-.54.54A1 1 0 0 0 13 14v4a1 1 0 0 0 2 0v-1.59l5.29 5.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"
                                />
                            </svg>
                        </i>
                        <span className="text-sm"> {sqm} sqm</span>
                    </li>
                    <li className="mr-4 flex items-center text-left">
                        <i className="mr-2 text-2xl text-green-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                className="h-5 w-5"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M22 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L4 19h1l.67-2h12.67l.66 2h1l.67-2H22v-5zm-4-2h-5V7h5v3zM6 7h5v3H6V7zm-2 5h16v3H4v-3z"
                                />
                            </svg>
                        </i>
                        <span className="text-sm">{bed} Beds</span>
                    </li>
                    <li className="mr-4 flex items-center text-left">
                        <i className="mr-2 text-2xl text-green-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                className="h-5 w-5"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M21 10H7V7c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4S5 4.794 5 7v3H3a1 1 0 0 0-1 1v2c0 2.606 1.674 4.823 4 5.65V22h2v-3h8v3h2v-3.35c2.326-.827 4-3.044 4-5.65v-2a1 1 0 0 0-1-1zm-1 3c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4v-1h16v1z"
                                />
                            </svg>
                        </i>
                        <span className="text-sm">{bath} Baths</span>
                    </li>
                </ul>
                <ul className="m-0 flex list-none items-center justify-between px-0 pt-6 pb-0">
                    <li className="text-left">
                        <span className="text-sm text-gray-400">Price</span>
                        <p className="m-0 text-base font-medium">{price}</p>
                    </li>
                </ul>
            </div>
        </article>
        // <div className="relative overflow-hidden lg:mt-0 lg:col-span-4 md:col-span-6 sm:col-span-12 bg-white rounded-sm shadow-lg  border-gray-200 border-2">
        //     <div className="relative w-38 h-38 overflow-hidden h-60  ">
        //         <img
        //             src={icon}
        //             className="w-full h-full object-cover hover:scale-110 transition duration-500 cursor-pointer"
        //             alt=""
        //         />
        //         <span className="uppercase absolute top-0 right-0 m-2 rounded-lg bg-emerald-700 px-4 py-1 text-center text-white text-sm font-medium">
        //             {propType}
        //         </span>
        //         <span className="absolute bottom-0 left-0 right-0  text-white text-md font-medium  bg-gradient-to-t from-slate-950 ...">
        //             <div className="flex justify-between px-4 py-3">
        //                 <svg
        //                     xmlns="http://www.w3.org/2000/svg"
        //                     viewBox="0 0 24 24"
        //                     fill="currentColor"
        //                     className="size-6 mr-2"
        //                 >
        //                     <path
        //                         fillRule="evenodd"
        //                         d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        //                         clipRule="evenodd"
        //                     />
        //                 </svg>
        //                 <span>{address}</span>
        //             </div>
        //         </span>
        //     </div>
        //     <div className="my-8 mx-5">
        //         <div className="text-left my-5">
        //             <p className="text-emerald-600 text-lg tracking-tight font-semibold">
        //                 {price}
        //             </p>
        //             <Link
        //                 href={link}
        //                 className="text-2xl font-bold tracking-wide leading-none text-slate-900"
        //             >
        //                 <h3>{title}</h3>
        //             </Link>
        //         </div>
        //         <p className="text-slate-500 text-md text-nowrap ">{excerpt}</p>
        //         <div className="flex justify-between px-5 items-center mt-8">
        //             <div className="rightBorder">1</div>
        //             <div>2</div>
        //             <div>3</div>
        //         </div>
        //     </div>
        // </div>
    );
}
