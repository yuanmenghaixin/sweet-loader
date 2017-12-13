const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const requireDir  = require('require-dir');
requireDir('./', { recurse: true });

gulp.task('watch', function () {
  gulp.watch('src/assets/fonts/**/*', ['fonts'], function () { browserSync.reload(); });
  gulp.watch('src/assets/json/**/*', ['json'], function () { browserSync.reload(); });
  gulp.watch('src/assets/images/**/*', ['images'], function () { browserSync.reload(); });
  gulp.watch('src/modules/**/locale/*', ['locale']);
});
