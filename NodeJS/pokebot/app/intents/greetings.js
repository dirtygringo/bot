var greetings = (function () {
    'use strict';

    var random = array => {
        return array[Math.floor(Math.random() * array.length)]
    };

    var getGreetings = () => {
        const answers = [
            'Hello',
            'Hi',
            'Nice to see you',
            'Welcome',
            'Hi how can I help you?'
        ];
        return random(answers);
    };

    return {
        getGreetings: getGreetings
    }
}());

/* other option
const random = array => { return array[Math.floor(Math.random() * array.length )]};
const getGreetings = () => {
    const answers = [
        'Hi'
    ];
    return random(answers);
}
module.exports = getGreetings;
*/
