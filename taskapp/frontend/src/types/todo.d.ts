type Status = 'TODO' | 'IN_PROGRESS' | 'COMPLETED';

export interface Label {
  id: number;
  name: string;
  color: string;
  created_at: string;
  updated_at: string;
}

export interface Todo {
  title: string;
  description: string | null;
  labels: Label[] | null;
}

export interface TodoApiResponse extends Todo {
  id: number;
  status: Status;
  start_date: string | null;
  due_date: string | null;
  created_at: string;
  updated_at: string;
  completed_at: string | null;
}

export interface TodoCreateInput extends Todo {
  start_date: Date | null;
  due_date: Date | null;
}

export interface TodoCreateForm extends Todo {
  start_date: string | null;
  due_date: string | null;
}
