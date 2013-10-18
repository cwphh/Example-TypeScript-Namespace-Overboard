module.exports = function(grunt) {

    // Load Grunt tasks declared in the package.json file
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({

        // This will load in our package.json file so we can have access
        // to the project name and appVersion number.
        pkg: grunt.file.readJSON('package.json'),

        // Constants for the Gruntfile so we can easily change the path for
        // our environments.
        BASE_PATH: '../',
        DEVELOPMENT_PATH: '../scripts/',

        // A code block that will be added to all our minified code files.
        // Gets the name and appVersion from the above loaded 'package.json' file.
        // Usage: <%= banner.join("\\n") %>
        banner: [
                 '/*',
                 '* Project: <%= pkg.name %>',
                 '* Version: <%= pkg.appVersion %> (<%= grunt.template.today("yyyy-mm-dd") %>)',
                 '* Development By: <%= pkg.developedBy %>',
                 '* Copyright(c): <%= grunt.template.today("yyyy") %>',
                 '*/'
        ],

        typescript: {
            main: {
                src: ['<%= DEVELOPMENT_PATH %>' + 'Main.ts'],
                dest: '<%= BASE_PATH %>' + 'scripts/_compiled/main.js',
                options: {
                    target: 'es3', //or es5
                    base_path: '',
                    sourcemap: false,
                    declaration: false,
                    nolib: false,
                    comments: false
                }
            }
        }

    });

    // Grunt tasks.
    grunt.registerTask('default', ['typescript']);

};