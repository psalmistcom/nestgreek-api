import SectionIntro from "../SectionIntro";

export default function FeaturedListings() {
    return (
        <section className=" bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="text-center">
                    <SectionIntro
                        title="Properties"
                        color="emerald"
                        bigText="Featured Listings"
                    />
                </div>
            </div>
        </section>
    );
}
