import AboutSection from "@/Components/About/AboutSection";
import CoreServicesSection from "@/Components/About/CoreServicesSection";
import CoreValueSection from "@/Components/About/CoreValueSection";
import Breadcrumbs from "@/Components/Breadcrumbs";
import Cta from "@/Components/Home/Cta";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";

export default function About({ auth }) {
    return (
        <Layout auth={auth}>
            <Head title="About Us" />
            <Breadcrumbs
                title="About Us"
                prevTitle="Home"
                prevLink={route("home")}
            />
            <AboutSection />
            <CoreValueSection />
            <CoreServicesSection />
            <Cta />
        </Layout>
    );
}
