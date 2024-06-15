import PrimaryButton from "../PrimaryButton";
import { useForm } from "@inertiajs/react";

export default function ContactForm() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        service: "",
        phone: "",
        message: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();

        post(route("enquiry-store"));
    };
    return (
        <section className="px-4 sm:py-8 lg:px-20 flex flex-col py-8">
            <div>
                <h4 className="text-2xl border-l-2 font-extrabold border-l-emerald-700 pl-5">
                    Make Enquiry
                </h4>
            </div>

            <form onSubmit={onSubmit}>
                <div className="grid max-w-md grid-cols-1 gap-4  sm:max-w-lg  md:max-w-screen-xl md:grid-cols-2  lg:grid-cols-2 lg:gap-6">
                    <div className="mt-5 lg:mt-10 border-2 rounded-md ">
                        <div className="relative">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={data.name}
                                autoComplete="name"
                                className="block w-full rounded-md border border-gray-200 py-4 px-4 pr-11 text-sm shadow-sm outline-none focus:z-10 focus:border-emerald-500 focus:ring-emerald-500"
                                placeholder="Enter Your name"
                                required
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 flex items-center pr-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="h-4 w-4 text-emerald-500 size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 lg:mt-10 border-2 rounded-md ">
                        <div className="relative">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={data.email}
                                autoComplete="email"
                                className="block w-full rounded-md border border-gray-200 py-4 px-4 pr-11 text-sm shadow-sm outline-none focus:z-10 focus:border-emerald-500 focus:ring-emerald-500"
                                placeholder="Enter Your Email"
                                required
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 flex items-center pr-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6 h-4 w-4 text-emerald-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 lg:mt-2 border-2 rounded-md ">
                        <div className="">
                            <select
                                id="service"
                                name="service"
                                value={data.service}
                                required
                                onChange={(e) =>
                                    setData("service", e.target.value)
                                }
                                className="block w-full rounded-md border border-gray-200 py-4 px-4 pr-11 text-sm shadow-sm outline-none focus:z-10 focus:border-emerald-500 focus:ring-emerald-500"
                            >
                                <option value="">--- Select Service ---</option>
                                <option value="Property Management">
                                    Property Management
                                </option>
                                <option value="Property Consultant">
                                    Property Consultant
                                </option>
                                <option value="Consulting Service">
                                    Consulting Service
                                </option>
                                <option value="Home Buying and Selling">
                                    Home Buying and Selling
                                </option>
                                <option value="Home and Commercial Building">
                                    Home and Commercial Building
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-2 lg:mt-2 border-2 rounded-md ">
                        <div className="relative">
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={data.phone}
                                autoComplete="phone"
                                onChange={(e) =>
                                    setData("phone", e.target.value)
                                }
                                className="block w-full rounded-md border border-gray-200 py-4 px-4 pr-11 text-sm shadow-sm outline-none focus:z-10 focus:border-emerald-500 focus:ring-emerald-500"
                                placeholder="Enter Your Phone Number"
                            />
                            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 flex items-center pr-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="h-4 w-4 text-emerald-500 size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5 lg:mt-7 border-2 rounded-md ">
                    <div className="relative">
                        <textarea
                            id="message"
                            name="message"
                            value={data.message}
                            onChange={(e) => setData("message", e.target.value)}
                            className="block w-full rounded-md border border-gray-200 py-4 px-4 pr-11 text-sm shadow-sm outline-none focus:z-10 focus:border-emerald-500 focus:ring-emerald-500"
                            placeholder="Enter Your Message"
                        />
                        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 flex items-center pr-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-4 w-4 text-emerald-500 size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                />
                            </svg>
                        </div>
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
    );
}
