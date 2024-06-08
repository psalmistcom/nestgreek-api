import SectionIntro from "../SectionIntro";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";

export const Testimonial = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <section className="bg-emerald-50">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="text-center">
                    <SectionIntro
                        title="Our Testimonial"
                        color="emerald"
                        bigText="Clients Feedback"
                    />
                </div>
                <div className="slider-container my-10">
                    <Slider {...settings}>
                        <TestimonialCard
                            name="Adam Joseph"
                            position="selling agent"
                            para=" Precious ipsum dolor sit amet consectetur
                                    adipisicing elit, sed dos mod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad min veniam, quis nostrud Precious
                                    ips um dolor sit amet, consecte"
                        />
                        <TestimonialCard
                            name="Adam Joseph"
                            position="selling agent"
                            para=" Precious ipsum dolor sit amet consectetur
                                    adipisicing elit, sed dos mod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad min veniam, quis nostrud Precious
                                    ips um dolor sit amet, consecte"
                        />
                        <TestimonialCard
                            name="Adam Joseph"
                            position="selling agent"
                            para=" Precious ipsum dolor sit amet consectetur
                                    adipisicing elit, sed dos mod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad min veniam, quis nostrud Precious
                                    ips um dolor sit amet, consecte"
                        />
                        <TestimonialCard
                            name="Adam Joseph"
                            position="selling agent"
                            para=" Precious ipsum dolor sit amet consectetur
                                    adipisicing elit, sed dos mod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad min veniam, quis nostrud Precious
                                    ips um dolor sit amet, consecte"
                        />
                        <TestimonialCard
                            name="Adam Joseph"
                            position="selling agent"
                            para=" Precious ipsum dolor sit amet consectetur
                                    adipisicing elit, sed dos mod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad min veniam, quis nostrud Precious
                                    ips um dolor sit amet, consecte"
                        />
                    </Slider>
                </div>
            </div>
        </section>
    );
};
