import axios from 'axios';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: {
         breakfast: { food : "eggs"},
         lunch: {},
         appetizers: {},
         dinner: {},
         sides: {},
         desserts: {},
         drinks: {},
      }
    };
  }
  
  componentDidMount() {
    // axios.get('http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/type/5')
    // .then((response) => {this.setState({ data: response.data })}) 
    console.log(Object.keys(this.state.sections))

    // for (let i = 0)

  }

  
  
  render() {
    return (
      "Hi"
      // <ul>
      //     {this.state.data.map(item => (
      //       <li key={item.id}>
      //         {item.name}
      //       </li>
      //     ))}
      //   </ul>
    )
  }
}
export default App;