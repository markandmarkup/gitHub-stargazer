var gulp = require('gulp')
var sass = require('gulp-sass')
var babel = require('gulp-babel')

function sassCompile(cb) {
    return gulp.src('app/scss/styles.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/css'));
    cb();
}

function watch() {
    gulp.watch('app/scss/**/*.scss', sassCompile);
}

gulp.task('babel', () =>
    gulp.src('app/js/es6/index.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('app/js/es5/'))
);


exports.watch = watch;
exports.sass = sassCompile;