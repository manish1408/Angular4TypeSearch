 var gulp = require('gulp');
 var less = require('gulp-less');
 var config = require('../config')();

gulp.task('less', function () {
    return gulp.src(config.assetsPath.styles + 'main.less')
        .pipe(less())
        .pipe(gulp.dest(config.assetsPath.styles));
});

gulp.task('watch-less', function () {
    gulp.watch([config.assetsPath.styles + '**/*.less',config.app + '**/*.less' ], ['less']);
});
