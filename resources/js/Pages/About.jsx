import Breadcrumbs from "@/Components/Breadcrumbs";
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
            <h3>This is About Page </h3>
        </Layout>
    );
}
