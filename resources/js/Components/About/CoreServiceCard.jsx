export default function CoreServiceCard({ title, paraText, icon }) {
    return (
        <article className="bg-white mb-4 text-slate-800 shadow-md hover:border-b-4  hover:border-b-emerald-600">
            <div class="flex items-center justify-center my-10">
                <div className="mr-3 rounded-full bg-emerald-100 p-6 text-5xl text-emerald-800 ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                    >
                        <path fill="currentColor" d={icon} />
                    </svg>
                </div>
            </div>
            <div className="pb-6 text-center mb-4">
                <p className="mb-5 lg:text-2xl text-xl font-semibold px-2">
                    {title}
                </p>
                <p className="lg:text-lg text-sm font-medium px-5">
                    {paraText}
                </p>
            </div>
        </article>
    );
}
