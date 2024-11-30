interface Task {
    id: string;
    description: string;
    completed: boolean;
}

class ProgressTracker {
    private tasks: Task[] = [];

    addTask(id: string, description: string): void {
        this.tasks.push({ id, description, completed: false });
    }

    completeTask(id: string): void {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.completed = true;
        }
    }

    getProgress(): string {
        const completedTasks = this.tasks.filter(task => task.completed).length;
        return `Progress: ${completedTasks}/${this.tasks.length} tasks completed.`;
    }
}

export default ProgressTracker;
