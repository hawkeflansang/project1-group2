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

  // An on click function to make an AJAX call and set the image URL as 
  $("#add-image").on("click", function(event) {
    var imageURL = $("#user-image-input").val().trim();
  

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://faceplusplus-faceplusplus.p.rapidapi.com/facepp/v3/detect?return_attributes=gender%2Cage%2Csmiling%2Cfacequality%2Cblur%2Cbeauty%2Cemotion%2Cfacequality%2Cethnicity%2Cskinstatus&image_url=" + imageURL,
    "method": "POST",
    "headers": {
      "x-rapidapi-host": "faceplusplus-faceplusplus.p.rapidapi.com",
      "x-rapidapi-key": "436517c447msh97cde90ad4dc1e8p10f577jsn59a377f7b533",
      "content-type": "application/x-www-form-urlencoded"
    },
    "data": {}
  }
  
  $.ajax(settings).done(function (response) {
      // Console log the values
      console.log(response);
      // Store different attributes into variables using a for loop
      var emotions = ["anger", "disgust", "fear", "happiness", "neutral", "sadness", "surprised"];

      console.log(response.faces[0].attributes.emotion);
      // Different variables for each emotion
      var anger = response.faces[0].attributes.emotion.anger;
      var disgust = response.faces[0].attributes.emotion.disgust;
      var fear = response.faces[0].attributes.emotion.fear;
      var happiness = response.faces[0].attributes.emotion.happiness;
      var neutral = response.faces[0].attributes.emotion.neutral;
      var sadness = response.faces[0].attributes.emotion.sadness;
      var surprised = response.faces[0].attributes.emotion.surprise;
      var beauty = response.faces[0].attributes.beauty;

      // Canvas 

var myChart = document.getElementById('myChart').getContext('2d');
//Global options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

//data for creating the chart

var emotionChart = new Chart(myChart, {
  type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: ['Anger', 'Disgust', 'Fear', 'Happiness', 'Neutral', 'Sadness', 'Surprise'],
    datasets: [{
      label: 'Emotions',
      data: [anger, disgust, fear, happiness, neutral, sadness, surprised],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 2,
      hoverBorderWidth: 3,
      hoverBorderColor: 'yellow'

    }]
  },
  options: {}
});
  })
})



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

