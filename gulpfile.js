var gulp = require('gulp')
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	plumber = require('gulp-plumber'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	concat = require('gulp-concat'),
	del = require('del');
//// JS

gulp.task('scripts', function() {
    gulp.src(['app/app.js', 'app/scripts/main.js','app/controllers/*.js'])
    	.pipe(concat('scripts.js'))
    	.pipe(plumber())
    	.pipe(rename({suffix: '.min'}))
        .pipe(uglify({ mangle: { toplevel: true } }))
        .pipe(gulp.dest('app'))
		.pipe(reload({stream: true}));
});

// STYLES

gulp.task('styles', function () {
	gulp.src('app/styles/*.css')
    	// .pipe(plumber());
		.pipe(reload({stream: true}));
});

// VIEWS

gulp.task('views', function () {
	gulp.src('app/**/*.html')
		// .pipe(gulp.dest('build'))
		.pipe(reload({stream: true}));
});

// BROWSER-SYNC
gulp.task('browser-sync', function () {

	browserSync({
        server: {
            baseDir: "./app/"
        }
    });
});


gulp.task('watch', function () {
	gulp.watch('app/**/*.js', ['scripts']);
	gulp.watch('app/controllers/*.js', ['scripts']);
	gulp.watch('app/styles/*.css',['styles']);
	gulp.watch('app/**/*.html',['views']);
});


gulp.task('default', ['scripts','styles','views','browser-sync','watch']);
