const userInput = process.argv[2];
const data = require('./data.json')
switch (userInput) {
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
  console.log('add')
}
