import { db, connOptions } from "../db/config1.js";

// var conn = db.connect();

const HanaDbUtils = {
  defaultStatementReturnAllValues(command) {
    return new Promise((resolve, reject) => {
      //https://developers.sap.com/tutorials/hana-clients-node.html
      //https://www.npmjs.com/package/@sap/hana-client
      // db.connect(connOptions, function (err) {
      //   if (err) reject(err);

        const statement = db.prepare(command);

        statement.execQuery(function (err, rs) {
          if (err) reject(err);

          const rows = [];

          while (rs.next()) {
            rows.push(rs.getValues());
          }

          // db.disconnect(function (err) {
          //   if (err) {
          //     reject(err);
          //   }
          // });
          statement.drop();
          resolve(rows);
        });
      });
    // });
  },

  defaultStatementNoReturn(command) {
    return new Promise((resolve, reject) => {
      // db.connect(connOptions, function (err) {
        // if (err) reject(err);

        db.exec(command, function (err, result) {
          if (err) reject(err);
          resolve(result);
          // db.disconnect();
        });
      });
    // });
  },
};

export default HanaDbUtils;