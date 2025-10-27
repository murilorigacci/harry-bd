import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findAll = async () => {
    return await prisma.bruxo.findMany({
        orderBy: { nome: 'asc'}
    });
}

export const findById = async (id) => {
    return await prisma.bruxo.findUnique({
        where: { id: Number(id)}
    });
}

export const create = async (bruxo) => {
    return await prisma.bruxo.create({
        data: {
            nome: data.nome,
            casa: data.casa,
            patrono:data,
            varinha: data.varinha,
            anoMatricula: data.anoMatricula.
            anoMatricula
        }
    });
}

export const deleteBruxo = async (params) => {
    return await prisma.bruxo.delete({
        where: { id: Number(id)}
    });
}  

export const update = async (id, data) => {
    return await prisma.bruxo.update({
        where: { id: Number(id) },
        data: {
            ...(data.nome && { nome: data.nome }),
            ...(data.casa && { casa: data.casa }),
            ...(data.patrono && { patrono: data.patrono }),
            ...(data.varinha && { varinha: data.varinha }),
            ...(data.anoMatricula && { anoMatricula: Number(data.anoMatricula) }),
            ...(data.ativo !== undefined && { ativo: data.ativo }),
        }
    })
}