// NOT GATE
let not = x => !x;
// AND GATE
let and = (A,B) => A && B;
// OR GATE
let or = (A,B) => A || B;
// NAND GATE
let nand = (A,B) => !and(A,B);
// NOR GATE
let nor = (A,B) => !or(A,B);
// XOR GATE
let xor = (A,B) => A != B ? 1 : 0;
// XNOR GATE
let xnor = (A,B) => !xor(A,B);

// half adder
halfAdder = (A,B) => `sum = ${and(A,B)} , carry = ${xor(A,B)}`