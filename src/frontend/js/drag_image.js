const React = require('react')

module.exports = React.createClass({
  displayName: 'DragImage',

  // onDragStart :: Event -> State Event
  onDragStart({dataTransfer: dt, currentTarget: t}) { dt.setData('text', t.src) },

  render() {
    return <img src={p.src} key={p.src} draggable={true} onDragStart={this.onDragStart} {...this.props} />;
  }
});


