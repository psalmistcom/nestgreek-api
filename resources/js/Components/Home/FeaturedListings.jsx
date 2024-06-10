import { Link } from "@inertiajs/react";
import SectionIntro from "../SectionIntro";

export default function FeaturedListings() {
    return (
        <section className=" bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="text-center">
                    <SectionIntro
                        title="Properties"
                        color="emerald"
                        bigText="Featured Listings"
                    />
                </div>
                <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                    <Link
                        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                        href=""
                    >
                        <img
                            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            className="object-cover"
                            alt=""
                        />
                        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-3 py-2 text-center text-white text-sm font-medium">
                            30% Off
                        </span>
                    </Link>
                    <div className="mt-4 px-5 pb-5">
                        <Link href="">
                            <h5 className="text-xl tracking-tight text-slate-900">
                                Nike Air Super - Red
                            </h5>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
