const gulp = require('gulp');

gulp.task('deploy', () => {
  Promise.resolve()
    .then(() => require('./app').start());
});
