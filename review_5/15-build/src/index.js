'use strict';

import { Task } from './task';
import { User } from './user';


const task = new Task('Изучаю модули ES6');
const user = new User(task);
user.do();
