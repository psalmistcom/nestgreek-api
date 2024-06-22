import BreadCrumb from "@/Components/Brokers/BreadCrumb";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import PropertyForm from "./Form/PropertyForm";

export default function Add({ auth, broker }) {
    return (
        <Layout auth={auth} header={<BreadCrumb title="Add Property" />}>
            <Head title="Add Property" />
            <section className="sm:py-16 lg:px-6 flex flex-col 2xl:items-center items-stretch py-8">
                <PropertyForm broker={broker} />
            </section>
        </Layout>
    );
}
