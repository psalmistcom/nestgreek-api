import Layout from "@/Layouts/Layout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head, Link } from "@inertiajs/react";
import BreadCrumb from "@/Components/Brokers/BreadCrumb";
import BrokersUpdate from "./Partials/BrokersUpdate";

export default function Edit({ auth, mustVerifyEmail, status, broker }) {
    return (
        <Layout auth={auth.user} header={<BreadCrumb title="Profile" />}>
            <Head title="Profile" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="mt-10 grid max-w-md grid-cols-1 gap-4 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-2 lg:gap-6">
                        <div className="bg-white mb-4 text-slate-800 shadow-md rounded-md border-2">
                            <div className="sm:p-8">
                                <UpdateProfileInformationForm
                                    mustVerifyEmail={mustVerifyEmail}
                                    status={status}
                                    className="max-w-xl"
                                />
                            </div>
                        </div>
                        <div className="mb-4 text-slate-800 shadow-md bg-white sm:rounded-lg">
                            <div className="p-4 sm:p-8">
                                <UpdatePasswordForm className="max-w-xl" />
                            </div>
                        </div>
                    </div>
                    {/* <BrokersUpdate
                        broker={broker}
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                    /> */}
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
