import Layout from "@/Layouts/Layout";
import Hero from "@/Components/Home/Hero";
import { Link, Head } from "@inertiajs/react";
import AboutSection from "@/Components/Home/AboutSection";

export default function Welcome({ auth }) {
    return (
        <>
            <Layout auth={auth}>
                <Head title="Welcome" />
                <Hero
                    latestProperty="3 Bedroom Detached Bungalow"
                    propLink="dashboard"
                />
                <AboutSection />
            </Layout>
        </>
    );
}
