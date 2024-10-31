export interface Task {
    id?: string;
    name: string;
    status: 'Pending' | 'In Progress' | 'Completed';
    priority: 'Low' | 'Medium' | 'High';
    description: string;
  }
  