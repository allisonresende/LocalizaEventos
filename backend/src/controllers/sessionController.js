const conexao = require('../database/conexao');

module.exports = {
    async create(request, response){
        const { id } = request.body;

        const agencia = await conexao('agencia')
            .where('id', id)
            .select('nome')
            .first();

        if (!ong){
            return response.status(400).json({ erro: 'Não foi encontrado nenhama Agencia com esse ID'})
        }

        return response.json(agencia);
    }
}