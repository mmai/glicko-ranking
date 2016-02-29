import * as React from 'react'
import * as ReactDOM from 'react-dom'

interface Competition {
  name: string,
}

interface ApplicationProps {
  competitions: [Competition]
}

class Application extends React.Component<ApplicationProps, any> {
  render() {
    return (
      <ul>
      {this.props.competitions.map(c => (
        <li>{c.name}</li>
      ))}
      </ul>
    )}
}

const competitions: [Competition] = [ {name: "1st comp"}, {name: "2nd comp"}]
ReactDOM.render(<Application competitions={competitions} />, document.getElementById("app"));

