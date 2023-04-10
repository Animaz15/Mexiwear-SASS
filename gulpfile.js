const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const plumber = require("gulp-plumber");


function css ( done ) {
        
    src('src/scss/**/*.scss')// Identificar el archivo de SASS
        .pipe( plumber() )
        .pipe( sass() ) // Compliar el archivo
        .pipe(dest('public/build/css')); // Almacenarlo en DD
    
    done();
}

function dev( done ) {
    watch('src/scss/**/*.scss', css);

    done();
}

exports.css = css;
exports.dev = dev;