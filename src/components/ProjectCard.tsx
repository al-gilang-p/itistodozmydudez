'use client'
import { Popover } from '@headlessui/react'
import Link from 'next/link'

export default function ProjectCard({ ...props }) {
    return (
        <div className="flex items-center justify-between border border-black mt-3 p-3">
            <h3>{props.title}</h3>
            <div className="flex items-center">
                <h3 className="text-gray-500">0/0</h3>
                <input
                    type="checkbox"
                    name="check-completed"
                    id={'check' + props.id}
                    className="ml-5 mr-1"
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
                                href={'/projects/' + props.id}
                            >
                                Edit
                            </Link>
                            <hr className="border-black" />
                            <button className="hover:bg-black hover:text-white p-2">
                                Delete
                            </button>
                        </div>
                    </Popover.Panel>
                </Popover>
            </div>
        </div>
    )
}
