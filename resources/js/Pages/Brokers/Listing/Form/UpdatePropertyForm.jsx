import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import { Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";

export default function UpdatePropertyForm({ property }) {
    const { data, setData, post, processing, errors, reset, progress } =
        useForm({
            property_id: property.id || "",
            title: property.title || "",
            address: property.address || "",
            listing_type: property.listing_type || "",
            state: property.state || "",
            description: property.description || "",
            isPublished: property.isPublished || "",
            price: property.characteristics.price || "",
            bedrooms: property.characteristics.bedrooms || "",
            bathrooms: property.characteristics.bathrooms || "",
            sqft: property.characteristics.sqft || "",
            property_status: property.characteristics.property_status || "",
            property_type: property.characteristics.property_type || "",
            upload_img: "",
            _method: "PUT",
        });

    const updateProperty = (e) => {
        e.preventDefault();
        post(route("listing.update", property.id));
    };
    return (
        <section className="">
            <div className="lg:container lg:w-full items-center flex justify-center ">
                <div className="bg-orange-200 border rounded border-orange-500 px-10 py-7 text-orange-800">
                    <h3 className="text-base font-extrabold">
                        Rules for Listing Property
                    </h3>
                    <p>
                        It is important that you read and understand the rules
                        for listing property on NestGreeks Limited Broker's
                        Page.{" "}
                        <Link
                            href="#"
                            className="text-emerald-600 hover:underline"
                        >
                            {" "}
                            Click here for details
                        </Link>
                    </p>
                </div>
            </div>
            <div className="px-8 py-8">
                <form onSubmit={updateProperty}>
                    <div className="flex gap-x-4">
                        <div className="relative flex w-56 items-center justify-center rounded-sm bg-gray-50 px-4 py-3 font-medium text-gray-700">
                            <input
                                className="peer hidden"
                                type="radio"
                                name="isPublished"
                                id="radio1"
                                value="0"
                                onChange={(e) =>
                                    setData("isPublished", e.target.value)
                                }
                                checked={data.isPublished === "0"}
                            />
                            <label
                                className="peer-checked:border-emerald-400 peer-checked:bg-emerald-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border"
                                htmlFor="radio1"
                            >
                                {" "}
                            </label>
                            <div className="peer-checked:border-transparent peer-checked:bg-emerald-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-emerald-400 ring-offset-2"></div>
                            <span className="pointer-events-none z-10">
                                Unpublish
                            </span>
                        </div>
                        <div className="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
                            <input
                                className="peer hidden"
                                type="radio"
                                name="isPublished"
                                id="radio3"
                                value="1"
                                onChange={(e) =>
                                    setData("isPublished", e.target.value)
                                }
                                checked={data.isPublished === "1"}
                            />
                            <label
                                className="peer-checked:border-emerald-400 peer-checked:bg-emerald-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border"
                                htmlFor="radio3"
                            >
                                {" "}
                            </label>
                            <div className="peer-checked:border-transparent peer-checked:bg-emerald-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-emerald-400 ring-offset-2"></div>
                            <span className="pointer-events-none z-10">
                                Publish
                            </span>
                        </div>
                        <InputError
                            className="mt-2"
                            message={errors.isPublished}
                        />
                    </div>

                    <div className="grid max-w-md grid-cols-1 gap-4  sm:max-w-lg  md:max-w-screen-xl md:grid-cols-3 lg:grid-cols-3 lg:gap-6">
                        <div className="col-span-2 mt-5">
                            <InputLabel htmlFor="title" value="Title" />
                            <TextInput
                                id="title"
                                className="mt-1 block w-full"
                                name="title"
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                                placeholder="eg.Furnished 3 Bedroom Flats"
                                required
                            />
                            <InputError
                                className="mt-2"
                                message={errors.title}
                            />
                        </div>
                        <div className="mt-5">
                            <InputLabel
                                htmlFor="listing_type"
                                value="Listing Type"
                            />
                            <SelectInput
                                id="listing_type"
                                name="listing_type"
                                className="mt-1 block w-full"
                                value={data.listing_type}
                                onChange={(e) =>
                                    setData("listing_type", e.target.value)
                                }
                                required
                            >
                                <option value="">--- Select ---</option>
                                <option value="For Sale">For Sale</option>
                                <option value="For Rent">For Rent</option>
                                <option value="Mortgage">Mortgage</option>
                                <option value="For Lease">For Lease</option>
                            </SelectInput>
                            <InputError
                                className="mt-2"
                                message={errors.listing_type}
                            />
                        </div>
                        <div className="mt-1">
                            <InputLabel
                                htmlFor="property_status"
                                value="Property Status"
                            />
                            <SelectInput
                                id="property_status"
                                name="property_status"
                                className="mt-1 block w-full"
                                value={data.property_status}
                                onChange={(e) =>
                                    setData("property_status", e.target.value)
                                }
                                required
                            >
                                <option value="">--- Select ---</option>
                                <option value="Sold">Sold</option>
                                <option value="On Sale">On Sale</option>
                                <option value="On Hold">On Hold</option>
                            </SelectInput>
                            <InputError
                                className="mt-2"
                                message={errors.property_status}
                            />
                        </div>
                        <div className="col-span-2 mt-1">
                            <InputLabel htmlFor="address" value="Address" />
                            <TextInput
                                id="address"
                                className="mt-1 block w-full"
                                value={data.address}
                                name="address"
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                                placeholder="eg. 207 Lane Abraham Adesanya Road"
                                required
                            />
                            <InputError
                                className="mt-2"
                                message={errors.address}
                            />
                        </div>
                        <div className="mt-1">
                            <InputLabel htmlFor="state" value="State" />
                            <TextInput
                                id="state"
                                className="mt-1 block w-full"
                                name="state"
                                value={data.state}
                                onChange={(e) =>
                                    setData("state", e.target.value)
                                }
                                placeholder="eg. Lagos"
                                required
                            />
                            <InputError
                                className="mt-2"
                                message={errors.state}
                            />
                        </div>
                        <div className="mt-1">
                            <InputLabel
                                htmlFor="price"
                                value="Price in Naira"
                            />
                            <TextInput
                                id="price"
                                type="number"
                                name="price"
                                className="mt-1 block w-full"
                                value={data.price}
                                onChange={(e) =>
                                    setData("price", e.target.value)
                                }
                                placeholder="eg. Lagos"
                                required
                            />
                            <InputError
                                className="mt-2"
                                message={errors.price}
                            />
                        </div>
                        <div className="mt-1">
                            <InputLabel
                                htmlFor="property_type"
                                value="Property Type"
                            />
                            <SelectInput
                                id="property_type"
                                name="property_type"
                                className="mt-1 block w-full"
                                value={data.property_type}
                                onChange={(e) =>
                                    setData("property_type", e.target.value)
                                }
                                required
                            >
                                <option value="">--- Select ---</option>
                                <option value="Landed Property">
                                    Landed Property
                                </option>
                                <option value="Housing">Housing</option>
                            </SelectInput>
                            <InputError
                                className="mt-2"
                                message={errors.property_type}
                            />
                        </div>
                        <div className="mt-1">
                            <InputLabel
                                htmlFor="bathrooms"
                                value="Bathrooms (Enter '0' for Null value)"
                            />
                            <TextInput
                                id="bathrooms"
                                type="number"
                                name="bathrooms"
                                className="mt-1 block w-full"
                                value={data.bathrooms}
                                onChange={(e) =>
                                    setData("bathrooms", e.target.value)
                                }
                                placeholder="eg. 2"
                                required
                            />
                            <InputError
                                className="mt-2"
                                message={errors.bathrooms}
                            />
                        </div>
                        <div className="mt-1">
                            <InputLabel
                                htmlFor="bedrooms"
                                value="Bedrooms (Enter '0' for Null value)"
                            />
                            <TextInput
                                id="bedrooms"
                                type="number"
                                name="bedrooms"
                                className="mt-1 block w-full"
                                value={data.bedrooms}
                                onChange={(e) =>
                                    setData("bedrooms", e.target.value)
                                }
                                placeholder="eg. 2"
                                required
                            />
                            <InputError
                                className="mt-2"
                                message={errors.bedrooms}
                            />
                        </div>
                        <div className="mt-1">
                            <InputLabel
                                htmlFor="sqft"
                                value="Total Area / sqft"
                            />
                            <TextInput
                                id="sqft"
                                type="number"
                                name="sqft"
                                className="mt-1 block w-full"
                                value={data.sqft}
                                onChange={(e) =>
                                    setData("sqft", e.target.value)
                                }
                                placeholder="eg. 2"
                                required
                            />
                            <InputError
                                className="mt-2"
                                message={errors.sqft}
                            />
                        </div>
                        <div className="mt-1 col-span-2">
                            <InputLabel
                                htmlFor="description"
                                value="Property Description"
                            />
                            <TextAreaInput
                                id="description"
                                name="description"
                                className="mt-1 block w-full"
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                required
                            />

                            <InputError
                                className="mt-2"
                                message={errors.description}
                            />
                        </div>
                        <div className="imageForm">
                            <InputLabel
                                htmlFor="upload_img"
                                value="Upload Image (You can upload multiple images)"
                            />
                            <div className="relative border border-dashed bg-white mt-2 flex justify-center items-center rounded ">
                                <TextInput
                                    type="file"
                                    id="upload_img"
                                    accept="image/*"
                                    name="upload_img"
                                    className=""
                                    onChange={(e) =>
                                        setData("upload_img", e.target.files[0])
                                    }
                                    // onChange={
                                    //     // (e) => setData.push(e.target.files[0])
                                    //     setData("upload_img", e.target.files[0])
                                    //     // images.push(e.target.files[0])
                                    // }
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 lg:mt-7">
                        <PrimaryButton
                            className="py-4 px-8 block"
                            disabled={processing}
                        >
                            Upload Property
                        </PrimaryButton>
                    </div>
                    {progress && (
                        <progress value={progress.percentage} max="100">
                            {progress.percentage}%
                        </progress>
                    )}
                </form>
            </div>
        </section>
    );
}
