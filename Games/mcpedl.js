const cheerio = require('cheerio');
const axios = require('axios');

async function mcpedl(mods) {
  try {
    const ress = await axios.get(`https://mcpedl.org/?s=${mods}`);
    const $ = cheerio.load(ress.data);

    const result = [];

    $('.g-block.size-20').each((index, element) => {
      const title = $(element).find('.entry-title a').text();
      const url = $(element).find('.entry-title a').attr('href');
      const imageUrl = $(element).find('.post-thumbnail img').attr('data-src');
      
      const ratingWidth = $(element).find('.rating-wrapper .rating-box .rating-subbox').attr('style');
      const rating = ratingWidth ? parseInt(ratingWidth.split(':')[1]) / 100 * 5 : 0;

      result.push({
        title,
        url,
        imageUrl,
        rating: rating,
      });
    });

    return result;
  } catch (error) {
    console.error('Error:', error.message);
    return [];
  }
}

async function mcpedlDetail(url) {
  const ress = await axios.get(url);
  const $ = cheerio.load(ress.data);

  const title = $('.entry-title').text().trim();
  const version = $('.entry-subtitle .version').text().trim();
  const miniDesc = $('.entry-minidesc span').text().trim();
  const ratingValue = $('.meta-rating .rating-text').text().match(/Rating: ([\d\.]+)\/5/);
  const votes = $('.meta-rating .rating-text').text().match(/(\d+) votes/);

  const rating = ratingValue ? ratingValue[1] : null;
  const voteCount = votes ? votes[1] : null;

  const commentsLink = $('.meta-comments-link').attr('href');

  return {
    title,
    version,
    miniDesc,
    rating,
    voteCount,
    commentsLink
  };
}

module.exports = { mcpedl, mcpedlDetail }
