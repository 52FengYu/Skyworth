// 编写gulp的任务
// CommonJS 规范
const gulp = require("gulp");
gulp.task("copy-html", function(){
	return gulp.src("*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})

//拷贝所有的图片
gulp.task("images", function(){
	return gulp.src(["*.{jpg,png}", "images/*.jpg"])
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})

//拷贝.js文件 用了jquery禁止压缩
gulp.task("scripts", function(){
	return gulp.src(["*.js", "!gulpfile.js"])
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})
//拷贝css
/*gulp.task("sass",function(){
	return gulp.src(["*.css"])
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
*/
// 数据
gulp.task("data", function(){
	return gulp.src(["*.json","*.php","!package.json"])
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
})

//上述所有任务都是用来处理静态资源
gulp.task("build", ["copy-html", "images", "scripts", "data"], function(){
	console.log("项目建立成功");
})

//编译scss文件  gulp-sass gulp-minify-css gulp-rename
const sass = require("gulp-sass");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");
gulp.task("sass", function(){
	return gulp.src("stylesheet/index.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("index.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

//监听
gulp.task("watch", function(){
	gulp.watch("*.html", ["copy-html"]);
	gulp.watch(["*.{jpg,png}", "images/*.jpg"], ['images']);
	gulp.watch(["*.js", "!gulpfile.js"], ["scripts"]);
	gulp.watch(["*.json", "*.php","!package.json"], ["data"]);
	gulp.watch("stylesheet/index.scss", ['sass']);
})


const connect = require("gulp-connect");
gulp.task("server", function(){
	connect.server({
		root: "dist", //根目录
		port: 6321,
		livereload: true
	})
})


//同时启动watch和server
gulp.task("default", ["watch", "server"]);



















