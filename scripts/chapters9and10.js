const apiUrl = 'https://marvelrivalsapi.com/api/v1/heroes/hero/peni parker/stats';
const apiKey = 'ec5ccd0d1643b5af6e4f5f68453cf77b59d414b4e1d86c1bcb9eeeb033ff2add';

fetch(apiUrl, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'X-API-Key': apiKey,
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
})
.then(data => {
  console.log('API response:', data);


  var matches = document.getElementById('matches');
  var wins = document.getElementById('wins');
  var winrate = document.getElementById('winrate');
  var kda = document.getElementById('kda');

  matches.textContent = data.matches;
  wins.textContent = data.wins;

  var calculatedWinRate = ((data.wins) / (data.matches)) * 100;
  winrate.textContent = calculatedWinRate.toFixed(1);

  kda.textContent = data.k.toFixed(1) + "/" + data.d.toFixed(1) + "/" + data.a.toFixed(1);
})
.catch(error => {
  console.error('Error fetching data:', error);
});

