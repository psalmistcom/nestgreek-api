import { Link } from "@inertiajs/react";

export default function Breadcrumbs({ title, prevTitle, prevLink }) {
    return (
        <h2 className="font-semibold text-xl text-white leading-tight">
            <nav>
                <ul className="flex m-0 items-center p-0"></ul>
            </nav>
        </h2>
    );
}
