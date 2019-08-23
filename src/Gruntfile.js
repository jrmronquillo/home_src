module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      sass: {
        files: ['sass/*.scss'],
        tasks: ['sass'],
      },
    },

    sass: {
      // Task
      dist: {
        // Target
        files: {
          // Dictionary of files
          'css/app2.css': 'sass/source.scss', // 'destination': 'source'
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
};
