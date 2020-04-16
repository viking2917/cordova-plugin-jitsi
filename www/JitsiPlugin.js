var exec = require('cordova/exec');

exports.join = function(serverUrl, room, audioOnly, success, error) {
    exec(success, error, "JitsiPlugin", "join", [serverUrl, room, !!audioOnly]);
};

exports.destroy = function(success, error) {
    exec(success, error, "JitsiPlugin", "destroy", []);
};
