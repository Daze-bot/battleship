import { Gameboard } from "../scripts/Gameboard";
import { Ship } from "../scripts/Ship";

test('2D array test', () => {
  let test = new Gameboard('test');
  test.board[3][5] = 'hello';
  expect(test.board[3][5]).toEqual('hello');
})

test('ship placement', () => {
  let newBoard = new Gameboard('test');
  newBoard.placeShip(5, 9, 'testShip');
  expect(newBoard.board[5][9]).toBe('testShip');
})

test('ship class placement', () => {
  let newBoard = new Gameboard('test');
  let newShip = new Ship('testShip', 3);
  newBoard.placeShip(8, 2, newShip);
  expect(newBoard.board[8][2]).toEqual(newShip);
})

test('receive attack', () => {
  let newBoard = new Gameboard('test');
  let newShip = new Ship('testShip', 3);
  newBoard.placeShip(8, 2, newShip);
  newBoard.receiveAttack(8, 2);
  expect(newShip.checkHealth()).toBe(2);
})

test('multiple attacks on same ship - different coords', () => {
  let newBoard = new Gameboard('test');
  let newShip = new Ship('testShip', 3);
  newBoard.placeShip(8, 1, newShip);
  newBoard.placeShip(8, 2, newShip);
  newBoard.placeShip(8, 3, newShip);
  newBoard.receiveAttack(8, 1);
  newBoard.receiveAttack(8, 2);
  newBoard.receiveAttack(8, 3);
  expect(newShip.isSunk).toBe(true);
})

test('misses', () => {
  let newBoard = new Gameboard('test');
  let newShip = new Ship('testShip', 3);
  newBoard.placeShip(8, 1, newShip);
  newBoard.receiveAttack(8, 2);
  expect(newBoard.board[8][2]).toBe("miss");
})

test('miss log', () => {
  let newBoard = new Gameboard('test');
  let newShip = new Ship('testShip', 3);
  newBoard.placeShip(8, 1, newShip);
  newBoard.receiveAttack(8, 2);
  newBoard.receiveAttack(8, 1);
  newBoard.receiveAttack(2, 7);
  expect(newBoard.reportMisses()).toEqual([(2, 7), (8, 2)]);
})

test('check all NOT sunk', () => {
  let newBoard = new Gameboard('test');
  let newShip = new Ship('testShip', 3);
  newBoard.placeShip(8, 1, newShip);
  newBoard.placeShip(8, 2, newShip);
  newBoard.placeShip(8, 3, newShip);
  newBoard.receiveAttack(8, 1);
  newBoard.receiveAttack(8, 2);
  expect(newBoard.checkAllShipsSunk()).toBe(false);
})

test('check all sunk', () => {
  let newBoard = new Gameboard('test');
  let newShip = new Ship('testShip', 3);
  newBoard.placeShip(8, 1, newShip);
  newBoard.placeShip(8, 2, newShip);
  newBoard.placeShip(8, 3, newShip);
  newBoard.receiveAttack(8, 1);
  newBoard.receiveAttack(8, 2);
  newBoard.receiveAttack(8, 3);
  expect(newBoard.checkAllShipsSunk()).toBe(true);
})