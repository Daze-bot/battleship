function placeComputerShip(cpu, ship) {
  let validLocations = [];
  let randomNum = Math.floor(Math.random() * 2);
  let direction;

  if (randomNum === 0) {
    direction = 'horizontal';
  } else if (randomNum === 1) {
    direction = 'vertical';
  }

  console.log(direction);

  for (let column = 0; column < cpu.gameboard.board.length; column++) {
    for (let row = 0; row < cpu.gameboard.board[column].length; row++) {
      if (direction === 'horizontal') {
        if (column + (ship.length - 1) <= 9) {
          let possibleLocations = [];
          for (let i = 0; i < ship.length; i++) {
            let shipColumn = column + i;
            let shipRow = row;
            possibleLocations.push(`${shipColumn}${shipRow}`);
          }
          checkValidity(possibleLocations);
        }
      } else {
        if (row + (ship.length - 1) <= 9) {
          let possibleLocations = [];
          for (let i = 0; i < ship.length; i++) {
            let shipColumn = column;
            let shipRow = row + i;
            possibleLocations.push(`${shipColumn}${shipRow}`);
          }
          checkValidity(possibleLocations);
        }
      }
    }
  }

  let randomArray = validLocations[Math.floor(Math.random() * validLocations.length)];
  placeShip(randomArray);

  function checkValidity(array) {
    let validPlacement = array.every(location => {
      return cpu.gameboard.isEmpty(location.slice(0, 1), location.slice(1, 2));
    })
    if (validPlacement === true) {
      validLocations.push(array);
    }
  }

  function placeShip(array) {
    array.forEach(location => {
      let locationColumn = location.slice(0, 1);
      let locationRow = location.slice(1, 2);
      cpu.gameboard.placeShip(locationColumn, locationRow, ship);
    })
  }
}

export { placeComputerShip };