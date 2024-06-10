export default function SectionIntro({
    title,
    color,
    bigText,
    bigTextSize = "text-4xl md:text-4xl lg:text-5xl",
}) {
    return (
        <>
            {/* <p className="bg-{color}-100 inline-flex py-2 px-8 text-sm rounded-full text-{color}-700 font-semibold"> */}
            <p
                className={`bg-${color}-100 inline-flex py-2 px-8 text-sm rounded-full text-${color}-700 font-semibold tracking-wide`}
            >
                {title}
            </p>
            <h2
                className={`my-5 text-gray-900 font-extrabold tracking-tight leading-none ${bigTextSize}`}
            >
                {bigText}
            </h2>
        </>
    );
}
