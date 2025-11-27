/***********************************************************************************************************
 * Objetivo: Arquivo responsável pela manipulação de dados entre APP e MODEL referente a Categoria 
 * Data: 27/11/2025
 * Autor: Enzo Carrilho
 * Versão: 1.0
 ***********************************************************************************************************/
const categoryDAO = require('../../model/dao/categoria.js')

const listCategorys = async function(){

    try {
        let resultCategorys = await categoryDAO.getAllCategorys()

        if(resultCategorys){
            if(resultCategorys != null){
                
            }
        }


    } catch(error) {
        
    }
}