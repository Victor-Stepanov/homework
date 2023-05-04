'use strict'

import Task from './task'
import User from './user'

const task = new Task()
const user = new User(task)
user.do()