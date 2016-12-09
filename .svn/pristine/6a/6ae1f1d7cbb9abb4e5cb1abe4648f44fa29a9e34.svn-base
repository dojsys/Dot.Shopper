'use strict';

var gulp = require('gulp'),
  exec = require('child_process').exec,
  connect = require('gulp-connect'),
  clean = require('gulp-clean'),
  fs = require('fs'),
  ngAnnotate = require('gulp-ng-annotate'),
  notify = require('gulp-notify'),
  rename = require('gulp-rename'),
  rev = require('gulp-rev'),
  revReplace = require('gulp-rev-replace'),
  runSequence = require('run-sequence'),
  uglify = require('gulp-uglify'),
  templateCache = require('gulp-angular-templatecache'),
  htmlMin = require('gulp-htmlmin'),
  htmlMin_options = {
      removeComments: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
      collapseInlineTagWhitespace: true
  };


var paths = {
    buildDestination: "./dist/"
};


var interceptErrors = function (error) {
    var args = Array.prototype.slice.call(arguments);

    notify.onError({
        title: 'Compile Error',
        message: '<%= error.message %>'
    }).apply(this, args);

    this.emit('end');
};

gulp.task('templates', function () {
    return gulp.src(['./wwwroot/app/**/*.html', '!wwwroot/jspm_packages{,/**}'])
      .pipe(htmlMin(htmlMin_options))
      .pipe(templateCache({
          standalone: true,
          templateHeader: 'import angular from "angular"; export default angular.module("<%= module %>"<%= standalone %>).run(["$templateCache", function($templateCache){'
      }))
      .on('error', interceptErrors).pipe(rename("app.templates.js")).pipe(gulp.dest('./wwwroot/app/config'));
});

gulp.task('build', function (done) {
    runSequence(
      'build:clean',
      [
        'build:html',
        'build:js'
      ],
      'build:rev',
      'build:cleanup',
      done
    );
});

gulp.task('build:clean', function () {
    return gulp.src([paths.buildDestination + '*'], { read: false })
    .pipe(clean());
});

gulp.task('build:html', function (done) {
    fs.readFile('./wwwroot/index.html', 'utf8', function (err, data) {
        if (err !== null) { throw err; }

        let result = data
          .replace(/<!--DEV[\s\S]*?DEV-->/g, '')
          .replace('<!--Production', '')
          .replace('Production-->', '')
          .replace(/\ \ +/g, '')
          .replace(/(\n\r|\n|\r)/g, '');

        fs.writeFile('./dist/index.html', result, 'utf8', function (err) {
            if (err !== null) { throw err; }
            done();
        });
    });
});

gulp.task('build:js', ['bundle:js'], function () {
    return gulp.src('./dist/app.js')
      .pipe(ngAnnotate())
      .pipe(uglify())
      .pipe(rename('app.min.js'))
      .pipe(gulp.dest('./dist/'));
});

gulp.task('bundle:js', ['templates'], function (done) {
    exec('cd wwwroot && jspm bundle-sfx main.js ../dist/app.js --skip-source-maps',
      function (err) {
          if (err !== null) { throw err; }
          done();
      }
    );
});

gulp.task('build:rev', ['build:revfiles'], function () {
    const manifest = gulp.src('./dist/rev-manifest.json');
    return gulp.src('./dist/index.html')
      .pipe(revReplace({ manifest: manifest }))
      .pipe(gulp.dest('./dist'));
});

gulp.task('build:revfiles', function () {
    return gulp.src('./dist/app.min.js')
      .pipe(rev())
      .pipe(gulp.dest('./dist'))
      .pipe(rev.manifest())
      .pipe(gulp.dest('./dist'));
});

gulp.task('build:cleanup', function (done) {
    //exec('rm ./dist/app.js ./dist/app.min.js ./dist/rev-manifest.json', function (err) {
    //    if (err !== null) { throw err; }
    //    done();
    //});

    done();
});


gulp.task('watch', function () {
    gulp.watch(['./wwwroot/app/**/*.html'], ['html']);
    gulp.watch(['./wwwroot/app/**/*.js'], ['js']);
});


gulp.task('connect', function () {
    connect.server({
        root: 'wwwroot',
        livereload: true
    });
});

gulp.task('serve', [
  'connect',
  'watch'
]);


gulp.task('ServeProduction', ['build'], function () {
    connect.server({
        root: 'dist'
    });
});






//gulp.task('buildJsAndRender', function () {
//    var builder = new Builder({
//        baseURL: "./"
//    });
//    builder.loadConfig('config.js').then(function () {
//        var source = path.join(appPath, 'app');
//        var destination = path.join(buildAssetPath, 'bundle/app.min.js');
//        var compileJs = builder.buildSFX(source, destination, {
//            minify: true,
//            sourceMaps: false
//        });

//        compileJs.then(function () {
//            gulp.src(path.join(buildAssetPath, 'bundle/app.min.js'))
//              .pipe(rev())
//              .pipe(gulp.dest(path.join(buildAssetPath, 'bundle')))
//              .on('end', function () {
//                  exec('rm ' + path.join(buildAssetPath, 'bundle/app.min.js'), function () {
//                      render();
//                  });
//              });
//        });
//    });
//});