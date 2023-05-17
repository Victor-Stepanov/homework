'use strict';

import { Task } from './task.js';
import { User } from './user.js';

const task = new Task('Изучаю модули ES6');

const user = new User(task);
user.do();
