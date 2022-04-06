
export class Todo {

	constructor(
		public id: number,
		public kanban_id: number,
		public name: string,
		public description: string,
		public status: Status,
		public note: string

	) {

	}
	
}
export enum Status{
	TODO="ToDo",
	WORKINPROGRESS="WorkInProgress",
	DONE="Done",
	WARNING="Warning"
}