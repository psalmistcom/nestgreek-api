import Breadcrumbs from "@/Components/Breadcrumbs";
import FeaturedListings from "@/Components/Home/FeaturedListings";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";

export default function Property({ auth }) {
    return (
        <Layout auth={auth}>
            <Head title="Properties" />
            <Breadcrumbs
                title="Properties"
                prevTitle="Home"
                prevLink={route("home")}
            />
            <FeaturedListings page={false} />
        </Layout>
    );
}
