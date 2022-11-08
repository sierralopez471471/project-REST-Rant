const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div className="row">
                <div className="col-sm-6">
                    <img src={data.place.pic} />
                </div>
                <div className="col-sm-6">
                    <h1>{data.place.name}</h1>
                    <h1>Rating</h1>
                    <h2>Currently Unrated</h2>
                    <h1>Description</h1>
                    <h2>Located in {data.place.city}, {data.place.state}</h2>
                    <h2>Serves {data.place.cuisines}</h2>
                    <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                        Edit
                    </a>
                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>
                </div>
            </div>
            <div>
                <h1>Comments</h1>
                <h2>No comments yet!</h2>
            </div>
          </main>
        </Def>
    )
}

module.exports = show