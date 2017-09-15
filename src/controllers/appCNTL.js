const appCNTL = {
    launch: function(req, res) {
        res.sendFile(__dirname + '/index.html');
    }
};
module.exports = appCNTL;