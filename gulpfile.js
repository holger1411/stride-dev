import gulp from 'gulp';
import plumber from 'gulp-plumber';
import cleanCSS from 'gulp-clean-css';
import dartSass from 'gulp-dart-sass';
import clean from 'gulp-clean';
import browserSync from 'browser-sync';
import rename from 'gulp-rename';
import imgopt from 'gulp-smushit';
import purgecss from 'gulp-purgecss';
import htmlmin from 'gulp-htmlmin';
import htmlreplace from 'gulp-html-replace';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const cfg = require('./gulpconfig.json');
const paths = cfg.paths;

const bs = browserSync.create();

gulp.task('dist-assets', function (done) {
    gulp.src('./src/js/**.*')
        .pipe(gulp.dest('./dev/js'));
    gulp.src('./src/img/**/**.*')
        .pipe(gulp.dest('./dev/img'));
    done();
});

gulp.task('prod-copy', function (done) {
    gulp.src('./dev/**/**.*')
        .pipe(gulp.dest('./public/'));
    done();
});

gulp.task('minify-css', () => {
    return gulp
        .src('dev/css/*.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dev/css'))
        .pipe(bs.stream());
});

// minifies HTML
gulp.task('minify-html', () => {
    return gulp.src('public/*.html')
        .pipe(htmlmin({ collapseWhitespace: false, removeComments: true }))
        .pipe(gulp.dest('public'));
});

// Purging unused CSS
gulp.task('purgecss', () => {
    return gulp.src('public/css/theme.min.css')
        .pipe(purgecss({
            content: ['public/**/*.html'],
            safelist: [
                'collapsed', 'collapse', 'active', 'show', 'showing',
                'collapsing', 'modal-open', 'modal-backdrop',
                'offcanvas-backdrop', 'fade', 'start',
                // Bootstrap 5.3 additions
                'text-body-secondary', 'text-body-tertiary', 'text-body-emphasis',
                'link-body-emphasis', 'link-underline', 'link-underline-opacity-0',
                'focus-ring', 'icon-link',
                // Data attributes for color modes
                /\[data-bs-theme.*\]/
            ]
        }))
        .pipe(gulp.dest('public/css'));
});

gulp.task('clean-dist', function () {
    return gulp.src('dist', {
        read: false,
        allowEmpty: true
    })
        .on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(clean());
});

gulp.task('clean', function () {
    return gulp.src('dev/scss', {
        read: false,
        allowEmpty: true
    })
        .on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(clean());
});

gulp.task('browser-sync', function (done) {
    bs.init({
        server: {
            baseDir: "./dev"
        }
    });
    gulp.watch("dev/**/*.*").on('change', bs.reload);
    done();
});

// Compile sass to css
gulp.task('sass', function () {
    return gulp.src('src/scss/theme.scss')
        .pipe(dartSass().on('error', dartSass.logError))
        .pipe(gulp.dest('dev/css'));
});

gulp.task('inject-min-css', function (done) {
    gulp.src('./public/**/*.html')
        .pipe(htmlreplace({
            'css': 'css/theme.min.css'
        }))
        .pipe(gulp.dest('./public'));
    done();
});

gulp.task('inject-css', function (done) {
    gulp.src('./dev/**/*.html')
        .pipe(htmlreplace({
            'css': 'css/theme.css'
        }))
        .pipe(gulp.dest('./dev'));
    done();
});

gulp.task('imgopt', function () {
    return gulp.src('src/img/*.{jpg,png}')
        .pipe(imgopt())
        .pipe(gulp.dest('public/img'));
});

////////////////// All Bootstrap SASS Assets /////////////////////////
gulp.task('copy-assets', function (done) {
    // Copy all Bootstrap JS files
    gulp.src(paths.node + '/bootstrap/dist/js/**/*.*')
        .pipe(gulp.dest(paths.dev + '/js'));

    // Copy all Bootstrap SCSS files
    gulp.src(paths.node + '/bootstrap/scss/**/*.scss')
        .pipe(gulp.dest(paths.dev + '/scss/assets/bootstrap'));

    // Copy all Animate on Scroll css files
    gulp.src(paths.node + '/aos/dist/**/*.css')
        .pipe(gulp.dest(paths.dev + '/scss/assets/aos'));

    // Copy all Animate on Scroll js files
    gulp.src(paths.node + '/aos/dist/**/*.js')
        .pipe(gulp.dest(paths.dev + '/js'));

    done();
});
