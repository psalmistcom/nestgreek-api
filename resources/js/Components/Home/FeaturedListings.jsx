import SectionIntro from "../SectionIntro";
import ListingCard from "../ListingCard";
import EmptyProperty from "../EmptyProperty";

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
                <EmptyProperty />
            )}
        </section>
    );
}
