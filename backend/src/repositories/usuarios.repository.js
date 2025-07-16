import prisma from '../prisma/client.js';

class usuariosRepository {
    findAll() {
        return prisma.usuarios.findMany({  
            include: {
                itens: true
            }
        });
    }

    findById(cpf) {
        return prisma.usuarios.findUnique({
            where: { cpf },
            include: {
                itens: true
            }
        });
    }

    findByEmail(email) {
        return prisma.usuarios.findUnique({
            where: { email }
        });
    }

    create(dados) {
        return prisma.usuarios.create({ data: dados });
    }

    update(cpf, dados) {
        return prisma.usuarios.update({
            where: { cpf },
            data: dados,
        });
    }

    delete(cpf) {
        return prisma.usuarios.delete({
            where: { cpf }
        });
    }
}

export default new usuariosRepository();
