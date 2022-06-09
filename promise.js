const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer = 7;

  if (responseFromServer > 0) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

// let result1 = makeServerRequest.then(function (data) {
//   return data;
// });

// console.log(result1);

makeServerRequest.then((result) => {
  console.log(result);
}); // when my promise will resolve

makeServerRequest.catch((error) => {
  console.log(error);
}); // when my promise has been rejected.
