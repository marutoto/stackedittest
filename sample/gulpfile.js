console.log('exec gulp!');

var gulp = require('gulp');

gulp.task('default', function () {
  gulp.start('ts');
});

// task for PC TypeScript
gulp.task('ts', function(){
  gulp.src(['htaccess/src/main.ts'])
    .pipe($.plumber())
    .pipe($.tsc({
      target: "ES5"
    }))
    .pipe($.ngAnnotate())
    .pipe($.if(!isRelease, gulp.dest('htdocs/gulpout/')))
    .pipe($.concatSourcemap('app.js', {
        prefix: 3,
    }))
    .pipe($.if(isRelease, $.uglify({
      preserveComments: 'some'
    })))
    .pipe(gulp.dest('public/js/pc/'));
});
