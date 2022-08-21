const gulp = require('gulp');
const del = require('del');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

gulp.task('Clean', () => {
    return del([
        './build/*',
    ]);
});

gulp.task('Bundle', function() {
    return gulp.src('./dist/solias-components/*.js')
      .pipe(concat('elements.js'))
      .pipe(gulp.dest('./build/'));
  });

gulp.task('Copy CSS', async() => {
    return gulp.src([
            './dist/solias-components/styles.css'
        ]).pipe(gulp.dest('./build/'));
});

gulp.task('Config Release', async() => {
    return gulp.src([
            './common/*'
        ])
        .pipe(gulp.dest('./build/'));
});

gulp.task('default', gulp.series(['Clean', 'Bundle', 'Copy CSS', 'Config Release']));
