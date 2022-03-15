//drag and drop interfaces
//add to any drag target
export interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

export interface DragTarget {
  dragOverHandler(event: DragEvent): void;
  //react to the actual drop
  dropHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
}
