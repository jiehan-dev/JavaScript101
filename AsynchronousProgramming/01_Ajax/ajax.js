// Asynchronous JavaScript and XML
// It is a set of web technologies to send and receive data asynchronously

// XmlHttpRequest (XHR)
// Provided by the browsers JS environment
// Methods transfer data between client / server

document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', './data.txt', true);

  // Optional - Used for spinners/loaders
  xhr.onprogress = function() {
    console.log(`READYSTATE ${this.readyState} | Loading...`);
  };

  // onload is newer method
  xhr.onload = function() {
    if (this.status === 200) {
      document.querySelector('#output').innerHTML = `<h5>${this.responseText}</h5>`;
    }
  };

  // older way of doing it
  //   xhr.onreadystatechange = function() {
  //     if (this.status === 200 && this.readyState === 4) {
  //       console.log(this.responseText);
  //     }
  //   };

  xhr.send();

  // readyState Values
  // 0: UNSENT
  // 1: OPENNED
  // 2: HEADERS_RECEIVED
  // 3: LOADING
  // 4: DONE
  // Reference: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
}
