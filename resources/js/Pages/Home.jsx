import Layout from "@/Layouts/Layout";
import Hero from "@/Components/Hero";
import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth }) {
    return (
        <>
            <Layout auth={auth}>
                <Head title="Welcome" />
                <Hero
                    latestProperty="3 Bedroom Detached Bungalow"
                    propLink="dashboard"
                />
            </Layout>
        </>
    );
}
