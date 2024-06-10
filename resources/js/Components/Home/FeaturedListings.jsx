import SectionIntro from "../SectionIntro";
import ListingCard from "../ListingCard";

export default function FeaturedListings() {
    return (
        <section className="px-4 sm:py-16 lg:px-6 flex flex-col items-center bg-white py-8">
            <SectionIntro
                title="Properties"
                color="emerald"
                bigText="Featured Listings"
            />

            <div className="mt-10 grid max-w-md grid-cols-1 gap-6 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-8">
                <ListingCard
                    image="https://nestgreeksltd.com/img/properties/1709566228_PHOTO-2024-01-10-08-32-05.jpg"
                    title="3 Bedroom Duplex"
                    link="#"
                    address="238 Baton Rouge, LA 70809, USA"
                    sqm="1200"
                    bath="4"
                    bed="4"
                    price="4000"
                    propType="For sale"
                />
                <ListingCard
                    image="https://nestgreeksltd.com/img/properties/1710788493_PHOTO-2024-01-30-20-47-53.jpg"
                    title="Room and Palour Self Contained"
                    link="#"
                    address="238 Baton Rouge, LA 70809, USA"
                    sqm="1200"
                    bath="4"
                    bed="4"
                    price="4000"
                    propType="For Rent"
                    typeColor="red"
                />
                <ListingCard
                    image="luxury-real-estate.jpg"
                    title="5 Bedroom Mansion"
                    link="#"
                    address="238 Baton Rouge, LA 70809, USA"
                    sqm="1200"
                    bath="4"
                    bed="4"
                    price="4000"
                    propType="For sale"
                />
                <ListingCard
                    image="https://nestgreeksltd.com/img/properties/1709566228_PHOTO-2024-01-10-08-32-05.jpg"
                    link="#"
                    address="238 Baton Rouge, LA 70809, USA"
                    sqm="1200"
                    bath="4"
                    bed="4"
                    price="4000"
                    propType="For sale"
                />
            </div>
        </section>
    );
}
