import axios from 'axios';
import * as cheerio from 'cheerio';

async function donghuaworld(search) {
  try {
    const response = await axios.get(`https://donghuaworld.com/?s=${encodeURIComponent(search)}`);
    const $ = cheerio.load(response.data);

    const results = [];
    $(".listupd article.bs").each((i, el) => {
      const element = $(el);

      const title = element.find(".bsx a").attr("title").trim();
      const url = element.find(".bsx a").attr("href").trim();
      const image = element.find(".bsx img").attr("src").trim();
      const status = element.find(".bt .epx").text().trim();
      const subtitle = element.find(".bt .sb").text().trim();
      const type = element.find(".typez").text().trim();

      results.push({ title, url, image, status, subtitle, type });
    });

    return results;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return [];
  }
}

async function donghuaworldDetail(url) {
  try {
    const ress = await axios.get(url);
    const $ = cheerio.load(ress.data);

    const title = $('h1.entry-title').text().trim();
    const image = $('.bigcover .ime img').attr('src');
    const rating = $('.rating strong').text().trim();

    const details = {};
    $('.info-content .spe span').each((_, el) => {
      const [key, value] = $(el).text().split(':').map((s) => s.trim());
      if (key && value) details[key.toLowerCase()] = value;
    });

    const genres = [];
    $('.genxed a').each((_, el) => {
      genres.push($(el).text().trim());
    });

    const description = $('.synp .entry-content p').text().trim();

    const episodes = [];
    $('.eplister ul li').each((_, el) => {
      episodes.push({
        episode: $(el).find('.epl-num').text().trim(),
        title: $(el).find('.epl-title').text().trim(),
        date: $(el).find('.epl-date').text().trim(),
        url: $(el).find('a').attr('href'),
      });
    });

    return {
      title,
      image,
      rating,
      details,
      genres,
      description,
      episodes,
    };
  } catch (error) {
    console.error('Error fetching details:', error.message);
    return null;
  }
}

export { donghuaworld, donghuaworldDetail }