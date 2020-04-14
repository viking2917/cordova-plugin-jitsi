var exec = require('cordova/exec');

exports.join = function(serverUrl, room, success, error) {
    exec(success, error, "JitsiPlugin", "join", [serverUrl, room]);
};

exports.destroy = function(success, error) {
    exec(success, error, "JitsiPlugin", "destroy", []);
};