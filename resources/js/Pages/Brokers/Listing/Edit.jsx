import BreadCrumb from "@/Components/Brokers/BreadCrumb";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import UpdatePropertyForm from "./Form/UpdatePropertyForm";

export default function Edit({ auth, property }) {
    console.log(property);
    // console.log(auth);
    return (
        <Layout
            auth={auth}
            header={<BreadCrumb title={`Edit | ${property.title}`} />}
        >
            <Head title={`Edit | ${property.title}`} />
            <section className="px-4 sm:py-16 lg:px-6 flex flex-col 2xl:items-center items-stretch py-8">
                <UpdatePropertyForm property={property} />
            </section>
        </Layout>
    );
}
