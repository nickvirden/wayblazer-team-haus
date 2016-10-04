/*global require*/

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    connect = require('gulp-connect');

gulp.task('watch', function() {
    
    // List all the files that I want to watch
    var files = [
        'app/**/*.html',
        'app/*.html',
        'app/css/**/*.css',
        'app/css/*.css',
        'app/images/**/*{.png, .jpeg, .jpg, .svg}',
        'app/js/*.js',
        'app/js/**/*.js'
    ];
    
    // Connect to server
    connect.server({
        // If not working on virtual machine, comment out host: '0.0.0.0'
        host: '0.0.0.0',
        root: 'app',
        port: 8000,
        livereload: true,
        middleware: function(connect) {
            return [connect().use('/bower_components', connect.static('bower_components'))];
        }
    });
    
    // Watch the files and reload browser-sync if any of them change
    gulp.watch(files).on('change', function () {
        browserSync.reload();
    });
});