var fs = require('fs'),
    ejs = require("ejs");

function ejs2html(path, information) {
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) { console.log(err); return false; }
        var ejs_string = data,
            template = ejs.compile(ejs_string),
            html = template(information);
        fs.writeFile(path + '.html', html, function(err) {
            if(err) { console.log(err); return false }
            return true;
        });  
    });
}

ejs2html(__dirname+"/index.ejs")

//Path: the location of the file, include __dirname or it wont work
//Information: the information to be compiled like {users: ['bill','bob']} (optional)
