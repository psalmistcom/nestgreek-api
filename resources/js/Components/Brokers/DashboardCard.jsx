export default function DashboardCard({ icon, title, para }) {
    return (
        <article className="mb-4 bg-white text-slate-800 overflow-hidden rounded-xl border shadow-md duration-200 ease-in-out hover:shadow-xl hover:bg-emerald-700 hover:text-white">
            <div className="flex items-center justify-center my-10">
                <div className="mr-3 rounded-lg bg-green-100 p-3 text-7xl text-green-600">
                    <>{icon}</>
                </div>
            </div>
            <div className="pb-6 text-center mb-4">
                <p className="mb-3 lg:text-xl text-xl font-semibold text-nowrap">
                    {title}
                </p>
                <p className="lg:text-base text-sm px-4">{para}</p>
            </div>
        </article>
    );
}
