import AppError from "../shared/errors/AppError";

export default function cadastrarUsuarioUseCase({ usuariosRepository }) {
    if (!usuariosRepository) throw new AppError(AppError.dependencias);
    return async function ({ nome_completo, CPF, telefone, endereco, email }) {
        const checaCampos = nome_completo && CPF && telefone && endereco &&  email;

        if(!checaCampos) throw new AppError(AppError.parametroObrigatorioAusente);
       
        const checaSeJaExisteUmUsuarioCadastradoComCPF = await usuariosRepository.existePorCPF(CPF);

        if(checaSeJaExisteUmUsuarioCadastradoComCPF) throw new AppError('CPF já cadastrado');

        await usuariosRepository.cadastrar({
            nome_completo,
            CPF,
            telefone,
            email,
            endereco
        });
    };
};