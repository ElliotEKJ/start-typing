var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var imagemin = require('gulp-imagemin')
var minifyHTML = require('gulp-minify-html')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')
var template = require('gulp-template')
var livereload = require('gulp-livereload')

var meta = {
  theme: {
    name: 'Start Typing',
    version: '1.0.0',
    port: '8000' // Default for `Theme Preview.app`
  },
  styles: {
    src: './src/sass/**/*.scss',
    dest: './theme/assets/s/'
  },
  img: {
    src: './src/images/**/*',
    dest: './theme/assets/i/'
  },
  html: {
    src: './src/html/**/*.html',
    dest: './theme/'
  },
  js: {
    src: './src/javascript/*.js',
    dest: './theme/assets/j/'
  },
  json: {
    src: './src/json/*.json',
    dest: './theme/'
  }
}

gulp.task('styles', function () {
  return gulp.src(meta.styles.src)
    .pipe(sass({
      outputStyle: 'compressed'
    })
    .on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: [
        'Chrome >= 35',
        'Firefox >= 31',
        'Edge >= 12',
        'Explorer >= 9',
        'iOS >= 8',
        'Safari >= 8',
        'Android 2.3',
        'Android >= 4',
        'Opera >= 12'
      ]
    }))
    .pipe(gulp.dest(meta.styles.dest))
    .pipe(livereload(meta.theme.port))
})

gulp.task('images', function () {
  return gulp.src(meta.img.src)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}]
    }))
    .pipe(gulp.dest(meta.img.dest))
    .pipe(livereload(meta.theme.port))
})

gulp.task('html', function () {
  return gulp.src(meta.html.src)
    .pipe(template({
      author: meta.theme.author,
      bio: meta.theme.bio
    }))
    .pipe(minifyHTML())
    .pipe(gulp.dest(meta.html.dest))
    .pipe(livereload(meta.theme.port))
})

gulp.task('uglify', function () {
  return gulp.src(meta.js.src)
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest(meta.js.dest))
    .pipe(livereload(meta.theme.port))
})

gulp.task('json', function () {
  return gulp.src(meta.json.src)
    .pipe(template({
      name: meta.theme.name,
      version: meta.theme.version
    }))
    .pipe(gulp.dest(meta.json.dest))
    .pipe(livereload(meta.theme.port))
})

gulp.task('default', ['styles', 'images', 'html', 'uglify', 'json'], function () {
  livereload.listen(meta.theme.port)
  gulp.watch(meta.styles.src, ['styles'])
  gulp.watch(meta.img.src, ['images'])
  gulp.watch(meta.html.src, ['html'])
  gulp.watch(meta.js.src, ['uglify'])
  gulp.watch(meta.json.src, ['json'])
})
