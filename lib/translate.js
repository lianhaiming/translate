const request = require('request');
const chalk = require('chalk');
const parseEngBody = require('./parseBody').parseEngBody;
function translate(word, language = '') {
    if (!word) {
        console.log(chalk.yellow('bikaqiu... please input a word'));
        console.log(chalk.yellow('example: tl [word]'));
        return;

    }
    let encodeWord = encodeURIComponent(word);
    const translateURL = `http://www.youdao.com/w/${language}/${encodeWord}`;
    request({
        method: 'GET',
        url: translateURL,
        headers: {
            'User-Agent': 'request'
        }
    }, (err, res, body) => {
        let result = parseEngBody(body);
        console.log(result);
    });
}

module.exports = translate;