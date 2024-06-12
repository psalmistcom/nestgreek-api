import Breadcrumbs from "@/Components/Breadcrumbs";
import ContactCard from "@/Components/Contact/ContactCard";
import ContactForm from "@/Components/Contact/ContactForm";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";

export default function Contact({ auth }) {
    return (
        <Layout auth={auth}>
            <Head title="Contact Us" />
            <Breadcrumbs
                title="Contact Us"
                prevTitle="Home"
                prevLink={route("home")}
            />
            <section className="px-4 sm:py-16 lg:px-6 flex flex-col items-center py-8">
                <div className="mt-10 grid max-w-md grid-cols-1 gap-4 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-6">
                    <ContactCard
                        title="Email Address"
                        icon="icon-img/10.png"
                        content="info@nestgreeksltd.com"
                    />
                    <ContactCard
                        title="Phone Number"
                        icon="icon-img/11.png"
                        content="0905 799 7133, 0806 122 0887"
                    />
                    <ContactCard
                        title="Office Address"
                        icon="icon-img/12.png"
                        content="3 Adeyemo Akapo Street, Omole Estate, Phase One, Ojodu, Ikeja, Lagos"
                    />
                </div>
            </section>

            <ContactForm />
        </Layout>
    );
}
