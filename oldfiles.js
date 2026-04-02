// old main index.js

#!/usr/bin/env node

import whatever, {count} from './utils.js';
import * as modules from './modules/index.js';

console.log('hello world');

const note = process.argv[2];

const newNote = {
  id: Date.now(),
  note,
  whatever: whatever.name,
  count: count(5),
  age: modules.age(30),
  firstName: modules.firstName('Phil'),
  secondName: modules.secondName('O\'Brian')
};

console.log('your new note', newNote)

// utils.js

export const count = num => num;

export default {name: 'cookies'};

// modules folder:

// mod1.js

const age = num => num;

export { age }

// mod2.js

const firstName = word => word;

const secondName = word => word;

export { firstName, secondName }

// index.js

export { age } from './mod1.js'
export { firstName, secondName } from './mod2.js'

