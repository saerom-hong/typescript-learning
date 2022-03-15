//Component base class
//take charge on basic rendering on the browser
//put abstract keyword in front so never directly instantiated, always for inheritance
export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U; // we can work different types based on U type when we initiate

  constructor(
    templateId: string,
    hostElementId: string,
    insertAtStart: boolean,
    newElementId?: string
  ) {
    this.templateElement = document.getElementById(
      templateId
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById(hostElementId)! as T;
    const importedHtmlContent = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedHtmlContent.firstElementChild as U;
    //add css styling
    if (newElementId) this.element.id = newElementId;

    this.attach(insertAtStart);
  }
  //render on web browser
  private attach(insertAtBeginning: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtBeginning ? "afterbegin" : "beforeend",
      this.element
    );
  }
  //force to add these two methods when inheritance
  abstract configure(): void;
  abstract renderContent(): void;
}
