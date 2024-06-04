import Layout from "@/Layouts/Layout";
import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth }) {
    return (
        <>
            <Layout auth={auth}>
                <Head title="Welcome" />
            </Layout>
        </>
    );
}
