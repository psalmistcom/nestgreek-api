export default function ContactCard({ icon, title, content }) {
    return (
        <article className="bg-white px-5 mb-4 text-slate-800 shadow-md rounded-md border-2">
            <div className="flex items-center justify-center my-5">
                <div className=" p-6">
                    <img src={icon} alt="" width="60" />
                </div>
            </div>
            <div className="pb-6 text-center mb-4">
                <p className="lg:text-2xl text-xl font-semibold px-2">
                    {title}
                </p>
                <p className="lg:text-lg text-sm font-base text-slate-500 px-5">
                    {content}
                </p>
            </div>
        </article>
    );
}
