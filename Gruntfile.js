
//Setting grunt
module.exports = function(grunt){

    //Setting Init Config from package.json
    grunt.initConfig({

        //Read package.json and assign it to 'pkg'
        pkg: grunt.file.readJSON('package.json'),


        uglify: {
              options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
              },
              build: {
                src: 'src/echo.js',
                dest: 'build/echo.min.js'
           }
        }
    });

    // Load "uglify" task
    grunt.loadNpmTasks('grunt-contrib-uglify')

    // Load default task
    grunt.registerTask('default', ['uglify'])

};