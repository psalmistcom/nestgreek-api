import { Link } from "@inertiajs/react";

export default function Breadcrumbs({ title, prevTitle, prevLink }) {
    return (
        <div className="bg-emerald-50 py-12 leading-6 ">
            <div className="max-w-screen-xl px-12 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <nav>
                        <ul className="flex m-0 items-center p-0">
                            <li className="text-left">
                                <Link
                                    href={prevLink}
                                    className="flex items-center text-left text-slate-400 hover:text-slate-900"
                                >
                                    <svg
                                        className="block h-5 w-5 align-middle mr-2"
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
                                    {prevTitle}
                                </Link>
                            </li>

                            <li className="flex items-center text-left">
                                <svg
                                    className="block h-5 w-5 align-middle text-slate-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
                                >
                                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
                                </svg>

                                <p className="text-sm font-normal leading-5 text-slate-900 ">
                                    {title}
                                </p>
                            </li>
                        </ul>
                    </nav>

                    <p className="mt-5 text-4xl font-extrabold leading-7 text-slate-800">
                        {title}
                    </p>
                </div>
            </div>
        </div>
    );
}
