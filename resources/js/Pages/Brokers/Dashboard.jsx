import DashboardCard from "@/Components/Brokers/DashboardCard";
import SuccessMessage from "@/Components/SuccessMessage";
import Layout from "@/Layouts/Layout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ auth, broker, brokerBool, success }) {
    const brokerLink =
        brokerBool === true
            ? `${route("broker.edit", broker.id)}`
            : `${route("broker.create")}`;
    const brokerTitle =
        brokerBool === true
            ? "Update Business Details"
            : "Add Business Details";
    return (
        <Layout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-white leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <section className="px-4 sm:py-16 lg:px-6 flex flex-col items-center py-8">
                {brokerBool === false && (
                    <div className="mb-4 relative flex justify-center items-center lg:w-1/2 w-full py-4 px-4 text-base text-white bg-orange-500 rounded-lg">
                        <div className=" shrink-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="2em"
                                height="2em"
                                viewBox="0 0 24 24"
                                className="mr-3"
                            >
                                <g fill="none">
                                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                                    <path
                                        fill="currentColor"
                                        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 13a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0-9a1 1 0 0 0-.993.883L11 7v6a1 1 0 0 0 1.993.117L13 13V7a1 1 0 0 0-1-1"
                                    ></path>
                                </g>
                            </svg>
                        </div>
                        <span>
                            Kindly{" "}
                            <Link
                                className="text-green-500 hover:underline"
                                href={route("broker.create")}
                            >
                                {" "}
                                Update
                            </Link>{" "}
                            your Business details before you can gain access to
                            list your property
                        </span>
                    </div>
                )}
                <SuccessMessage success={success} />
                <div className="mt-10 grid max-w-md grid-cols-1 gap-6 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-8">
                    {brokerBool === true && (
                        <Link href={route("listing.index")}>
                            <DashboardCard
                                icon={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 256 256"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M232 224h-24V32h8a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16h8v192H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16M64 32h128v192h-32v-40a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v40H64Zm80 192h-32v-32h32ZM88 64a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m-48 40a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m-48 40a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8"
                                        />
                                    </svg>
                                }
                                title="My Listings"
                                para="Add, update and delete your listings"
                            />
                        </Link>
                    )}
                    <Link href={route("profile.edit")}>
                        <DashboardCard
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                >
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        color="currentColor"
                                    >
                                        <path d="M2 12c0-4.243 0-6.364 1.464-7.682C4.93 3 7.286 3 12 3s7.071 0 8.535 1.318S22 7.758 22 12s0 6.364-1.465 7.682C19.072 21 16.714 21 12 21s-7.071 0-8.536-1.318S2 16.242 2 12"></path>
                                        <path d="M8.4 8h-.8c-.754 0-1.131 0-1.366.234C6 8.47 6 8.846 6 9.6v.8c0 .754 0 1.131.234 1.366C6.47 12 6.846 12 7.6 12h.8c.754 0 1.131 0 1.366-.234C10 11.53 10 11.154 10 10.4v-.8c0-.754 0-1.131-.234-1.366C9.53 8 9.154 8 8.4 8M6 16h4m4-8h4m-4 4h4m-4 4h4"></path>
                                    </g>
                                </svg>
                            }
                            title="Profile"
                            para="Phone Numbers, address and company details"
                        />
                    </Link>
                    <Link href={brokerLink}>
                        <DashboardCard
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="m14.02 21.923l-7.616-2.22V21h-4v-8.154h6.373l7.358 2.693v1.615H21v2.615zM3.403 20h2v-6.154h-2zm10.565.862l6.008-1.831v-.877h-6.921L9.95 17.142l.33-.957l2.926.969h1.929v-.92l-6.516-2.388H6.404v4.808zM19 14.769v-7l-5.5-3.846L8 7.769v2.692H7V7.29l6.5-4.635L20 7.289v7.48zm-4.904-6.327h.808v-.808h-.808zm-2 0h.808v-.808h-.808zm2 2h.808v-.808h-.808zm-2 0h.808v-.808h-.808z"
                                    ></path>
                                </svg>
                            }
                            title={brokerTitle}
                            para="Information about your business"
                        />
                    </Link>
                    <Link href={route("contact-admin")}>
                        <DashboardCard
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="m12 22l-.25-3h-.25q-3.55 0-6.025-2.475T3 10.5t2.475-6.025T11.5 2q1.775 0 3.313.662t2.7 1.825t1.824 2.7T20 10.5q0 1.875-.612 3.6t-1.676 3.2t-2.525 2.675T12 22m2-3.65q1.775-1.5 2.888-3.512T18 10.5q0-2.725-1.888-4.612T11.5 4T6.888 5.888T5 10.5t1.888 4.613T11.5 17H14zm-2.525-2.375q.425 0 .725-.3t.3-.725t-.3-.725t-.725-.3t-.725.3t-.3.725t.3.725t.725.3M10.75 12.8h1.5q0-.75.15-1.05t.95-1.1q.45-.45.75-.975t.3-1.125q0-1.275-.862-1.912T11.5 6q-1.1 0-1.85.613T8.6 8.1l1.4.55q.125-.425.475-.837T11.5 7.4t1.013.375t.337.825q0 .425-.25.763t-.6.687q-.875.75-1.062 1.188T10.75 12.8m.75-1.625"
                                    ></path>
                                </svg>
                            }
                            title="Contact Admin"
                            para="Report any cases of your property"
                        />
                    </Link>
                </div>
            </section>
        </Layout>
    );
}
