import SectionIntro from "../SectionIntro";
import ListingCard from "../ListingCard";

export default function FeaturedListings({ page = true, properties }) {
    console.log(properties);
    return (
        <section className="px-4 sm:py-16 lg:px-6 flex flex-col items-center bg-white py-8">
            {page && (
                <SectionIntro
                    title="Properties"
                    color="emerald"
                    bigText="Featured Listings"
                />
            )}

            {properties.length !== 0 ? (
                <>
                    <div className="mt-10 grid max-w-md grid-cols-1 gap-6 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-8">
                        {properties.map((property) => (
                            <ListingCard
                                key={property.id}
                                image={property.upload_img}
                                title={property.title}
                                link={route("single_property", property.id)}
                                address={property.address}
                                sqm={property.characteristics.sqft}
                                bath={property.characteristics.bathrooms}
                                bed={property.characteristics.bedrooms}
                                price={property.characteristics.price}
                                propType={
                                    property.characteristics.property_type
                                }
                            />
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <div className="my-5 border bg-white shadow-sm transition rounded-sm">
                        <div className="my-5 rounded-lg text-gray-700 ">
                            <div className="flex justify-center items-center">
                                <div className="w-1/2 flex flex-col items-center">
                                    <img
                                        src="../empty.jpg"
                                        width="150"
                                        alt=""
                                        className=""
                                    />
                                    <h3 className="px-15 text-lg tracking-wide leading-6 text-center items-center text-gray-600">
                                        There are no Properties at the moment,
                                        Kindly check back in the nearest future
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
}
