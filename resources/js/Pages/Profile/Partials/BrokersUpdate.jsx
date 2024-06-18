import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";

export default function BrokersUpdate({
    mustVerifyEmail,
    status,
    className = "",
    broker,
}) {
    const brokerData = broker[0];
    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            user_id: brokerData.user_id || "",
            name: brokerData.name || "",
            address: brokerData.address || "",
            state: brokerData.state || "",
            zip_code: brokerData.zip_code || "",
            phone_number: brokerData.phone_number || "",
            logo_path: "",
            _method: "PATCH",
        });
    const updateBroker = (e) => {
        e.preventDefault();

        post(route("broker.update", broker.id), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };
    return (
        <section className="bg-white shadow-md rounded-md border mx-10">
            <header className="px-10 pt-10 max-w-xl">
                <h2 className="text-lg font-medium text-gray-900">
                    Update Information
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account before listing a property .
                </p>
            </header>
            {status === "done" && (
                <div className="mt-2 font-medium text-sm text-green-600">
                    Your Information has been updated succesfully.
                </div>
            )}
            <form onSubmit={updateBroker} className="space-y-6">
                <div className="my-10 grid max-w-md grid-cols-1 gap-4 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-2 lg:gap-6">
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
                                required
                                autoComplete="name"
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
                                    setData("address", e.target.value)
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
                                    setData("zip_code", e.target.value)
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
                                    setData("phone_number", e.target.value)
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
                                htmlFor="logo_path"
                                value="Upload your business logo"
                            />

                            <TextInput
                                id="logo_path"
                                type="file"
                                name="logo_path"
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData("logo_path", e.target.files[0])
                                }
                            />

                            <InputError
                                className="mt-2"
                                message={errors.logo_path}
                            />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <PrimaryButton disabled={processing}>
                            Save
                        </PrimaryButton>
                        <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <p className="text-sm text-gray-600">
                                Succesfully updated.
                            </p>
                        </Transition>
                    </div>
                </div>
            </form>
        </section>
    );
}
