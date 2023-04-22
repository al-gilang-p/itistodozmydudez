'use client'
import { useState } from 'react'
import TaskList from './TaskList'

function Check({ tasks }) {
    const [searchInput, setSearchInput] = useState('')
    const [isCompleted, setIsCompleted] = useState(false)

    return (
        <div>
            <div className="w-full flex justify-between items-center my-3">
                <div>
                    <input
                        type="text"
                        name="search-title"
                        className="p-1 border border-black"
                        placeholder="Search Tasks Here..."
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <input
                        type="checkbox"
                        name="check-hide"
                        id="checkHide"
                        className="ml-5 mr-1"
                        onChange={(e) => setIsCompleted(!isCompleted)}
                    />
                    <label htmlFor="checkHide">Hide Completed</label>
                </div>
                <span className="font-semibold text-gray-500">
                    {isCompleted
                        ? Object.keys(
                              tasks.filter(
                                  ({ title, isCompleted }) =>
                                      title
                                          .toLowerCase()
                                          .includes(
                                              searchInput.toLowerCase()
                                          ) && isCompleted === false
                              )
                          ).length
                        : Object.keys(
                              tasks.filter(({ title }) =>
                                  title
                                      .toLowerCase()
                                      .includes(searchInput.toLowerCase())
                              )
                          ).length}{' '}
                    Tasks
                </span>
            </div>
            <hr className="border-black my-3" />
            <TaskList
                tasks={tasks}
                filter={searchInput}
                completed={isCompleted}
            />
        </div>
    )
}

export default Check
