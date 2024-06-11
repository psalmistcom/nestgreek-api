import SectionIntro from "../SectionIntro";
import CoreServiceCard from "./CoreServiceCard";

export default function CoreServicesSection({}) {
    return (
        <section className="px-4 sm:py-16 lg:px-6 flex flex-col items-center bg-emerald-50 py-8">
            <SectionIntro
                title="Our Services"
                color="emerald"
                bigText="Our Core Services"
            />
            <div className="mt-10 grid max-w-md grid-cols-1 gap-6 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-8">
                <CoreServiceCard
                    icon="m14.02 21.923l-7.616-2.22V21h-4v-8.154h6.373l7.358 2.693v1.615H21v2.615zM3.403 20h2v-6.154h-2zm10.565.862l6.008-1.831v-.877h-6.921L9.95 17.142l.33-.957l2.926.969h1.929v-.92l-6.516-2.388H6.404v4.808zM19 14.769v-7l-5.5-3.846L8 7.769v2.692H7V7.29l6.5-4.635L20 7.289v7.48zm-4.904-6.327h.808v-.808h-.808zm-2 0h.808v-.808h-.808zm2 2h.808v-.808h-.808zm-2 0h.808v-.808h-.808z"
                    title="Real Estate Agent"
                    paraText="We are a licensed professional representing buyers or sellers in an accredited real estate transactions."
                />

                <CoreServiceCard
                    icon="m20 8l-6-5.26a3 3 0 0 0-4 0L4 8a3 3 0 0 0-1 2.26V19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8.75A3 3 0 0 0 20 8m-6 12h-4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm5-1a1 1 0 0 1-1 1h-2v-5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v5H6a1 1 0 0 1-1-1v-8.75a1 1 0 0 1 .34-.75l6-5.25a1 1 0 0 1 1.32 0l6 5.25a1 1 0 0 1 .34.75Z"
                    title="Home Buying & Selling"
                    paraText="With our years of expertise in the real estate sector, we have a broad knowledge of property transactions with concrete documentations."
                />
                <CoreServiceCard
                    icon="M16 9c0 5.33-8 5.33-8 0h2c0 2.67 4 2.67 4 0m6 9v3H4v-3c0-2.67 5.33-4 8-4s8 1.33 8 4m-1.9 0c0-.64-3.13-2.1-6.1-2.1S5.9 17.36 5.9 18v1.1h12.2M12.5 2c.28 0 .5.22.5.5v3h1V3a3.89 3.89 0 0 1 2.25 3.75s.7.14.75 1.25H7c0-1.11.75-1.25.75-1.25A3.89 3.89 0 0 1 10 3v2.5h1v-3c0-.28.22-.5.5-.5"
                    title="Construction"
                    paraText="From designing homes to building them. We have vast knowledge in building construction, architecture, engineering, property development and town planning."
                />
                <CoreServiceCard
                    icon="M14 5V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v1C3.8 5 2 6.8 2 9v11c0 1.1.9 2 2 2h11.2l-2-2H4v-4h2v2h1v-2h5v-1H4V9c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v3h2V9c0-2.2-1.8-4-4-4m-2 0H8V4h4zm-2 4l-2 2l2 2l2-2zm11.8 8.8l-3.6-3.6c-.2-.1-.4-.2-.6-.2h-2.8c-.4 0-.8.4-.8.8v2.8c0 .2.1.4.2.6l3.6 3.6c.1.1.3.2.6.2c.2 0 .4-.1.6-.2l2.8-2.8c.1-.1.2-.3.2-.6c0-.2-.1-.4-.2-.6M15.4 16c-.3 0-.6-.3-.6-.6s.3-.6.6-.6s.6.3.6.6s-.3.6-.6.6"
                    title="Property Management"
                    paraText="Efficient oversight of real estate assets, including responsibilities like rent collection, maintenance coordination, tenant relations, and financial reporting. We ensure your property operates seamlessly, maximizing its value while minimizing the complexities for property owners"
                />
                <CoreServiceCard
                    icon="m12 22l-2-6H2l2 6zm0 0h4m-4-9v-.5c0-1.886 0-2.828-.586-3.414S9.886 8.5 8 8.5s-2.828 0-3.414.586S4 10.614 4 12.5v.5m15 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-9-9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4 13.5h6a2 2 0 0 1 2 2v.5a2 2 0 0 1-2 2h-1"
                    title="Property Consultant"
                    paraText="Specialized guidance in real estate decision-making, offering personalized advice on property investment, market trends, and effective asset utilization. We utilize extensive industry knowledge to assist clients in making well-informed choices, whether involved in buying, selling, or managing residential and commercial properties."
                />
                <CoreServiceCard
                    icon="M21 19h2v2H1v-2h2V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v15h4v-8h-2V9h3a1 1 0 0 1 1 1zM5 5v14h8V5zm2 6h4v2H7zm0-4h4v2H7z"
                    title="Home & Commercial Building"
                    paraText="Tailored services for both residential and commercial properties, covering everything from aiding in buying or selling homes to managing and optimizing commercial spaces. Our commitment is to elevate property value, ensure client satisfaction, and contribute to overall investment success."
                />
            </div>
        </section>
    );
}
