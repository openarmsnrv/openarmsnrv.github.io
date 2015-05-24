var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );

gulp.task( 'sass', function() { 
  gulp.src( './content/sass/_bootstrap.scss' )
     .pipe(sass())
     .pipe( gulp.dest( './content/css' ) );
});  

gulp.task( 'watch', function() {
  gulp.watch( './src/sass/**/*.scss', ['sass'] );
});

// The default task (called when you run `gulp` from cli)
gulp.task( 'default', ['watch']);