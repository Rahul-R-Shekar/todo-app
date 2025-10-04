import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { ProgressPanelComponent } from './components/progress-panel/progress-panel.component';
import { Task } from './models/task.model';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    TaskFormComponent,
    TaskListComponent,
    ProgressPanelComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  search: string = '';
  tasks: Task[] = [];
  binTasks: Task[] = [];
  filter: string = 'all'; // 'all', 'active', 'completed'
  taskToEdit: Task | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.tasks = this.taskService.getTasks();
    this.binTasks = this.taskService.getBinTasks();
  }

  get filtered() {
    let filteredTasks = this.search
      ? this.tasks.filter(t =>
          t.title.toLowerCase().includes(this.search.toLowerCase()) ||
          t.description.toLowerCase().includes(this.search.toLowerCase())
        )
      : this.tasks;

    // Apply status filter
    if (this.filter === 'active') {
      filteredTasks = filteredTasks.filter(t => !t.completed);
    } else if (this.filter === 'completed') {
      filteredTasks = filteredTasks.filter(t => t.completed);
    }

    return filteredTasks;
  }

  onSearchChange(value: string) {
    this.search = value;
  }

  setFilter(filter: string) {
    this.filter = filter;
  }

  addTask(task: Task) {
    this.taskService.addTask(task);
    this.loadTasks();
    this.taskToEdit = null;
  }

  updateTasks(updatedTask: Task) {
    this.taskService.updateTask(updatedTask);
    this.loadTasks();
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id);
    this.loadTasks();
  }

  restoreTask(id: string) {
    this.taskService.restoreTask(id);
    this.loadTasks();
  }

  editTask(task: Task) {
    this.taskToEdit = task;
  }

  updateTask(task: Task) {
    this.taskService.updateTask(task);
    this.taskToEdit = null;
    this.loadTasks();
  }
}
