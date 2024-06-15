import BreadCrumb from "@/Components/Brokers/BreadCrumb";
import PrimaryButton from "@/Components/PrimaryButton";
import Layout from "@/Layouts/Layout";
import { Head, useForm } from "@inertiajs/react";

export default function ContactAdmin({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        subject: "",
        department: "",
        message: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();

        post(route("contact-admin"));
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
