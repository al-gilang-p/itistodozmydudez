export default function Page() {
    return (
        <main className="flex flex-col">
            <nav className="w-full flex justify-center place-items-center p-5">
                <h1 className="font-semibold">Todo</h1>
                <h1 className="italic font-extrabold text-4xl">Z</h1>
            </nav>

            <button className="flex items-center uppercase w-fit font-semibold p-2 border-2 text-white bg-black hover:border-black hover:bg-gray-900">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 mr-2"
                >
                    <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                        clipRule="evenodd"
                    />
                </svg>
                New Project
            </button>

            <div className="w-full flex justify-between items-center my-2">
                <div>
                    <input
                        type="text"
                        name="search-project"
                        className="p-1 border border-black"
                        placeholder="Search Project Here..."
                    />
                    <input
                        type="checkbox"
                        name="check-hide"
                        id="checkHide"
                        className="ml-5 mr-1"
                    />
                    <label htmlFor="checkHide">Hide Completed</label>
                </div>
                <span className="font-semibold text-gray-500">0 Projects</span>
            </div>

            <hr className="border-black my-3" />

            <div>
                <div className="flex items-center justify-between border border-black mt-3 p-3">
                    <h3>Project Title</h3>
                    <div className="flex">
                        <h3 className="text-gray-500">0/0</h3>
                        <input
                            type="checkbox"
                            name="check-completed"
                            id="checkCompleted"
                            className="ml-5 mr-1"
                        />
                        <label htmlFor="checkCompleted" className="mr-3">
                            Mark As Completed
                        </label>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </main>
    )
}
