import BreadCrumb from "@/Components/Brokers/BreadCrumb";
import Layout from "@/Layouts/Layout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";

export default function Edit({ auth, broker, success }) {
    const { data, setData, processing, errors, post } = useForm({
        user_id: auth.id,
        name: broker.name || "",
        address: broker.address || "",
        state: broker.state || "",
        zip_code: broker.zip_code || "",
        phone_number: broker.phone_number || "",
        image: "",
        _method: "PUT",
    });

    const updateBroker = (e) => {
        e.preventDefault();
        // console.log(data);
        post(route("broker.update", broker.id));
    };
    console.log(success);
    return (
        <Layout
            auth={auth}
            header={<BreadCrumb title="Update Business Details" />}
        >
            <Head title="Update Business Details" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="bg-white shadow-md rounded-md border mx-10">
                        {/* <pre>{JSON.stringify(broker)}</pre> */}
                        {broker.image_path && (
                            <div className="mb-4 flex justify-center border">
                                <img
                                    src={broker.image_path}
                                    className="object-cover w-3/4 h-48"
                                />
                            </div>
                        )}
                        <header className="px-10 pt-10 max-w-xl">
                            <h2 className="text-lg font-medium text-gray-900">
                                Update Business Information
                            </h2>
                        </header>

                        <form onSubmit={updateBroker} className="space-y-6">
                            <div className="my-10 grid sm:grid-cols-1 max-w-md grid-cols-1 gap-4 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-2 lg:gap-6">
                                <div className="text-slate-800">
                                    <div>
                                        <InputLabel
                                            htmlFor="name"
                                            value="Enter Business name"
                                        />

                                        <TextInput
                                            id="name"
                                            className="mt-1 block w-full"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            placeholder="eg. Zillow Empire"
                                            required
                                            autoComplete="company"
                                        />

                                        <InputError
                                            className="mt-2"
                                            message={errors.name}
                                        />
                                    </div>
                                    <div className="my-8">
                                        <InputLabel
                                            htmlFor="address"
                                            value="Enter Business address"
                                        />

                                        <TextInput
                                            id="address"
                                            className="mt-1 block w-full"
                                            value={data.address}
                                            onChange={(e) =>
                                                setData(
                                                    "address",
                                                    e.target.value
                                                )
                                            }
                                            required
                                            autoComplete="address"
                                            placeholder="eg. Lane 120, McDonald Close"
                                        />

                                        <InputError
                                            className="mt-2"
                                            message={errors.address}
                                        />
                                    </div>
                                    <div className="my-8">
                                        <InputLabel
                                            htmlFor="state"
                                            value="Enter Business state"
                                        />

                                        <TextInput
                                            id="state"
                                            className="mt-1 block w-full"
                                            value={data.state}
                                            onChange={(e) =>
                                                setData("state", e.target.value)
                                            }
                                            required
                                            autoComplete="state"
                                            placeholder="eg. Lagos"
                                        />

                                        <InputError
                                            className="mt-2"
                                            message={errors.state}
                                        />
                                    </div>
                                </div>
                                <div className="text-slate-800">
                                    <div>
                                        <InputLabel
                                            htmlFor="zip_code"
                                            value="Enter Zip code"
                                        />

                                        <TextInput
                                            id="zip_code"
                                            className="mt-1 block w-full"
                                            value={data.zip_code}
                                            onChange={(e) =>
                                                setData(
                                                    "zip_code",
                                                    e.target.value
                                                )
                                            }
                                            required
                                            placeholder="eg. 10001"
                                        />

                                        <InputError
                                            className="mt-2"
                                            message={errors.zip_code}
                                        />
                                    </div>
                                    <div className="my-8">
                                        <InputLabel
                                            htmlFor="phone_number"
                                            value="Enter Phone Number"
                                        />

                                        <TextInput
                                            id="phone_number"
                                            className="mt-1 block w-full"
                                            value={data.phone_number}
                                            onChange={(e) =>
                                                setData(
                                                    "phone_number",
                                                    e.target.value
                                                )
                                            }
                                            required
                                            autoComplete="phone_number"
                                            placeholder="eg. +2349099887733"
                                        />

                                        <InputError
                                            className="mt-2"
                                            message={errors.phone_number}
                                        />
                                    </div>
                                    <div className="my-8">
                                        <InputLabel
                                            htmlFor="image_path"
                                            value="Upload your business logo"
                                        />

                                        <TextInput
                                            id="image_path"
                                            type="file"
                                            name="image"
                                            className="mt-1 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "image",
                                                    e.target.files[0]
                                                )
                                            }
                                        />

                                        <InputError
                                            className="mt-2"
                                            message={errors.image}
                                        />
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <PrimaryButton
                                        disabled={processing}
                                        className="py-4 px-6"
                                    >
                                        Update Information
                                    </PrimaryButton>
                                    {/* <Transition
                                        show={recentlySuccessful}
                                        enter="transition ease-in-out"
                                        enterFrom="opacity-0"
                                        leave="transition ease-in-out"
                                        leaveTo="opacity-0"
                                    >
                                        <p className="text-sm text-gray-600">
                                            Succesfully updated.
                                        </p>
                                    </Transition> */}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
