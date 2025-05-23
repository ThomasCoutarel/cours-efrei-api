import { Modulo } from './modulo';

describe('testing modulo function', () => {
  
  test('10 % 3 should return 1', () => {
    expect(Modulo(10, 3)).toBe(1);
  });

  test('25 % 5 should return 0', () => {
    expect(Modulo(25, 5)).toBe(0);
  });

  test('-7 % 4 should return -3 (JS behavior)', () => {
    expect(Modulo(-7, 4)).toBe(-3);
  });

  test('should throw error on division by zero', () => {
    expect(() => Modulo(5, 0)).toThrow("La division par zéro est interdite.");
  });

});
