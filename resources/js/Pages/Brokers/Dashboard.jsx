import DashboardCard from "@/Components/Brokers/DashboardCard";
import Layout from "@/Layouts/Layout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ auth }) {
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
                <div className="mt-10 grid max-w-md grid-cols-1 gap-6 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-8">
                    <Link href="">
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
