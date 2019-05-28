'use strict'

const cheerio = require('cheerio');
const chalk = require('chalk');
function filter(text) {
    if (!text) return '';
    return text.trim().replace(/\s+/g, ' ') + '\n';  
}
function parseYouDao(body) {
    const $ = cheerio.load(body);
    let result = '\n';
    result += chalk.yellow(filter($('#phrsListTab > .wordbook-js').text()));
    $('.trans-container > ul').find('p.wordGroup').each(function(index, el) {
        $(this).find('span').each(function(i) {
            result += chalk.green($(this).text().replace(/\s+/g, ' ')) + '  ';
        });
        result += '\n';
    });
    return result;

}

module.exports = {
    parseYouDao
};