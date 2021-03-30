import React from 'react';
import './App.css';
import MenuSection from './MenuSection';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.menu = [
      {
        menuID: 1,
        name: 'Breakfast',
        numOfItems: 8,
      }, {
        menuID: 3,
        name: 'Lunch',
        numOfItems: 8,
      }, {
        menuID: 4,
        name: 'Appetizers',
        numOfItems: 6,
      }
      , {
        menuID: 5,
        name: 'Dinner',
        numOfItems: 12,
      }, {
        menuID: 6,
        name: 'Sides',
        numOfItems: 8,
      }, {
        menuID: 7,
        name: 'Desserts',
        numOfItems: 4,
      }
    ]
  }

  render() {
    return (
      <>
        <div className="card m-5 p-3 text-center">
          <h1 className="p-3">Restaurant Name</h1>
          <h3>Address</h3>
          <h3>Hours</h3>
          <div className="accordion" id="accordionExample">
            {
              this.menu.map((item, index) => {
                return (
                  <MenuSection key={index} menuSection={item} />
                )
              })
            }
          </div>
        </div>
      </>
    )
  }
}
export default App;