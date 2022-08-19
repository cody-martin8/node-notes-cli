const fs = require('fs');
const op = process.argv[2];
// const userInput = process.argv[3];
const argv = process.argv;
const data = require('./data.json')

switch (op) {
  case 'read':
    readEntry();
    break;
    case 'add':
      addEntry();
      break;
      case 'delete':
        deleteEntry()
        break;
        case 'update':
          updateEntry()
          break;
          default:
            console.log('invalid operation')
          }


function readEntry () {
  // for (let i = 1; i < data.notes.length; i++) {
  //   console.log(`${i}:`, data.notes[i]);
  // }
  for (const property in data.notes) {
    console.log(`${property}: ${data.notes[property]}`)
  }
}

function addEntry () {
  const userInput = process.argv[3];
  data.notes[data.nextId] = userInput;
  data.nextId += 1;
  const json = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', json, (err) => {
    if (err) throw err;
  })
}

function updateEntry() {
  const userInput = process.argv[4];
  data.notes[process.argv[3]] = userInput;
  const json = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', json, (err) => {
    if (err) throw err;
  })
}

function deleteEntry() {
  const userInput = process.argv[3];
  delete data.notes[userInput];
  const json = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', json, (err) => {
    if (err) throw err;
  })
}
