import axios from 'axios';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }
  
  componentDidMount() {
    axios.get('http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/type/5')
    .then(
      (response) => {
        this.setState({
          isLoaded: true,
          data: response.data
        })
        console.log(this.state.data)
      }
    ) 
  }
  
 
  
  render() {
    return (
      <ul>
          {this.state.data.map(item => (
            <li key={item.id}>
              {item.name} {item.id}
            </li>
          ))}
        </ul>
    )
  }
}
export default App;