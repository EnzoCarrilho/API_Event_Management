/***********************************************************************************************************
 * Objetivo: Arquivo responsável pelo CRUD de dados no MySQL referente ao Evento 
 * Data: 26/11/2025
 * Autor: Enzo Carrilho
 * Versão: 1.0
 ***********************************************************************************************************/

//Import da dependência do Prisma que permite a execução de Script SQL no BD
const { PrismaClient } = require('../../generated/prisma')

//Cria um novo objeto baseado na classe do PrismaClient
const prisma = new PrismaClient()

//Retorna uma lista de todos os Eventos no BD
const getAllCategorys = async function(){
    try{
        let result = await prisma.$queryRaw(`select * from tb_categoria order by id desc`)
        
        if(Array.isArray(result))
            return result
        else
            return false

    }catch(error){
        return false
    }
}

const getCategoryById = async function(id){
    try {
        let result = await prisma.$queryRaw(`select * from tb_categoria where id = ${id}`)

        if(Array.isArray(result))
            return result
        else
            return false

    } catch (error) {
        return false
    }
}


const insertCategory = async function name(category){
    try {
        let result = await prisma.$executeRaw(`INSERT INTO tb_categoria(
                                                nome)
                                                VALUES('${category.nome}')`
                                            )

        if(result)
            return true
        else
            return false

    } catch (error) {
        return false
    }
}

module.exports = {
    getAllCategorys,
    getCategoryById,
    insertCategory
}