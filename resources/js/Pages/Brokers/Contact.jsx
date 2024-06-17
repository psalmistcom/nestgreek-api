import BreadCrumb from "@/Components/Brokers/BreadCrumb";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import Layout from "@/Layouts/Layout";
import { Head, useForm } from "@inertiajs/react";

export default function ContactAdmin({ auth, success }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        user_id: auth.id,
        subject: "",
        department: "",
        message: "",
    });
    const onSubmit = (e) => {
        e.preventDefault();
        post(route("post-contact-admin"), {
            onSuccess: () => {
                reset();
            },
        });
    };
    return (
        <Layout auth={auth} header={<BreadCrumb title="Contact Admin" />}>
            <Head title="Contact Admin" />

            <section className="lg:mt-20 lg:mb-10 px-4 sm:py-8 lg:px-20 flex flex-col py-8">
                <div>
                    <h4 className="text-2xl border-l-2 font-extrabold border-l-emerald-700 pl-5">
                        Contact Admin
                    </h4>
                </div>
                <div className="my-4 text-gray-500 px-3 ">
                    Use the form below to make direct enquiry to the admin
                </div>
                {success && (
                    <div
                        role="alert"
                        data-dismissible="alert"
                        className="mb-4 relative flex w-1/2 py-4 px-4 text-base text-white bg-emerald-500 rounded-lg"
                    >
                        <div className="shrink-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <div className="ml-3 mr-12">
                            <p className="block antialiased leading-snug tracking-normal text-white">
                                {success}
                            </p>
                        </div>
                        <button
                            datadismissibletarget="alert"
                            className="!absolute top-3 right-3 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-white transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                )}
                <form onSubmit={onSubmit}>
                    <div className="grid max-w-md grid-cols-1 gap-4  sm:max-w-lg  md:max-w-screen-xl md:grid-cols-2  lg:grid-cols-2 lg:gap-6">
                        <div className="mt-5 lg:mt-10 border-2 rounded-md ">
                            <div className="">
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    value={data.subject}
                                    autoComplete="subject"
                                    className="block w-full rounded-md border border-gray-200 py-4 px-4 pr-11 text-sm shadow-sm outline-none focus:z-10 focus:border-emerald-500 focus:ring-emerald-500"
                                    placeholder="Enter Your subject"
                                    required
                                    onChange={(e) =>
                                        setData("subject", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.subject}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <div className="mt-5 lg:mt-10 border-2 rounded-md ">
                            <div className="">
                                <select
                                    id="department"
                                    name="department"
                                    value={data.department}
                                    required
                                    onChange={(e) =>
                                        setData("department", e.target.value)
                                    }
                                    className="block w-full rounded-md border border-gray-200 py-4 px-4 pr-11 text-sm shadow-sm outline-none focus:z-10 focus:border-emerald-500 focus:ring-emerald-500"
                                >
                                    <option value="">
                                        --- Select Department ---
                                    </option>
                                    <option value="None">None</option>
                                    <option value="Support">Support</option>
                                    <option value="Billing">Billing</option>
                                    <option value="Sales">Sales</option>
                                    <option value="Security">Security</option>
                                    <option value="Abuse">Abuse</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 lg:mt-7 border-2 rounded-md ">
                        <div className="">
                            <textarea
                                id="message"
                                name="message"
                                value={data.message}
                                onChange={(e) =>
                                    setData("message", e.target.value)
                                }
                                className="block w-full rounded-md border border-gray-200 py-4 px-4 pr-11 text-sm shadow-sm outline-none focus:z-10 focus:border-emerald-500 focus:ring-emerald-500"
                                placeholder="Enter Your message"
                            />
                        </div>
                    </div>
                    <div className="mt-5 lg:mt-7">
                        <PrimaryButton
                            className="py-4 px-8 block"
                            disabled={processing}
                        >
                            Send Enquiry
                        </PrimaryButton>
                    </div>
                </form>
            </section>
        </Layout>
    );
}
