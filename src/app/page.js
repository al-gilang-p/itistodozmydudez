import ProjectCard from './components/ProjectCard'

export default function page() {
    return (
        <>
            <button className="flex items-center uppercase w-fit font-semibold p-2 border-2 text-white bg-black hover:bg-gray-600">
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
                <ProjectCard title={'Work Related'} />
            </div>
        </>
    )
}
