import { Project, ProjectStatus } from "../models/project";

type Listener = (items: Project[]) => void;

//Project state management (imagine useState hook in react)
export class ProjectState {
  //should be called whenever something changes
  private listeners: Listener[] = [];
  // projects state
  private projects: Project[] = [];

  private static instance: ProjectState;
  //to guarantee that this is a singleton class
  private constructor() {}

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }
  //listeners would be array of functions
  addListener(listenerFn: Listener) {
    this.listeners.push(listenerFn);
  }

  //public method
  addProject(title: string, description: string, numOfPeople: number) {
    //instantiate Project class
    const newProjects = new Project(
      Math.random().toString(),
      title,
      description,
      numOfPeople,
      ProjectStatus.Active
    );

    this.projects.push(newProjects);
    this.updateListeners();
  }

  //switch the status of a project

  moveProject(projectId: string, newStatus: ProjectStatus) {
    //have to identify which project is moving and which box is new box to have a project
    const project = this.projects.find((prj) => prj.id === projectId);
    if (project && project.status !== newStatus) {
      project.status = newStatus;
      this.updateListeners();
    }
  }

  private updateListeners() {
    //call all listener function every time projects state is changed -> re-render items
    for (const listenerFn of this.listeners) {
      //.slice() avoid mutate original array
      listenerFn(this.projects.slice());
    }
  }
}

//global variable which we can use anywhere in the file
export const projectState = ProjectState.getInstance();
