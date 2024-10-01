import AppError from "./AppError";

describe('AppError', function() {
    test('Deve retornar uma instancia de Error', function () {
        const appError = new AppError('erro')
        expect(appError).toBeInstanceOf(Error);
    });

    test('AppError deve retornar uma mensagem de erro', function() {
        const mensagem = 'Mensagem de erro';
        const appError = new AppError(mensagem);
        expect(appError.message).toBe(mensagem);
    });
});