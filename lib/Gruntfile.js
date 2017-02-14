module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      js: {
        src: ['../scripts/main.js'],
        dest: '../dist/app.js'
      },
      options: {
        transform: ["hbsfy"],
        browserifyOptions: {
          paths: [
            "./node_modules"
          ]
        }
      }
    },
    jshint: {
      options: {
        predef: [ "document", "console", "$"],
        esnext: true, //'esnext' option is deprecated, use 'esversion'
        forin: true, //throws an error if you don't iterate over
               //own properties
        browserify: true,
        jquery: true, //makes the jquery not throw the errors
        globalstrict: true, //requires '"use strict";'' at global level
        undef: true, //throws error for variables that are left undefined
              //at instantiation; this catches lots of typo errors
        globals: []
      },
      files: ['../scripts/**/*.js']
    },
    sass: {
      dist: {
        files: {
          '../css/styles.css': '../sass/styles.scss'
        }
      }
    },
    copy: {
      jquery: {
        expand: true,
        cwd: 'node_modules/jquery/dist',
        src: ['jquery.min.js'],
        dest: '../dist'
      },
      materialize: {
        expand: true,
        cwd: 'node_modules/materialize-css/dist/',
        src: ['**'],
        dest: '../dist'
        },
    },
    watch: {
      javascripts: {
        files: ['../scripts/**/*.js'],
        tasks: ['jshint', 'browserify']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      },
      hbs: {
        files: ['../templates/**/*.hbs'],
        tasks: ['browserify']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'copy', 'watch']);
};