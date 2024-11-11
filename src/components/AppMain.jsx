export default function AppMain() {
    const welcome = 'welcome to my react app'

    const tasks = [
        {
            id: 1,
            title: "Implementare la homepage",
            priority: 1,
            estimatedTime: 120,
            state: "completed"
        },
        {
            id: 2,
            title: "Sviluppare il menu di navigazione",
            priority: 2,
            estimatedTime: 60,
            state: "completed"
        },
        {
            id: 3,
            title: "Creare il footer del sito",
            priority: 3,
            estimatedTime: 30,
            state: "completed"
        },
        {
            id: 4,
            title: "Ottimizzare le performance",
            priority: 1,
            estimatedTime: 180,
            state: "completed"
        },
        {
            id: 5,
            title: "Scrivere test per i componenti",
            priority: 2,
            estimatedTime: 90,
            state: "completed"
        },
        {
            id: 6,
            title: "Implementare la pagina dei contatti",
            priority: 3,
            estimatedTime: 60,
            state: "completed"
        },
        {
            id: 7,
            title: "Aggiungere animazioni CSS",
            priority: 2,
            estimatedTime: 30,
            state: "backlog"
        },
        {
            id: 8,
            title: "Integrare l'API di autenticazione",
            priority: 1,
            estimatedTime: 120,
            state: "in_progress"
        },
        {
            id: 9,
            title: "Aggiornare la documentazione",
            priority: 3,
            estimatedTime: 60,
            state: "backlog"
        },
        {
            id: 10,
            title: "Rifattorizzare il codice CSS",
            priority: 2,
            estimatedTime: 90,
            state: "in_progress"
        }
    ];

    console.log(tasks);
    const completed = tasks.filter((task) => task.state === 'completed')
    const current = tasks.filter((task) => task.state !== 'completed')

    return (
        <main>
            <section className="current">
                <h2>Current Tasks</h2>
                <ul>
                    {current.map(task => (
                        <li key={task.id}>
                            <h4>{task.title}</h4>
                            <p>Priority: {task.priority}</p>
                            <p>Est.Time: {task.estimatedTime}</p>
                        </li>
                    ))}
                </ul>
            </section>
            <hr></hr>
            <section className="completed">
                <h2>Completed Tasks</h2>
                <ul>
                    {completed.map(task => (
                        <li key={task.id}>
                            <h4>{task.title}</h4>
                            <p>Priority: {task.priority}</p>
                            <p>Est.Time: {task.estimatedTime}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
