// var categories = [
//     {
//       "id": 5,
//       "description": "Celebrities go head to head against each other to rep  their favorite football clubs.",
//       "name": "Celebrities Talk Football",
//       "cover_image": "http://goalmac.tv/wp-content/uploads/2018/10/Celebrities-Talk-Football.jpg"
//     },
//     {
//       "id": 6,
//       "description": "Nigerian celebrity comedians cracks jokes on football and entertainment related issues.",
//       "name": "Fun Gist",
//       "cover_image": "http://goalmac.tv/wp-content/uploads/2018/10/fun.jpg"
//     },
//     {
//       "id": 7,
//       "description": "Provides weekly betting tips/guide to our followers to enable them bet right.",
//       "name": "GoalMac Betting Tips",
//       "cover_image": "http://goalmac.tv/wp-content/uploads/2018/10/Betting-Tips.jpg"
//     },
//     {
//       "id": 8,
//       "description": "Where fans reads and follows trending football stories both locally and internationally.",
//       "name": "GoalMac Blog",
//       "cover_image": "http://goalmac.tv/wp-content/uploads/2018/10/blog.jpg"
//     },
//     {
//       "id": 9,
//       "description": "Watch Live European league matches like, The FA cup, Carabao Cup, Copa Del Rey, the English premier league (EPL), Spanish La Liga, Italian Serie A and the champions league. ",
//       "name": "GoalMac Live Streaming",
//       "cover_image": "http://goalmac.tv/wp-content/uploads/2018/10/Streaming.jpg"
//     },
//     {
//       "id": 10,
//       "description": "Promotes both grass root and semi-pro football talents",
//       "name": "GoalMac Talent Promo",
//       "cover_image": "http://goalmac.tv/wp-content/uploads/2018/10/Talent-Promo.jpg"
//     },
//     {
//       "id": 15,
//       "description": "Fans share their views on different football issues, the performance of their favorite players and clubs etc.",
//       "name": "GoalMac Street Talk",
//       "cover_image": "https://goalmac.tv/wp-content/uploads/2018/10/Street-Talk.jpg"
//     },
//     {
//       "id": 12,
//       "description": "These are highlights from top European leagues like the English premier league (EPL), Spanish La Liga, Italian Serie A and the champions league.",
//       "name": "GoalMac Weekly Highlights",
//       "cover_image": "http://goalmac.tv/wp-content/uploads/2018/10/Weekly-Highlights.jpg"
//     },
//     {
//       "id": 13,
//       "description": "It showcases the lifestyle of celebrity footballers and coaches. ",
//       "name": "Lifestyle",
//       "cover_image": "http://goalmac.tv/wp-content/uploads/2018/10/lifeslye.jpg"
//     },
//     {
//       "id": 14,
//       "description": "On The GoalMac show, Mac gives deep insight, honest and direct views into controversial and trending football topics. ",
//       "name": "Mac's Reaction",
//       "cover_image": "http://goalmac.tv/wp-content/uploads/2018/10/Mac.jpg"
//     }
// ]
// //alert(categories.length);
// //var cat = document.getElementById('category');
// var text ='';
// for(i=0; i<categories.length;i++){
    
   
//         categories[i].id + '<br/>'+
//         categories[i].description + '<br/>'+
//         categories[i].name + '<br/>'+
//         categories[i].cover_image + '<br/>';


// };
// document.getElementById("category").innerHTML = text;



// var cars = ["BMW", "Volvo", "Saab", "Ford"];

// var i = 0;
// var len = cars.length;
// var text = "";

// for (; i < len; ) {
//   text += cars[i] + "<br>";
//   i++;
// }
// document.getElementById("demo").innerHTML = text;



fetch('new.json')
  .then(function (response) {
    console.log(response)
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
});

  function appendData(data) {
    var mainContainer = document.getElementById("category");
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.innerHTML =  data[i].id + '<br/> ' + data[i].name+ '<br/> '  + data[i].description+ '<br/> '+ data[i].cover_image;
      mainContainer.appendChild(div);
    }
  }
