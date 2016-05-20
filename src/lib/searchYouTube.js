var searchYouTube = (options, callback) => {
//   $.ajax({
//     method: 'GET',
//     url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + options.query + '&type=video&maxResults=' + options.max + '&videoEmbeddable=true&key=' + options.key,
//     success: callback,
//     error: (err) => { console.error('There was an error!', err); callback(); }
//   });
// };
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: options.key,
    q: options.query,
    maxResults: options.max || 5,
    type: 'video',
    videoEmbeddable: 'true'
  })
  .done((data) => { callback(data.items); })
  .fail((err) => { console.error('There was an error! ', err); });
};

window.searchYouTube = searchYouTube;