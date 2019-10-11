
// var queryURL = "https://api-us.faceplusplus.com/facepp/v3/detect?api_key=4EanX2TJZ2DZRgACyoP4etY4X7Qxa67n&api_secret=S3SJ9hQ1opCQ5t8Ay0RvPEQwCOL8KLEn&emotion";

// $.ajax({
//     url: queryURL,
//     method: "POST"
// }).then(function (response) {
//     console.log(response);
// })



var chart = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Bad', 'Fearful', 'Angry', 'Disgusted', 'Sad', 'Happy', 'Surprised'],
        datasets: [{
            label: 'Emotions',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {}
});
