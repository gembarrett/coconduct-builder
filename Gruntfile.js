module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'dest/main.css': 'src/main.scss'
        }
      }
    },
    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          'dest/index.html': ['src/*.jade']
        }
      }
    },
    watch: {
      styling: {
        files: ['src/*.scss'],
        tasks: 'sass'
      },
      templates: {
        files: ['src/*.jade'],
        tasks: 'jade'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');

  grunt.registerTask('default', ['sass', 'jade', 'watch']);

};