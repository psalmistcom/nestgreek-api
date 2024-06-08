import { Link } from "@inertiajs/react";

export default function ServiceCard({
    icon,
    title,
    para,
    link,
    linkText = "Find A home",
}) {
    return (
        <div className="lg:mt-0 lg:col-span-3 bg-white rounded-sm shadow-lg hover:border-b-4 hover:border-emerald-600 hover:shadow-2xl">
            <div className="flex justify-center pt-10 pb-5">
                <div className="w-38 h-38">
                    <img src={icon} alt="" />
                </div>
            </div>
            <div className="text-center">
                <h3 className="pb-5 text-2xl font-bold tracking-tight leading-none text-gray-900">
                    {title}
                </h3>
                <p className="text-lg font-medium lg:text-sm text-gray-500 px-5 mb-4">
                    {para}
                </p>
                <div className="text-emerald-500 flex justify-center items-center mb-8 hover:text-emerald-800 hover:mt-3">
                    <Link href={link} className="font-semibold">
                        {linkText}
                    </Link>
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
                </div>
            </div>
        </div>
    );
}
