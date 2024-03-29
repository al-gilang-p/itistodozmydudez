import PrimaryButton from '../components/PrimaryButton'
import { PrismaClient } from '@prisma/client'
import TaskSection from './TaskSection'

const prisma = new PrismaClient()

async function getTasks() {
    const tasks = await prisma.task.findMany({
        orderBy: [
            {
                isCompleted: 'asc',
            },
            {
                title: 'asc',
            },
        ],
    })
    return tasks
}

export default async function page() {
    const tasks = await getTasks()
    // typescript workaround: Only plain objecs can be passed to client components from server components
    const data = JSON.parse(JSON.stringify(tasks))

    return (
        <>
            <PrimaryButton url={'/tasks'}>
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
                New Task
            </PrimaryButton>

            <TaskSection tasks={data} />
        </>
    )
}
