const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
          return (
            <div className="border">
              <h2 className="rant">{c.rant ? 'Rant! >:[' : 'Rave! =D'}</h2>
              <h4>{c.content}</h4>
              <h3>
                <strong>- {c.author}</strong>
              </h3>
              <h4>Rating: {c.stars}</h4>
            </div>
          )
        })
    }
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
                {comments}
                <h2 className="text-info">Got Your Own Rant or Rave?</h2>
                <form method="POST" action={`/places/${data.place.id}/comment?_method=POST`}>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <input className="form-control" type="textarea" id="content" name="content" />
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-4">
                            <label htmlFor="author">Author</label>
                            <input className="form-control" type="text" id="author" name="author" required />
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="stars">Star Rating</label>
                            <input className="form-control" type="number" step="0.5" id="stars" name="stars" />
                        </div>
                        <div className="form-group col-sm-4">
                            <label className="form-check" htmlFor="rant">Rant?</label>
                            <input className="form-check-input" type="checkbox" id="rant" name="rant" />
                        </div>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Comment" />
                </form>
            </div>
          </main>
        </Def>
    )
}

module.exports = show