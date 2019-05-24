const http = new easyHTTP();

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(error, response) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response);
//   }
// });

// Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(error, post) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }
// });

const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Update
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});
