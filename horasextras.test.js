const horasextras = require("./horasextras");

//1- salario por hora 10, Horas trabalhadas 50, carga horaria 40, resultado esperado 100
test("Deve calcular corretamente as horas extras (10, 50, 40)", () => {
    expect(horasextras(10, 50, 40)).toBe(100);
});

//2- salario por hora 10, Horas trabalhadas 30, carga horaria 36, resultado esperado 0
test("Deve retornar 0 se não houver horas extras (10, 30, 36)", () => {
    expect(horasextras(10, 30, 36)).toBe(0);
});

//3- salario por hora -10, Horas trabalhadas 50, carga horaria 40, resultado esperado "todos os valores devem ser positivos"
test("Deve retornar erro para salário negativo (-10, 50, 40)", () => {
    expect(horasextras(-10, 50, 40)).toBe("todos os valores devem ser positivos");
});

//4- salario por hora 10, Horas trabalhadas -50, carga horaria 40, resultado esperado "todos os valores devem ser positivos"
test("Deve retornar erro para horas trabalhadas negativas (10, -50, 40)", () => {
    expect(horasextras(10, -50, 40)).toBe("todos os valores devem ser positivos");
});

//5- salario por hora 10, Horas trabalhadas 50, carga horaria -40, resultado esperado "todos os valores devem ser positivos"
test("Deve retornar erro para carga horária negativa (10, 50, -40)", () => {
    expect(horasextras(10, 50, -40)).toBe("todos os valores devem ser positivos");
});

//6- salario por hora "A", Horas trabalhadas 50, carga horaria -40, resultado esperado "todos os valores devem números"
test("Deve retornar erro para salário não numérico ('A', 50, 40)", () => {
    expect(horasextras("A", 50, 40)).toBe("todos os valores devem ser números");
});

//7- salario por hora 10, Horas trabalhadas "A", carga horaria -40, resultado esperado "todos os valores devem números"
test("Deve retornar erro para horas trabalhadas não numéricas (10, 'A', 40)", () => {
    expect(horasextras(10, "A", 40)).toBe("todos os valores devem ser números");
});

//8- salario por hora 10, Horas trabalhadas 50, carga horaria "A", resultado esperado "todos os valores devem números"
test("Deve retornar erro para carga horária não numérica (10, 50, 'A')", () => {
    expect(horasextras(10, 50, "A")).toBe("todos os valores devem ser números");
});
