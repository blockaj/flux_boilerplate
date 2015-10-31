var gulp = require("gulp"),
	browserify = require("browserify"),
	source = require("vinyl-source-stream"),
	reactify = require("reactify"),
	less = require("gulp-less"),
	watch = require("gulp-watch")
	babelify = require("babelify");

gulp.task("browserify", function () {
	return browserify("./public/js/app.js")
		.transform(require("reactify"))
		.bundle()
		.pipe(source("bundle.js"))
		.pipe(gulp.dest("./public/js/"));
});

gulp.task("less", function () {
	return gulp.src("./public/less/app.less") 
		.pipe(less())
		.pipe(gulp.dest("./public/less/"));
});

gulp.task("watch", function () {
	gulp.watch("./public/js/**/*.js", ["browserify"]);
	gulp.watch("./public/less/*.less", ["less"]);
});

gulp.task("default", ["browserify", "less"]);