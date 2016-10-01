/*global require*/

var gulp = require('gulp'),
    cleancss = require('gulp-clean-css'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    changed = require('gulp-changed'),
    rev = require('gulp-rev'),
    browserSync = require('browser-sync'),
    del = require('del'),
    ngannotate = require('gulp-ng-annotate'),
    connect = require('gulp-connect-php');

gulp.task('watch', function() {
    
    // List all the files that I want to watch
    var files = [
        'app/**/*.html',
        'app/templates/*.html',
        'app/stylesheets/**/*.css',
        'app/images/**/*{.png, .jpeg, .jpg}',
        'app/scripts/*.php',
        'app/js/*.js',
        'app/js/**/*.js'
    ]
    
    // Connect to PHP server
    connect.server({
        hostname: '0.0.0.0',
        base: 'app'
    });
    
    // Watch the files and reload browser-sync if any of them change
    gulp.watch(files).on('change', function () {
            browserSync.reload();
    });
});