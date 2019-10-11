// Initialize Firebase
  var fireBaseConfig = {
    apiKey: "AIzaSyBh9sM9L8VJMXRhvYBCF7sps-TWicxoEXI",
    authDomain: "face-fortune-bdb7d.firebaseapp.com",
    databaseURL: "https://face-fortune-bdb7d.firebaseio.com",
    projectId: "face-fortune-bdb7d",
    storageBucket: "face-fortune-bdb7d.appspot.com",
    messagingSenderId: "406991950936",
    appId: "1:406991950936:web:f53feaab8eb621a045a62d"
  };

  firebase.initializeApp(fireBaseConfig);

// Get a reference to the database service
  var database = firebase.database();
  var imageURL = "https://www.kiplinger.com/kipimages/pages/18048.jpg";

// // API keys
// var facePlusPlusKey = "4EanX2TJZ2DZRgACyoP4etY4X7Qxa67n";
// var facePlusPlusSecret = "S3SJ9hQ1opCQ5t8Ay0RvPEQwCOL8KLEn";
// var cloudinaryKey = "692911896881458";
// var queryURL = "https://api-us.faceplusplus.com/facepp/v3/detect";
// var imageURL = "https://imgur.com/gallery/6149dFk";
// var imageFile = './IMG_1389';

// // Image upload
// // var url = "https://api-us.faceplusplus.com/facepp/v3/detect";
// // request({
// //     uri: url,
// //     method: 'POST',
// //     qs: {
// //         api_secret: facePlusPlusSecret,
// //         api_key: facePlusPlusKey,
// //         image_url: imageURL
// //     }
// // });

// var queryURL = queryURL + "?api_key=" + facePlusPlusKey + "&api_secret=" + facePlusPlusSecret + "&image_file=" + imageFile; 
// $.ajax({
//     url: queryURL,
//     method: "POST",
// //     data: {
// //         api_secret: facePlusPlusSecret,
// //         api_key: facePlusPlusKey,
// //         image_file: './IMG_1389'         
// //    }
//   })

//   .then(function(response) {
//       console.log(response) 
//   })
  
//   .catch(function(error)  {
//       console.log(error.error_message);
//   })

  var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://faceplusplus-faceplusplus.p.rapidapi.com/facepp/v3/detect?return_attributes=gender%2Cage%2Csmiling%2Cfacequality%2Cblur&image_url=" + imageURL,
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "faceplusplus-faceplusplus.p.rapidapi.com",
		"x-rapidapi-key": "436517c447msh97cde90ad4dc1e8p10f577jsn59a377f7b533",
		"content-type": "application/x-www-form-urlencoded"
	},
	"data": {}
}

$.ajax(settings).done(function (response) {
    console.log(response);
})