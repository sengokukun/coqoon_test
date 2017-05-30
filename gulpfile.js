////////////////////////////////////////////////////
// gulp module
////////////////////////////////////////////////////

var gulp = require("gulp");
var browser = require("browser-sync"); // ブラウザ更新
var autoprefixer = require("gulp-autoprefixer"); // ベンダープレフィックス
var plumber = require("gulp-plumber"); // エラーで止めない
var sass = require("gulp-sass"); // sass
var combineMq = require('gulp-combine-mq');
var uglify = require("gulp-uglify"); //js
var imagemin = require("gulp-imagemin"); //img
var imageminPngquant = require('imagemin-pngquant');
var htmlmin = require('gulp-htmlmin'); //html圧縮
var ejs = require("gulp-ejs");
var rename = require("gulp-rename");
var fileSystem = require('fs');
////////////////////////////////////////////////////


// server
gulp.task("server", function() {
  browser({
    server: {
      baseDir: "./dist/"
    }
  })
});


// scss
gulp.task("sass", ['server'], function() {
    // gulp.src('./src/scss/**/!(_)*.scss')
  gulp.src('./src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browser.reload({
      stream: true
  }));
});

gulp.task('combineMq', function () {
    return gulp.src('./dist/css/style.css')
    .pipe(combineMq({
        beautify: false
    }))
    .pipe(gulp.dest('./dist/css'));
});

// js圧縮
gulp.task("uglify", function() {
  gulp.src(["./src/js/**/*.js","!./src/js/min/**/*.js","./src/js/ie8/**/*.js"])
  .pipe(plumber())
  .pipe(uglify())
  .pipe(gulp.dest("./dist/js"))
  .pipe(browser.reload({
    stream: true
  }));
});

// img圧縮
gulp.task('imagemin', function() {
  return gulp.src('src/img/*.{png,jpg,svg,webp,ico,gif}')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [imageminPngquant()]
    }))
    .pipe(gulp.dest('./dist/img'));
});

// html圧縮
gulp.task('htmlmin', function() {
  return gulp.src('dist/**/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('./dist/'))
  .pipe(browser.reload({
    stream: true
  }));
});

// gulp.task("ejs", function() {
//     var json = JSON.parse(fs.readFileSync("./src/pages.json")); //追記
//     gulp.src(
//        ["./src/ejs/**/*.ejs",'!' + "./src/ejs/**/_*.ejs"] //参照するディレクトリ、出力を除外するファイル
//     )
//     .pipe(plumber())
//     .pipe(ejs(json)) //jsonを追記
//     .pipe(rename({extname: ".html"})) //拡張子をhtmlに
//     .pipe(gulp.dest("dist/")) //出力先
//     .pipe(browser.reload({
//       stream: true
//     }));
// });

gulp.task('ejs', function () {
  gulp.src(
    ["./src/ejs/**/*.ejs",'!' + "./src/ejs/**/_*.ejs"]
  )
  .pipe(plumber())
  .pipe(ejs(
    {
      json: JSON.parse(fileSystem.readFileSync('./src/data/pages.json')),
      header: require('./src/data/header.js'),
      footer: require('./src/data/footer.js'),
      loop: require('./src/data/loop.js'),
      com: require('./src/data/com.js'),
      product: require('./src/data/top_gallery.js'),
      qa: require('./src/data/question.js')
    }
  ))
  .pipe(rename({extname: ".html"}))
  .pipe(gulp.dest('./dist'));
});

// default
gulp.task("default", ["server"], function() {
  gulp.watch(['./src/scss/**/*.scss'], ['sass']);
  gulp.watch(['./src/js/**/*.js', '!./src/js/min/**/*.js'], ['uglify']);
  gulp.watch('./dist/css/**/*css',['combineMq']);
  gulp.watch('./src/**/*.html', ['htmlmin']);
  gulp.watch('./src/img/*',['imagemin']);
  gulp.watch("./src/ejs/**/*.ejs",['ejs']);
});
