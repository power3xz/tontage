module.exports = function() {

    var config = {

        // file paths

        // all javascript files
        alljs: [
            './src/**/*.js',
            './*.js'
        ],

        // all css files
        allcss: './src/client/**/*.css',

        // temp file path
        temp: './.tmp'
    };

    return config;
};
