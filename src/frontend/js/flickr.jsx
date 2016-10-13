const React = require('react')
const { flickrSearch } = require('./model')

module.exports = React.createClass({
  displayName: 'Flickr',

  // getInitialState :: { term :: String, results :: [Photo] }
  getInitialState() {return {term: "", results: []} },

  // termChanged :: Event -> State Term
  termChanged(e) { this.setState({term: e.currentTarget.value})  },

  // termChanged :: Event -> StateResultTerm
  updateResults(xs) { this.setState({results: xs}) },

  // searchChanged :: Event -> State Results
  searchClicked(_) {
    flickrSearch(this.state.term)
    .fork(this.props.showError, this.updateResults)
  },

  // onDragStart :: Event -> State Event
  onDragStart({dataTransfer: dt, currentTarget: t}) {
    dt.setData('text', t.src)
  },

  render() {
    const imgs = this.state.results.map(p => <img src={p.src} key={p.src} draggable={true} onDragStart={this.onDragStart} />)
    return (
      <div id="flickr">
        <input onChange={this.termChanged}/>
        <button onClick={this.searchClicked}>Search</button>
        <div id="results">{imgs}</div>
      </div>
    );
  }
});

