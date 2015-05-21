module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-typescript');
    grunt.registerTask('default', [
        'typescript:qqmodule',
        'typescript:default'
    ]);


    grunt.initConfig({
        // https://github.com/k-maru/grunt-typescript
    	typescript:{
            qqmodule:{
                src:[
                    'htdocs/src/qq/Q.ts'
                    ],

                dest:'htdocs/public/gruntout/qq_Q.js',
                options:{
                    basePath:'htdocs/src',
                    target: 'es5',
                    sourceMap: false,
                    declaration: true
                }
            },
            default:{
    			src:[
                    'htdocs/src/kk/main.ts'
                    ],

    			dest:'htdocs/public/gruntout/app.js',
    			options:{
                    basePath:'htdocs/src',
                    target: 'es5',
                    sourceMap: false
    			}
    		}
    	}
    });
}
