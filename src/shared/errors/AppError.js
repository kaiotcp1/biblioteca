export default class AppError extends Error {
    constructor(message, status) {
        super(message)
        this.message = message;
    };

    static dependencias = 'Alguma depêndencia obrigatória não foi fornecida';
    static parametroObrigatorioAusente = 'Algum parâmetro obrigatório não foi fornecido';
};