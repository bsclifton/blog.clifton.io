module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      dev: {
        options: {
          paths: ["."]
        },
        files: {
          'dist/style.css': 'styles/style.less'
        },
      }
    },
    cssmin: {
      dist: {
        files: {
          'dist/style.min.css': [
            'dist/style.css'
          ],
        }
      }
    },
    uglify: {
      target: {
        files: {
          'dist/app.min.js': [
            'bower_components/respond/dest/respond.src.js',
            'bower_components/html5shiv/dist/html5shiv.js',
            'bower_components/bootstrap/dist/js/bootstrap.js',
            'node_modules/clifton-io-website/js/app.js'
          ]
        }
      }
    },
    copy: {
      main: {
        files: [
          { expand: true, flatten: true, src: ['bower_components/bootstrap/dist/fonts/*'], dest: 'dist/fonts/' },
          { expand: true, flatten: true, src: ['bower_components/font-awesome/fonts/*'], dest: 'dist/fonts/' },
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
        current_symlink: 'blog.clifton.io-theme',
        deploy_path: '/srv/',
        release_root: 'blog.clifton.io-theme-releases'
      },
      production: {
        options: {
          host: '<%= secret.production.host %>',
          username: '<%= secret.production.username %>',
          privateKey: require('fs').readFileSync('C:/cygwin64/home/Brian/.ssh/id_rsa'),
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