const React = require('react')
const Def = require('../default')

function index (data) {
  let placesFormatted = data.places.map((place) => {
    return (
      //added "key={place}" to div below to get rid of key warning in terminal
      <div key={place} className="col-sm-6">
        <h2>
          <a href={`/places/${place.id}`}>
            {place.name}
          </a>
        </h2>
        <p>
          {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name} />
        <p className="location">
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
  return (
    <Def>
        <main>
            <h1>Places to Rant or Rave About</h1>
            <div className="row">
              {placesFormatted}
            </div>
        </main>
    </Def>
  )
}
  

module.exports = index