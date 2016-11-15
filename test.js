var mockData = [
  {"name":"Bar Hop","rating":4,"yelpUrl":"https://www.yelp.com/biz/bar-hop-toronto?adjust_creative=qa_056HVPUxZuSk67ht_rg&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=qa_056HVPUxZuSk67ht_rg","phone":"+1-647-352-7476","snippet":"What a glorious down town Toronto location for outstanding craft beers and elite bar food. When you want to drink come to Bar Hop. I enjoyed a swarth of...","image":"https://s3-media3.fl.yelpcdn.com/bphoto/O0O0_yXfiATdzcmvGts12g/ms.jpg","address":["391 King Street W","Downtown Core","Toronto, ON M5V 1K1","Canada"],"people":0,"going":0},
  {"name":"Boxcar Social","rating":4.5,"yelpUrl":"https://www.yelp.com/biz/boxcar-social-toronto?adjust_creative=qa_056HVPUxZuSk67ht_rg&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=qa_056HVPUxZuSk67ht_rg","phone":"+1-416-792-5873","snippet":"Oh my gosh this place is a serene haven on a busy street. The coffee is really really good (cortado at least), the staff are lovely & the fit out is...","image":"https://s3-media4.fl.yelpcdn.com/bphoto/NrC_qhRJfUleBCzd-pKYQw/ms.jpg","address":["1208 Yonge Street","Summer Hill","Toronto, ON M4T 1W1","Canada"],"people":0,"going":0},
  {"name":"Communist's Daughter","rating":4.5,"yelpUrl":"https://www.yelp.com/biz/communists-daughter-toronto?adjust_creative=qa_056HVPUxZuSk67ht_rg&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=qa_056HVPUxZuSk67ht_rg","phone":"+1-647-435-0103","snippet":"Hole in the wall that truly maintains a hole in the wall feeling. It looks like an old milkshake shop that never got renovated. It has an air of dirty...","image":"https://s3-media2.fl.yelpcdn.com/bphoto/vMggP01d2UlxqmpT4xfA8g/ms.jpg","address":["1149 Dundas Street W","Ossington Strip","Toronto, ON M6J 1X3","Canada"],"people":0,"going":0},
  {"name":"Handlebar","rating":4.5,"yelpUrl":"https://www.yelp.com/biz/handlebar-toronto?adjust_creative=qa_056HVPUxZuSk67ht_rg&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=qa_056HVPUxZuSk67ht_rg","phone":"+1-647-748-7433","snippet":"Very relaxing and a good place to come with partner(s), friends or even just alone. Very hipster bar with events and live music on certain days.\n\nDrinks are...","image":"https://s3-media2.fl.yelpcdn.com/bphoto/CskLxTc6Pb0GctGDLMlo_Q/ms.jpg","address":["159 Augusta Avenue","Main Floor","Kensington Market","Toronto, ON M5T 2L4","Canada"],"people":0,"going":0},
  {"name":"Voodoo Child","rating":4.5,"yelpUrl":"https://www.yelp.com/biz/voodoo-child-toronto?adjust_creative=qa_056HVPUxZuSk67ht_rg&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=qa_056HVPUxZuSk67ht_rg","phone":"+1-647-748-1011","snippet":"One of the best coffee places in the Kensington market area! Coffee might be a little sour sometimes but it was very tasty every time we went. Nice latte...","image":"https://s3-media1.fl.yelpcdn.com/bphoto/-TzZJu8KOcbRf2nWIUr4AQ/ms.jpg","address":["388 College Street","Toronto, ON M5T 1S7","Canada"],"people":0,"going":0},
  {"name":"Civil Liberties","rating":4.5,"yelpUrl":"https://www.yelp.com/biz/civil-liberties-toronto?adjust_creative=qa_056HVPUxZuSk67ht_rg&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=qa_056HVPUxZuSk67ht_rg","phone":"+1-416-546-5634","snippet":"Came here in the summer to join (rescue) a friend of mine whose Tinder date had been crashed by a bevy of his raucous out-of-town friends. I didn't know...","image":"https://s3-media4.fl.yelpcdn.com/bphoto/8WNf3eXt9f9H_nEeMo6pNQ/ms.jpg","address":["878 Bloor Street W","Christie Pits","Toronto, ON M6G 1M2","Canada"],"people":0,"going":0},
  {"name":"Beerbistro","rating":4,"yelpUrl":"https://www.yelp.com/biz/beerbistro-toronto-3?adjust_creative=qa_056HVPUxZuSk67ht_rg&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=qa_056HVPUxZuSk67ht_rg","phone":"+1-416-861-9872","snippet":"Fantastic French fries and dynamite cheese fondue!!! \n\nI've eaten here a few times and been delighted every time. This time we stopped in for a few beers...","image":"https://s3-media1.fl.yelpcdn.com/bphoto/WOce9UNfXYZYHZg5n5VSmQ/ms.jpg","address":["18 King Street E","Downtown Core","Toronto, ON M5C 1C4","Canada"],"people":0,"going":0},
  {"name":"The Queen And Beaver Public House","rating":4,"yelpUrl":"https://www.yelp.com/biz/the-queen-and-beaver-public-house-toronto?adjust_creative=qa_056HVPUxZuSk67ht_rg&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=qa_056HVPUxZuSk67ht_rg","phone":"+1-647-347-2712","snippet":"My boyfriend and I came here on a Friday night expecting greasy but elevated pub food and we got exactly what we had hoped for, albeit a bit less greasy and...","image":"https://s3-media1.fl.yelpcdn.com/bphoto/Sqi4UGiCxeocdCcnZCSP3Q/ms.jpg","address":["35 Elm Street","Downtown Core","Toronto, ON M5G 1H1","Canada"],"people":0,"going":0},
  {"name":"The Hole In the Wall","rating":4.5,"yelpUrl":"https://www.yelp.com/biz/the-hole-in-the-wall-toronto?adjust_creative=qa_056HVPUxZuSk67ht_rg&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=qa_056HVPUxZuSk67ht_rg","phone":"+1-647-350-3564","snippet":"Great food, great live music, great drinks! The only down fall is that the bar truly is a \"hole in the wall\" it can get very cluttered here on a Friday/...","image":"https://s3-media3.fl.yelpcdn.com/bphoto/Ts-fBtnQnVq1zvjVBiGgCQ/ms.jpg","address":["2867 Dundas Street W","The Junction","Toronto, ON M6P 1Y9","Canada"],"people":0,"going":0},
  {"name":"Nuit Social","rating":4.5,"yelpUrl":"https://www.yelp.com/biz/nuit-social-toronto-2?adjust_creative=qa_056HVPUxZuSk67ht_rg&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=qa_056HVPUxZuSk67ht_rg","phone":"+1-647-350-6848","snippet":"Great place and good prices. This is definitely a place for sharing dishes, with some great cheese and olive platters (we don't eat meat so no opinion on...","image":"https://s3-media1.fl.yelpcdn.com/bphoto/Q_kpuBo6pUoAJrBv8j_L6A/ms.jpg","address":["1168 Queen Street W","Beaconsfield Village","Toronto, ON M6J 1J5","Canada"],"people":0,"going":0},
  {"name":"Her Father's Cider Bar & Kitchen","rating":4.5,"yelpUrl":"https://www.yelp.com/biz/her-fathers-cider-bar-and-kitchen-toronto?adjust_creative=qa_056HVPUxZuSk67ht_rg&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=qa_056HVPUxZuSk67ht_rg","phone":"+1-647-347-7747","snippet":"We thoroughly enjoyed Her Father's Cider Bar. It was fun and different.\n\nWe sampled several of the ciders, and here is a quick summary of our views:\nTwin...","image":"https://s3-media3.fl.yelpcdn.com/bphoto/M2BkCLzey8K8T5ntVxJy3Q/ms.jpg","address":["119 Harbord Street","Toronto, ON M5S 1G7","Canada"],"people":0,"going":0},
  {"name":"The Four Seven","rating":5,"yelpUrl":"https://www.yelp.com/biz/the-four-seven-toronto?adjust_creative=qa_056HVPUxZuSk67ht_rg&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=qa_056HVPUxZuSk67ht_rg","phone":"+1-647-348-4500","snippet":"Youre probably going to miss the entrance due to its lack of signage, but after talking with the owner (one of the nicest and more approachable individuals...","image":"https://s3-media1.fl.yelpcdn.com/bphoto/SMtraJ6QCXOwSw1R6OGXSg/ms.jpg","address":["1211 Bloor Street W","Brockton Village","Toronto, ON M6H 1N4","Canada"],"people":0,"going":0},
  {"name":"Three Hands","rating":5,"yelpUrl":"https://www.yelp.com/biz/three-hands-toronto?adjust_creative=qa_056HVPUxZuSk67ht_rg&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=qa_056HVPUxZuSk67ht_rg","phone":"+1-289-339-9280","snippet":"Atmosphere is amazing, food is even better. Best place for fried chicken & watermelon in the city, as it's paired together in a way that actually WORKS...","image":"https://s3-media1.fl.yelpcdn.com/bphoto/qZtHh5U3UzORZKva9WwgYA/ms.jpg","address":["1532 Dundas Street W","Brockton Village","Toronto, ON M6K 1T5","Canada"],"people":0,"going":0},
  {"name":"Northwood","rating":4,"yelpUrl":"https://www.yelp.com/biz/northwood-toronto?adjust_creative=qa_056HVPUxZuSk67ht_rg&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=qa_056HVPUxZuSk67ht_rg","snippet":"Definitely one of the best cocktail bars and cafes in town. If you are looking for a place to have a great drink and great conversation, don't miss out on...","image":"https://s3-media3.fl.yelpcdn.com/bphoto/UWCMEZB8mwfNFHrPh1YJzw/ms.jpg","address":["815 W Bloor Street","Bickford Park","Toronto, ON M6G 1M1","Canada"],"people":0,"going":0},
  {"name":"Hair of the Dog","rating":4,"yelpUrl":"https://www.yelp.com/biz/hair-of-the-dog-toronto?adjust_creative=qa_056HVPUxZuSk67ht_rg&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=qa_056HVPUxZuSk67ht_rg","phone":"+1-416-964-2708","snippet":"As a local, I like coming to this bar/restaurant because it has a relaxed atmosphere, offers a large selection of drinks, and has pretty good food! This pub...","image":"https://s3-media4.fl.yelpcdn.com/bphoto/zxXvmlam9ZqAt0JuzN3JfA/ms.jpg","address":["425 Church Street","Downtown Core","Toronto, ON M4Y 2C3","Canada"],"people":0,"going":0},
  {"name":"The Walton","rating":4.5,"yelpUrl":"https://www.yelp.com/biz/the-walton-toronto?adjust_creative=qa_056HVPUxZuSk67ht_rg&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=qa_056HVPUxZuSk67ht_rg","phone":"+1-647-352-5520","snippet":"'Twas a late summer, early fall sort of evening; just warm enough to sit among the fairy lights and foliage and cool enough to indulge in some decadent...","image":"https://s3-media4.fl.yelpcdn.com/bphoto/4dxcj3xtvnzfPui8rcdKBg/ms.jpg","address":["607 College Street","Little Italy","Toronto, ON M6G 1B5","Canada"],"people":0,"going":0},
  {"name":"Page One","rating":4.5,"yelpUrl":"https://www.yelp.com/biz/page-one-toronto-4?adjust_creative=qa_056HVPUxZuSk67ht_rg&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=qa_056HVPUxZuSk67ht_rg","phone":"+1-416-663-4920","snippet":"How could I NOT love a coffee bar with a liqour license and vintage typewriters all over the place? I need to come here and write...\n\nSolid offerings and a...","image":"https://s3-media3.fl.yelpcdn.com/bphoto/0H8kgK3wK06jdQyvEOhsNw/ms.jpg","address":["106 Mutual Street","Ryerson","Toronto, ON M5B 2R7","Canada"],"people":0,"going":0},
  {"name":"The Monk's Table","rating":4,"yelpUrl":"https://www.yelp.com/biz/the-monks-table-toronto?adjust_creative=qa_056HVPUxZuSk67ht_rg&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=qa_056HVPUxZuSk67ht_rg","phone":"+1-416-920-9074","snippet":"I Love THIS PLACE! Always end up here when I head downtown to see a couple of clients in the area. I consider it a treat to be there.\n\nYou have to ask...","image":"https://s3-media1.fl.yelpcdn.com/bphoto/hWVrdEoRnv3bYGK1lYoqzw/ms.jpg","address":["1276 Yonge Street","Summer Hill","Toronto, ON M4T 1W5","Canada"],"people":0,"going":0},
  {"name":"Insomnia Restaurant & Lounge","rating":4,"yelpUrl":"https://www.yelp.com/biz/insomnia-restaurant-and-lounge-toronto?adjust_creative=qa_056HVPUxZuSk67ht_rg&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=qa_056HVPUxZuSk67ht_rg","phone":"+1-416-588-3907","snippet":"Since my last review, we've gone back for brunch several more times. Each time, it's been better and better. I always get the PLT, with strip bacon instead....","image":"https://s3-media3.fl.yelpcdn.com/bphoto/5dXne8zgD5lt_bP3O6towA/ms.jpg","address":["563 Bloor Street W","Toronto, ON M5S 1Y6","Canada"],"people":0,"going":0},
  {"name":"The Wickson Social","rating":4,"yelpUrl":"https://www.yelp.com/biz/the-wickson-social-toronto?adjust_creative=qa_056HVPUxZuSk67ht_rg&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=qa_056HVPUxZuSk67ht_rg","phone":"+1-647-748-1501","snippet":"This is a fabulous hidden spot off from the busy Yonge Street. The owners of Oxley & Queen and beaver did it again. With stunning interior and great...","image":"https://s3-media2.fl.yelpcdn.com/bphoto/qCkRFoW_ylbRZlg4902WFw/ms.jpg","address":["5 St Joseph Street","Downtown Core","Toronto, ON M4Y 1Z3","Canada"],"people":0,"going":0}
] 

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Mongoose setup
mongoose.connect('mongodb://localhost/testDB');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to testDB');
});

var barSchema = new mongoose.Schema({ 
  expire : Number,
  bar    : String,
  person : String
});

var Bar = mongoose.model('Bar', barSchema);


var parse = function(raw) {
  return raw
}

var reserve = function(bar) {
  var expire = Math.floor(Math.random()*1000)
  var people = ['Alice', 'Bob', 'Carol', 'Dean', 'Elizabeth']
  var j = Math.floor(Math.random()*5)
  var reserve = new Bar({ expire: expire, bar: bar.name, person: people[j]})
  reserve.save(function(err, newEntry) {
      if (err) {
        console.error(err);
      } else {
        console.log('bar saved')
      }
    })
}

var findPeople = function(bar) {
  var expire = 500
  var person = 'Carol'
  var query = Bar.find({ expire: {$lt: expire}, bar: bar.name })
  return query.exec()
}


var bars = parse(mockData)

// Saving Stuff
// bars.forEach(function(bar) {
//   reserve(bar)
// })


// Find in Database
var promises = bars.map(findPeople);

var results = Promise.all(promises);

results.then(function(data) {
  data.forEach(function(barInfo, i) {
    console.log(bars[i].name)
    bars[i].people = barInfo.length
    console.log('# People Going: ' + bars[i].people)
    var find = barInfo.filter(function(elm) {
      return elm.person === 'Bob'
    })
    bars[i].going = !!find.length
    console.log('Bob Going?: ' + bars[i].going)
    console.log('/////////////////////////////////////')
  })
  console.log(bars)
})
