module.exports = function() {

    var client = './src/client/';
    var clientApp = client + 'app/';

    var temp = './.tmp/';

    var config = {

        // file paths

        // all javascript files
        alljs: [
            './src/**/*.js',
            './*.js'
        ],

        // all css files
        allcss: [client + 'styles/styles.css', client + '**/*.css'],
        style: temp + 'styles.css',

        // temp file path
        temp: temp,
        client: client,
        js: [
            clientApp + 'app.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*.spec.js'
        ],
        index: client + 'index.html',

        // bower options
        bower: {
            bowerJson: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../..'
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
