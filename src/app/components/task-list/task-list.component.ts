import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Input() isBin: boolean = false; // Flag to indicate if this list is for bin tasks
  @Output() update = new EventEmitter<Task>();
  @Output() delete = new EventEmitter<string>();
  @Output() editTask = new EventEmitter<Task>();
  @Output() restore = new EventEmitter<string>();

  toggleComplete(task: Task) {
    this.update.emit({ ...task, completed: !task.completed });
  }

  deleteTask(id: string) {
    this.delete.emit(id);
  }

  restoreTask(id: string) {
    this.restore.emit(id);
  }

  formatDate(dateString?: string): string {
    if (!dateString) return 'No date';
    return new Date(dateString).toLocaleDateString();
  }

  isOverdue(task: Task): boolean {
    if (!task.dueDate || task.completed) return false;
    return new Date(task.dueDate) < new Date();
  }
}
