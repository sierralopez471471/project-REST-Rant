const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div className="row">
                <div className="col-sm-6 mt-4">
                    <img src={data.place.pic} />
                    <h3>Located in {data.place.city}, {data.place.state}</h3>
                </div>
                <div className="col-sm-6 mt-4">
                    <h1>{data.place.name}</h1>
                    <h2 className="text-info">Rating</h2>
                    <h3>Currently Unrated</h3>
                    <h2 className="text-info">Description</h2>
                    <h3>
                        {data.place.showEstablished()}
                    </h3>
                    <h4>Serving {data.place.cuisines}</h4>
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
                <h2 className="text-info">Comments</h2>
                <h3>No comments yet!</h3>
            </div>
          </main>
        </Def>
    )
}

module.exports = show