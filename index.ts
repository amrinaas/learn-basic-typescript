import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/2';

// interface is to find a new type (check type definition in note.md)
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
});

const logTodo = (id: number, title:string, completed:boolean) => {
    console.log(`
        The Todo with ID: ${id}
        has a title of: ${title}
        and will be finished at: ${completed}
    `);
}