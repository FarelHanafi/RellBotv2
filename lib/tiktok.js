const axios = require("axios");
const cheerio = require("cheerio");

const clean = (data) => {
  let regex = /(<([^>]+)>)/gi;
  data = data.replace(/(<br?\s?\/>)/gi, " \n");
  return data.replace(regex, "");
};

function getRapidApiConfig(url) {
  const apiKey = 'JTJGMCUyRmIlMkY4JTJGMyUyRjglMkY4JTJGYiUyRjclMkY3JTJGNSUyRm0lMkZzJTJGaCUyRjQlMkYwJTJGOCUyRjQlMkY5JTJGOCUyRjYlMkYxJTJGMyUyRjAlMkY4JTJGYiUyRmUlMkY3JTJGMCUyRnAlMkYxJTJGNyUyRmMlMkYwJTJGMyUyRjMlMkZqJTJGcyUyRm4lMkYzJTJGZSUyRjAlMkY4JTJGNSUyRmElMkZkJTJGYyUyRjglMkZlJTJGZiUyRjElMkY=';  // Store the API key in an environment variable
  if (!apiKey) {
      throw new Error("RAPIDAPI_KEY is not defined in environment variables.");
  }
  return {
      headers: {
          "x-rapidapi-key": apiKey,
      },
      params: {
          url: url,
          hd: 1,
      },
  };
}

async function shortener(url) {
  return url;
}

exports.Tiktok = async(query) => {
  const config = getRapidApiConfig(`${text}`);
  const response = await axios.get("https://tiktok-video-no-watermark2.p.rapidapi.com/", config);
  const data = response.data;

  result = {};

  result.creator = "YNTKTS";
  result.title = clean(data.data.title);
  result.author = clean(data.data.author.nickname);
  result.nowm = await shortener(
    (data.data.hdplay.a || "").replace("https", "http")
  );
  result.watermark = await shortener(
    (data.data.hdplay[1].a || "").replace("https", "http")
  );
  result.audio = await shortener(
    (data.data.hdplay[2].a || "").replace("https", "http")
  );
  return result;
}
