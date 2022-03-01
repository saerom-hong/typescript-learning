namespace App {
  //Project Type
  //to specify listeners and projects type instead of using 'any'
  export enum ProjectStatus {
    Active,
    Finished,
  }
  export class Project {
    constructor(
      public id: string,
      public title: string,
      public description: string,
      public people: number,
      public status: ProjectStatus
    ) {}
  }
}
