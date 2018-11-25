'use strict';
//configuration Firebase - BEGIN ---------------------------------------------------------------
const admin = require("firebase-admin");
const serviceAccount = require("../../path/agenda-64238-firebase-adminsdk-6lwao-deba6ebd40.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://agenda-64238.firebaseio.com"
});
const database = admin.firestore();
database.settings({timestampsInSnapshots: true});

//configuration Firebase - END -----------------------------------------------------------------

/** @description Model responsible for managing the contact register
 * @param {any} require
 * @param {any} response
 * @return {json}
 */
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

/** @description Model responsible for listing contacts
 * @param {any} require
 * @param {any} response
 * @return {json}
 */
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

/** @description Model responsible for updating contacts
 * @param {any} require
 * @param {any} response
 * @return {json}
 */
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

/** @description Model responsible for deleting contacts
 * @param {any} require
 * @param {any} response
 * @return {json}
 */
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