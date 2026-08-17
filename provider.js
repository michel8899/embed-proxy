/* CineHD embed provider registry — edit URLs here, no app update needed */

const flag = (code) => `https://flagsapi.com/${code}/flat/24.png`;

/** nxsha language variants */
function nx(name, country, query) {
  const q = query.startsWith("?") ? query : `?${query}`;
  return {
    name,
    flag: flag(country),
    tv: {
      idType: "tmdb",
      url: `https://nxsha.space/embed/tv/{id}/{season}/{episode}${q}`,
    },
    movie: {
      idType: "tmdb",
      url: `https://nxsha.space/embed/movie/{id}${q}`,
    },
  };
}

window.PROVIDERS = [
  {
    name: "Max",
    flag: flag("US"),
    tv: { idType: "tmdb", url: "https://ythd.org/embed/{id}/{season}-{episode}" },
    movie: { idType: "tmdb", url: "https://ythd.org/embed/{id}" },
  },
  {
    name: "Vidpro",
    flag: flag("GB"),
    tv: { idType: "tmdb", url: "https://vixsrc.to/tv/{id}/{season}/{episode}" },
    movie: { idType: "tmdb", url: "https://vixsrc.to/movie/{id}" },
  },
  {
    name: "4K",
    flag: flag("GB"),
    tv: { idType: "tmdb", url: "https://player.videasy.to/tv/{id}/{season}/{episode}" },
    movie: { idType: "tmdb", url: "https://player.videasy.to/movie/{id}" },
  },
  {
    name: "Vidfast",
    flag: flag("GB"),
    tv: {
      idType: "tmdb",
      url: "https://vidfast.vc/tv/{id}/{season}/{episode}?autoplay=true",
    },
    movie: { idType: "tmdb", url: "https://vidfast.vc/movie/{id}?autoplay=true" },
  },
  {
    name: "Nxsha",
    flag: flag("US"),
    tv: {
      idType: "tmdb",
      url: "https://nxsha.space/embed/tv/{id}/{season}/{episode}?lang=en&autoplay=true&sub=en",
    },
    movie: {
      idType: "tmdb",
      url: "https://nxsha.space/embed/movie/{id}?lang=en&autoplay=true&sub=en",
    },
  },
  {
    name: "Super",
    flag: flag("GB"),
    tv: { idType: "tmdb", url: "https://vidsuper.net/tv/{id}/{season}/{episode}" },
    movie: { idType: "tmdb", url: "https://vidsuper.net/movie/{id}" },
  },
  {
    name: "Vidcore",
    flag: flag("GB"),
    tv: {
      idType: "tmdb",
      url: "https://vidcore.net/tv/{id}/{season}/{episode}?autoPlay=true&sub=en",
    },
    movie: {
      idType: "tmdb",
      url: "https://vidcore.net/movie/{id}?autoPlay=true&sub=en",
    },
  },
  {
    name: "Rock",
    flag: flag("GB"),
    tv: {
      idType: "tmdb",
      url: "https://vidrock.net/embed/tv/{id}/{season}/{episode}?autoplay=true&nextbutton=false&episodeselector=false",
    },
    movie: {
      idType: "tmdb",
      url: "https://vidrock.net/embed/movie/{id}?autoplay=true",
    },
  },
  {
    name: "Primesrc",
    flag: flag("AU"),
    tv: {
      idType: "tmdb",
      url: "https://primesrc.me/embed/tv?tmdb={id}&season={season}&episode={episode}",
    },
    movie: {
      idType: "imdb",
      url: "https://primesrc.me/embed/movie?imdb={id}",
    },
  },
  {
    name: "2Embed",
    flag: flag("AU"),
    tv: {
      idType: "tmdb",
      url: "https://www.2embed.stream/embed/tv/{id}/{season}/{episode}",
    },
    movie: { idType: "tmdb", url: "https://2embed.stream/embed/movie/{id}" },
  },
  {
    name: "Cinemaos",
    flag: flag("US"),
    tv: { idType: "tmdb", url: "https://cinemaos.tech/player/{id}/{season}/{episode}" },
    movie: { idType: "tmdb", url: "https://cinemaos.tech/player/{id}" },
  },
  {
    name: "Prime",
    flag: flag("US"),
    tv: {
      idType: "tmdb",
      url: "https://nxsha.space/embed/tv/{id}/{season}/{episode}?lang=en&autoplay=true&one_server=true&server=OrVid-[Multi-Lang]",
    },
    movie: {
      idType: "tmdb",
      url: "https://nxsha.space/embed/movie/{id}?lang=en&autoplay=true&one_server=true&server=OrVid-[Multi-Lang]",
    },
  },
  {
    name: "Netflix",
    flag: flag("US"),
    tv: {
      idType: "tmdb",
      url: "https://nxsha.space/embed/tv/{id}/{season}/{episode}?lang=en&autoplay=true&one_server=true&server=ZetPly-[Multi-Lang]",
    },
    movie: {
      idType: "tmdb",
      url: "https://nxsha.space/embed/movie/{id}?lang=en&autoplay=true&one_server=true&server=ZetPly-[Multi-Lang]",
    },
  },
  {
    name: "Hotstar",
    flag: flag("US"),
    tv: {
      idType: "tmdb",
      url: "https://nxsha.space/embed/tv/{id}/{season}/{episode}?lang=en&autoplay=true&one_server=true&server=QsPly-[Multi-Lang]",
    },
    movie: {
      idType: "tmdb",
      url: "https://nxsha.space/embed/movie/{id}?lang=en&autoplay=true&one_server=true&server=QsPly-[Multi-Lang]",
    },
  },
  {
    name: "Vidnest",
    flag: flag("GB"),
    tv: { idType: "tmdb", url: "https://vidnest.fun/tv/{id}/{season}/{episode}" },
    movie: { idType: "tmdb", url: "https://vidnest.fun/movie/{id}" },
  },
  {
    name: "Tongo",
    flag: flag("US"),
    tv: { idType: "tmdb", url: "https://www.NontonGo.win/embed/tv/{id}/{season}/{episode}" },
    movie: { idType: "tmdb", url: "https://www.NontonGo.win/embed/movie/{id}" },
  },
  {
    name: "Echo",
    flag: flag("US"),
    tv: {
      idType: "tmdb",
      url: "https://vidlink.pro/tv/{id}/{season}/{episode}?primaryColor=white&secondaryColor=white&iconColor=white&title=false&poster=true&autoplay=true",
    },
    movie: {
      idType: "tmdb",
      url: "https://vidlink.pro/movie/{id}?primaryColor=white&secondaryColor=white&iconColor=white&title=false&poster=true&autoplay=true",
    },
  },
  
  {
    name: "NHD",
    flag: flag("IN"),
    tv: {
      idType: "tmdb",
      url: "https://nhdapi.com/embed/tv/{id}/{season}/{episode}?autoplay=true&autonext=true&audio=true&title=true&download=true",
    },
    movie: {
      idType: "tmdb",
      url: "https://nhdapi.com/embed/movie/{id}?autoplay=true&autonext=true&audio=true&title=true&download=true",
    },
  },
  {
    name: "Mplay",
    flag: flag("IN"),
    tv: {
      idType: "tmdb",
      url: "https://rozgarlelo.modiplay.xyz/embed/tmdb/tv?id={id}&s={season}&e={episode}",
    },
    movie: {
      idType: "tmdb",
      url: "https://rozgarlelo.modiplay.xyz/embed/tmdb/movie?id={id}",
    },
  },
  {
    name: "Xpass",
    flag: flag("US"),
    tv: { idType: "tmdb", url: "https://play.xpass.top/e/tv/{id}/{season}/{episode}" },
    movie: { idType: "imdb", url: "https://play.xpass.top/e/movie/{id}" },
  },
  {
    name: "Bravo",
    flag: flag("GB"),
    tv: { idType: "tmdb", url: "https://moviesapi.to/tv/{id}/{season}/{episode}" },
    movie: { idType: "tmdb", url: "https://moviesapi.to/movie/{id}" },
  },
  {
    name: "Vidking",
    flag: flag("US"),
    tv: {
      idType: "tmdb",
      url: "https://www.vidking.net/embed/tv/{id}/{season}/{episode}?autoplay=true&episodeSelector=true",
    },
    movie: {
      idType: "tmdb",
      url: "https://www.vidking.net/embed/movie/{id}?autoplay=true",
    },
  },
  {
    name: "111",
    flag: flag("GB"),
    tv: { idType: "tmdb", url: "https://111movies.net/tv/{id}/{season}/{episode}" },
    movie: { idType: "tmdb", url: "https://111movies.net/movie/{id}" },
  },
  {
    name: "Jade",
    flag: flag("PT"),
    tv: {
      idType: "tmdb",
      url: "https://superflixapi.lifestyle/serie/{id}/{season}/{episode}",
    },
    movie: { idType: "tmdb", url: "https://superflixapi.lifestyle/filme/{id}" },
  },
  {
    name: "French",
    flag: flag("FR"),
    tv: {
      idType: "tmdb",
      url: "https://frembed.hair/api/serie.php?id={id}&sa={season}&epi={episode}",
    },
    movie: { idType: "tmdb", url: "https://frembed.hair/api/film.php?id={id}" },
  },
  nx("Spanish", "ES", "?lang=es&autoplay=true&sub=es"),
  nx("Hindi", "IN", "?lang=hindi&autoplay=true"),
  nx("Tamil", "IN", "?lang=tamil&autoplay=true"),
  nx("Telugu", "IN", "?lang=telugu&autoplay=true"),
  nx("Arab", "SA", "?lang=ar&autoplay=true&sub=ar"),
  nx("French 2", "FR", "?lang=fr&autoplay=true&sub=fr"),
  nx("Brazil", "BR", "?lang=pt&autoplay=true&sub=pt"),
  nx("Rus", "RU", "?lang=ru&autoplay=true&sub=ru"),
  nx("German", "DE", "?lang=de&autoplay=true&sub=de"),
  {
    name: "Italy",
    flag: flag("IT"),
    tv: { idType: "tmdb", url: "https://vixsrc.to/tv/{id}/{season}/{episode}?lang=it" },
    movie: { idType: "tmdb", url: "https://vixsrc.to/movie/{id}?lang=it" },
  },
  nx("Italy 2", "IT", "?lang=it&autoplay=true&sub=it"),
  nx("Japan", "JP", "?lang=ja&autoplay=true&sub=ja"),
  nx("Polish", "PL", "?lang=pl&autoplay=true&sub=pl"),
  nx("PT", "PT", "?lang=pt&autoplay=true&sub=pt"),
  nx("Thai", "TH", "?lang=th&autoplay=true&sub=th"),
  nx("Turkish", "TR", "?lang=tr&autoplay=true&sub=tr"),
  {
    name: "Rive",
    flag: flag("GB"),
    tv: {
      idType: "tmdb",
      url: "https://www.rivestream.app/embed?type=tv&id={id}&season={season}&episode={episode}",
    },
    movie: {
      idType: "tmdb",
      url: "https://www.rivestream.app/embed?type=movie&id={id}",
    },
  },
  {
    name: "Flicky",
    flag: flag("IN"),
    tv: { idType: "tmdb", url: "https://flicky.host/embed/tv/?id={id}/{season}/{episode}" },
    movie: { idType: "tmdb", url: "https://flicky.host/embed/movie/?id={id}" },
  },
  {
    name: "Peachify",
    flag: flag("US"),
    tv: {
      idType: "tmdb",
      url: "https://peachify.top/embed/tv/{id}/{season}/{episode}?autoplay=true&sub=English",
    },
    movie: {
      idType: "tmdb",
      url: "https://peachify.top/embed/movie/{id}?autoplay=true&sub=English",
    },
  },
  {
    name: "Download",
    flag: flag("IN"),
    tv: {
      idType: "tmdb",
      url: "https://moviesdl.cc/p/info.html?id={id}&type=tv",
      noSeasonEpisode: true,
    },
    movie: {
      idType: "tmdb",
      url: "https://moviesdl.cc/p/info.html?id={id}&type=movie",
    },
  },
];

/* ---------------- resolver ---------------- */

window.normalizeType = function (t) {
  const v = String(t || "").toLowerCase();
  if (["tv", "series", "show", "shows", "tvshows", "tv-shows"].includes(v)) return "tv";
  return "movie";
};

window.findProvider = function (name) {
  const key = String(name || "").trim().toLowerCase();
  if (!key) return null;
  return (
    window.PROVIDERS.find((p) => p.name.toLowerCase() === key) ||
    window.PROVIDERS.find((p) => p.name.toLowerCase().replace(/\s+/g, "") === key.replace(/\s+/g, "")) ||
    null
  );
};

window.buildEmbedUrl = function ({ type, id, season, episode, server }) {
  const kind = window.normalizeType(type);
  const provider = window.findProvider(server);
  if (!provider) return { error: `Unknown server "${server || ""}"` };
  const entry = provider[kind];
  if (!entry) return { error: `${provider.name} has no ${kind} endpoint` };
  if (!id) return { error: "Missing id" };
  if (kind === "tv" && !entry.noSeasonEpisode && (!season || !episode))
    return { error: "TV needs season and episode" };

  const url = entry.url
    .replaceAll("{id}", encodeURIComponent(id))
    .replaceAll("{season}", encodeURIComponent(season || ""))
    .replaceAll("{episode}", encodeURIComponent(episode || ""));

  return { url, provider, kind, idType: entry.idType };
};

window.listProviders = function () {
  return window.PROVIDERS.map((p) => ({
    name: p.name,
    flag: p.flag,
    movie: p.movie ? { idType: p.movie.idType } : null,
    tv: p.tv ? { idType: p.tv.idType } : null,
  }));
};
