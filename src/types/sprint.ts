export interface IComment {
  id: number,
  text: string,
  author: string,
  date: Date
}

export interface ITask {
  id: number,
  status: string,
  title: string,
  priority: string,
  description: string,
  member: string,
  deadline: Date,
  image: string,
  comments: Array<IComment>
}

export interface ISprint {
  title: string,
  startDate: Date,
  endDate: Date,
  members: Array<string>,
  tasks: Array<ITask>
}

export interface ITaskInfo {
  id: number,
  title: string,
  status: string,
  description: string,
  member: string,
  image: string,
  comments: Array<IComment>
}
