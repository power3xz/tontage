var gulp = require('gulp');
var args = require('yargs').argv;
var config = require('./gulp.config')();
var del = require('del');

var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('vet', function() {
    log('Analyzing source files with JSHint and JSCS');

    return gulp
        .src(config.alljs)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe($.jshint.reporter('fail'));
});

gulp.task('clean-styles', function(done) {
    var stylefiles = config.temp + '**/*.css';
    clean(stylefiles, done);
});

gulp.task('styles', ['clean-styles'], function() {
    log('Autoprefixing css files');

    return gulp
        .src(config.allcss)
        .pipe($.print())
        .pipe($.autoprefixer())
        .pipe($.concat('styles.css'))
        .pipe($.minifyCss())
        .on('error', errorLogger)
        .pipe(gulp.dest(config.temp));
});

gulp.task('css-watcher', function() {
    gulp.watch([config.allcss], ['styles']);
});

gulp.task('wiredep', function() {
    log('Wire up the bower css js and our app js into the html');

    var options = config.getWiredepDefaultOptions();
    var wiredep = require('wiredep').stream;

    return gulp
        .src(config.index)
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(config.js)))
        .pipe(gulp.dest(config.client));
});

gulp.task('inject', ['wiredep', 'styles'], function() {
    log('Wire up our custom css into the html');

    var options = config.getWiredepDefaultOptions();

    return gulp
        .src(config.index)
        .pipe($.inject(gulp.src(config.style)))
        .pipe(gulp.dest(config.client));
});

//////////////

function errorLogger(error) {
    var red = $.util.colors.red;

    log(red(error.message));
    this.emit('end');
}

function clean(path, done) {
    log('Cleaning: ' + $.util.colors.blue(path));
    del(path, done);
}

function log(msg) {
    var blue = $.util.colors.blue;

    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log(blue(msg[item]));
            }
        }
    } else {
        $.util.log(blue(msg));
    }
}
