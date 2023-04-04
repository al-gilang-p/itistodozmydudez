import Form from './Form'

const Page = () => {
    return (
        <div className="flex flex-col">
            <h5 className="font-bold">New Project</h5>
            <hr className="my-3 border-1 border-black" />
            <h5>Project Title</h5>
            <Form />
        </div>
    )
}

export default Page
