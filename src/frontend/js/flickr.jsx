const React = require('react')
const { flickrSearch } = require('./model')

module.exports = React.createClass({
  displayName: 'Flickr',

  // getInitialState :: { term :: String, results :: Array[Url] }
  getInitialState() {return {term: "", results: []} },

  // termChanged :: Event -> State Term
  termChanged({currentTarget: t}) { this.setState({term: t.value}) },

  // termChanged :: Event -> StateResultTerm
  updateResults(xs) { this.setState({results: xs}) },

  // searchChanged :: Event -> ?
  searchClicked(_) {
    flickrSearch(this.state.term)
    .fork(this.props.showError, this.updateResults)
  },

  render() {
    const imgs = this.state.results.map(src => <img src={src} key={src} />)
    return (
      <div id="flickr">
        <input onChange={this.termChanged}/>
        <button onClick={this.searchClicked}>Search</button>
        <div id="results">{this.state.results}</div>
      </div>
    );
  }
});

