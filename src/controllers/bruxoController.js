import * as BruxoModel from './../models/bruxoModel.js'

export const listarTodos = async (requestAnimationFrame, res) => {
    try {
        const bruxos = await BruxoModel.findAll();

        if(!bruxos || bruxos.length === 0) {
            res.status(404).json({
                total:length,
                mensagem: ' Não há bruxos na lisa',
                bruxos
            })
        }

        res.status(200).json({
            total: bruxos.length,
            mensagem: 'Lista de bruxos',
            bruxos
        })
    } catch (error) {
        res.status(500).json({
            erro: 'erro interno de servidor',
            detalhe: error.message,
            status: 500    
         })
    }
}

export const listarUm = async (req, res) => {
    try {
        const id = req.params.id;
        const bruxo = await BruxoModel.findById(id);

        if(!bruxo) {
            return res.status(404).json({
                erro: 'Bruxo não encontrado!',
                mensagem: 'Verifique se o id do bruxo existe',
                id:id
            })
        }

    }   catch (error) {
        res.status(500).json({
            erro: 'Erro ao buscar bruxo por id',
            detalhes: error.message
        })
    }
    
}