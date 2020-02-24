# FORTUNE TELLER

![Alt Text](https://media.giphy.com/media/TKjro9r9pf6YkhPSbp/giphy.gif)

# <<<<<<< HEAD

> > > > > > > 0cdbc4db68f2bf8f423b3f6ceabf3d9019b37d54

### Overview

Detect and analyze human faces within the image that you provided. Detect API can analyze detected faces directly, providing face landmarks and attributes information. User is given information from the fortune teller about their

- Emotions
- Love Status
- Skin Health
- Age
- Years left to live
- Advice

![Alt Text](https://media.giphy.com/media/IhVVhIB2OrH6h3T3Xf/giphy.gif)

### Scripting/Programming Languages

- Html
- CSS(Bootstrap)
- JavaScript(JQuery)
- Chart.js

### Installation

Register for [Cloudinary](https://cloudinary.com) and [Face++](https://rapidapi.com) to get your API Key and API Secret.

### Request URL

[https://faceplusplus-faceplusplus.p.rapidapi.com/facepp/v3/detect](https://faceplusplus-faceplusplus.p.rapidapi.com/facepp/v3/detect)

### Request Method

POST

## Usage

### Faceplusplus

Set the API key for Face++:

```
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
```

### Cloudinary

```
const widget = cloudinary.createUploadWidget(
  {
    cloudName: "Upload your cloudName",
    uploadPreset: "Upload your signed/unsigned Uploadpreset value from the setting"
  }
```

### Get started using [Chart.js](https://www.chartjs.org)

First, we need to have a canvas in our page.

```
<canvas id="myChart"></canvas>
```

Now that we have a canvas we can use, we need to include Chart.js in our page.

```
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"></script>
```

Now, we can create a chart. We add a script to our page:

```
var myChart = document.getElementById('myChart').getContext('2d');

        Chart.defaults.global.defaultFontFamily = 'Lato';
        Chart.defaults.global.defaultFontSize = 18;
        Chart.defaults.global.defaultFontColor = '#777';

        var emotionChart = new Chart(myChart, {

          type: 'bar',
          data: {
            labels: ['Anger', 'Disgust', 'Fear', 'Happiness', 'Neutral', 'Sadness', 'Surprise'],
            datasets: [{
              label: 'Emotions',
              data: [anger, disgust, fear, happiness, neutral, sadness, surprised],

              backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)'
              ],

            }]
          },
          options: {}

        });

```

It's that easy to get started using Chart.js! From here you can explore the many options that can help you customize your charts with scales, tooltips, labels, colors, custom actions, and much more.

### Github Deployed Link

[Fortune Teller](https://hawkeflansang.github.io/project1-group2/)

### Screenshots

![image](https://user-images.githubusercontent.com/52920074/66786296-e3327b00-eead-11e9-9cbb-7f604aa33968.png)

![image](https://user-images.githubusercontent.com/52920074/66786411-399fb980-eeae-11e9-8ffe-ca80d3d08bc0.png)

![image](https://user-images.githubusercontent.com/52920074/66786472-6ce24880-eeae-11e9-9689-e5178c52f6a9.png)

## Feedback and issues:

I really appreciate your feedback. If you want to see some improvements in the app I'll be really grateful if you can drop me a message.

Additionally, if you find any issue when running the app or any other other matter, please feel free to open an issue in this Github repo.

Author - Keerthi, Manuel, Hawke & Shital

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgement

Joe Han, Joshua Appel - Rutgers BCS Instructor and TA's

All of the Rutgers BCS Classmates that help make everyday an amazing experience.
