module.exports = function(grunt){
  grunt.initConfig({
    jade: {
      compile: {
        files: [{
          cwd: 'source',
          src: ['**/*.jade', '!partials/**/*.jade'],
          dest: 'dest',
          expand: true,
          ext: '.html',
        }]
      },
      options: {
        pretty: true,
      }
    },
    stylus: {
      compile: {
        files: [{
          cwd: 'source/css',
          src: '**/*.styl',
          dest: 'dest/css',
          expand: true,
          ext: '.css',
        }]
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'source/img',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'dest/img',
        }]
      }
    },
    copy: {
      css: {
        files: [{
          cwd: 'source/css',
          src: ['**/*.css'],
          dest: 'dest/css',
          expand: true,
        }]
      },
      js: {
        files: [{
          cwd: 'source/js',
          src: ['**/*.js'],
          dest: 'dest/js',
          expand: true,
        }]
      },
    },
    watch: {
      livereload: {
        options: {
          livereload: true
        },
        files: ['dest/**/*'],
      },
      js: {
        files: ['source/js/**/*.js'],
        tasks: ['copy:js'],
      },
      css: {
        files: ['source/css/**/*.css'],
        tasks: ['copy:css'],
      },
      jade: {
        files: ['source/**/*.jade', '!partials/**/*.jade'],
        tasks: ['jade'],
      },
      stylus: {
        files: ['source/css/**/*.styl'],
        tasks: ['stylus'],
      },
      imagemin: {
        files: ['source/img/**/*.{png,jpg,gif}'],
        tasks: ['imagemin'],
      }
    },
    connect: {
      server: {
        options: {
          port: 3000,
          base: 'dest',
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', [
    'connect', 
    'copy', 
    'jade', 
    'stylus',
    'imagemin',
    'watch', 
  ]);
};
