'use client'
import { Popover } from '@headlessui/react'
import Link from 'next/link'

export default function TaskCard({ ...props }) {
    const handleChange = async (id, status) => {
        const data = {
            isCompleted: !status,
        }
        await fetch(`api/tasks/${id}/complete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then((response) => {
            if (response.redirected) {
                window.location.href = response.url
            }
        })
    }

    return (
        <div className="flex items-center justify-between border border-black mt-3 p-3">
            <h3>{props.title}</h3>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    name="check-completed"
                    id={'check' + props.id}
                    className="ml-5 mr-1"
                    defaultChecked={props.isCompleted}
                    onChange={(e) => handleChange(props.id, props.isCompleted)}
                />
                <label htmlFor={'check' + props.id}>Mark as Completed</label>
                <Popover>
                    <Popover.Button>
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
                    </Popover.Button>

                    <Popover.Panel className="absolute z-auto">
                        <div className="flex flex-col border border-black bg-white text-center">
                            <Link
                                className="hover:bg-black hover:text-white p-2"
                                // @ts-expect-error
                                href={'/tasks/' + props.id}
                            >
                                Edit
                            </Link>
                            <hr className="border-black" />
                            <form
                                action={`api/tasks/${props.id}/delete`}
                                method="post"
                            >
                                <button
                                    type="submit"
                                    className="hover:bg-black hover:text-white p-2"
                                >
                                    Delete
                                </button>
                            </form>
                        </div>
                    </Popover.Panel>
                </Popover>
            </div>
        </div>
    )
}
