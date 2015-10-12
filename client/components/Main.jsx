var Canvas = React.createClass({
  componentDidMount() {
    var c = Snap(this.getDOMNode())
    var flow = Canvas.Flow()
    console.log(flow)
  },
  render() {
    return (
      <svg ref="foo"></svg>
    )
  }
})

if (Meteor.isClient) {
  Template.main.onRendered(function() {
    React.render(
      <Canvas />,
      document.getElementById('canvas')
    )
  })
}
