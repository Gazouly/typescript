import axios from 'axios'

const baseURL = 'http://jsonplaceholder.typicode.com'

interface Todo {
    id: number
    title: string
    completed: boolean
}
axios.get(`${baseURL}/todos/1`)
    .then(({ data }) => {
        const { id, title, completed } = data as Todo
        logTodo(id, title, completed)

    })
const logTodo = (id: number, title: string, completed: boolean) => {
        console.log(`
            The Todo With ID: ${id}
            Has Title Of: ${title}
            Is It Finished? ${completed ? 'Yes' : 'No'}
        `)
}