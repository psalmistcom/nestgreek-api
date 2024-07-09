import Breadcrumbs from "@/Components/Breadcrumbs";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";

export default function PropertyType({ auth, property }) {
    return (
        <Layout auth={auth}>
            <Head title={`Property: ${property.title}`} />
            <Breadcrumbs
                title={property.title}
                prevTitle="Properties"
                prevLink={route("properties")}
            />
        </Layout>
    );
}
