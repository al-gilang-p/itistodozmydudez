'use client'
import { Popover } from '@headlessui/react'

const ProjectCard = ({ title }) => {
    return (
        <div className="flex items-center justify-between border border-black mt-3 p-3">
            <h3>{title}</h3>
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
                <Popover className="relative">
                    <Popover.Button>Solutions</Popover.Button>

                    <Popover.Panel className="absolute z-10">
                        <div className="grid grid-cols-2">
                            <a href="/analytics">Analytics</a>
                            <a href="/engagement">Engagement</a>
                            <a href="/security">Security</a>
                            <a href="/integrations">Integrations</a>
                        </div>
                    </Popover.Panel>
                </Popover>
            </div>
        </div>
    )
}

export default ProjectCard
