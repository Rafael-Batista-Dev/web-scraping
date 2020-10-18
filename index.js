const request = require('request')
const cheerio = require('cheerio')

request('https://www.globo.com/', function(error, response, body){
 if (error) throw new Error(error);

 const $ = cheerio.load(body);
 const scrapedData = [];

 $('ol.hui-color-sports > li.hui-highlight-title').each((index, element) => {

    const titulo = $(element).find('a.topglobocom__content-title').attr('title'); 
    const link = $(element).find('a.topglobocom__content-title').attr('href'); 
    const print = { titulo, link };
    scrapedData.push(print);

  });
  
  console.log(scrapedData);
})