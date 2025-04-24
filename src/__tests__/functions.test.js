// crie testes para o arquivo index.js

const { parOuImpar } = require('../scripts/functions.js');	

describe('Testes da função parOuImpar', () => {
	test('Deve retornar "par" para números pares', () => {
		expect(parOuImpar(2)).toBe('par');
		expect(parOuImpar(4)).toBe('par');
		expect(parOuImpar(0)).toBe('par');
	});

	test('Deve retornar "impar" para números ímpares', () => {
		expect(parOuImpar(1)).toBe('impar');
		expect(parOuImpar(3)).toBe('impar');
	});

	test('Deve retornar erro para números negativos', () => {
		expect(parOuImpar(-1)).toBe('Erro: número deve ser maior ou igual a 0');
		expect(parOuImpar(-2)).toBe('Erro: número deve ser maior ou igual a 0');
	});
});
