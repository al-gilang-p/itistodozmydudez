'use client'
import { useState } from 'react'

const Page = () => {
    const [title, setTitle] = useState('')
    const createProject = () => {
        fetch('http://localhost:3000/api/project', {
            method: 'POST',
            body: JSON.stringify({
                title,
            }),
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((res) => {
                console.log(res)
            })
            .catch((e) => console.log(e))
    }

    return (
        <div className="flex flex-col">
            <h5 className="font-bold">New Project</h5>
            <hr className="my-3 border-1 border-black" />
            <h5>Project Title</h5>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    createProject()
                }}
            >
                <input
                    type="text"
                    name="title"
                    id="projectTitle"
                    className="border border-black my-3 p-2 w-full"
                    placeholder="Type title here..."
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button
                    name="submitButton"
                    type="submit"
                    className="bg-black text-white flex items-center p-2 hover:bg-slate-700"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 mr-2"
                    >
                        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                    </svg>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Page
