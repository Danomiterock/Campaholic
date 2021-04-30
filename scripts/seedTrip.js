const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Trips collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/campaholicdb"
);

const TripSeed = [{
    start_date: 10-06-2021,
    length: 2,
    location: "WHITE HORSE LAKE Campground",
    description: "<h2>Overview</h2>\nWhite Horse Lake is an extremely popular fishing lake, 19 miles southeast of Williams, in northern Arizona. The lake's campground is conveniently located an hour from Grand Canyon National Park's south rim and surrounded by the exciting and diverse scenery of Kaibab National Forest. A number of forest attractions are nearby, including scenic overlooks, dams and hiking and mountain biking trails.<h2>Recreation</h2>\nIn addition to fishing, the area offers excellent opportunities for hiking, mountain biking and wildlife watching. Anglers seek out rainbow trout, brown trout and channel catfish. A trail following the lake shore is nearby, as well as one leading to Sycamore Canyon Vista.<h2>Facilities</h2>\nWhite Horse Lake boasts more than 90 single unit campsites with tables, campfire rings, grills and tent pads. There is also a large group site that can accommodate up to 60 visitors, several double sites, tent-only sites and accessible sites. Tents, trailers and motorhomes up to 38 ft. long can be accommodated.\n<br/><br/>\nThere are many amenities offered to campers, including water faucets, a small boat ramp, restrooms, and trash bins.<h2>Natural Features</h2>\nKaibab National Forest is nestled on the Colorado Plateau, an area of land that was uplifted by geologic processes. Dogtown Lake sits at an elevation of 6,600 feet, and the campground is forested with plenty of open areas. Wildlife such as deer and elk frequent the shoreline.\n<br/><br/>\nSummer temperatures range from 50 degrees at night to 80-90 degrees during the day. Summer thunderstorms, known as the monsoon, can build up quickly, especially during July and August. Snow is common from December through March.\n<h2>contact_info</h2>\nFor facility specific information, please call +0000000.\n<h2>Nearby Attractions</h2>\nGrand Canyon National Park's South Rim is just over one hour north of the campground. The cities of Williams and Flagstaff have amenities such as shops, restaurants and cultural and historic sites.\n<br/><br/>\nFrom canyons to prairies, peaks to plateaus, Kaibab National Forest offers layers of opportunity for peace, solitude and discovery. Over 300 miles of trails, some clinging to the rims of the Grand Canyon, allow visitors to step off the beaten path into uncrowded landscapes.",
    activities: ["Educational Programs", "Camping","Rock Climbing"],
    images: [{
        title: "Beautiful view of the lake with a picnic table, fire ring and trees in the background",
        url: "https://cdn.recreation.gov/public/2021/03/18/13/39/233955_bdc5a7ec-d5be-49a5-b96f-f8413f318d85_1440.jpg"
    },
    {
        title: "campfire ring and picnic table",
        url: "https://cdn.recreation.gov/public/2018/08/10/18/33/6cc4c444-7ff7-4a79-8152-c4b9c83c375a_1600.jpg"
    }],

},
{
    start_date: 06-14-2021,
    length: 1,
    location: "Castle Rock Trail",
    description: "This 5.65 mile trail is part of the <a href=\"https://www.blm.gov/visit/search-details/10001024/2\"target=\"_blank\">Cerbat Foothills Recreation Area</a> trail system and is rated strenuous. Castle Rock Trail connects the <a href=\"https://www.blm.gov/visit/search-details/10000964/1\"target=\"_blank\">Badger Trail</a> and Camp Beale Loop, featuring vistas of the surrounding valley and interesting rock formations.<br/><br/>Weather conditions are most comfortable between the months of September and May, although early-morning use during the summer can be pleasant as well. No drinking water is available along the trail and shade is very scarce.<br/><br/>Download a free georeferenced map of the recreation area in the <a href=\"https://www.avenzamaps.com/maps/908826/blm-arizona-kingman-field-office-cerbat-foothills-recreation-area-rec3004-01-01\" target=\"_blank\">BLM Avenza Map Store</a>.",
    activities: ["HIKING", "MOUNTAIN BIKING", "HORSEBACK RIDING"],
    images: [],

},
{
    start_date: 08-15-2021,
    length: 4,
    location: "ALTO PIT OHV CAMPGROUND",
    description: "<h2>Overview</h2>\n<p>Alto Pit OHV Campground is located at the foot of Granite Mountain Wilderness Area, at an elevation of 6,200 feet. The off-highway trail system within the recreation area draws enthusiasts of all ages with degrees of skills that prove challenging and enjoyable for everyone alike. To make reservations click on the availability button to the right to book this site or call 1 (877) 444-6777. For general campground questions contact the Bradshaw Ranger District at 1 (928) 443-8000.</p>\n<h2>Recreation</h2>\nOnce an active gravel pit, Alto Pit is now exclusively used for motorized off-road travel. Main Pit is the larger of two gravel pits within the recreation area. West Pit is located a short distance to the southwest of Main Pit. The 20-mile trail system offers challenging rides for advanced recreationists and thrilling rides for beginners. <h2>Facilities</h2>\nThe campground has 10 single occupancy campsites and one double occupancy campsite. Each campsite has a picnic table, campfire ring, and space for a tent.  Near the entrance to the facility is a large Ramada. This may be used for group gatherings of up to 50 people. Ten campsite driveways are pull-through, one campsite driveway is back-in, and all have gravel surfaces. Some campsite driveways allow a camp unit (RV or tow vehicle and trailer) and an extra vehicle quite easily, while others may be snug. Services include three vault restrooms and two trash dumpsters. There are no RV hook-ups or dump station in the campground. There is a $5 day-use fee for visitors not camping although day-use is free on Wednesdays.<h2>Natural Features</h2>\nThe rugged landscape that encompasses and surrounds Alto Pit OHV Campground is a nearly perfect setting for off-highway vehicle (OHV) enthusiasts. Granite rock in various stages of degradation is evident and is more pronounced when viewing craggy and rugged Granite Mountain rising abruptly to the north.  Predominate vegetation include ponderosa pine, limber pine, oak, manzanita, and a variety of shrubs and grasses.\n<h2>Nearby Attractions</h2>\nGranite Basin Recreation Area is located northeast of the Alto Pit OHV Area and just a 15 minute drive away. Granite Basin contains Yavapai Campground, Granite Basin Lake and several day use areas. Visitors enjoy fishing, bird-watching, backpacking, hiking, horseback riding, biking, picnicking, camping, and just plain relaxing. Immediately rising north of Granite Basin Lake is rugged Granite Mountain with a highest point of 6,874 feet within Granite Mountain Wilderness Area. Thumb Butte, at 6,515 feet, rises prominently southeast of Alto Pit OHV Area and can be seen from most anywhere in the Prescott Basin. It is one of the most popular destinations in the Prescott National Forest.",
    activities: ["CAMPING" ],
    images: [{
        title: "ALTO PIT OHV CAMPGROUND",
        url: "https://cdn.recreation.gov/public/2018/09/20/20/37/251846_4f1aa761-ab18-42fa-879b-ac06f1549a72.jpg"
    },
    {
        title: "ALTO PIT OHV CAMPGROUND",
        url: "https://cdn.recreation.gov/public/images/76288.jpg"
    },
    {
        title: "ALTO PIT OHV CAMPGROUND",
        url: "https://cdn.recreation.gov/public/images/76291.jpg"
    }

],

}

];

db.Trip
  .remove({})
  .then(() => db.Trip.collection.insertMany(TripSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
