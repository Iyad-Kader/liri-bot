var axios = require('axios');

require('dotenv').config();

var retrieveMovie = function (name) {
  if (name === undefined) {
    name = 'I Am Legend';
  }

  var url =
        'http://www.omdbapi.com/?t=' + name + '&y=&plot=full&tomatoes=true&apikey=trilogy';

  axios.get(url).then(function (response) {
    var data = response.data;
    console.log('Title: ' + data.Title);
    console.log('Year: ' + data.Year);
    console.log('Rated: ' + data.Rated);
    console.log('Released: ' + data.Released);
    console.log('Genre: ' + data.Genre);
    console.log('Director: ' + data.Director);
  });
};
retrieveMovie('Goodfellas');

var retrievePlayers = function (artist) {
  var queryURL = 'https://rest.bandsintown.com/artists/' + artist + '/events?app_id=codingbootcamp';

  axios.get(queryURL).then(
    function (response) {
      var data = response.data;

      if (!data.length) {
        console.log('Nothinf found for ' + artist);
        return;
      }

      console.log('Upcoming for ' + artist + ':');

      for (var i = 0; i < data.length; i++) {
        var dataShow = data[i];
      }
    }
  );
};

retrievePlayers('Usher');
