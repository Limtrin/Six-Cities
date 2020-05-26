let reviews = [
  `{
    "id":1,
    "comments": [{
      "id":1,
      "user":{
         "id":15,
         "is_pro":false,
         "name":"Kendall",
         "avatar_url":"https://htmlacademy-react-3.appspot.com/six-cities/static/avatar/6.jpg"
      },
      "rating":3,
      "comment":"Bathed in the nature. Completely unplugged. Unforgettable.",
      "date":"2020-05-16T09:12:26.468Z"
    }]
  }`,
  `{
    "id":2,
    "comments": [{
      "id":1,
      "user":{
         "id":11,
         "is_pro":false,
         "name":"Jack",
         "avatar_url":"https://htmlacademy-react-3.appspot.com/six-cities/static/avatar/2.jpg"
      },
      "rating":2,
      "comment":"Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.",
      "date":"2020-04-22T09:12:26.468Z"
   },
   {
      "id":2,
      "user":{
         "id":15,
         "is_pro":false,
         "name":"Kendall",
         "avatar_url":"https://htmlacademy-react-3.appspot.com/six-cities/static/avatar/6.jpg"
      },
      "rating":3,
      "comment":"Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.",
      "date":"2020-04-24T09:12:26.468Z"
   }]   
  }`,
  `{
    "id":3,
    "comments": [
      {
         "id":1,
         "user":{
            "id":16,
            "is_pro":true,
            "name":"Mollie",
            "avatar_url":"https://htmlacademy-react-3.appspot.com/six-cities/static/avatar/7.jpg"
         },
         "rating":3,
         "comment":"The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.",
         "date":"2020-02-01T09:12:26.468Z"
      },
      {
         "id":2,
         "user":{
            "id":12,
            "is_pro":true,
            "name":"Isaac",
            "avatar_url":"https://htmlacademy-react-3.appspot.com/six-cities/static/avatar/3.jpg"
         },
         "rating":5,
         "comment":"The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.",
         "date":"2020-03-20T09:12:26.468Z"
      },
      {
         "id":3,
         "user":{
            "id":17,
            "is_pro":false,
            "name":"Emely",
            "avatar_url":"https://htmlacademy-react-3.appspot.com/six-cities/static/avatar/8.jpg"
         },
         "rating":5,
         "comment":"I stayed here for one night and it was an unpleasant experience.",
         "date":"2020-05-28T09:12:26.468Z"
      }
    ]   
  }`,
  `{
    "id":4,
    "comments": [
      {
        "id":1,
        "user":{
            "id":13,
            "is_pro":false,
            "name":"Zak",
            "avatar_url":"https://htmlacademy-react-3.appspot.com/six-cities/static/avatar/4.jpg"
        },
        "rating":2,
        "comment":"We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)",
        "date":"2020-02-02T09:12:26.468Z"
      },
      {
        "id":2,
        "user":{
            "id":11,
            "is_pro":false,
            "name":"Jack",
            "avatar_url":"https://htmlacademy-react-3.appspot.com/six-cities/static/avatar/2.jpg"
        },
        "rating":4,
        "comment":"The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.",
        "date":"2020-03-09T09:12:26.468Z"
      }
    ]   
  }`,
  `{
    "id":5,
    "comments": [
    {
       "id":1,
       "user":{
          "id":14,
          "is_pro":true,
          "name":"Corey",
          "avatar_url":"https://htmlacademy-react-3.appspot.com/six-cities/static/avatar/5.jpg"
       },
       "rating":2,
       "comment":"Home is amazing. It's like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius",
       "date":"2020-03-02T09:12:26.468Z"
    },
    {
       "id":2,
       "user":{
          "id":16,
          "is_pro":true,
          "name":"Mollie",
          "avatar_url":"https://htmlacademy-react-3.appspot.com/six-cities/static/avatar/7.jpg"
       },
       "rating":3,
       "comment":"What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!",
       "date":"2020-05-20T09:12:26.468Z"
    }]
  }`,
  `{
    "id":6,
    "comments": [{
      "id":1,
      "user":{
         "id":15,
         "is_pro":false,
         "name":"Kendall",
         "avatar_url":"https://htmlacademy-react-3.appspot.com/six-cities/static/avatar/6.jpg"
      },
      "rating":3,
      "comment":"Bathed in the nature. Completely unplugged. Unforgettable.",
      "date":"2020-04-21T09:12:26.468Z"
    }]
  }`,
  `{
    "id":7,
    "comments": [{
      "id":1,
      "user":{
         "id":11,
         "is_pro":false,
         "name":"Jack",
         "avatar_url":"https://htmlacademy-react-3.appspot.com/six-cities/static/avatar/2.jpg"
      },
      "rating":2,
      "comment":"Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.",
      "date":"2020-01-09T09:12:26.468Z"
   },
   {
      "id":2,
      "user":{
         "id":15,
         "is_pro":false,
         "name":"Kendall",
         "avatar_url":"https://htmlacademy-react-3.appspot.com/six-cities/static/avatar/6.jpg"
      },
      "rating":3,
      "comment":"Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.",
      "date":"2020-04-14T09:12:26.468Z"
   }]   
  }`,
  `{
    "id":8,
    "comments": [
      {
         "id":1,
         "user":{
            "id":16,
            "is_pro":true,
            "name":"Mollie",
            "avatar_url":"https://htmlacademy-react-3.appspot.com/six-cities/static/avatar/7.jpg"
         },
         "rating":3,
         "comment":"The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.",
         "date":"2020-03-03T09:12:26.468Z"
      },
      {
         "id":2,
         "user":{
            "id":12,
            "is_pro":true,
            "name":"Isaac",
            "avatar_url":"https://htmlacademy-react-3.appspot.com/six-cities/static/avatar/3.jpg"
         },
         "rating":5,
         "comment":"The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.",
         "date":"2020-03-04T09:12:26.468Z"
      },
      {
         "id":3,
         "user":{
            "id":17,
            "is_pro":false,
            "name":"Emely",
            "avatar_url":"https://htmlacademy-react-3.appspot.com/six-cities/static/avatar/8.jpg"
         },
         "rating":5,
         "comment":"I stayed here for one night and it was an unpleasant experience.",
         "date":"2020-05-05T09:12:26.468Z"
      }
    ]   
  }`,
  `{
    "id":9,
    "comments": [
      {
        "id":1,
        "user":{
            "id":13,
            "is_pro":false,
            "name":"Zak",
            "avatar_url":"https://htmlacademy-react-3.appspot.com/six-cities/static/avatar/4.jpg"
        },
        "rating":2,
        "comment":"We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)",
        "date":"2020-05-01T09:12:26.468Z"
      },
      {
        "id":2,
        "user":{
            "id":11,
            "is_pro":false,
            "name":"Jack",
            "avatar_url":"https://htmlacademy-react-3.appspot.com/six-cities/static/avatar/2.jpg"
        },
        "rating":4,
        "comment":"The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.",
        "date":"2020-05-10T09:12:26.468Z"
      }
    ]   
  }`,
  `{
    "id":10,
    "comments": [
    {
       "id":1,
       "user":{
          "id":14,
          "is_pro":true,
          "name":"Corey",
          "avatar_url":"https://htmlacademy-react-3.appspot.com/six-cities/static/avatar/5.jpg"
       },
       "rating":2,
       "comment":"Home is amazing. It's like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius",
       "date":"2020-04-03T09:12:26.468Z"
    },
    {
       "id":2,
       "user":{
          "id":16,
          "is_pro":true,
          "name":"Mollie",
          "avatar_url":"https://htmlacademy-react-3.appspot.com/six-cities/static/avatar/7.jpg"
       },
       "rating":3,
       "comment":"What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!",
       "date":"2020-04-10T09:12:26.468Z"
    }]
  }`
];

export default reviews.map((review) => JSON.parse(review));
