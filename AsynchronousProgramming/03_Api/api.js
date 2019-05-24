document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      let output = '';

      if (response.type === 'success') {
        response.value.forEach(function(joke) {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += '<li>Something went wrong</li>';
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  };

  xhr.send();

  e.preventDefault();
}

// Application Programming Interface (API)
// Contract provided by one piece of software to another
// Structured request and response

// Representational State Transfer (REST)
// Architecture style for designing networked applications
// Relies on a stateless, client-server protocol, almost always HTTP (HyperText Transfer Protocol)
// Treats server objects as resources that can be created or destroyed


// API is the messenger and REST lets us use HTTP requests to format that message