module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'dest/main.css': 'src/main.scss'
        }
      }
    },
    watch: {
      styling: {
        files: ['src/*.scss'],
        tasks: 'sass'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'watch']);

};