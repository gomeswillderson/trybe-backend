export function greeter(name: string):string {
    return `Olá ${name}!`;
}

export function personAge(name: string, age: number): string {
    return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
    return x + y;
}

export function sumArray(numbers: number[]): number {
    return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
    return (base * height) / 2;
}

export function square(side: number): number {
    return side ** 2;
}

export function rectangle(base: number, height: number): number {
    return base * height;
}

// Crie uma nova função para calcular a área de um losango:
// A área do losango é dada pelo resultado da multiplicação
// da diagonal maior (D) pela diagonal menor (d) dividido por dois. 

export function rhombus(D: number, d:number): number {
    return (D * d) / 2
}

// Crie uma nova função para calcular a área de um trapézio.
// A área do trapézio é dada pelo produto da altura (h) com 
// a soma da base maior (B) e a base menor (b) dividido por dois. 

export function trapeze(B: number, b: number, h:number): number {
    return ((B + b) * h) / 2
}