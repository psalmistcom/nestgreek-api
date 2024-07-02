export default function EmptyProperty() {
    return (
        <div className="my-5 border bg-white shadow-sm transition rounded-sm">
            <div className="my-5 rounded-lg text-gray-700 ">
                <div className="flex justify-center items-center">
                    <div className="w-1/2 flex flex-col items-center">
                        <img
                            src="../empty.jpg"
                            width="150"
                            alt=""
                            className=""
                        />
                        <h3 className="px-15 text-lg tracking-wide leading-6 text-center items-center text-gray-600">
                            There are no Properties at the moment, Kindly check
                            back in the nearest future
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
