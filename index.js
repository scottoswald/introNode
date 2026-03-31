#!/usr/bin/env node

console.log('hello world');

const note = process.argv[2];

const newNote = {
  id: Date.now(),
  note,
};

console.log('your new note', newNote)

