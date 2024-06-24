import BreadCrumb from "@/Components/Brokers/BreadCrumb";
import Pagination from "@/Components/Pagination";
import Layout from "@/Layouts/Layout";
import { Head, Link } from "@inertiajs/react";

export default function Listings({ auth, isABroker, properties, success }) {
    console.log(properties.data[0]);
    return (
        <Layout
            auth={auth}
            header={<BreadCrumb title="My Listed Properties" />}
        >
            <Head title="My Listed Properties" />
            <section className="px-4 sm:py-16 lg:px-6 flex flex-col 2xl:items-center items-stretch py-8">
                {success && (
                    <div
                        role="alert"
                        data-dismissible="alert"
                        className="mb-4 relative flex w-1/2 py-4 px-4 text-base text-white bg-emerald-500 rounded-lg"
                    >
                        <div className="shrink-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <div className="ml-3 mr-12">
                            <p className="block antialiased leading-snug tracking-normal text-white">
                                {success}
                            </p>
                        </div>
                        <button
                            datadismissibletarget="alert"
                            className="!absolute top-3 right-3 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-white transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                )}
                <div className="mt-10 grid max-w-md grid-cols-1 gap-4 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-6">
                    {/* Right side  */}
                    <article className="col-span-2 mb-4 text-slate-800">
                        {/* Add property btn */}
                        <div className="flex items-center justify-between">
                            {isABroker === true && (
                                <Link
                                    href={route("listing.create")}
                                    className="inline-flex items-center px-4 py-2  bg-emerald-700 rounded-sm font-semibold text-xs text-white uppercase tracking-widest hover:bg-emerald-600 focus:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-6 mr-2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                        />
                                    </svg>
                                    Add Property
                                </Link>
                            )}
                        </div>
                        {/* Listed Properties  */}
                        {properties.data.map((property) => (
                            <div
                                key={property.id}
                                className="my-5 border bg-white shadow-sm transition hover:shadow-lg rounded-sm"
                            >
                                <div className="group my-5 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg text-gray-700 ">
                                    <Link
                                        href="#"
                                        className="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4"
                                    >
                                        <div className="group relative h-16 w-16 overflow-hidden rounded-lg">
                                            <img
                                                // src="https://nestgreeksltd.com/img/properties/1709566228_PHOTO-2024-01-10-08-32-05.jpg"
                                                src={
                                                    property.upload_img[0]
                                                        .upload_img
                                                }
                                                alt=""
                                                className="h-full w-full object-cover text-gray-700"
                                            />
                                        </div>
                                    </Link>
                                    <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
                                        <h3 className="text-sm text-gray-600">
                                            {property.address}
                                        </h3>
                                        <Link
                                            href={route(
                                                "listing.show",
                                                property.id
                                            )}
                                            className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
                                        >
                                            {property.title}
                                        </Link>
                                        <p className="overflow-hidden pr-7 text-sm">
                                            {property.description}
                                        </p>

                                        <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-slate-900 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                                            <div className="">
                                                <span className="font-extrabold">
                                                    Type:
                                                </span>
                                                <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-1 text-green-900">
                                                    {property.listing_type}
                                                </span>
                                            </div>
                                            <div className="">
                                                <span className="font-extrabold">
                                                    State:
                                                </span>
                                                <span className="ml-2 mr-3 rounded-full bg-emerald-100 px-2 py-1 text-emerald-900">
                                                    {property.state}
                                                </span>
                                            </div>
                                            <div className="">
                                                <span className="font-extrabold">
                                                    Status:
                                                </span>
                                                <span className="ml-2 mr-3 rounded-full bg-emerald-100 px-2 py-1 text-emerald-900">
                                                    {
                                                        property.characteristics
                                                            .property_status
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                        {/* Action section  */}
                                        <div className="mt-3 flex flex-col space-y-3 text-sm font-medium text-gray-900 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                                            <div className="">
                                                <span className="font-extrabold">
                                                    Category:
                                                </span>
                                                <span className="ml-2 mr-3 rounded-full bg-emerald-100 px-2 py-1 text-emerald-900">
                                                    {
                                                        property.characteristics
                                                            .property_type
                                                    }
                                                </span>
                                            </div>
                                            <div className="">
                                                <span className="font-extrabold">
                                                    Size:
                                                </span>
                                                <span className="ml-2 mr-3 rounded-full bg-emerald-100 px-2 py-1 text-emerald-900">
                                                    {
                                                        property.characteristics
                                                            .sqft
                                                    }
                                                </span>
                                            </div>
                                            <div className="">
                                                <span className="font-extrabold">
                                                    Price:
                                                </span>
                                                <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-1 text-green-900">
                                                    N
                                                    {
                                                        property.characteristics
                                                            .price
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-emerald-600 text-white lg:px-4 px-4 py-2">
                                    <div className="px-4 flex justify-between">
                                        <div className="flex flex-col justify-around space-y-3 text-sm sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                                            <div className="">
                                                <span className="">
                                                    Bathrooms:
                                                </span>
                                                <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-1 text-green-900">
                                                    {
                                                        property.characteristics
                                                            .bathrooms
                                                    }
                                                </span>
                                            </div>
                                            <div className="">
                                                <span className="">
                                                    Bedrooms:
                                                </span>
                                                <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-1 text-green-900">
                                                    {
                                                        property.characteristics
                                                            .bedrooms
                                                    }
                                                </span>
                                            </div>
                                            <div className="">
                                                <span className="">
                                                    Visibilty:
                                                </span>
                                                <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-1 text-green-900">
                                                    {property.isPublished === 1
                                                        ? "Published"
                                                        : "Unpublished"}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <Link
                                                href={route(
                                                    "listing.edit",
                                                    property.id
                                                )}
                                                className="flex items-center justify-center px-2 mr-2 hover:text-emerald-200 "
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 24 24"
                                                    className="mr-2"
                                                >
                                                    <g
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                    >
                                                        <path d="M19.09 14.441v4.44a2.37 2.37 0 0 1-2.369 2.369H5.12a2.37 2.37 0 0 1-2.369-2.383V7.279a2.356 2.356 0 0 1 2.37-2.37H9.56"></path>
                                                        <path d="M6.835 15.803v-2.165c.002-.357.144-.7.395-.953l9.532-9.532a1.362 1.362 0 0 1 1.934 0l2.151 2.151a1.36 1.36 0 0 1 0 1.934l-9.532 9.532a1.361 1.361 0 0 1-.953.395H8.197a1.362 1.362 0 0 1-1.362-1.362M19.09 8.995l-4.085-4.086"></path>
                                                    </g>
                                                </svg>
                                                Edit
                                            </Link>
                                            <Link
                                                href={route(
                                                    "listing.destroy",
                                                    property.id
                                                )}
                                                className="flex items-center justify-center px-2 mr-2 hover:text-emerald-200 "
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M10 5h4a2 2 0 1 0-4 0M8.5 5a3.5 3.5 0 1 1 7 0h5.75a.75.75 0 0 1 0 1.5h-1.32l-1.17 12.111A3.75 3.75 0 0 1 15.026 22H8.974a3.75 3.75 0 0 1-3.733-3.389L4.07 6.5H2.75a.75.75 0 0 1 0-1.5zm2 4.75a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0zM14.25 9a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75m-7.516 9.467a2.25 2.25 0 0 0 2.24 2.033h6.052a2.25 2.25 0 0 0 2.24-2.033L18.424 6.5H5.576z"
                                                    ></path>
                                                </svg>
                                                Delete
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Pagination */}
                        <div className="flex justify-center">
                            <Pagination links={properties.meta.links} />
                        </div>
                        <div className="flex items-center justify-between">
                            <Link
                                href={route("listing.create")}
                                className="inline-flex items-center px-4 py-2  bg-emerald-700 rounded-sm font-semibold text-xs text-white uppercase tracking-widest hover:bg-emerald-600 focus:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition ease-in-out duration-150"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6 mr-2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                </svg>
                                Add Property
                            </Link>
                        </div>
                    </article>

                    {/* Left side */}
                    <article className="px-5 mb-4">
                        {/* Quick Stats : Sold Listings, On sale Listings, on Hold and Total Listings */}
                        <div className="border border-emerald-700 shadow-lg rounded-sm">
                            <div className="bg-emerald-700 px-3 py-3 text-center text-white">
                                <p className="text-xl font-semibold tracking-wide flex justify-center items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-6 mr-2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                                        />
                                    </svg>
                                    <span> Quick Statistics</span>
                                </p>
                            </div>
                            <div className="m-5">
                                <p>
                                    Sold Listings:{" "}
                                    <span className="font-extrabold">0</span>
                                </p>
                                <p>
                                    On Sale Listings:{" "}
                                    <span className="font-extrabold">0</span>
                                </p>
                                <p>
                                    On Hold Listings:{" "}
                                    <span className="font-extrabold">0</span>
                                </p>
                                <p>
                                    Total Listings:{" "}
                                    <span className="font-extrabold">0</span>
                                </p>
                            </div>
                        </div>
                        {/* Contact Nestgreeks */}
                        <div className="my-8">
                            <div className="relative h-72 overflow-hidden bg-red-600 sm:px-20 rounded-sm">
                                <div className="z-10 flex h-full flex-col items-center justify-center space-y-4">
                                    <h1 className="text-center text-3xl font-bold text-white">
                                        Follow NestGreeks
                                    </h1>
                                    <div className="flex justify-center items-center">
                                        <Link>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1em"
                                                height="1em"
                                                viewBox="0 0 24 24"
                                                className="text-white mr-2"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                                                ></path>
                                            </svg>
                                        </Link>
                                        <Link>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1em"
                                                height="1em"
                                                viewBox="0 0 24 24"
                                                className="text-white mr-2"
                                            >
                                                <path
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={1.5}
                                                    d="m3 21l7.548-7.548M21 3l-7.548 7.548m0 0L8 3H3l7.548 10.452m2.904-2.904L21 21h-5l-5.452-7.548"
                                                    color="currentColor"
                                                ></path>
                                            </svg>
                                        </Link>
                                        <Link>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1em"
                                                height="1em"
                                                viewBox="0 0 24 24"
                                                className="mr-2 text-white"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M11.95 1h.1c1.827 0 3.266 0 4.42.105c1.178.106 2.156.328 3.03.833A7 7 0 0 1 22.062 4.5c.505.874.727 1.852.833 3.03C23 8.684 23 10.123 23 11.95v.1c0 1.827 0 3.266-.105 4.42c-.106 1.178-.328 2.156-.833 3.03a7 7 0 0 1-2.562 2.562c-.874.505-1.852.727-3.03.833c-1.154.105-2.593.105-4.42.105h-.1c-1.827 0-3.266 0-4.42-.105c-1.178-.106-2.156-.328-3.03-.833A7 7 0 0 1 1.938 19.5c-.505-.874-.727-1.852-.833-3.03C1 15.316 1 13.877 1 12.05v-.1c0-1.827 0-3.266.105-4.42c.106-1.178.328-2.156.833-3.03A7 7 0 0 1 4.5 1.938c.874-.505 1.852-.727 3.03-.833C8.684 1 10.123 1 11.95 1M7.71 3.096c-1.039.095-1.691.274-2.21.574A5 5 0 0 0 3.67 5.5c-.3.519-.48 1.171-.574 2.21C3.001 8.764 3 10.112 3 12s.001 3.236.096 4.29c.095 1.039.274 1.691.574 2.21a5 5 0 0 0 1.83 1.83c.519.3 1.171.48 2.21.574c1.054.095 2.402.096 4.29.096s3.236-.001 4.29-.096c1.039-.095 1.691-.274 2.21-.574a5 5 0 0 0 1.83-1.83c.3-.519.48-1.171.574-2.21c.095-1.053.096-2.402.096-4.29s-.001-3.236-.096-4.29c-.095-1.039-.274-1.691-.574-2.21a5 5 0 0 0-1.83-1.83c-.519-.3-1.171-.48-2.21-.574C15.237 3.001 13.888 3 12 3s-3.236.001-4.29.096m9.04 3.156c0-.552.45-1.002 1.002-1.002s1.002.45 1.002 1.002s-.45 1.002-1.002 1.002s-1.002-.45-1.002-1.002M12 8.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M6.5 12a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0"
                                                ></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>

                                <div className="-z-1 absolute bottom-3 left-3 h-24 w-24 rounded-full bg-white bg-gradient-to-b from-white to-red-600 opacity-20"></div>
                                <div className="-z-1 absolute -top-10 left-1/2 h-24 w-24 rounded-full bg-white bg-gradient-to-b from-white to-red-600 opacity-20"></div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </Layout>
    );
}
