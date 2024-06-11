import { Link } from "@inertiajs/react";

export default function () {
    return (
        <footer className="bg-slate-950 text-white">
            <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
                <div className="max-w-sm">
                    <div className="flex h-12 items-center space-x-2">
                        <span className="text-2xl font-bold">
                            Nest<span className="text-emerald-600">Greeks</span>
                            .
                        </span>
                    </div>
                    <div className="text-gray-500">
                        To be a beacon of excellence, trust, and weave dreams
                        into the very fabric of real estate.
                    </div>
                </div>
                <div className="">
                    <div className="mt-4 mb-2 font-medium xl:mb-4">
                        Contacts
                    </div>
                    <div className="text-gray-500 flex justify-start">
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
                        </svg>{" "}
                        <span>
                            3 Adeyemo Akapo Street, <br /> Omole Estate, Phase
                            One, Ojodu, Ikeja, Lagos
                        </span>
                    </div>
                    <div className="text-gray-500 flex justify-start my-4 items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4 mr-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                            />
                        </svg>
                        <span> 09057997133, 08061220887</span>
                    </div>
                    <div className="text-gray-500 flex justify-start my-4 items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-4 mr-2"
                        >
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                        </svg>

                        <span> info@nestgreeksltd.com</span>
                    </div>
                </div>
                <div className="">
                    <div className="mt-4 mb-2 font-medium xl:mb-4">Links</div>
                    <nav
                        aria-label="Footer Navigation"
                        className="text-gray-500"
                    >
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    className="hover:text-emerald-600 hover:underline"
                                    href="#"
                                >
                                    For Sale
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-emerald-600 hover:underline"
                                    href="#"
                                >
                                    For Rent
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-emerald-600 hover:underline"
                                    href="#"
                                >
                                    Mortgage
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-emerald-600 hover:underline"
                                    href="#"
                                >
                                    All Properties
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-emerald-600 hover:underline"
                                    href="#"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="">
                    <div className="mt-4 mb-2 font-medium xl:mb-4">
                        Subscribe to Newsletter
                    </div>
                    <form className="">
                        <div className="flex max-w-lg rounded-full bg-white ring-emerald-300 focus-within:ring">
                            <input
                                className="w-full rounded-full px-6 text-gray-600 outline-none inputy md:px-10"
                                type="email"
                                placeholder="Enter your email"
                            />
                            <button className="rounded-full bg-emerald-600 p-2 ring-emerald-300 focus:ring active:scale-105 md:p-5 hover:bg-emerald-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="bg-slate-900">
                <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
                    <div className="">
                        © 2024 NestGreeks LTD | All Rights Reserved
                    </div>
                    <div className="">
                        Crafted By:&nbsp;
                        <a
                            className="hover:text-emerald-600 text-emerald-500"
                            href="https://highq.com.ng"
                            target="_blank"
                        >
                            HighQ Innovations
                        </a>
                        <span className="px-4">|</span>
                        <a
                            className="hover:text-gray-400 text-gray-200"
                            href="#"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
