module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        // Configuração do LESS
        less: {
            development: {
                files: {
                    'dist/styles/main.css': 'src/styles/main.less'
                }
            }
        },

        // Configuração do Uglify (compressão de JS)
        uglify: {
            dist: {
                files: {
                    'dist/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }
    });

    // Tarefa personalizada
    grunt.registerTask('olaGrunt', function() {
        console.log('Olá, Grunt!');
    });

    // Carregar plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Tarefa padrão
    grunt.registerTask('default', ['olaGrunt', 'less', 'uglify']);
};

