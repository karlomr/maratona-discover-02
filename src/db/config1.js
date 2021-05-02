// https://www.npmjs.com/package/@sap/hana-client
// https://developers.sap.com/tutorials/hana-clients-node.html
'use strict';
const Database = require('@sap/hana-client');

//https://help.sap.com/viewer/f1b440ded6144a54ada97ff95dac7adf/2.7/en-US/4fe9978ebac44f35b9369ef5a4a26f4c.html
const connOptions = {
    //https://blogs.sap.com/2019/02/04/secure-user-store-for-the-sap-hana-service-by-the-sap-hana-academy/
    //hdbuserstore
    serverNode: '@USER1',  
    sslValidateCertificate: 'false',    
    //currentSchema: 'ROCKETSEAT', // HANA Cloud Platform only
}

const db = Database.createConnection()

module.exports = { db:db, connOptions:connOptions}