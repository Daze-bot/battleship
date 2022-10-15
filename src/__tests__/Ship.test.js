import { Ship } from "../scripts/Ship";

test('hit', () => {
  let smallShip = new Ship('submarine', 2);
  smallShip.hit();
  expect(smallShip.checkHealth()).toBe(1);
  expect(smallShip.isSunk).toBe(false);
})

test('sunk', () => {
  let bigShip = new Ship('carrier', 5)
  bigShip.hit();
  bigShip.hit();
  bigShip.hit();
  bigShip.hit();
  bigShip.hit();
  expect(bigShip.isSunk).toBe(true);
})