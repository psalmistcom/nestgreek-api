import { Link } from "@inertiajs/react";

export default function Cta() {
    return (
        <div className="bg-emerald-700 lg:px-20 px-5 lg:mx-20 lg:rounded-lg py-8 mb-10">
            <div className="lg:flex lg:justify-between items-center">
                <div>
                    <h2 className="font-extrabold tracking-tight leading-none text-4xl md:text-4xl lg:text-5xl text-white">
                        Looking for a dream home?
                    </h2>
                    <p className="font-base tracking-wide my-3 text-lg text-white">
                        Find the perfect blend of comfort and style tailored to
                        your preferences.
                    </p>
                </div>
                <div>
                    <Link
                        href={route("properties")}
                        className="uppercase inline-flex justify-center items-center py-4 px-5 font-medium text-xs text-center text-emerald-700 rounded-lg bg-white hover:bg-emerald-100"
                    >
                        Explore Properties
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
                </div>
            </div>
        </div>
    );
}
