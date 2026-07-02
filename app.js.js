var mysql = require('mysql2');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'info123',
});

con.connect(function(err) {
    if (err) throw err;
    console.log('connected');

    con.query("CREATE DATABASE IF NOT EXISTS appon", function(err, result) {
        if (err) throw err;
        console.log('database created');

        con.query("USE appon", function(err, result) {
            if (err) throw err;

            var sql = "create table if not exists alia(id int auto_increment primary key, name varchar(20), address varchar(20))";

            con.query(sql, function(err, result) {
                if (err) throw err;
                console.log('table created');

               var sql2 = "INSERT INTO alia(name,address) VALUES ('sanjay','new delhi'),('maya','mysore'),('sanuj','bangalore'),('manju','mangalore')";

                con.query(sql2, function(err, result) {
                    if (err) throw err;
                    console.log('record inserted');

                    var sql2 = "select * from alia";

                    con.query(sql2, function(err, result) {
                        if (err) throw err;
                        console.log(result);
                    });

                    var sql2 = "select * from alia where id=1";

                    con.query(sql2, function(err, result) {
                        if (err) throw err;
                        console.log(result);
                    });

                    var sql2 = "delete from alia where id=2";

                    con.query(sql2, function(err, result) {
                        if (err) throw err;
                        console.log('record deleted', result);
                    });

                    var sql2 = "alter table alia add column phone_number int";

                    con.query(sql2, function(err, result) {
                        if (err) throw err;
                        console.log('new column added');
                    });

                    var sql2 = "alter table alia drop column phone_number";

                    con.query(sql2, function(err, result) {
                        if (err) throw err;
                        console.log('column dropped');
                    });

                    var sql2 = "update alia set name='mamtha' where id=3";

                    con.query(sql2, function(err, result) {
                        if (err) throw err;
                        console.log('record updated');
                    });

                   /*var sql = "ALTER TABLE alia DROP primary key";

                    con.query(sql, function(err, result) {
                        if (err) throw err;
                        console.log('primary key dropped');
                    });*/

                    var sql = "drop table alia";

                    con.query(sql, function(err, result) {
                        if (err) throw err;
                        console.log('table dropped');
                    });

                });
            });
        });
    });
});