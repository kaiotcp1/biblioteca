import AppError from "../shared/errors/AppError";
import cadastrarUsuarioUseCase from "./cadastrar-usuario.usecase";

describe("cadastrar usuario UseCase", function () {
    const usuariosRepository = {
        cadastrar: jest.fn(),
        existePorCPF: jest.fn(),
    };

    test("Deve poder cadastrar um usuário", async function () {
        const usuarioDTO = {
            nome_completo: "nome_valido",
            CPF: "CPF_valido",
            telefone: "telefone_valido",
            endereco: "endereco_valido",
            email: "email_valido",
        };

        const sut = cadastrarUsuarioUseCase({ usuariosRepository });

        const output = await sut(usuarioDTO);

        expect(output).toBeUndefined();
        expect(usuariosRepository.cadastrar).toHaveBeenCalledWith(usuarioDTO);
        expect(usuariosRepository.cadastrar).toHaveBeenCalledTimes(1);
    });

    test('Deve retornar um throw AppError se o usuariosRepository não for fornecido', function () {
        expect(() => cadastrarUsuarioUseCase({})).toThrow(new AppError(AppError.dependencias));
    });

    //Usar rejects para testes assincronos
    test('Deve retornar um throw AppError se os campos obrigatórios não forem fornecidos', async function () {
        const sut = cadastrarUsuarioUseCase({ usuariosRepository });
        await expect(() => sut({})).rejects.toThrow(
            new AppError(AppError.parametroObrigatorioAusente)
        );
    });

    test('Deve retornar um throw AppError se já existe um cadastro com o CPF', async function () {
        usuariosRepository.existePorCPF.mockResolvedValue(true);

        const usuarioDTO = {
            nome_completo: "nome_valido",
            CPF: "CPF_ja_Cadastrado",
            telefone: "telefone_valido",
            endereco: "endereco_valido",
            email: "email_valido",
        };

        const sut = cadastrarUsuarioUseCase({ usuariosRepository });
        await expect(() => sut(usuarioDTO)).rejects.toThrow(new AppError('CPF já cadastrado'));
    });
});