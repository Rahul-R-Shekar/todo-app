import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];
  private bin: Task[] = [];

  constructor() {
    // Load tasks and bin from localStorage when service starts
    const savedTasks = localStorage.getItem('tasks');
    const savedBin = localStorage.getItem('bin');

    this.tasks = savedTasks ? JSON.parse(savedTasks) : [];
    this.bin = savedBin ? JSON.parse(savedBin) : [];
  }

  // Save current state to localStorage
  private saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    localStorage.setItem('bin', JSON.stringify(this.bin));
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  getBinTasks(): Task[] {
    return this.bin;
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.saveToLocalStorage();
  }

  updateTask(updatedTask: Task) {
    const index = this.tasks.findIndex(t => t.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
      this.saveToLocalStorage();
    }
  }

  deleteTask(id: string) {
    const index = this.tasks.findIndex(t => t.id === id);
    if (index !== -1) {
      this.bin.push(this.tasks[index]);
      this.tasks.splice(index, 1);
      this.saveToLocalStorage();
    }
  }

  restoreTask(id: string) {
    const index = this.bin.findIndex(t => t.id === id);
    if (index !== -1) {
      this.tasks.push(this.bin[index]);
      this.bin.splice(index, 1);
      this.saveToLocalStorage();
    }
  }

  clearAllTasks() {
    this.tasks = [];
    this.bin = [];
    this.saveToLocalStorage();
  }
}
