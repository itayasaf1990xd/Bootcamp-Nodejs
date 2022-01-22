const mongoose = require("mongoose");
const Restaurant = require("./restaurantSchema");

mongoose.connect(
  "mongodb://localhost/findMyRestaurant",
  () => {
    console.log("mongoDB connected");
  },
  (error) => console.error(error)
);

// Option 01
const findAll = async (queryType) => {
	try {
    if (queryType === "Mongoose") {
      // mongoose
      const restaurants = await Restaurant.find();
      console.log(restaurants);
    } else {
      // mongosh
      const restaurants = db.restaurants.find();
      console.log(restaurants);
    }
	} catch (error) {
		console.log(error.message);
	}
}

const findByCuisine = async () => {
	try {
		const restaurants = await Restaurant.where('cuisine').equals('france cuisine');
		console.log(restaurants);
	} catch (error) {
		console.log(error.message);
	}
}

const findByKosher = async () => {
	try {
		const restaurants = await Restaurant.where('isKosher').equals(true);
		console.log(restaurants);
	} catch (error) {
		console.log(error.message);
	}
}

const findByCity = async () => {
	try {
		const restaurants = await Restaurant.where('address.city').equals(
			'afula',
		);
		console.log(restaurants);
	} catch (error) {
		console.log(error.message);
	}
}

const findByaddres = async () => {
	try {
		const restaurants = await Restaurant.where('address.street').equals(
			'PLOSD00',
		);
		console.log(restaurants);
	} catch (error) {
		console.log(error.message);
	}
}

const findByCoordinates = async () => {
	try {
		const restaurants = await Restaurant.find({
			coordinates: [844, 10.64],
		});
		console.log(restaurants);
	} catch (error) {
		console.log(error.message);
	}
}

const showAscendingOrderByName = async () => {
	try {
		const restaurants = await Restaurant.find().sort({ name: 1 });
		console.log(restaurants);
	} catch (error) {
		console.log(error.message);
	}
}

const showAscendingOrderByCity = async () => {
	try {
		const restaurants = await Restaurant.find().sort({
			'address.city': 1,
		});
		console.log(restaurants);
	} catch (error) {
		console.log(error.message);
	}
}

const updateRestaurantName = async () => {
	try {
		const restaurants = await Restaurant.updateOne(
			{ name: 'mati restaurant' },
			{ $set: { name: 'daniel restaurant' } },
		);
		console.log(restaurants);
	} catch (error) {
		console.log(error.message);
	}
}

const deleteRestaurant = async () => {
	try {
		const restaurants = await Restaurant.deleteOne({
			name: 'shaked restaurant',
		});
		console.log('res :', restaurants);
	} catch (error) {
		console.log(error.message);
	}
}

const printRestaurantName = async () => {
	try {
		(await Restaurant.find()).forEach((rest) => {
			console.log('name :', rest.name);
		});
	} catch (error) {
		console.log(error.message);
	}
}

const printRestaurantCity = async () => {
	try {
		(await Restaurant.find()).forEach((rest) => {
			console.log('city :', rest.address.city);
		});
	} catch (error) {
		console.log(error.message);
	}
}

const printRestaurantCoordinates = async () => {
	try {
		(await Restaurant.find()).forEach((rest) => {
			console.log('city :', rest.address.coordinates);
		});
	} catch (error) {
		console.log(error.message);
	}
}

const printRestaurantWithSpecificAlphabet = async () => {
	try {
		const restaurant = await Restaurant.find({ name: /^s/gi });
		console.log(restaurant);
	} catch (error) {
		console.log(error.message);
	}
}

const printRestaurantCollectionLength = async () => {
	try {
		const restaurant = await Restaurant.find();
		console.log(restaurant.length);
	} catch (error) {
		console.log(error.message);
	}
}

const runQuery = async () => {
  findAll();
  findByCuisine();
  findByKosher();
  findByCity();
  findByaddres();
  findByCoordinates();
  showAscendingOrderByName();
  showAscendingOrderByCity();
  updateRestaurantName();
  deleteRestaurant();
  printRestaurantName();
  printRestaurantCity();
  printRestaurantCoordinates();
  printRestaurantWithSpecificAlphabet();
  printRestaurantCollectionLength();
}
runQuery();

// Option 02
const sendQuery = async () => {
  // Crud Queries:
  // 1.1 Write a MongoDb query to display all the documents in the restaurant collection:
  const query = await Restaurant.find();
  db.restaurants.find();

  // 1.2 Write a MongoDb query to display all restaurants that have a specific cuisine:
  const query = await Restaurant.find({cuisine: "meat"});
  db.restaurants.find({cuisine: "meat"});

  // 1.3 Write a MongoDb query that displays only kosher restaurants:
  const query = await Restaurant.findOne({isKosher: true});
  db.restaurants.find({isKosher: true})

  // 1.4 Write a MongoDb query that displays only a specific cities restaurants:
  const query = await Restaurant.where("address.city").equals("Tel-Aviv");
  db.restaurants.find({ "address.city": "Tel-Aviv" });

  // 1.5 Write a MongoDb query to display a specific restaurants address:
  const query = await Restaurant.where("address.city").equals("Tel-Aviv").select('address');
  db.restaurants.find({ "address.street": "Jordan" });

  // 1.6 Write a MongoDb query to display a specific restaurants coordinates:
  const query = await Restaurant.where("address.city").equals("Tel-Aviv").select("address.coordinates");
  db.restaurants.find({ coordinates: [ -77, 564, 40.67 ] });

  // 1.7 Write a MongoDb query that should display all restaurants in ascending order by restaurant name:
  const query = await Restaurant.find().sort({name: 1});
  db.restaurants.find().sort({ name: 1 })

  // 1.8 Write a MongoDb query that should display all restaurants in ascending order by city names:
  const query = await Restaurant.find().sort("address.city");
  db.restaurants.find().sort({ "address.city": 1 });

  // 1.9 Update a specific restaurant's name:
  const query = await Restaurant.findOneAndUpdate({ name: "Daniel's Restaurant" } , { name: "Shahars's Restaurant" });
  db.restaurants.updateOne({ name: "za" },{ $set: { name: "ze" } });

  // 1.10 Update a specific restaurant by adding a new review:
  const query = await Restaurant.updateOne({name:"Ernest's Restaurant"},{$push:{reviews:["test 8, 1010 02:24:00","10"]}});
  db.restaurants.updateOne({name:"Ernest's Restaurant"},{$push:{reviews:["test 8, 1010 02:24:00","100"]}});

  // 1.11 Update all restaurants to be kosher:
  const query = await Restaurant.updateMany({}, { $set: { isKosher: true } });
  db.restaurants.updateMany({}, { $set: { isKosher: true } });

  // 1.12 Delete a specific restaurant:
  Restaurant.deleteOne({name:"ze"});
  db.restaurants.deleteOne({name:"ze"});

  // 1.13 Delete all restaurants:
  Restaurant.deleteOne({});
  db.restaurants.deleteOne({});
// ---------------------------------------------------------------------------

  // forEach Queries:
  // 2.1 Write a MongoDb query to print all restaurant names:
  for await (const restaurant of Restaurant.find()) {
    console.log(restaurant.name);
  }

  (await Restaurant.find()).forEach((restaurant)=>{
    console.log(restaurant.name)
  });

  db.restaurants.find().forEach((res) => {
    print(res.name)
  });

  // 2.2 Write a MongoDb query to print all restaurant cities:
  for await (const restaurant of Restaurant.find()) {
    console.log(restaurant.address.city);
  }

  (await Restaurant.find()).forEach((restaurant)=>{
    console.log(restaurant.address.city)
  });

  db.restaurants.find().forEach((res)=>{
    print(res.address.city)
  });

  // 2.3 Write a MongoDb query to print all restaurant coordinates:
  for await (const restaurant of Restaurant.find()) {
    console.log(restaurant.address.coordinates);
  }

  (await Restaurant.find()).forEach((restaurant)=>{
    console.log("coordinates: " + restaurant.address.coordinates)
  });

  db.restaurants.find().forEach((res)=>{
    print(restaurant.address.coordinates)
  });
// ---------------------------------------------------------------------------

  // Advanced Queries:
  // 3.1 Query for restaurant names that start with a specific alphabet:
  const query = await Restaurant.find({name: /^E/g});
  db.restaurants.find({ name: /^z/gi });

  // 3.2 Query how many documents you have from the restaurant collection:
  const query = await Restaurant.find().count();
  db.restaurants.find().count();

  // 3.3 Write a MongoDb query to get restaurants that include reviews from a specific date:
  const query = await Restaurant.find({reviews : { $elemMatch:{"date":{$gte : "22-10-2022"}}}});
  db.restaurants.find({'reviews.date':'22-10-2022'});
// ---------------------------------------------------------------------------

  // Aggregation Operations:
  // 4.1 Write a mongoDb query to display all restaurants average score:
  Restaurant.aggregate(
    [{ $group: { _id: "name", average: { $avg: "$rating" } } }],
    function (error, result) {
      if (error) {
        console.log(error);
      }
      console.log(result);
    }
  );
  db.restaurants.aggregate([{$project: {reviewsAvg: {$avg: "reviews.score"}}}]);

  // 4.2 Write a mongoDb query to display all restaurants average score:
  const query = await Restaurant.aggregate([{ $unwind: "$reviews" }, { $match: { name: "Bennelong" } }, { $group: { _id: "$name", Average: { $avg: "$reviews.score" } } }]);
  db.restaurants.aggregate([{ $unwind: "$reviews" }, { $match: { name: "Bennelong" } }, { $group: { _id: "$name", Average: { $avg: "$reviews.score" } } }]);
};
sendQuery();
