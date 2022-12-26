import { division } from './Calculator';
import { addition } from './Calculator';
import { subtraction } from './Calculator';
import { multiplication } from './Calculator';

test('Dati due numeri mi aspetto che il risultato sia la divisione del primo per il secondo', () => {
    const n1 = 10;
    const n2 = 5;

    const result = division(n1, n2);
    expect(result).toBe(2);
});

test('Dato un divisore uguale a 0 mi aspetto che ritorni un errore', () => {
    const n1 = 10;
    const n2 = 0;

    const result = division(n1, n2);
    expect(result).toBe('error');
});

test('addizione', () => {
     const n1 = 0;
     const n2 = 0;

    const result = addition(n1, n2);
    expect(result).toBe(0);
});

test('subtraction', () => {
    const n1 = 0;
    const n2 = 0;

   const result = subtraction(n1, n2);
   expect(result).toBe(0);
});

test('multiplication', () => {
    const n1 = 0;
    const n2 = 0;

   const result = multiplication(n1, n2);
   expect(result).toBe(0);
});


