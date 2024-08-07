import { Link } from "@inertiajs/react";
import ServiceCard from "./ServiceCard";
import SectionIntro from "../SectionIntro";

export default function ServicesSection({ properties }) {
    // console.log(properties);
    return (
        <section className=" bg-emerald-50">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="text-center">
                    <SectionIntro
                        title="Our Services"
                        color="red"
                        bigText="Our Main Focus"
                    />
                </div>
                <div className="grid max-w-screen-xl mx-auto lg:gap-8 xl:gap-5 lg:py-8 lg:grid-cols-12">
                    <ServiceCard
                        title="Buy a Home"
                        para="Various homes for sale available on the website, we can match you with a house you will want to call home."
                        icon="icon-img/21.png"
                        link={route("property_type", "For Sale")}
                    />
                    <ServiceCard
                        title="Rent a Home"
                        para="Homes available for rent on the website, we can match you with a house you will want to call home."
                        icon="icon-img/22.png"
                        link={route("property_type", "For Rent")}
                    />
                    <ServiceCard
                        title="Mortgage"
                        para="Get a mortgage. Begin by saving an initial deposit for the property you intended to purchase."
                        icon="icon-img/22.png"
                        link={route("property_type", "Mortgage")}
                    />
                    <ServiceCard
                        title="Sell a Home"
                        para="Thousand of properties for sale available on the website, we can match you with a house you will want to call home."
                        icon="icon-img/23.png"
                        linkText="Submit Property"
                        link="/login"
                    />
                </div>
            </div>
        </section>
    );
}
