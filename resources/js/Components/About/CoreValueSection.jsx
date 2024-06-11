import CoreValueCard from "./CoreValueCard";

export default function CoreValueSection({}) {
    return (
        <section className="px-4 sm:py-16 lg:px-6 flex flex-col items-center bg-white py-8">
            <p className="bg-emerald-100 inline-flex py-2 px-8 text-sm rounded-full text-emerald-700 font-semibold tracking-wide">
                Our Core Value
            </p>
            <div className="mt-10 grid max-w-md grid-cols-1 gap-6 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-8">
                <CoreValueCard
                    icon="icon-img/21.png"
                    title="Integrity"
                    paraText="Operating with unwavering honesty and ethical conduct, fostering trust and dependability."
                />
                <CoreValueCard
                    icon="icon-img/22.png"
                    title="Transparency"
                    paraText="Ensuring clear and open communication, disclosing pertinent information, and promoting accountability in business operations."
                />
                <CoreValueCard
                    icon="icon-img/23.png"
                    title="Customer focus"
                    paraText="Prioritizing client needs, aiming to exceed expectations, and fostering enduring relationships based on satisfaction."
                />
                <CoreValueCard
                    icon="icon-img/21.png"
                    title="Professionalism"
                    paraText="Demonstrating a high level of competence, conduct, and expertise in all facets of real estate transactions."
                />
                <CoreValueCard
                    icon="icon-img/23.png"
                    title="Commitment to community"
                    paraText="Engaging in responsible business practices, positively contributing to the local community, and upholding social responsibility."
                />
            </div>
        </section>
    );
}
