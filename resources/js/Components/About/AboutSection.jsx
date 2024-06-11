import { Link } from "@inertiajs/react";
import SectionIntro from "../SectionIntro";

export default function AboutSection({}) {
    const paraStyle =
        "mb-2 text-gray-500 font-medium tracking-wide text-md lg:text-md";

    return (
        <section className="px-4 sm:py-16 lg:px-10 bg-white py-8">
            <div className="grid max-w-md grid-cols-1 gap-6 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-2 lg:gap-6">
                <article className="mb-4 overflow-hidden shadow-md duration-500 ease-in-out">
                    <div className="h-60 lg:h-[460px] md:h-[590px] ">
                        <img
                            src="nest_about.png"
                            className="md:w-full md:h-full lg:h-auto lg:w-auto object-cover"
                            alt=""
                        />
                    </div>
                </article>
                <article className="text-gray-700">
                    <h2 className="mb-5 text-gray-900 font-extrabold tracking-tight leading-none text-4xl md:text-4xl lg:text-5xl">
                        The Leading Real Estate Marketplace.
                    </h2>
                    <h3 className="mb-5 text-gray-900 font-extrabold tracking-tight leading-none text-xl md:text-xl lg:text-xl">
                        Our Mission
                    </h3>
                    <p className={paraStyle}>
                        At Nest Greeks Investment Limited, our passion is to
                        rededine real estate excellence with a commitment to
                        innovation, strategic investments and unwavering
                        integrity.
                    </p>
                    <p className={paraStyle}>
                        At Nest Greeks Investment Limited, our passion is to
                        rededine real estate excellence with a commitment to
                        innovation, strategic investments and unwavering
                        integrity.
                    </p>
                    <div className="my-5 border-l-4 border-red-700  bg-red-100 rounded-tr-xl rounded-br-xl">
                        <p className="py-4 px-6 text-lg text-red-800">
                            <span className="font-bold">Vision Statement:</span>{" "}
                            "We make real estate the most appreciable deal by
                            combining luxury living with investment medium
                            towards developing our nation"
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
}
