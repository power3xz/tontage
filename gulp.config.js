module.exports = function() {

    var client = './src/client/';
    var clientApp = client + 'app/';

    var config = {

        // file paths

        // all javascript files
        alljs: [
            './src/**/*.js',
            './*.js'
        ],

        // all css files
        allcss: client + '**/*.css',

        // temp file path
        temp: './.tmp/',
        client: client,
        js: [
            clientApp + '**/*.js',
            '!' + clientApp + '**/*.spec.js'
        ],
        index: client + 'index.html',

        // bower options
        bower: {
            bowerJson: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../../'
        }
    };

    config.getWiredepDefaultOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };

        return options;
    };

    return config;
};
