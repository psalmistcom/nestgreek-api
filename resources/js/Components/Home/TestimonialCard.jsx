export default function TestimonialCard({ para, name, position }) {
    return (
        <div className="px-3">
            <div className="lg:mt-0 lg:col-span-3 bg-white rounded-lg shadow-lg py-4 hover:border-b-2 hover:border-emerald-600">
                <p className="text-sm font-medium lg:text-base text-gray-600 px-5 pt-4 mb-4 leading-tight">
                    {para}
                </p>
                <div className="my-8 px-5">
                    <h3 className="font-extrabold text-xl">{name}</h3>
                    <p className="uppercase">{position}</p>
                </div>
            </div>
        </div>
    );
}
