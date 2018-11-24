'use strict';

//Configuração Firebase - BEGIN ---------------------------------------------------------------
var admin = require("firebase-admin");
var serviceAccount = require("../../path/agenda-64238-firebase-adminsdk-6lwao-deba6ebd40.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://agenda-64238.firebaseio.com"
});
var database = admin.firestore();
database.settings({timestampsInSnapshots: true});

//Configuração Firebase - END -----------------------------------------------------------------

exports.read = () => {
    return new Promise((resolve)=>{
        database.collection("/agenda")
        .get()
        .then((result)=>{
            var json = [];
            result.docs.forEach((r)=>{
                json.push(r.data());
            });
            resolve(json);
        })
        .catch(()=>{
            resolve({"error":"Erro Inesperado"})
        });
    });
}

exports.create = (body) => {
    return new Promise((resolve)=>{
        database.collection("/agenda/")
        .doc()
        .set(body)
        .then((result)=>{
            resolve({"status":"ok"});
        })
        .catch(()=>{
            resolve({"message":"Erro Inesperado", "status":"error"})
        });
    });
}

exports.update = (id, body) => {
    return new Promise((resolve)=>{
        database.collection("/agenda/").doc(id)
        .update(body)
        .then((result)=>{
            resolve({"status":"ok"});
        })
        .catch(()=>{
            resolve({"message":"Erro Inesperado", "status":"error"})
        });
    });
}

exports.delete = (id) => {
    return new Promise((resolve)=>{
        database.collection("/agenda")
        .doc(id)
        .delete()
        .then((result)=>{
            resolve({"status":"ok"});
        })
        .catch(()=>{
            resolve({"message":"Erro Inesperado", "status":"error"})
        });
    });
}