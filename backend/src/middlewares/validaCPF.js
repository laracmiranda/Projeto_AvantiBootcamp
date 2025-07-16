import { buscarUsuarioPorCpf } from '../services/usuarios.service.js';

export const validaCPF = async (req, res, next) => {
  let { cpf } = req.body; // 12131425239

  if (!cpf) {
    return res.status(400).json({ erro: 'CPF é obrigatório' });
  }

  cpf = cpf.replace(/\D/g, '');

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return res.status(400).json({
      erro: 'CPF inválido ou incompleto. Por favor, informe os 11 dígitos.',
    });
  }

  const proximoDV = (cpfIncompleto) => {
    let somatoria = 0;

    for (let i = 0; i < cpfIncompleto.length; i++) {
      const digitoAtual = cpfIncompleto.charAt(i);
      const constante = cpfIncompleto.length + 1 - i;
      somatoria += Number(digitoAtual) * constante;
    }

    const resto = somatoria % 11;
    return resto < 2 ? '0' : (11 - resto).toString();
  };

  const primeiroDV = proximoDV(cpf.substring(0, 9));
  const segundoDV = proximoDV(cpf.substring(0, 9) + primeiroDV);
  const cpfCorreto = cpf.substring(0, 9) + primeiroDV + segundoDV;

  if (cpf !== cpfCorreto) {
    return res.status(400).json({
      erro: 'CPF inválido. Informe um CPF válido para continuar.',
    });
  }

  // Verifica se o CPF já está cadastrado no sistema
  try {
    const usuarioExistente = await buscarUsuarioPorCpf(cpf);
    if (usuarioExistente) {
      return res.status(400).json({ erro: 'CPF já cadastrado no sistema.' });
    }
  } catch (error) {
    return res.status(500).json({ erro: 'Erro ao verificar CPF.', mensagem: error.message });
  }

  next(); // segue para o controller
};
