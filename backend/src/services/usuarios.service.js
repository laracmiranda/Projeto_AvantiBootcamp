import usuariosRepository from '../repositories/usuarios.repository.js';
import bcrypt from 'bcryptjs';

export const listarUsuarios = async () => {
    return await usuariosRepository.findAll();
};

export const buscarUsuarioPorCpf = async (cpf) => {
    return await usuariosRepository.findById(cpf);
};

export const buscarUsuarioPorEmail = async (email) => {
    return await usuariosRepository.findByEmail(email);
};

//Criptografando a senha antes de enviar para o repositório
export const criarUsuario = async (dados) => {
    const senhaCriptografada = await bcrypt.hash(dados.senha, 10);
    const dadosComSenhaSegura = { ...dados, senha: senhaCriptografada };
    return await usuariosRepository.create(dadosComSenhaSegura);
};

export const atualizarUsuario = async (cpf, dados) => {
    return await usuariosRepository.update(cpf, dados);
};

export const removerUsuario = async (cpf) => {
    return await usuariosRepository.delete(cpf);
};
