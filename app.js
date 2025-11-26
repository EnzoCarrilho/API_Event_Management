/***********************************************************************************************************
 * Objetivo: Arquivo responsável por controlar as requisições da API de Gestão de Eventos 
 * Data: 26/11/2025
 * Autor: Enzo
 * Versão: 1.0
 ***********************************************************************************************************/

//Import das dependências
const express =    require('express')
const cors =       require('cors') 
const bodyParser = require('body-parser')

//Retorna a porta do sevidor atual ou colocamos uma porta local
const PORT = process.PORT || 8080

//Criando uma instância de uma classe do express
const app = express()

//Configuraçõs do cors
app.use((request, response, next)=>{
    response.header('Acces-Control-Allow-Origin', '*')
    response.header('Acces-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    
    app.use(cors())
    next() 
})




app.listen(PORT, () => {
    console.log('API aguardando requisições...')
})