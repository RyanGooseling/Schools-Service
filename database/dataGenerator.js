var faker = require('faker');

const schools = ['Mountainview Elementary', 'Pine Hills Charter School', 'Forest Lake School of Fine Arts', 'Sunny Coast Middle School', 'Independence College', 'Riverview Elementary', 'South Fork Academy', 'Green Meadows Grammar School', 'Meadows Ridge Secondary School', 'Pinewood University', 'Littlewood Kindergarten', 'Winterville Kindergarten', 'Columbus Middle School', 'Pleasant Hill Academy', 'Laguna Bay School for Boys', 'River Fork Secondary School', 'Hawking Charter School', 'Bear Mountain School for Girls', 'Pine Hill School for Girls', 'Central Middle School', 'Silver Valley Grammar School', 'Sierra Secondary School', 'Marie Curie Grammar School', 'Oak Park Secondary School', 'Spring Gardens High School', 'Seacoast Kindergarten', 'Mountainview High School', 'Pacific Grove Charter School', 'Vista Conservatory', 'Saint Helena Grammar School', 'Da Vinci Secondary School', 'Waterford High School', 'Storm Coast School for Girls', 'Silver Oak School of Fine Arts', 'Eastview Charter School', 'Edgewood Secondary School', 'Highland School of Fine Arts', 'Seal Gulch Kindergarten', 'Einstein Secondary School', 'Deer Valley Technical School', 'Sun Valley Grammar School', 'West Shores Elementary', 'Clearwater Charter School', 'Eureka Kindergarten', 'Panorama School for Boys', 'Einstein Charter School', 'Crossroads University', 'Lone Pine High School', 'Deer Valley Technical School', 'Central Charter School', 'Riverdale Grammar School', 'West Shores Middle School', 'Storm Coast Elementary', 'Lincoln Charter School', 'Cypress Secondary School', 'Sandalwood Institute', 'Hercules Kindergarten', 'Hillview Kindergarten', 'Saint Helena Charter School', 'Maple Hills Conservatory', 'Forest Lake University', 'Heritage Elementary', 'Grand Ridge Middle School', 'Tranquillity School of Fine Arts', 'Mammoth Elementary', 'Martin Luther King High', 'Maple Ridge College', 'Cape Coral High School', 'Sunshine Elementary', 'Fortuna School', 'Maple Park Technical School', 'Silver Valley Secondary School', 'Horizon School of Fine Arts', 'Spring Hill Conservatory', 'Deer River Institute', 'Timber Creek School of Fine Arts', 'Willow Creek School for Boys', 'Storm Coast University', 'River Fork High School', 'Ravenwood High', 'Paradise High', 'Grand Ridge College', 'Eureka Elementary', 'Garden Grove College', 'Saint Mary\'s Charter School', 'Hawking High School', 'Lincoln Grammar School', 'Silver Oak Elementary', 'Oak Grove High', 'Martin Luther King Technical School', 'Riverview School', 'Silver Creek School for Girls', 'Mammoth School of Fine Arts', 'Upper Lake Conservatory', 'Clear Lake Technical School', 'Laguna Creek School for Boys', 'Saint Mary\'s School for Girls', 'Eastview Kindergarten', 'Oak Park School', 'Winterville University', 'Grand Ridge Technical School', 'Granite Hills School for Girls', 'Summers College', 'Canyon View Elementary', 'Elk Creek Charter School', 'Grapevine Kindergarten', 'Spring Hill College', 'Patriot School', 'Redwood Institute', 'Big Valley School for Boys', 'Pleasant Valley Secondary School', 'Providence Middle School', 'Pacific Grove Secondary School', 'Palm Valley Elementary', 'Sacred Heart Technical School', 'Mountain Oak Technical School', 'Pacific Grove University', 'Skyline Secondary School', 'Granite Bay Middle School', 'Spring Gardens School for Boys', 'Desert Winds School for Girls', 'Big Pine Kindergarten', 'Granite Bay College', 'Meadows Ridge Grammar School', 'Eastview Grammar School', 'Big Pine Conservatory', 'Oak Park School for Girls', 'Fortuna High', 'Grapevine Conservatory', 'Marble Hills Academy', 'Spring Gardens Technical School', 'Woodside Elementary', 'Grand Mountain School for Boys', 'Big Pine School of Fine Arts'];

const type = ['Public', 'Private'];
const grades = ['Preschool to 5', 'Preschool to 8', '6 to 8', '9 to 12'];
const choiceSchools = ['Choice school', 'Serves this home'];

const data = [];

let i = 1;

while (i < 101) {
  const thisData = {};
  const rating = {};
  const schoolRando = Math.floor(Math.random() * 134);
  const typeRando = Math.floor(Math.random() * 2);
  const gradeRando = Math.floor(Math.random() * 4);
  const choiceRando = Math.floor(Math.random() * 2);

  thisData.property_id = i;
  thisData.name = schools[schoolRando];
  thisData.type = type[typeRando];
  thisData.grades = grades[gradeRando];

  rating.lowIncome = Math.floor(Math.random() * 10 + 1);
  rating.studentGrowth = Math.floor(Math.random() * 10 + 1);
  rating.testScores = Math.floor(Math.random() * 10 + 1);
  rating.equity = Math.floor(Math.random() * 10 + 1);
  rating.lastUpdated = faker.date.between('2015-01-01', '2020-10-11');
  thisData.rating = rating;

  thisData.studentCount = Math.floor(Math.random() * 500 + 50);
  thisData.distance = Number((Math.random() * 10).toFixed(1));
  thisData.choiceSchool = choiceSchools[choiceRando];
  thisData.address = `${faker.address.streetAddress()}, ${faker.address.city()} ${faker.address.stateAbbr()}, ${faker.address.zipCode()}`;

  thisData.schoolUrl = 'https://high.cusd1.com/';
  thisData.districtUrl = 'https://www.cusd1.com/';
  thisData.ratio = Math.floor(Math.random() * 40 + 1);

  thisData.reviews = [];

  let j = 0;

  while (j < 10) {
    const review = {};
    review.score = Math.floor(Math.random() * 6);
    review.body = faker.lorem.sentences();
    review.createdAt = faker.date.between('2015-01-01', '2020-10-11');
    thisData.reviews.push(review);
    j += 1;
  }

  data.push(thisData);
  i += 1;
}

module.exports = data;
