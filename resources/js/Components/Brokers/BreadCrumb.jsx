import { Link } from "@inertiajs/react";

export default function BreadCrumb({ title }) {
    // const back = () => {
    //     ;
    // };
    return (
        <h2 className="flex items-center font-semibold text-xl text-white leading-tight">
            <Link href={route("dashboard")} className="cursor-pointer">
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
            </Link>
            {title}
        </h2>
    );
}
