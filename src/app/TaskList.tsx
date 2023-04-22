'use client'
import TaskCard from '../components/TaskCard'

export default function TaskList({ tasks, filter, completed }) {
    return (
        <ul>
            {completed
                ? tasks
                      .filter(
                          ({ title, isCompleted }) =>
                              title
                                  .toLowerCase()
                                  .includes(filter.toLowerCase()) &&
                              isCompleted === false
                      )
                      .map((task) => (
                          <li key={task.id}>
                              <TaskCard
                                  title={task.title}
                                  id={task.id}
                                  isCompleted={task.isCompleted}
                              />
                          </li>
                      ))
                : tasks
                      .filter(({ title }) =>
                          title.toLowerCase().includes(filter.toLowerCase())
                      )
                      .map((task) => (
                          <li key={task.id}>
                              <TaskCard
                                  title={task.title}
                                  id={task.id}
                                  isCompleted={task.isCompleted}
                              />
                          </li>
                      ))}
        </ul>
    )
}
