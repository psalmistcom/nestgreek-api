import BreadCrumb from "@/Components/Brokers/BreadCrumb";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";

export default function Add({ auth }) {
    return (
        <Layout auth={auth} header={<BreadCrumb title="Add Property" />}>
            <Head title="Add Property" />
            <div className="px-4 sm:py-16 lg:px-6 flex flex-col 2xl:items-center items-stretch py-8">
                Add Property
            </div>
        </Layout>
    );
}
