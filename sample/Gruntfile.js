module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-typescript');
    grunt.registerTask('default', [
        'typescript:qmodule',
        'typescript:default'
    ]);


    grunt.initConfig({
        // https://github.com/k-maru/grunt-typescript
    	typescript:{
            qmodule:{
                src:[
                    'htdocs/src/q_Q.ts'
                    ],

                dest:'htdocs/q_q.js',
                options:{
                    basePath:'htdocs/src',
                    target: 'es5',
                    sourceMap: false,
                    declaration: true
                }
            },
            default:{
    			src:[
                    'htdocs/src/main.ts'
                    ],

    			dest:'htdocs/main.js',
    			options:{
                    basePath:'htdocs/src',
                    target: 'es5',
                    sourceMap: false
    			}
    		}
    	}
    });
}
