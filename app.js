
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

//Cloudinary is used to upload the user image :

const widget = cloudinary.createUploadWidget(
  {
    cloudName: "drikec4ti",
    uploadPreset: "wlxigwea",
    sources: ["local", "url", "camera"],
    defaultSource: "local",
    styles: {
      palette: {
        window: "#F5F5F5",
        sourceBg: "#FFFFFF",
        windowBorder: "#90a0b3",
        tabIcon: "#007BFF",
        inactiveTabIcon: "#69778A",
        menuIcons: "#007BFF",
        link: "#FA7203",
        action: "#8F5DA5",
        inProgress: "#007BFF",
        complete: "#FA7203",
        error: "#c43737",
        textDark: "#000000",
        textLight: "#FFFFFF"
      },
      fonts: {
        default: null,
        "'IBM Plex Sans', sans-serif": {
          url: "https://fonts.googleapis.com/css?family=IBM+Plex+Sans",
          active: true
        }
      }
    }
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log(result.info.secure_url);
      var imageURL = result.info.secure_url;

      // display the user image and append it to a div
      var userImage = $("<img>");
      userImage.attr("src", imageURL);
      $("#userDisplay").append("<br>" + userImage + "<br>");

      //api key from rapidapi for faceplusplus
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

      //AJAX call function
      $.ajax(settings).done(function (response) {
        // Console log the values
        console.log(response);

        // Store different emotions into variables 
        var emotions = ["anger", "disgust", "fear", "happiness", "neutral", "sadness", "surprised"];

        //console log the emotions 
        console.log(response.faces[0].attributes.emotion);

        // variables are declared to store emotions from the server 
        var anger = response.faces[0].attributes.emotion.anger;
        var disgust = response.faces[0].attributes.emotion.disgust;
        var fear = response.faces[0].attributes.emotion.fear;
        var happiness = response.faces[0].attributes.emotion.happiness;
        var neutral = response.faces[0].attributes.emotion.neutral;
        var sadness = response.faces[0].attributes.emotion.sadness;
        var surprised = response.faces[0].attributes.emotion.surprise;
        var maleScore = response.faces[0].attributes.beauty.male_score;
        var femaleScore = response.faces[0].attributes.beauty.female_score;
        var averageScore = (maleScore + femaleScore) / 2;
        var averageScoreDifference = 100 - averageScore;
        var skinHealth = Math.floor(response.faces[0].attributes.skinstatus.health);
        var gender = response.faces[0].attributes.gender.value;
        var age = response.faces[0].attributes.age.value;


        // Chart.js is used to display the emotion of the picture uploaded by the user
        var myChart = document.getElementById('myChart').getContext('2d');
        //Global options
        Chart.defaults.global.defaultFontFamily = 'Lato';
        Chart.defaults.global.defaultFontSize = 18;
        Chart.defaults.global.defaultFontColor = '#777';

        //values for the data will be updated from the server
        var emotionChart = new Chart(myChart, {
          // different types of chart: bar, horizontalBar, pie, line, doughnut, radar, polarArea
          type: 'bar',
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

        // Chart.js is used to display the beauty of the picture uploaded by the user
        var myChart = document.getElementById('beautyChart').getContext('2d');
        //Global options
        Chart.defaults.global.defaultFontFamily = 'Lato';
        Chart.defaults.global.defaultFontSize = 18;
        Chart.defaults.global.defaultFontColor = '#777';

        //values for the data will be updated from the server
        var beautyChart = new Chart(myChart, {
          type: 'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
          data: {
            labels: ['Chance of Love', 'Chance of Being Alone Forever'],
            datasets: [{
              label: 'Beauty',
              data: [averageScore, averageScoreDifference],

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

        // Displays the health of a person's skin 
        if (skinHealth > 50) {
          var skinHealthDiv = $("<h1>");
          skinHealthDiv.text("Your skin is very healthy!");
          $("#advice-fortune").append(skinHealthDiv);
        }
        else {
          var skinHealthDiv = $("<h1>");
          skinHealthDiv.text("Try using L'Oreal skin care moisturizer!");
          $("#advice-fortune").append(skinHealthDiv);
        }

        // Displays the age of a person
        var yourAge = $("<h1>");
        yourAge.text("You are " + age + " years old!");
        $(".giveAdvice").append(yourAge);

        // Displays the number of years left to live
        var yearsLeft = $("<h2>");
        var maxAge = 100; // Assume the max age for a person to be alive
        var yearsLeftToLive = maxAge - age;
        yearsLeft.text("You have " + yearsLeftToLive + " years left to live!");
        $("#advice-fortune").append(yearsLeft);
      })

    }
  }
);


// An on click function to make an AJAX call and set the image URL as 
$("#add-image").on("click", function (event) {
  $("#advice-fortune").empty();
  $("#userDisplay").empty();
  widget.open();



});