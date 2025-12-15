type Status = 'TODO' | 'IN_PROGRESS' | 'COMPLETED'

export interface Label {
  id: number
  name: string
  color: string
  created_at: Date
  updated_at: Date
}

export interface Todo {
  id: number
  title: string
  description: string | null
  status: Status
  labels: Label[] | null
  start_date: Date | null
  due_date: Date | null
  created_at: Date
  updated_at: Date
  completed_at: Date | null
}
