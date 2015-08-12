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

gulp.task('clean-styles', function() {
    log('cleaning style files');

    var stylefiles = config.temp + '**/*.css';

    return gulp
        .src(stylefiles)
        .pipe(del());
});

gulp.task('styles', function() {
    log('Autoprefixing css files');

    return gulp
        .src(config.allcss)
        .pipe($.print())
        .pipe($.autoprefixer())
        .pipe(gulp.dest(config.temp));
});

//////////////

function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}
