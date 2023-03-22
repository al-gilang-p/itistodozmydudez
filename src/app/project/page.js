import PrimaryButton from '../components/PrimaryButton'

const page = () => {
    return (
        <div className="flex flex-col">
            <h5 className="font-bold">New Project</h5>
            <hr className="my-3 border-1 border-black" />
            <h5>Project Title</h5>
            <input
                type="text"
                name="project-title"
                id="projectTitle"
                className="border border-black my-3 p-2"
                placeholder="Type title here..."
            />
            <PrimaryButton url={'/project'}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 mr-2"
                >
                    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>
                Submit
            </PrimaryButton>
        </div>
    )
}

export default page
