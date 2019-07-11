'use strict'

const cheerio = require('cheerio');
const chalk = require('chalk');
function filter(text) {
    if (!text) return '';
    return text.trim().replace(/\s+/g, ' ') + '\n';  
}
function parseEngBody(body) {
    const $ = cheerio.load(body);
    let keyWord = $('.wordbook-js > .keyword').text();
    let wordGroup = '';
    $('ul .wordGroup .search-js').each((i, el) => {
        wordGroup += $(el).text() + ' ; ';
    });
    let bilingual = '';
    $('#bilingual .ol li').each((i, el) => {
        $(el).find('p').each((index, pel) => {
            bilingual += `\n${chalk.green($(pel).text().trim())}`
        });
        bilingual += '\n';
    });
    let result = `\n${chalk.yellow(keyWord)}\n\n${chalk.green(wordGroup) || chalk.red('查询不到该词哟～')}\n\n${chalk.yellow('双语例句')}\n ${bilingual}`
    return result;

}

module.exports = {
    parseEngBody
};