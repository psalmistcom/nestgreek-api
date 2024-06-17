import { Link } from "@inertiajs/react";

export default function Hero({ latestProperty, propLink }) {
    return (
        <section className="py-12 sm:py-12 herobg">
            <div className="grid max-w-screen-xl px-12 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <Link
                        href={route(propLink)}
                        className="inline-flex justify-between mt-[25px] items py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gradient-to-br from-green-400 to-blue-600 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                        role="alert"
                    >
                        <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
                            Latest Property
                        </span>{" "}
                        <span className="text-sm font-medium">
                            {latestProperty}
                        </span>
                        <svg
                            className="ml-2 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http:www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </Link>
                    <h1 className="text-emerald-900 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
                        Discover Most <br /> Suitable Property
                    </h1>
                    <p className="mb-4 text-lg font-normal lg:text-md text-gray-500 border-l-2 pl-6 border-gray-500">
                        Find a variety of properties that suit you very easilty{" "}
                        <br />
                        Forget all difficulties in finding a residence for you
                    </p>

                    <div className="mx-auto mt-5 max-w-screen-md py-5 leading-6">
                        <form className="relative mx-auto flex w-full max-w-2xl items-center justify-between rounded-md shadow-lg ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="absolute left-2 block h-5 w-5 text-gray-400 size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                            <input
                                type="text"
                                name="search"
                                className="h-14 w-full rounded-md py-4 pr-40 pl-12 inputy outline-none focus:ring-2 focus:ring-emerald-400"
                                placeholder="City or Address : "
                            />
                            <button
                                type="submit"
                                className="absolute bg-emerald-700 right-0 lg:text-base  mr-1 inline-flex h-12 items-center justify-center rounded-lg text-xs capitalize tracking-tight lg:px-10 px-5 font-medium text-white focus:ring-4 hover:bg-emerald-600"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                    {/* <div className="space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <Link
                            href=""
                            className="uppercase inline-flex justify-center items-center py-3 px-8 font-medium text-xs text-center text-white rounded-lg bg-emerald-700 hover:bg-emerald-800"
                        >
                            <svg
                                fill="none"
                                viewBox="0 0 20 20"
                                xmlns="http:www.w3.org/2000/svg"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="mr-4 ml-1 w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    clipRule="evenodd"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                            search property
                        </Link>
                    </div> */}
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="house.png" alt="mockup" />
                </div>
            </div>
        </section>
    );
}
