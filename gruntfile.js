'use strict';
module.exports = function(grunt) {
    
    require('load-grunt-tasks')(grunt);
    
    grunt.initConfig({

        
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            build: {
                files: {
                    'build/css/main.css': 'dev/styles/main.scss'
                }
            }
        },

        watch: {
            html: {
                files: ['index.html', 'dev/html/*.html'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: ['dev/scripts/*.js'],
                tasks: ['uglify'],
                options: {
                    livereload: true
                }
            },
            scss: {
                files: ['dev/styles/*.scss'],
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            }
        },

        uglify: {
            build: {
                files: {
                    'build/scripts/main.min.js': ['dev/scripts/main.js']
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 8000,
                    base: './',
                    livereload: true,
                    open: 'http://localhost:8000'
                }
            }
        }

    });

    grunt.registerTask('default', ['sass', 'uglify', 'connect', 'watch']);
};
