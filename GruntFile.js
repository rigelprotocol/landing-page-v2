const { task } = require("grunt");

module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            css: {
                src: ['./src/css/**/*.css'],
                dest: 'dest/css/app.min.css'
            },
            js: {
                src: ['./src/js/jquery.js','./src/js/**/*.js'],
                dest: 'dest/js/app.min.js'
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    './dest/css/app.min.css': ['./dest/css/app.min.css']
                }
            }
        },
        purgecss: {
            my_target: {
                options: {
                    content: ['./dest/**/*.html', './src/js/**.js']
                },
                files: {
                    './dest/css/app.min.css': ['dest/css/app.min.css']
                }, 
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['./src/css/**/*.css'],
                tasks: ['concat:css']
            },
            js: {
                files: ['./src/js/**/*.js'],
                tasks: ['concat:js']
            }
        },
        express: {
            all: {
                options: {
                    port: 8000,
                    hostname: 'localhost',
                    bases: ["./dest"],
                    livereload: true,
                },
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-purgecss');
    grunt.loadNpmTasks('grunt-express');

    grunt.registerTask('default', ['concat', 'express', 'watch']);
    grunt.registerTask('build', ['concat', 'purgecss', 'cssmin']);

};