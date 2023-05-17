(function () {
  'use strict';

  class Task {
    constructor(message) {
      this.message = message;
    }
    run() {
      console.log(this.message);
    }
  }

  class User {
    constructor(task) {
      this.classTask = task;
    }
    do() {
      return this.classTask.run();
    }
  }

  const task = new Task('Изучаю модули ES6');

  const user = new User(task);
  user.do();

})();
