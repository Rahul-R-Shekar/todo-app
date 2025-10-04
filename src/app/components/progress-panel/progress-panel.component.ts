import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-progress-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-panel.component.html',
  styleUrls: ['./progress-panel.component.css']
})
export class ProgressPanelComponent {
  @Input() tasks: Task[] = [];

  get completed(): number {
    return this.tasks.filter(t => t.completed).length;
  }

  get total(): number {
    return this.tasks.length;
  }
}
