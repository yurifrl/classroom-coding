const React = require('react')
const { append, map } = require('ramda')
const { Photo, replacePhoto } = require('./model')
const { preventDefault} = require('./utils')
const { DragImage } = require('./drag_image')

module.exports = React.createClass({
  displayName: 'Collage',

  // getInitialState :: {photos :: [Photo]}
  getInitialState() { return {photos: [] }},

  // updatePhotos :: [Url] -> State Photos
  updatePhotos(xs) { this.setState({photos: xs}) },

  onDrop({dataTransfer: dt, clientX: x, clientY: y, currentTarget: t}) {
    const offset = t.getBoundingClientRect().top
    const src = dt.getData('text')
    const photo = Photo(src, x, y - offset)
    this.updatePhotos(append(photo, this.state.photos))
  },

  render() {
    const imgs = this.state.photos.map(p => <DragImage src={p.src} style={{top: p.y, left: p.x}} />)
    return (
      <div id="collage" onDrop={this.onDrop} onDragOver={preventDefault}>
        <div id="photos">{imgs}</div>
      </div>
    );
  }
});

