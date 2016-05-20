var searchYouTube = (options, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: options.key,
    q: options.query,
    maxResults: options.max || 5,
    type: 'video',
    videoEmbeddable: 'true'
  })
  .done((data) => { console.log(data.items[0]); callback(data.items); })
  .fail((err) => { console.error('There was an error! ', err); });
};

window.searchYouTube = searchYouTube;
