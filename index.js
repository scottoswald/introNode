#!/usr/bin/env node

import whatever, {count} from './utils.js';

console.log('hello world');

const note = process.argv[2];

const newNote = {
  id: Date.now(),
  note,
  whatever: whatever.name,
  count: count(5)
};

console.log('your new note', newNote)

