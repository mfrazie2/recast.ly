var searchYouTube = (options, callback) => {
  $.ajax({
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + options.query + '&type=video&maxResults=' + options.max + '&videoEmbeddable=true&key=' + options.key,
    success: callback,
    error: (err) => { console.error('There was an error!', err); callback(); }
  });
};

window.searchYouTube = searchYouTube;
