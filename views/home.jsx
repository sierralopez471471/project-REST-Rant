const React = require('react')
const Def = require('./default')

function home () {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img className="home-img" src="/images/pasta-alfredo.jpg" alt="Pasta"/>
          <div>
            Photo by <a href="https://unsplash.com/@eaterscollective?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Eaters Collective</a> on <a href="https://unsplash.com/s/photos/free-pasta-alfredo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  )
}

module.exports = home