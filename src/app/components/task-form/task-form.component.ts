import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Output() taskAdded = new EventEmitter<Task>();
  @Output() taskUpdated = new EventEmitter<Task>();

  title = '';
  description = '';
  startDate?: string;
  dueDate?: string;
  priority: 'low' | 'medium' | 'high' = 'medium'; // Add this property

  private _taskToEdit: Task | null = null;

  @Input() set taskToEdit(task: Task | null) {
    this._taskToEdit = task;
    if (task) {
      this.title = task.title;
      this.description = task.description;
      this.startDate = task.startDate;
      this.dueDate = task.dueDate;
      this.priority = task.priority;
    } else {
      this.title = '';
      this.description = '';
      this.startDate = undefined;
      this.dueDate = undefined;
      this.priority = 'medium';
    }
  }

  get taskToEdit(): Task | null {
    return this._taskToEdit;
  }

  submitTask() {
    if (!this.title) return;

    if (this._taskToEdit) {
      const updatedTask: Task = {
        ...this._taskToEdit,
        title: this.title,
        description: this.description,
        startDate: this.startDate,
        dueDate: this.dueDate,
        priority: this.priority,
      };
      this.taskUpdated.emit(updatedTask);
      this.taskToEdit = null;
    } else {
      const newTask: Task = {
        id: crypto.randomUUID(),
        title: this.title,
        description: this.description,
        completed: false,
        startDate: this.startDate,
        dueDate: this.dueDate,
        priority: this.priority,
        createdAt: new Date().toISOString()
      };
      this.taskAdded.emit(newTask);
    }

    this.title = '';
    this.description = '';
    this.startDate = undefined;
    this.dueDate = undefined;
    this.priority = 'medium'; // Reset to default
  }
}
