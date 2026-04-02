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

