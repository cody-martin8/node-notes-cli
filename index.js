const fs = require('fs');
const op = process.argv[2];
const userInput = process.argv[3];
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
        console.log('delete')
        break;
        case 'update':
          console.log('update')
          break;
          default:
            console.log('invalid operation')
          }


function readEntry () {
  for (let i = 1; i < data.nextId; i++) {
    console.log(`${i}:`, data.notes[i]);
  }
}

function addEntry () {
  data.notes[5] = userInput;
  console.log(data);
  data.nextId++;
  const json = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', json, (err) => {
    if (err) throw err;
  })
}
