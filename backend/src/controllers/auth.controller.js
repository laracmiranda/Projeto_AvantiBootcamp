import { buscarUsuarioPorEmail } from "../services/usuarios.service.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const SECRET = process.env.JWT_SECRET || 'autentificacao-de-alta-seguranca';

export const login = async (req, res) => {
    try {
        const { email, senha } = req.body;
        const usuario = await buscarUsuarioPorEmail(email);

        if (!usuario) {
            return res.status(401).json({ erro: 'Email ou senha inválidos' });
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        if (!senhaValida) {
            return res.status(401).json({ erro: 'Email ou senha inválidos' });
        }

        //JWT com email no payload
        const token = jwt.sign(
            { usuario: { email: usuario.email } },
            SECRET,
            { expiresIn: '1h' }
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 1000, // 1 hora
        });

        res.status(200).json({ mensagem: 'Login efetuado com sucesso!' });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao efetuar login!', mensagem: error.message });
    }
};

export const logout = (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ mensagem: 'Desconectado com sucesso!' });
};
