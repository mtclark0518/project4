const appController = {
    launch: function(req, res) {
        res.sendFile(__dirname + '/index.html');
    }
};
module.exports = appController;