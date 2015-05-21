console.log('exec gulp!');

var gulp = require('gulp');
var gulp_tsc = require('gulp-tsc');
var gulp_concat = require('gulp-concat-sourcemap');

gulp.task('default', function () {
	gulp.start('ts');
});

gulp.task('ts', function() {

	// ※ ファイルパス系のエラーは吐いてくれない -> 何もせずに正常終了
	gulp.src(['htdocs/src/main/main.ts'])
		.pipe(gulp_tsc()) // 指定ファイルをtscコンパイル（リファレンスタグとかから引っ張って、依存んしているもの全部）
		.pipe(gulp_concat('app.js')) // ファイル連結、これないとそれぞれのファイルごとに出色される
		.pipe(gulp.dest('htdocs/public/gulpout'));

});

gulp.task('ts-kk', function() {

	gulp.src(['htdocs/src/kk/_kk_refs.ts'])
		.pipe(gulp_tsc())
		.pipe(gulp_concat('app_kk.js'))
		.pipe(gulp.dest('htdocs/public/gulpout'));

});

gulp.task('ts-ll', function() {

	gulp.src(['htdocs/src/ll/_ll_refs.ts'])
		.pipe(gulp_tsc())
		.pipe(gulp_concat('app_ll.js'))
		.pipe(gulp.dest('htdocs/public/gulpout'));

});
