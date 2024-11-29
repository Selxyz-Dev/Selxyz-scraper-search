import axios from 'axios';
import * as cheerio from 'cheerio';

async function anichin(search) {
  try {
    const response = await axios.get(`https://anichin.date/?s=${encodeURIComponent(search)}`);
    const $ = cheerio.load(response.data);
    const results = [];

    $("div.listupd article.bs").each((i, el) => {
      const title = $(el).find("div.bsx a").attr("title");
      const url = $(el).find("div.bsx a").attr("href");
      const type = $(el).find("div.typez").text().trim();
      const status = $(el).find("span.epx").text().trim();
      const subtitle = $(el).find("span.sb").text().trim();
      const image = $(el).find("img").attr("src");

      results.push({ title, url, type, status, subtitle, image });
    });

    return results;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return [];
  }
}

async function anichinDetail(detailUrl) {
  try {
    const response = await axios.get(detailUrl);
    const $ = cheerio.load(response.data);

    const title = $(".infox h1.entry-title").text().trim();

    const info = {};
    $(".infox .spe span").each((i, el) => {
      const label = $(el).find("b").text().replace(":", "").trim();
      const value = $(el).find("a").text().trim() || $(el).text().replace(label, "").trim();
      info[label.toLowerCase()] = value;
    });

    const genres = [];
    $(".infox .genxed a").each((i, el) => {
      genres.push($(el).text().trim());
    });

    const synopsis = $(".bixbox.synp .entry-content").text().trim();

    const episodes = [];
    $(".eplister ul li").each((i, el) => {
      episodes.push({
        episodeNumber: $(el).find(".epl-num").text().trim(),
        title: $(el).find(".epl-title").text().trim(),
        subtitle: $(el).find(".epl-sub .status").text().trim(),
        releaseDate: $(el).find(".epl-date").text().trim(),
        url: $(el).find("a").attr("href"),
      });
    });

    return {
      title,
      status: info["status"],
      network: info["network"],
      released: info["released"],
      duration: info["duration"],
      season: info["season"],
      country: info["country"],
      type: info["type"],
      genres,
      synopsis,
      episodes,
    };
  } catch (error) {
    console.error("Error fetching anime details:", error.message);
    return null;
  }
}


export { anichinDetail, anichin }