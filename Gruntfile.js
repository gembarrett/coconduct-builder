module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'dest/main.css': 'src/main.scss'
        }
      }
    },
    uglify: {
      compress: {
        files: {
          'dest/main.min.js': ['src/*.js']
        },
        options: {
          mangle: false
        }
      },
    },
    watch: {
      styling: {
        files: ['src/**/*.scss'],
        tasks: 'sass'
      },
      script: {
        files: ['src/*.js'],
        tasks: 'uglify'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['sass', 'uglify', 'watch']);

};