/** @jsx hyperdom.jsx */
var hyperdom = require('hyperdom')

module.exports = class WebApp {
  constructor () {
    this.message = 'default'
  }

  hello () {
    this.message = 'hello browser-monkey'
  }

  render () {
    return <div>
      <button onclick={() => this.hello()}>press me</button>
      <div class='message'>{this.message}</div>
    </div>
  }
}
