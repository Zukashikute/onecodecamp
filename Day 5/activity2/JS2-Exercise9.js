// Exercise 9

// Create a function getUserData that simulates fetching user data from a server. It should
// accept a callback function as a parameter. Call the callback function with a user object
// once the data is retrieved.

const getUserData = (callback) => {
   fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(user => callback(user))
      .catch(error => {
         console.error('Error fetching user data:', error);
      });
}

const handleUserData = (user) => {
   console.log(user)
}

getUserData(handleUserData);