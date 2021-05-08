const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the posts below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb+srv://admin:password12345@cluster0.3dinq.mongodb.net/campaholicdb?retryWrites=true&w=majority"
);

const PostSeed = [{
  username: "Triston Burns",
  location: "Cabeza Prieta National Wildlife Refuge",
  description: "A journey into the third largest wildlife refuge in the lower 48 states takes plenty of water and desert survival skills. Almost all of Cabeza Prieta National Wildlife Refuge is designated wilderness. Seven rugged mountain ranges cast shadows above valleys dotted with sand dunes and lava flows. The 1,000-square-mile refuge shares a 56-mile international border with Sonora, Mexico.Temperatures may top 100 degrees for 90 to 100 straight days from June to October. Summer thundershowers and winter soaking rains average about 7.5 cm on the western part of the refuge and up to 20 cm on the east side, 60 miles away. The winter and summer pattern of rainfall in the Sonoran desert stimulates the growth of more plant species than in most deserts. You'll find creosote bush flats, bursage on the bajadas, mesquite, palo verde,  ironwood, and an abundance of cacti, including ocotillo, cholla, and saguaro. Endangered Sonoran pronghorn and lesser long-nosed bats call this parched land home, as do desert bighorns, lizards, rattlesnakes, and desert tortoises. Elf owls peer from holes carved in saguaros by Gila woodpeckers. Every plant and animal has adapted to life we would find uninhabitable. Far from a barren desert, Cabeza Prieta NWR harbors as many as 420 plant species and more than 300 kinds of wildlife. Cabeza Prieta, Spanish for black head, refers to a lava-topped, granite peak in a remote mountain range in the western corner of the refuge.",
  statement: "I am going on an adventure to this cool refuge, there is an excellent range of wildlife to see here! I will be here for 2 to 3 weeks, living the life. Come join me.",
  activities: [{ title: "Hiking" }, { title: "Camping" }],
  friends: [{ username: "Bill" }, { username: "Ted" }]
},
{
  username: "Ronald55",
  location: "WestWorld",
  description: "WestWorld is located in north Scottsdale at the base of the McDowell Mountains.  Surrounded by the Sonoran Desert with over 360 acres of pristine landscaping, the covered Equidome Arena, Brett's Barn, and state-of-the-art equine facilities provide a spectacular setting for a variety of venues, including four annual Signature Events: the Barrett/Jackson Classic Auto Auction; All Arabian Horse Show; Sun Country Quarter Horse Show; and the Thunderbird Balloon Classic.Other amenities are also available at WestWorld, including horseback riding, catering facility, hiking trails into the McDowell Mountains, and recreational vehicle spaces. In November 1999, the Sanctuary Golf Course opened at the east end of the West World property.  This 18-hole golf course, with only 75 acres of turf, is designed to be water efficient, easily maintained, and was awarded membership in the Audubon Cooperative Sanctuary Program (the first golf course ever to achieve this distinction upon initial opening).",
  statement: "We are going to Westworld to have a fantastic time, please join us! I hope to see you there.",
  activities: [{ title: "HIKING" }, { title: "HORSEBACK RIDING" }],
  friends: [{ username: "Kevin" }]
},
{
  username: "Dan Lucas",
  location: "Quartz Peak Trail",
  description: "Quartz Peak Trail, in the 14,400-acre Sierra Estrella Wilderness, leads visitors from the floor of Rainbow Valley (elevation 1,550 feet) to the summit ridge of the Sierra Estrella at Quartz Peak (elevation 4,052 feet) in just 3 miles. Along the way, visitors are treated to a variety of Sonoran Desert plants and wildlife, scenic vistas, and evidence of the area's volcanic history. The views from the summit are spectacular--to the west is a dramatic panorama of rugged mountain ranges and desert plains, and to the east metropolitan Phoenix unfolds over the valley of the lower Salt River.Quartz Peak Trail is extremely steep and difficult to follow in places. This is a hike for experienced and well-conditioned hikers only! The trail begins at Quartz Peak Trailhead by following a closed four-wheel-drive track for approximately 1/4 mile. Look to the left as you walk up the old road and see a narrow trail ascending the ridge to the north. The trail is poorly marked in places and does not extend to the summit--the final 1/4 mile to Quartz Peak is a scramble over boulder and talus slopes that requires careful footing. Quartz Peak is a point on the spine of the Sierra Estrella capped with an outcrop of white quartz.",
  statement: "Hitting the trail for a weekend of fun, only come if you can keep up. We are hitting the summit at noon!",
  activities: [{ title: "WILDERNESS" }],
  friends: [{ username: "Fred" }, { username: "Caroline" }]
},
{
  username: "Myrla",
  location: "Mount Tipton Wilderness",
  description: "Overview The 30,760-acre Mount Tipton Wilderness is located in Mohave County, 25 miles north of Kingman, Arizona. This wilderness includes the entire northern half of the imposing Cerbat Mountains. Although Mount Tipton Peak, at 7,148 feet, dominates the wilderness, the true centerpiece and main scenic attraction here is the Cerbat Pinnacles. Located north of and below Mount Tipton, the Pinnacles, immense tusk-like rows of maroon-colored spires, stand majestically above open, tawny-colored valleys. Large and topographically complex, the Mount Tipton Wilderness provides a wide range of hiking, backpacking, photography, and horseback riding opportunities. Visitors capable of making the climb to the top of Mount Tipton can examine a remnant stand of large ponderosa pine located below the peak to the northeast, and will enjoy unsurpassed views in all directions. Know Before You Go. A four-wheel drive vehicle is strongly recommended to gain access to this wilderness. The terrain in Mt. Tipton is extremely rugged. A few old vehicle ways provide hiking routes in some places, but the most commonly used routes are the sand washes which dissect the area. The summer climate in this area is harsh, with temperatures in the daytime often exceeding 100 degrees. Temperatures are more moderate between October and April. During winter months it can be quite cold and snow is possible at the higher elevations.Water is relatively scarce in this part of the Cerbat Mountains. Springs shown on topographic maps can generally be relied upon for drinking water. Following rainy weather, pothole water is available, but can dry up quickly. Purification of all water is a necessity. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities. Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters. Contact the agency for more information about regulations. Some lands around and within the wilderness are not federally administered. Please respect the property rights of the owners and do not cross or use these lands without their permission.",
  statement: "I am going to hike and take photos, may stay for the weekend.",
  activities: [{ title: "WILDERNESS" }, { title: "HIKING" }, { title: "HORSEBACK RIDING" }, { title: "CAMPING" }, { title: "PHOTOGRAPHY" }],
  friends: [{ username: "Ahmed" }, { username: "Francine" }]
}]


db.Post
  .remove({})
  .then(() => db.Post.collection.insertMany(PostSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });