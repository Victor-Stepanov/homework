export class User {
  constructor(task) {
    this.classTask = task;
  }
  do() {
    return this.classTask.run();
  }
}
