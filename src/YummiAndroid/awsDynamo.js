var dynamo = require('dynamodb');
var aws = require('aws-sdk');

dynamo.AWS.config.update({accessKeyId: 'AKIA2ZQ5OCGB4DIP64XI', secretAccessKey: '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', region: "us-east-2"});

//Nome da tabela que foi criada no DynamoDB
var table = "Menu";
//Valor que será cadastrado no campo da chave primária "idUser"
var account_id = "1";
//Dados a serem cadastrados junto com o objeto
var account_name = "Bom Sabor";
var description = "O sabor regional";

//Confecção dos dados no formato JSON
var values = {
    TableName: table,
    Item:{
        "Id": account_id,
        "restaurante": account_name,
        "description" : description,
        "Item" : {
            "Prato" : "Carbonara",
            "Preço" : "29,90"
        }
    }
};

var doc = new aws.DynamoDB.DocumentClient();

doc.put(values, function(err, data) {
    if (err) {
        console.error("Erro: ", JSON.stringify(err, null, 2));
    } else {
        console.log("Item adicionado! ", JSON.stringify(data, null, 2));
    }
});