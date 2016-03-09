module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      dev: {
        options: {
          paths: ["."]
        },
        files: {
          "styles/style.css": "styles/style.less",
        },
      }
    },
    cssmin: {
      dist: {
        files: {
          'dist/style.min.css': ["styles/style.css", "styles/clifton-io.css"],
        }
      }
    },
    uglify: {
      target: {
        files: {
          'dist/app.min.js': [
            "bower_components/respond/dest/respond.src.js",
            "bower_components/html5shiv/dist/html5shiv.js",
            "bower_components/bootstrap/dist/js/bootstrap.js"
          ]
        }
      }
    },
    copy: {
      main: {
        files: [
          { expand: true, flatten: true, src: ['bower_components/bootstrap/dist/fonts/*'], dest: 'dist/fonts/' },
          { expand: true, flatten: true, src: ['languages/*'], dest: 'dist/languages/' },
          { expand: true, src: ['*.php'], dest: 'dist/' },
          { expand: true, src: ['screenshot.jpg'], dest: 'dist/' }
        ]
      }
    },
    secret: grunt.file.readJSON('secret.json'),
    environments: {
      options: {
        local_path: 'dist',
        current_symlink: '<%= pkg.name %>',
        deploy_path: '/home/<%= secret.production.username %>/blog.clifton.io/wp-content/themes',
        release_root: '<%= pkg.name %>-releases'
      },
      production: {
        options: {
          host: '<%= secret.production.host %>',
          username: '<%= secret.production.username %>',
          password: '<%= secret.production.password %>',
          port: '<%= secret.production.port %>',
          releases_to_keep: '10'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-ssh-deploy');

  grunt.registerTask('default', ['less', 'cssmin', 'uglify', 'copy']);
  grunt.registerTask('deploy', ['default', 'ssh_deploy:production']);
};