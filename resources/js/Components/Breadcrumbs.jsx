import { Link } from "@inertiajs/react";

export default function Breadcrumbs({ title, prevTitle, prevLink }) {
    return (
        <div className="bg-emerald-50 py-12  leading-6 ">
            <div className="max-w-screen-xl px-12 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <nav>
                        <ul className="flex m-0 items-center p-0">
                            <li className="text-left">
                                <a
                                    href="#"
                                    title=""
                                    className="cursor-pointer text-gray-400 hover:text-gray-900"
                                >
                                    <svg
                                        className="block h-5 w-5 align-middle"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg>
                                </a>
                            </li>

                            <li className="flex items-center text-left">
                                <svg
                                    className="block h-5 w-5 align-middle text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
                                >
                                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
                                </svg>

                                <a
                                    href="#"
                                    title=""
                                    className="cursor-pointer text-sm font-normal leading-5 text-gray-400 hover:text-gray-900"
                                >
                                    {" "}
                                    Analytics{" "}
                                </a>
                            </li>

                            <li className="flex items-center text-left">
                                <svg
                                    className="block h-5 w-5 align-middle text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
                                >
                                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
                                </svg>

                                <a
                                    href="#"
                                    title=""
                                    className="cursor-pointer text-sm font-normal leading-5 text-gray-400 hover:text-gray-900"
                                >
                                    New Users
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <p className="mt-5 text-lg font-bold leading-7 text-gray-800">
                        New Users
                    </p>
                </div>
            </div>
        </div>

        // <section className="py-6 sm:py-6 breadcrumbg">
        //     <div className="grid max-w-screen-xl px-12 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        //         <div className="mr-auto place-self-center lg:col-span-7">
        //             <h1 className="text-emerald-900 mb-4 text-xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-4xl">
        //                 Discover Most <br /> Suitable Property
        //             </h1>
        //             <p className="mb-4 text-lg font-normal lg:text-md text-gray-500 border-l-2 pl-6 border-gray-500">
        //                 Find a variety of properties that suit you very easilty{" "}
        //                 <br />
        //                 Forget all difficulties in finding a residence for you
        //             </p>
        //         </div>
        //     </div>
        // </section>
    );
}
