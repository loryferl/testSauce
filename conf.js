// conf.js
var username = "loryferl",
    accessKey = "d825e7a1-019e-43d9-8c70-8dbce9fb8918";
exports.config = {
    framework: 'jasmine',

    sauceUser: username,
    sauceKey: accessKey,

     specs: [
        //TODO: add here other suites
        './exercise1/calculator.solution.js',
        './exercise2/todo.solution.js'
    ],

    params: {
        //TODO: add global params here
        exercise1: {
            url: 'http://pfy.cloud.reply.eu/protractor/ex1/'
        },
        exercise2: {
            url: 'http://pfy.cloud.reply.eu/protractor/ex2/'
        }
    }

};
