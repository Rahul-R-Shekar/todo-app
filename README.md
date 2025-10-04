# Todo App

A modern, feature-rich todo application built with Angular 20. This application allows users to manage their tasks efficiently with advanced features like task prioritization, due dates, search functionality, and a recycle bin for deleted tasks.

## Features

### Core Functionality
- ✅ **Add Tasks**: Create new tasks with title, description, priority, and dates
- ✅ **Edit Tasks**: Modify existing tasks inline
- ✅ **Delete Tasks**: Move tasks to recycle bin instead of permanent deletion
- ✅ **Toggle Completion**: Mark tasks as completed or active
- ✅ **Task Prioritization**: Set priority levels (Low, Medium, High) with visual indicators
- ✅ **Due Dates**: Set start and due dates with overdue detection

### Advanced Features
- 🔍 **Search**: Find tasks by title or description
- 📊 **Filter**: Filter tasks by status (All, Active, Completed)
- 📈 **Progress Tracking**: Visual progress panel showing completed vs total tasks
- 🗑️ **Recycle Bin**: Restore accidentally deleted tasks
- 💾 **Local Storage**: Automatic data persistence in browser

### User Interface
- 🎨 **Modern Design**: Clean, responsive interface with Material Icons
- 📱 **Responsive**: Works on desktop and mobile devices
- 🌙 **Priority Indicators**: Color-coded priority levels
- ⚠️ **Overdue Alerts**: Visual indicators for overdue tasks

## Technology Stack

- **Framework**: Angular 20 (Standalone Components)
- **Language**: TypeScript
- **Styling**: CSS with custom components
- **Icons**: Material Icons
- **Persistence**: Browser Local Storage
- **Build Tool**: Angular CLI

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── task-form/          # Task creation/editing form
│   │   ├── task-list/          # Task display and actions
│   │   └── progress-panel/     # Progress statistics
│   ├── models/
│   │   └── task.model.ts       # Task data structure
│   ├── services/
│   │   └── task.service.ts     # Task data management
│   └── app.component.*         # Main application component
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

## Usage

### Adding a Task
1. Fill in the task title (required)
2. Add an optional description
3. Set priority level (Low/Medium/High)
4. Add start and due dates (optional)
5. Click "Add Task"

### Managing Tasks
- **Complete**: Click the checkbox next to a task
- **Edit**: Click the edit icon to modify a task
- **Delete**: Click the delete icon to move to recycle bin
- **Restore**: In the bin section, click restore to recover deleted tasks

### Filtering and Search
- Use the filter buttons to show All, Active, or Completed tasks
- Type in the search box to find tasks by title or description

## Development

### Building for Production

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

### Running Tests

```bash
ng test
```

### Code Scaffolding

Generate new components:
```bash
ng generate component component-name
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with Angular 20
- Icons from Material Design Icons
- Inspired by modern todo applications

---

**Happy task managing!** 📝✨
