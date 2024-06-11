export default function CoreValueCard({ title, paraText, icon }) {
    return (
        <article className="mb-4 text-slate-800 overflow-hidden rounded-xl border shadow-md duration-500 ease-in-out hover:shadow-xl hover:bg-emerald-700 hover:text-white">
            <div class="flex items-center justify-center my-10">
                <div className="mr-3 rounded-lg bg-red-100 p-3 text-7xl text-red-800 hover:bg-green-100 hover:text-green-600">
                    <img src={icon} alt="" width="100" />
                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 512 512"
                    >
                        <circle
                            cx="221.912"
                            cy="66.088"
                            r="34.088"
                            fill="currentColor"
                        />
                        <path
                            fill="currentColor"
                            d="m460.12 360.478l-47.943 11.985L393 282.971A24.126 24.126 0 0 0 369.533 264h-88.705l-6.462-56H384v-32H270.674l-4.134-35.826a24 24 0 0 0-26.593-21.091l-39.736 4.585L220.1 296h142.97l24.758 115.537l80.057-20.015Z"
                        />
                        <path
                            fill="currentColor"
                            d="M224 448a120 120 0 0 1-45.248-231.135l-3.779-32.75C115.143 204.558 72 261.334 72 328c0 83.813 68.187 152 152 152a152.06 152.06 0 0 0 130.044-73.378L344 360c-16 48-61.4 88-120 88Z"
                        />
                    </svg> */}
                </div>
            </div>
            <div className="pb-6 text-center mb-4">
                <p className="mb-5 lg:text-2xl text-xl font-semibold text-nowrap">
                    {title}
                </p>
                <p className="lg:text-lg text-sm font-medium">{paraText}</p>
            </div>
        </article>
    );
}
