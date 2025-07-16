import express from 'express';
import usuariosRoutes from './usuarios.routes.js';
import itensRoutes from './itens.routes.js';
import propostaRoutes from './proposta.routes.js'
import authRoutes from './auth.routes.js';

const router = express.Router();

router.use('/usuarios', usuariosRoutes);
router.use('/itens', itensRoutes);
router.use('/propostas', propostaRoutes);
router.use('/auth', authRoutes);

export default router;
