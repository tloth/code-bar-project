const nedb = require('nedb');
const db = new nedb({filename: 'feelings', autoload: true});
const data = {
    feelings : [],
    addFeeling : function (input, callback){
        db.insert(input, function(err, newDoc){
            if (err) throw err;
            callback();
        })
        this.feelings.push(input);
        console.log(this.feelings)
    }
};

module.exports = data;