const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            Not yet rated
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += '⭐'
        }
        rating = (
            <h3>
            {stars} stars
            </h3>
        )
        comments = data.place.comments.map(c => {
          return (
            <div className="border col-sm-4">
              <h2 className="rant">{c.rant ? 'Rant! 👿' : 'Rave! 🤩'}</h2>
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
                    <br />
                    <h2 className="text-info">Rating</h2>
                    {rating}
                    <br />
                    <h2 className="text-info">Description</h2>
                    <h3>
                        {data.place.showEstablished()}
                    </h3>
                    <h4>Serving {data.place.cuisines}</h4>
                    <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                        Edit
                    </a>
                    <form action={`/places/${data.place.id}?_method=DELETE`} method="POST">
                        <input type="submit" className="btn btn-danger" value="Delete"/>
                    </form>
                </div>
            </div>
            <br />
            <div>
                <h2 className="text-info border-top">Comments</h2>
                <div className="row">
                    {comments}
                </div>
                <h2 className="text-info border-top">Got Your Own Rant or Rave?</h2>
                <form action={`/places/${data.place.id}/comment?_method=POST`} method="POST" >
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