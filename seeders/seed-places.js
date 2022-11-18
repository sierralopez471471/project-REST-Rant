//gives access to our database
const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/thai-cuisine.jpg',
    founded: 1989
}, 
{
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/cat-cafe.jpg',
    founded: 2020
},
{
    name: "Dave's Hot Chicken",
    city: 'Los Angeles',
    state: 'CA',
    cuisines: 'Hot chicken, sliders',
    pic: 'https://images.unsplash.com/photo-1606149059549-6042addafc5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BpY3klMjBjaGlja2VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    founded: 2017
},
{
    name: 'Olive Garden',
    city: 'Venice Beach',
    state: 'CA',
    cuisines: 'Italian cuisine',
    pic: 'http://placekitten.com/400/400',
    founded: 2022
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})