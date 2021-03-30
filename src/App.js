import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MenuSection from './MenuSection';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.menu = [
      {
        menuID: 1,
        name: 'Breakfast',
      }, {
        menuID: 3,
        name: 'Lunch',
      }, {
        menuID: 4,
        name: 'Appetizers',
      }
      // , {
      //   menuID: 5,
      //   name: 'dinner',
      // }, {
      //   menuID: 6,
      //   name: 'sides',
      // }, {
      //   menuID: 7,
      //   name: 'desserts',
      // }, {
      //   menuID: 8,
      //   name: 'drinks',
      // }
    ]
  }

  render() {
    return (
      <>
        {
          this.menu.map((item, index) => {
            return (
              <MenuSection key={index} menuSection={item} />
            )
          })
        }
      </>
    )
  }
}
export default App;