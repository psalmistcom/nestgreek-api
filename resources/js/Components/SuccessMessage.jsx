export default function SuccessMessage({ success }) {
    return (
        <>
            {success && (
                <div
                    role="alert"
                    data-dismissible="alert"
                    className="mb-4 relative flex w-1/2 py-4 px-4 text-base text-white bg-emerald-500 rounded-lg"
                >
                    <div className="shrink-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <div className="ml-3 mr-12">
                        <p className="block antialiased leading-snug tracking-normal text-white">
                            {success}
                        </p>
                    </div>
                    <button
                        datadismissibletarget="alert"
                        className="!absolute top-3 right-3 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-white transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </span>
                    </button>
                </div>
            )}
        </>
    );
}
