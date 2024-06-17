import BreadCrumb from "@/Components/Brokers/BreadCrumb";
import PrimaryButton from "@/Components/PrimaryButton";
import Layout from "@/Layouts/Layout";
import { Head, Link } from "@inertiajs/react";

export default function Listings({ auth }) {
    return (
        <Layout
            auth={auth}
            header={<BreadCrumb title="My Listed Properties" />}
        >
            <Head title="My Listed Properties" />
            <section className="px-4 sm:py-16 lg:px-6 flex flex-col 2xl:items-center items-stretch py-8">
                <div className="mt-10 grid max-w-md grid-cols-1 gap-4 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-6">
                    {/* Right side  */}
                    <article className="col-span-2 mb-4 text-slate-800">
                        {/* Add property btn */}
                        <div className="flex items-center justify-between">
                            <Link
                                href={route("add-property")}
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
                        {/* Listed Properties  */}
                        {/* Pagination */}
                    </article>

                    {/* Left side */}
                    <article className="px-5 mb-4 text-slate-800">
                        <PrimaryButton> Add Property </PrimaryButton>
                        Left side
                        {/* Quick Stats : Published Listings, Unplublished Listings, Total Listings */}
                        {/* Contact Nestgreeks */}
                    </article>
                </div>
            </section>
        </Layout>
    );
}
