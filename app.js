// Initialize Firebase
const fireBaseConfig = {
    apiKey: "AIzaSyDcGIF003vq_0dk2gmdB8WkpmcYqgdKAwQ",
    authDomain: "coders-bay-872ba.firebaseapp.com",
    databaseURL: "https://coders-bay-872ba.firebaseio.com",
    projectId: "coders-bay-872ba",
    storageBucket: "",
    messagingSenderId: "821809220618",
    appId: "1:821809220618:web:f40afa614663b61f8ba3f3"
  };

firebase.initializeApp(fireBaseConfig);

// Get a reference to the database service
var database = firebase.database();

// API keys
var facePlusPlusKey = "4EanX2TJZ2DZRgACyoP4etY4X7Qxa67n";
var facePlusPlusSecret = "S3SJ9hQ1opCQ5t8Ay0RvPEQwCOL8KLEn";
var cloudinaryKey = "692911896881458";
var queryURL = "https://api-us.faceplusplus.com/facepp/v3/detect";
var imageURL = "https://imgur.com/gallery/6149dFk";
var imageFile = './IMG_1389';

// Image upload
// var url = "https://api-us.faceplusplus.com/facepp/v3/detect";
// request({
//     uri: url,
//     method: 'POST',
//     qs: {
//         api_secret: facePlusPlusSecret,
//         api_key: facePlusPlusKey,
//         image_url: imageURL
//     }
// });

var queryURL = queryURL + "?api_key=" + facePlusPlusKey + "&api_secret=" + facePlusPlusSecret + "&image_file=" + imageFile; 
$.ajax({
    url: queryURL,
    method: "POST",
//     data: {
//         api_secret: facePlusPlusSecret,
//         api_key: facePlusPlusKey,
//         image_file: './IMG_1389'         
//    }
  })

  .then(function(response) {
      console.log(response) 
  })
  
  .catch(function(error)  {
      console.log(error.error_message);
  })