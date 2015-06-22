var redis = require('redis');


// By default, redis.createClient() will use 127.0.0.1 and 6379 as the hostname and port respectively. 
//var client = redis.createClient(port, host);
var client = redis.createClient();
client.on('connect', function() {
    console.log('connected');
});

client.flushdb();

// client.sadd("users", "user:rahul");
// client.hmset("user:rahul", "username", "rahul", "foo", "bar");

// // add second user
// client.sadd("users", "user:namita");
// client.hmset("user:namita", "username", "namita", "foo", "baz");

// client.hmset('camping', {
//   'shelter': '2-person tent',
//   'cooking': 'campstove'
// }, redis.print);



var yelp = {
    "region": {
        "span": {
            "latitude_delta": 0.09083030000000747,
            "longitude_delta": 0.08833845719709643
        },
        "center": {
            "latitude": 37.758947500000005,
            "longitude": -122.4342375558195
        }
    },
    "total": 2201,
    "businesses": [
        {
            "is_claimed": true,
            "rating": 4,
            "mobile_url": "http://m.yelp.com/biz/pearls-deluxe-burgers-san-francisco-3",
            "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
            "review_count": 1672,
            "name": "Pearl's Deluxe Burgers",
            "snippet_image_url": "http://s3-media1.fl.yelpcdn.com/photo/pVpAHBuMUbAY1b3H4ab-QQ/ms.jpg",
            "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
            "url": "http://www.yelp.com/biz/pearls-deluxe-burgers-san-francisco-3",
            "menu_date_updated": 1432961279,
            "phone": "4154096120",
            "snippet_text": "These burgers are some of the best burgers I have had in my life. Cooked perfectly rare and loaded with sloppy awesomeness... I couldn't put it down after I...",
            "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/G8_PDvn9faMbzKfADELEOg/ms.jpg",
            "categories": [
                [
                    "Burgers",
                    "burgers"
                ]
            ],
            "display_phone": "+1-415-409-6120",
            "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
            "menu_provider": "single_platform",
            "id": "pearls-deluxe-burgers-san-francisco-3",
            "is_closed": false,
            "location": {
                "cross_streets": "Jones St & Leavenworth St",
                "city": "San Francisco",
                "display_address": [
                    "708 Post St",
                    "Lower Nob Hill",
                    "San Francisco, CA 94109"
                ],
                "geo_accuracy": 9.5,
                "neighborhoods": [
                    "Lower Nob Hill"
                ],
                "postal_code": "94109",
                "country_code": "US",
                "address": [
                    "708 Post St"
                ],
                "coordinate": {
                    "latitude": 37.7877202,
                    "longitude": -122.4136277
                },
                "state_code": "CA"
            }
        },
        {
            "is_claimed": true,
            "rating": 4,
            "mobile_url": "http://m.yelp.com/biz/super-duper-burgers-san-francisco-3",
            "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
            "review_count": 1666,
            "name": "Super Duper Burgers",
            "snippet_image_url": "http://s3-media2.fl.yelpcdn.com/photo/y3rpg5BQvzEuPj7uSrTeeA/ms.jpg",
            "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
            "url": "http://www.yelp.com/biz/super-duper-burgers-san-francisco-3",
            "menu_date_updated": 1403169758,
            "phone": "4155383437",
            "snippet_text": "Went here with friends because I heard of good reviews. I have to say it did not disappoint. Gourmet burgers in a fast food environment was definitely the...",
            "image_url": "http://s3-media3.fl.yelpcdn.com/bphoto/CgZ2z_UtHjb_RBUDJjHa2w/ms.jpg",
            "categories": [
                [
                    "Burgers",
                    "burgers"
                ]
            ],
            "display_phone": "+1-415-538-3437",
            "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
            "menu_provider": "single_platform",
            "id": "super-duper-burgers-san-francisco-3",
            "is_closed": false,
            "location": {
                "cross_streets": "Ofarrell St & Kearny St",
                "city": "San Francisco",
                "display_address": [
                    "721 Market St",
                    "Union Square",
                    "San Francisco, CA 94103"
                ],
                "geo_accuracy": 9.5,
                "neighborhoods": [
                    "Union Square",
                    "Financial District",
                    "SoMa"
                ],
                "postal_code": "94103",
                "country_code": "US",
                "address": [
                    "721 Market St"
                ],
                "coordinate": {
                    "latitude": 37.786856,
                    "longitude": -122.403905
                },
                "state_code": "CA"
            }
        },
        {
            "is_claimed": true,
            "rating": 4,
            "mobile_url": "http://m.yelp.com/biz/umami-burger-san-francisco",
            "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
            "review_count": 1741,
            "name": "Umami Burger",
            "snippet_image_url": "http://s3-media2.fl.yelpcdn.com/photo/5JTV1EaqkZkL59ZOOh4IVg/ms.jpg",
            "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
            "url": "http://www.yelp.com/biz/umami-burger-san-francisco",
            "menu_date_updated": 1432964247,
            "phone": "4154408626",
            "snippet_text": "Came here a week ago with the fam . Late lunch dinner I believe after going to GGB and Palace of Fine Arts ! \n\nAnyways over all I got the signature burger...",
            "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/UuhDic8vq7BzHf3SzdFWAA/ms.jpg",
            "categories": [
                [
                    "Burgers",
                    "burgers"
                ],
                [
                    "American (New)",
                    "newamerican"
                ],
                [
                    "Gastropubs",
                    "gastropubs"
                ]
            ],
            "display_phone": "+1-415-440-8626",
            "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
            "menu_provider": "single_platform",
            "id": "umami-burger-san-francisco",
            "is_closed": false,
            "location": {
                "cross_streets": "Webster St & Fillmore St",
                "city": "San Francisco",
                "display_address": [
                    "2184 Union St",
                    "Marina/Cow Hollow",
                    "San Francisco, CA 94123"
                ],
                "geo_accuracy": 9.5,
                "neighborhoods": [
                    "Marina/Cow Hollow"
                ],
                "postal_code": "94123",
                "country_code": "US",
                "address": [
                    "2184 Union St"
                ],
                "coordinate": {
                    "latitude": 37.7973057549931,
                    "longitude": -122.435245513916
                },
                "state_code": "CA"
            }
        },
        {
            "is_claimed": true,
            "rating": 4,
            "mobile_url": "http://m.yelp.com/biz/uncle-boys-san-francisco",
            "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
            "review_count": 357,
            "name": "Uncle Boy's",
            "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/ORDFCCfl4cHIjkmaY0YRRg/ms.jpg",
            "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
            "url": "http://www.yelp.com/biz/uncle-boys-san-francisco",
            "menu_date_updated": 1393311753,
            "phone": "4157424468",
            "snippet_text": "When I'm in the mood for that great burger... The kind that is juicy, calorie dense, makes my mouth water, I go to uncle boys .\n\nFood: Cowboy burger hands...",
            "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/Sca8LctTqn7a13wcdWyoPw/ms.jpg",
            "categories": [
                [
                    "Burgers",
                    "burgers"
                ],
                [
                    "Fast Food",
                    "hotdogs"
                ]
            ],
            "display_phone": "+1-415-742-4468",
            "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
            "menu_provider": "single_platform",
            "id": "uncle-boys-san-francisco",
            "is_closed": false,
            "location": {
                "cross_streets": "4th Ave & 3rd Ave",
                "city": "San Francisco",
                "display_address": [
                    "245 Balboa St",
                    "Inner Richmond",
                    "San Francisco, CA 94118"
                ],
                "geo_accuracy": 9.5,
                "neighborhoods": [
                    "Inner Richmond"
                ],
                "postal_code": "94118",
                "country_code": "US",
                "address": [
                    "245 Balboa St"
                ],
                "coordinate": {
                    "latitude": 37.7772493,
                    "longitude": -122.4615654
                },
                "state_code": "CA"
            }
        },
        {
            "is_claimed": true,
            "rating": 4,
            "mobile_url": "http://m.yelp.com/biz/super-duper-burgers-san-francisco-6",
            "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
            "review_count": 722,
            "name": "Super Duper Burgers",
            "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/li5zWWn7s7uzeUsIdF5KTw/ms.jpg",
            "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
            "url": "http://www.yelp.com/biz/super-duper-burgers-san-francisco-6",
            "menu_date_updated": 1402652035,
            "phone": "4158821750",
            "snippet_text": "The soft serve is delish! I am normally not a fan of chocolate ice-cream because there's only a hint of chocolate flavor. That said, I l-o-v-e-d the...",
            "image_url": "http://s3-media1.fl.yelpcdn.com/bphoto/RVx3ROyfpNyi9i4TIe73rA/ms.jpg",
            "categories": [
                [
                    "Burgers",
                    "burgers"
                ]
            ],
            "display_phone": "+1-415-882-1750",
            "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
            "menu_provider": "single_platform",
            "id": "super-duper-burgers-san-francisco-6",
            "is_closed": false,
            "location": {
                "cross_streets": "Yerba Buena Ln & 4th St",
                "city": "San Francisco",
                "display_address": [
                    "783 Mission St",
                    "Financial District",
                    "San Francisco, CA 94103"
                ],
                "geo_accuracy": 9.5,
                "neighborhoods": [
                    "Financial District",
                    "SoMa"
                ],
                "postal_code": "94103",
                "country_code": "US",
                "address": [
                    "783 Mission St"
                ],
                "coordinate": {
                    "latitude": 37.7850043337572,
                    "longitude": -122.403849453429
                },
                "state_code": "CA"
            }
        },
        {
            "is_claimed": true,
            "rating": 4,
            "mobile_url": "http://m.yelp.com/biz/roam-artisan-burgers-san-francisco",
            "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
            "review_count": 1175,
            "name": "Roam Artisan Burgers",
            "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/66jFYn7h2M5paO4z9oWyFA/ms.jpg",
            "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
            "url": "http://www.yelp.com/biz/roam-artisan-burgers-san-francisco",
            "menu_date_updated": 1387741268,
            "phone": "4154407626",
            "snippet_text": "I've had lots of burgers from many restaurants, and the one I just had has to rank among the best. I got the French and Fries one (Truffle Parmesan Fries,...",
            "image_url": "http://s3-media3.fl.yelpcdn.com/bphoto/wpqJKToJwiS9FK1Zn4lzUw/ms.jpg",
            "categories": [
                [
                    "Burgers",
                    "burgers"
                ]
            ],
            "display_phone": "+1-415-440-7626",
            "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
            "menu_provider": "single_platform",
            "id": "roam-artisan-burgers-san-francisco",
            "is_closed": false,
            "location": {
                "cross_streets": "Gough St & Octavia St",
                "city": "San Francisco",
                "display_address": [
                    "1785 Union St",
                    "Marina/Cow Hollow",
                    "San Francisco, CA 94123"
                ],
                "geo_accuracy": 8,
                "neighborhoods": [
                    "Marina/Cow Hollow"
                ],
                "postal_code": "94123",
                "country_code": "US",
                "address": [
                    "1785 Union St"
                ],
                "coordinate": {
                    "latitude": 37.7979315072298,
                    "longitude": -122.428533956409
                },
                "state_code": "CA"
            }
        },
        {
            "is_claimed": true,
            "rating": 4,
            "mobile_url": "http://m.yelp.com/biz/super-duper-burgers-san-francisco-4",
            "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
            "review_count": 890,
            "name": "Super Duper Burgers",
            "snippet_image_url": "http://s3-media3.fl.yelpcdn.com/photo/gpQV1lvneMtmRXiBfWfLGA/ms.jpg",
            "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
            "url": "http://www.yelp.com/biz/super-duper-burgers-san-francisco-4",
            "menu_date_updated": 1402659322,
            "phone": "4155588123",
            "snippet_text": "Great place with great burger, one of the best burgers of my life.\n\nI have pair around US$ 11,50 for the burger and soda.\n\nNext time I will try the extra...",
            "image_url": "http://s3-media4.fl.yelpcdn.com/bphoto/bPlpBM1TDNNoI1KJ7ZlRGA/ms.jpg",
            "categories": [
                [
                    "Burgers",
                    "burgers"
                ],
                [
                    "American (New)",
                    "newamerican"
                ]
            ],
            "display_phone": "+1-415-558-8123",
            "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
            "menu_provider": "single_platform",
            "id": "super-duper-burgers-san-francisco-4",
            "is_closed": false,
            "location": {
                "cross_streets": "16th St & Noe St",
                "city": "San Francisco",
                "display_address": [
                    "2304 Market St",
                    "Duboce Triangle",
                    "San Francisco, CA 94114"
                ],
                "geo_accuracy": 9.5,
                "neighborhoods": [
                    "Duboce Triangle"
                ],
                "postal_code": "94114",
                "country_code": "US",
                "address": [
                    "2304 Market St"
                ],
                "coordinate": {
                    "latitude": 37.7640087,
                    "longitude": -122.433698
                },
                "state_code": "CA"
            }
        },
        {
            "is_claimed": true,
            "rating": 4.5,
            "mobile_url": "http://m.yelp.com/biz/chez-maman-san-francisco-9",
            "rating_img_url": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
            "review_count": 1428,
            "name": "Chez Maman",
            "snippet_image_url": "http://s3-media3.fl.yelpcdn.com/photo/3kWguyBGWrjMc8cx3gPbzg/ms.jpg",
            "rating_img_url_small": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
            "url": "http://www.yelp.com/biz/chez-maman-san-francisco-9",
            "menu_date_updated": 1387615969,
            "phone": "4156559542",
            "snippet_text": "I've been to the past and the current location. I miss the cozy and hole-in-the-wall feel of the past space, but I appreciate that there's more seating...",
            "image_url": "http://s3-media1.fl.yelpcdn.com/bphoto/gccHe5ofFMpNyh8vmS0VSw/ms.jpg",
            "categories": [
                [
                    "French",
                    "french"
                ],
                [
                    "Burgers",
                    "burgers"
                ],
                [
                    "Creperies",
                    "creperies"
                ]
            ],
            "display_phone": "+1-415-655-9542",
            "rating_img_url_large": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
            "menu_provider": "single_platform",
            "id": "chez-maman-san-francisco-9",
            "is_closed": false,
            "location": {
                "cross_streets": "Connecticut St & Missouri St",
                "city": "San Francisco",
                "display_address": [
                    "1401 18th St",
                    "Potrero Hill",
                    "San Francisco, CA 94107"
                ],
                "geo_accuracy": 9.5,
                "neighborhoods": [
                    "Potrero Hill"
                ],
                "postal_code": "94107",
                "country_code": "US",
                "address": [
                    "1401 18th St"
                ],
                "coordinate": {
                    "latitude": 37.7624429,
                    "longitude": -122.3967113
                },
                "state_code": "CA"
            }
        },
        {
            "is_claimed": true,
            "rating": 4,
            "mobile_url": "http://m.yelp.com/biz/jennys-burgers-san-francisco",
            "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
            "review_count": 361,
            "name": "Jenny's Burgers",
            "snippet_image_url": "http://s3-media3.fl.yelpcdn.com/photo/Gra7Fnegx0uMqVPpKXHHpQ/ms.jpg",
            "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
            "url": "http://www.yelp.com/biz/jennys-burgers-san-francisco",
            "phone": "4157531453",
            "snippet_text": "I can't describe why these burgers are so good.  I am definitely a fan of a condiment bar. Much easier just doing it yourself!\n\nThe people that work there...",
            "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/ghl32Ku_evfiFV9JoFbshw/ms.jpg",
            "categories": [
                [
                    "American (Traditional)",
                    "tradamerican"
                ],
                [
                    "Burgers",
                    "burgers"
                ],
                [
                    "Sandwiches",
                    "sandwiches"
                ]
            ],
            "display_phone": "+1-415-753-1453",
            "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
            "id": "jennys-burgers-san-francisco",
            "is_closed": false,
            "location": {
                "cross_streets": "Lincoln Way & Irving St",
                "city": "San Francisco",
                "display_address": [
                    "1233 9th Ave",
                    "Inner Sunset",
                    "San Francisco, CA 94122"
                ],
                "geo_accuracy": 8,
                "neighborhoods": [
                    "Inner Sunset"
                ],
                "postal_code": "94122",
                "country_code": "US",
                "address": [
                    "1233 9th Ave"
                ],
                "coordinate": {
                    "latitude": 37.76527,
                    "longitude": -122.466728
                },
                "state_code": "CA"
            }
        },
        {
            "is_claimed": true,
            "rating": 4,
            "mobile_url": "http://m.yelp.com/biz/roam-artisan-burgers-san-francisco-3",
            "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
            "review_count": 613,
            "name": "Roam Artisan Burgers",
            "snippet_image_url": "http://s3-media3.fl.yelpcdn.com/photo/Nl7SYigD0U9WkuR3_pSIug/ms.jpg",
            "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
            "url": "http://www.yelp.com/biz/roam-artisan-burgers-san-francisco-3",
            "menu_date_updated": 1402900047,
            "phone": "4158007801",
            "snippet_text": "If I had to rate Roam Artisan based on food only, it's a 5-star joint. The burgers are bomb, especially the elk - they're cooked just right and the...",
            "image_url": "http://s3-media4.fl.yelpcdn.com/bphoto/v1ZXD2Bk5f6Npb8g5rIsug/ms.jpg",
            "categories": [
                [
                    "Burgers",
                    "burgers"
                ],
                [
                    "Gluten-Free",
                    "gluten_free"
                ]
            ],
            "display_phone": "+1-415-800-7801",
            "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
            "menu_provider": "single_platform",
            "id": "roam-artisan-burgers-san-francisco-3",
            "is_closed": false,
            "location": {
                "cross_streets": "Wilmot St & Pine St",
                "city": "San Francisco",
                "display_address": [
                    "1923 Fillmore St",
                    "Lower Pacific Heights",
                    "San Francisco, CA 94115"
                ],
                "geo_accuracy": 8,
                "neighborhoods": [
                    "Lower Pacific Heights"
                ],
                "postal_code": "94115",
                "country_code": "US",
                "address": [
                    "1923 Fillmore St"
                ],
                "coordinate": {
                    "latitude": 37.787682,
                    "longitude": -122.433853
                },
                "state_code": "CA"
            }
        },
        {
            "is_claimed": true,
            "rating": 4,
            "mobile_url": "http://m.yelp.com/biz/big-mouth-burgers-san-francisco",
            "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
            "review_count": 449,
            "name": "Big Mouth Burgers",
            "snippet_image_url": "http://s3-media3.fl.yelpcdn.com/photo/j-Blumy9bqUY6lAWFM-wpw/ms.jpg",
            "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
            "url": "http://www.yelp.com/biz/big-mouth-burgers-san-francisco",
            "menu_date_updated": 1428510991,
            "phone": "4158214821",
            "snippet_text": "This is such a late review. \n\nI went here on 2015.05.30 with some friends from South Korea. Its a small place, almost hidden away. I've had a tough time...",
            "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/Gv9_Ejw23KRRYlk0DH8gZA/ms.jpg",
            "categories": [
                [
                    "Burgers",
                    "burgers"
                ]
            ],
            "display_phone": "+1-415-821-4821",
            "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
            "menu_provider": "eat24",
            "id": "big-mouth-burgers-san-francisco",
            "is_closed": false,
            "location": {
                "cross_streets": "Orange Aly & Valencia St",
                "city": "San Francisco",
                "display_address": [
                    "3392 24th St",
                    "Mission",
                    "San Francisco, CA 94110"
                ],
                "geo_accuracy": 9.5,
                "neighborhoods": [
                    "Mission"
                ],
                "postal_code": "94110",
                "country_code": "US",
                "address": [
                    "3392 24th St"
                ],
                "coordinate": {
                    "latitude": 37.752250817471,
                    "longitude": -122.42045135982
                },
                "state_code": "CA"
            }
        },
        {
            "is_claimed": true,
            "rating": 4,
            "mobile_url": "http://m.yelp.com/biz/super-duper-burgers-san-francisco-5",
            "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
            "review_count": 514,
            "name": "Super Duper Burgers",
            "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/8jEVf8fwvwYHEaTpR2RG5Q/ms.jpg",
            "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
            "url": "http://www.yelp.com/biz/super-duper-burgers-san-francisco-5",
            "menu_date_updated": 1402651645,
            "phone": "4159316258",
            "snippet_text": "Super Duper in the Marina!  Score!  The Marina hasn't had a real good burger place in years, if ever.  Drove by a couple of times and saw a line out the...",
            "image_url": "http://s3-media1.fl.yelpcdn.com/bphoto/P6eqPJMer53MSWrJoblKhw/ms.jpg",
            "categories": [
                [
                    "Burgers",
                    "burgers"
                ],
                [
                    "American (New)",
                    "newamerican"
                ]
            ],
            "display_phone": "+1-415-931-6258",
            "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
            "menu_provider": "single_platform",
            "id": "super-duper-burgers-san-francisco-5",
            "is_closed": false,
            "location": {
                "cross_streets": "Pierce St & Avila St",
                "city": "San Francisco",
                "display_address": [
                    "2200 Chestnut St",
                    "Marina/Cow Hollow",
                    "San Francisco, CA 94123"
                ],
                "geo_accuracy": 9.5,
                "neighborhoods": [
                    "Marina/Cow Hollow"
                ],
                "postal_code": "94123",
                "country_code": "US",
                "address": [
                    "2200 Chestnut St"
                ],
                "coordinate": {
                    "latitude": 37.800234,
                    "longitude": -122.439811
                },
                "state_code": "CA"
            }
        },
        {
            "is_claimed": true,
            "rating": 3.5,
            "mobile_url": "http://m.yelp.com/biz/smashburger-san-francisco-2",
            "rating_img_url": "http://s3-media1.fl.yelpcdn.com/assets/2/www/img/5ef3eb3cb162/ico/stars/v1/stars_3_half.png",
            "review_count": 215,
            "name": "Smashburger",
            "snippet_image_url": "http://s3-media1.fl.yelpcdn.com/photo/yPndW1409iZCjucEGSHsyA/ms.jpg",
            "rating_img_url_small": "http://s3-media1.fl.yelpcdn.com/assets/2/www/img/2e909d5d3536/ico/stars/v1/stars_small_3_half.png",
            "url": "http://www.yelp.com/biz/smashburger-san-francisco-2",
            "menu_date_updated": 1425576834,
            "phone": "4158902410",
            "snippet_text": "Smash,\n\nLook. I like you... probably a little too much.\nYou are going to make me fat... well i guess too late for that.\n\nOne thing I must share with the...",
            "image_url": "http://s3-media1.fl.yelpcdn.com/bphoto/9e17lxEm-jVwxsAe0H4rrw/ms.jpg",
            "categories": [
                [
                    "Burgers",
                    "burgers"
                ]
            ],
            "display_phone": "+1-415-890-2410",
            "rating_img_url_large": "http://s3-media3.fl.yelpcdn.com/assets/2/www/img/bd9b7a815d1b/ico/stars/v1/stars_large_3_half.png",
            "menu_provider": "single_platform",
            "id": "smashburger-san-francisco-2",
            "is_closed": false,
            "location": {
                "cross_streets": "Bryant St & Hampshire St",
                "city": "San Francisco",
                "display_address": [
                    "2300 16th St",
                    "Ste 293",
                    "Mission",
                    "San Francisco, CA 94103"
                ],
                "geo_accuracy": 9.5,
                "neighborhoods": [
                    "Mission"
                ],
                "postal_code": "94103",
                "country_code": "US",
                "address": [
                    "2300 16th St",
                    "Ste 293"
                ],
                "coordinate": {
                    "latitude": 37.7662174804428,
                    "longitude": -122.407808706329
                },
                "state_code": "CA"
            }
        },
        {
            "is_claimed": true,
            "rating": 4,
            "mobile_url": "http://m.yelp.com/biz/calibur-san-francisco",
            "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
            "review_count": 95,
            "name": "Calibur",
            "snippet_image_url": "http://s3-media1.fl.yelpcdn.com/photo/I0ExZX6bGcQWeVBj5dPQDA/ms.jpg",
            "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
            "url": "http://www.yelp.com/biz/calibur-san-francisco",
            "menu_date_updated": 1434050697,
            "phone": "4157424931",
            "snippet_text": "Amazing burgers! Friendly staff; awesome location.\n\nWish there were more of them :)",
            "image_url": "http://s3-media3.fl.yelpcdn.com/bphoto/2w2WoFN6uhMqN3U26W291g/ms.jpg",
            "categories": [
                [
                    "Burgers",
                    "burgers"
                ],
                [
                    "American (Traditional)",
                    "tradamerican"
                ]
            ],
            "display_phone": "+1-415-742-4931",
            "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
            "menu_provider": "eat24",
            "id": "calibur-san-francisco",
            "is_closed": false,
            "location": {
                "cross_streets": "Claremont Blvd & San Lorenzo Way",
                "city": "San Francisco",
                "display_address": [
                    "68 W Portal Ave",
                    "West Portal",
                    "San Francisco, CA 94127"
                ],
                "geo_accuracy": 8,
                "neighborhoods": [
                    "West Portal"
                ],
                "postal_code": "94127",
                "country_code": "US",
                "address": [
                    "68 W Portal Ave"
                ],
                "coordinate": {
                    "latitude": 37.7402382,
                    "longitude": -122.4668427
                },
                "state_code": "CA"
            }
        },
        {
            "is_claimed": true,
            "rating": 4,
            "mobile_url": "http://m.yelp.com/biz/super-duper-burger-san-francisco-3",
            "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
            "review_count": 168,
            "name": "Super Duper Burger",
            "snippet_image_url": "http://s3-media2.fl.yelpcdn.com/photo/S3eytTBrwViDB45Q0okbRQ/ms.jpg",
            "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
            "url": "http://www.yelp.com/biz/super-duper-burger-san-francisco-3",
            "menu_date_updated": 1403170385,
            "phone": "4159741200",
            "snippet_text": "In terms of service - Super Duper is really super duper - haha ok I'll stop. \nBut in all seriousness - fast food burger chains are a dime a dozen - what...",
            "image_url": "http://s3-media1.fl.yelpcdn.com/bphoto/IQefT7sL144rscow6WjNVg/ms.jpg",
            "categories": [
                [
                    "Burgers",
                    "burgers"
                ]
            ],
            "display_phone": "+1-415-974-1200",
            "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
            "menu_provider": "single_platform",
            "id": "super-duper-burger-san-francisco-3",
            "is_closed": false,
            "location": {
                "cross_streets": "Spear St & Steuart St",
                "city": "San Francisco",
                "display_address": [
                    "98 Mission St",
                    "Financial District",
                    "San Francisco, CA 94105"
                ],
                "geo_accuracy": 9.5,
                "neighborhoods": [
                    "Financial District",
                    "SoMa",
                    "South Beach"
                ],
                "postal_code": "94105",
                "country_code": "US",
                "address": [
                    "98 Mission St"
                ],
                "coordinate": {
                    "latitude": 37.7928058550794,
                    "longitude": -122.394083711639
                },
                "state_code": "CA"
            }
        },
        {
            "is_claimed": true,
            "rating": 4.5,
            "mobile_url": "http://m.yelp.com/biz/garaje-san-francisco",
            "rating_img_url": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
            "review_count": 679,
            "name": "Garaje",
            "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/tyLsDYshIfuIOw1wdfmU5g/ms.jpg",
            "rating_img_url_small": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
            "url": "http://www.yelp.com/biz/garaje-san-francisco",
            "menu_date_updated": 1390510771,
            "phone": "4156440838",
            "snippet_text": "HANDS DOWN THE BEST RESTAURANT I'VE BEEN TO SINCE MOVING TO SF!\n\nNow that I've gotten my excitement out of the way, let me reiterate: Garaje is amazing! The...",
            "image_url": "http://s3-media3.fl.yelpcdn.com/bphoto/5zu3A23o9e65jO_cMxfLFA/ms.jpg",
            "categories": [
                [
                    "Mexican",
                    "mexican"
                ],
                [
                    "Burgers",
                    "burgers"
                ],
                [
                    "Dive Bars",
                    "divebars"
                ]
            ],
            "display_phone": "+1-415-644-0838",
            "rating_img_url_large": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
            "menu_provider": "single_platform",
            "id": "garaje-san-francisco",
            "is_closed": false,
            "location": {
                "cross_streets": "James Lick Fwy & Stillman St",
                "city": "San Francisco",
                "display_address": [
                    "475 3rd St",
                    "SoMa",
                    "San Francisco, CA 94107"
                ],
                "geo_accuracy": 9.5,
                "neighborhoods": [
                    "SoMa"
                ],
                "postal_code": "94107",
                "country_code": "US",
                "address": [
                    "475 3rd St"
                ],
                "coordinate": {
                    "latitude": 37.7816626955148,
                    "longitude": -122.396104066043
                },
                "state_code": "CA"
            }
        },
        {
            "is_claimed": true,
            "rating": 4,
            "mobile_url": "http://m.yelp.com/biz/sams-san-francisco",
            "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
            "review_count": 348,
            "name": "Sam's",
            "snippet_image_url": "http://s3-media2.fl.yelpcdn.com/photo/DbwxpxmPjPXZGWaA8iEW5A/ms.jpg",
            "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
            "url": "http://www.yelp.com/biz/sams-san-francisco",
            "phone": "4153911539",
            "snippet_text": "I'm from Sacramento, where I make a point to visit every place I hear has good burgers! So while I was visiting sf, I yelped burger places near by and this...",
            "image_url": "http://s3-media4.fl.yelpcdn.com/bphoto/rd9ZgJlBTCGxfQo4PlJG_g/ms.jpg",
            "categories": [
                [
                    "American (Traditional)",
                    "tradamerican"
                ],
                [
                    "Burgers",
                    "burgers"
                ],
                [
                    "Pizza",
                    "pizza"
                ]
            ],
            "display_phone": "+1-415-391-1539",
            "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
            "id": "sams-san-francisco",
            "is_closed": false,
            "location": {
                "cross_streets": "Grant Ave",
                "city": "San Francisco",
                "display_address": [
                    "618 Broadway",
                    "Russian Hill",
                    "San Francisco, CA 94133"
                ],
                "geo_accuracy": 8,
                "neighborhoods": [
                    "Russian Hill",
                    "North Beach/Telegraph Hill"
                ],
                "postal_code": "94133",
                "country_code": "US",
                "address": [
                    "618 Broadway"
                ],
                "coordinate": {
                    "latitude": 37.798073,
                    "longitude": -122.407501
                },
                "state_code": "CA"
            }
        },
        {
            "is_claimed": true,
            "rating": 4,
            "mobile_url": "http://m.yelp.com/biz/box-kitchen-san-francisco",
            "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
            "review_count": 268,
            "name": "Box Kitchen",
            "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/x26x5SQSMh64G2NA5uGgcQ/ms.jpg",
            "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
            "url": "http://www.yelp.com/biz/box-kitchen-san-francisco",
            "phone": "4155807170",
            "snippet_text": "I came here after something from a nearby grimy gay bar and thought to ask to use the restroom which,at the time, was not an option but the guy behind the...",
            "image_url": "http://s3-media1.fl.yelpcdn.com/bphoto/ULE8K8zufG7MAzRmSq3xsw/ms.jpg",
            "categories": [
                [
                    "Food Stands",
                    "foodstands"
                ],
                [
                    "Burgers",
                    "burgers"
                ]
            ],
            "display_phone": "+1-415-580-7170",
            "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
            "id": "box-kitchen-san-francisco",
            "is_closed": false,
            "location": {
                "cross_streets": "5th St & Mary St",
                "city": "San Francisco",
                "display_address": [
                    "431 Natoma St",
                    "SoMa",
                    "San Francisco, CA 94103"
                ],
                "geo_accuracy": 9.5,
                "neighborhoods": [
                    "SoMa"
                ],
                "postal_code": "94103",
                "country_code": "US",
                "address": [
                    "431 Natoma St"
                ],
                "coordinate": {
                    "latitude": 37.7811688139033,
                    "longitude": -122.406377480554
                },
                "state_code": "CA"
            }
        },
        {
            "is_claimed": true,
            "rating": 4,
            "mobile_url": "http://m.yelp.com/biz/hall-of-flame-burgers-san-francisco",
            "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
            "review_count": 352,
            "name": "Hall Of Flame Burgers",
            "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/Y0cSrBHXbcxI5Emz0kqoYQ/ms.jpg",
            "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
            "url": "http://www.yelp.com/biz/hall-of-flame-burgers-san-francisco",
            "phone": "4155844444",
            "snippet_text": "This was a HAPPY ACCIDENT finding this GEM! These are the most incredible burgers I've ever had. Hands down. PERFECT. Plus the kid who made mine had on...",
            "image_url": "http://s3-media4.fl.yelpcdn.com/bphoto/HXFzbn46KWpobOqtualCJg/ms.jpg",
            "categories": [
                [
                    "Burgers",
                    "burgers"
                ]
            ],
            "display_phone": "+1-415-584-4444",
            "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
            "id": "hall-of-flame-burgers-san-francisco",
            "is_closed": false,
            "location": {
                "cross_streets": "Castelo Ave",
                "city": "San Francisco",
                "display_address": [
                    "73 Cambon Dr",
                    "Parkmerced",
                    "San Francisco, CA 94132"
                ],
                "geo_accuracy": 8,
                "neighborhoods": [
                    "Parkmerced"
                ],
                "postal_code": "94132",
                "country_code": "US",
                "address": [
                    "73 Cambon Dr"
                ],
                "coordinate": {
                    "latitude": 37.7179446816444,
                    "longitude": -122.474387660623
                },
                "state_code": "CA"
            }
        },
        {
            "is_claimed": true,
            "rating": 4,
            "mobile_url": "http://m.yelp.com/biz/giordano-bros-san-francisco",
            "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
            "review_count": 827,
            "name": "Giordano Bros",
            "snippet_image_url": "http://s3-media3.fl.yelpcdn.com/photo/j1NVmn4aiDXmrrIVwGgaEg/ms.jpg",
            "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
            "url": "http://www.yelp.com/biz/giordano-bros-san-francisco",
            "menu_date_updated": 1422011011,
            "phone": "4153972767",
            "snippet_text": "years ago on one drunken night, my friends stopped in here for something to eat...I was too drunk to eat and just sat there and watched...I am fun that...",
            "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/DjUhCkleuoqIaOWE-vufdw/ms.jpg",
            "categories": [
                [
                    "Sandwiches",
                    "sandwiches"
                ],
                [
                    "Burgers",
                    "burgers"
                ]
            ],
            "display_phone": "+1-415-397-2767",
            "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
            "menu_provider": "single_platform",
            "id": "giordano-bros-san-francisco",
            "is_closed": false,
            "location": {
                "cross_streets": "Broadway St & Vallejo St",
                "city": "San Francisco",
                "display_address": [
                    "303 Columbus Ave",
                    "Russian Hill",
                    "San Francisco, CA 94133"
                ],
                "geo_accuracy": 8,
                "neighborhoods": [
                    "Russian Hill",
                    "North Beach/Telegraph Hill"
                ],
                "postal_code": "94133",
                "country_code": "US",
                "address": [
                    "303 Columbus Ave"
                ],
                "coordinate": {
                    "latitude": 37.7980614,
                    "longitude": -122.4072266
                },
                "state_code": "CA"
            }
        }
    ]
};




var location = yelp.region.center.latitude + "-" + yelp.region.center.longitude;

var restaurantList = "restaurants:" + location;


for (var i = 0; i < yelp.businesses.length; i++) {
  restaurant = yelp.businesses[i];
  client.hmset(restaurant.id, {
    name: restaurant.name,
    url: restaurant.mobile_url
  });  

 client.sadd(restaurantList, restaurant.id);
 if (i < 5 ) {
    client.sadd("testList", restaurant.id);
 }
}


client.hgetall('hall-of-flame-burgers-san-francisco', function(err, object) {
  console.log(object);
});

client.sinterstore(restaurantList, restaurantList, "testList");

var Rater = function(db, kind) {
  this.db = db;
  this.kind = kind;
  // this.db = redis.createClient();
  // this.db.on('connect', function() {
  //     console.log('connected');
  // });  
};

Rater.prototype.add = function(userID, restaurantID, done) {
  var userSentimentList = userID + ":" + this.kind;
  var restaurantSentimentList = restaurantID + ":" + this.kind;
  this.db.sadd(userSentimentList, restaurantID);
  this.db.sadd(restaurantSentimentList, userID);  
};

Rater.prototype.remove = function(userID, restaurantID, done) {
  var userSentimentList = userID + ":" + this.kind;
  var restaurantSentimentList = restaurantID + ":" + this.kind;
  this.db.srem(userSentimentList, restaurantID);
  this.db.srem(restaurantSentimentList, userID);
};

Rater.prototype.itemsByUser = function(userID, done) {
  var userSentimentList = userID + ":" + this.kind;
  this.db.smembers(userSentimentList, function(err, reply) {
//    console.log(reply);
  });  
};

Rater.prototype.usersByItem = function(restaurantID, done) {
  var restaurantSentimentList = restaurantID + ":" + this.kind;
  this.db.smembers(restaurantSentimentList, function(err, reply) {
    console.log("USERS BY ITEM " + reply);
  });
};


// Find union of users likes and dislikes
// Find all users who have rated anything on that userList
// compute list of similarity index for each user found and create new list

var Similars = function(db) {
  this.db = db;
  this.similars = ""; 
};

Similars.prototype.byUser = function(userID) {
  // var userSimilarsList = userID + ":Similars";
  // this.db.smembers(userSimilarsList);  
};

Similars.prototype.update = function(userID) {
  var userLikes = userID + ":Likes";
  var userDislikes = userID + ":Dislikes";

  this.db.sunionstore("userRated", userLikes, userDislikes);
  var that = this;
  this.db.smembers("userRated", function(err, restaurantArray) {
    for (var i = 0; i < restaurantArray.length; i++) {
      //WILL THIS THROW ERROR BECAUSE COMPARISONMEMBERS NOT DEFINED?
      var john = restaurantArray[i];
      // that.db.smembers(restaurantArray[i]+":Likes", function(err, answer) {
      //   console.log(answer);
      // });

      that.db.sunionstore("comparisonMembers", "comparisonMembers", restaurantArray[i] + ":Likes");
      that.db.sunionstore("comparisonMembers", "comparisonMembers", restaurantArray[i] + ":Dislikes");
    }
//    that.db.srem("comparisonMembers", userID);
    for (i = 0; i < 10000000; i++) {
        j = 1;

    }
    that.db.smembers("comparisonMembers", function(err, compMembersArray) {
      var comparisonIndex;
      var commonLikes;
      var commonDislikes;
      var conflicts1;
      var conflicts2;      
      var otherUserLikes;
      var otherUserDislikes;

      for (i = 0; i < compMembersArray.length; i++) {
        console.log(compMembersArray.length);
        otherUserLikes = compMembersArray[i] + ":Likes";
        otherUserDislikes = compMembersArray[i] + ":Dislikes";        
        //these are temporary lists, need to clear them somehow
  
        that.db.sinterstore("commonLikes", userLikes, otherUserLikes);
        that.db.sinterstore("commonDislikes", userDislikes, otherUserDislikes);
        that.db.sinterstore("conflicts1", userLikes, otherUserDislikes);
        that.db.sinterstore("conflicts2", userDislikes, otherUserLikes);
        that.db.sunionstore("allRatedRestaurants", userLikes, otherUserLikes,
                        userDislikes, otherUserDislikes);

        that.db.scard("commonLikes", function(err, commonLikesCount) {
            console.log("COMMON LIKES:  " + userID + "-  " + commonLikesCount);
          that.db.scard("commonDislikes", function(err, commonDislikesCount) {
            that.db.scard("conflicts1", function(err, conflicts1Count) {
              that.db.scard("conflicts2", function(err, conflicts2Count) {
                that.db.scard("allRatedRestaurants", function(err, allRatedRestaurantsCount) {
                  console.log("HELLO");
                  console.log(allRatedRestaurantsCount);
                  console.log((Number(commonLikesCount) + Number(commonDislikesCount) -
                               Number(conflicts1Count) - Number(conflicts2Count)) / Number(allRatedRestaurantsCount));

                });
              });
            });
          });
        });
      }
    });
  });
};

var raterLikes = new Rater(client, "Likes");
var raterDislikes = new Rater(client, "Dislikes");
var similars = new Similars(client);


raterLikes.add(1, "abc");
raterLikes.add(1, "def");
raterLikes.add(1, "ghi");
raterLikes.add(1, "jkl");
raterLikes.add(1, "mno");
raterLikes.add(1, "vwx");


raterLikes.add(2, "def");
raterLikes.add(2, "ghi");
raterLikes.add(2, "jkl");
raterLikes.add(2, "mno");
raterLikes.add(2, "pqr");
raterLikes.add(2, "stu");
raterLikes.add(2, "yz");

raterLikes.add(3, "abc");
raterLikes.add(3, "def");


raterDislikes.add(1, "123");
raterDislikes.add(1, "456");
raterDislikes.add(1, "789");
raterDislikes.add(1, "101112");
raterDislikes.add(1, "131415");

raterDislikes.add(2, "abc");
raterDislikes.add(2, "123");
raterDislikes.add(2, "101112");
raterDislikes.add(2, "131415");

//raterLikes.itemsByUser(2);

raterLikes.usersByItem("vwx");
similars.update(1);



module.exports.client;
