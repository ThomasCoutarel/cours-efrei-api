import {Pow} from "./pow";

describe ('testing pow function', () => {
    test('should return 4', () => {
        expect(Pow(2,2)).toBe(5);
    });
})