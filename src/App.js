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
      }, {
        menuID: 3,
        name: 'Lunch',
      }, {
        menuID: 4,
        name: 'Appetizers',
      }
      , {
        menuID: 5,
        name: 'Dinner',
      }, {
        menuID: 6,
        name: 'Sides',
      }, {
        menuID: 7,
        name: 'Desserts',
      }
    ]
  }

  render() {
    return (
      <>
        <div id="Background" className="card m-5 p-3 text-center border border-dark">
            <h1 className="pt-3">Le Ian's</h1>
            <h3>Avenue de Awesome Inc, Paris, France</h3>
            <h3>Mon-Fri: 09:30 - 20:30 &nbsp;&nbsp;&nbsp; Sat-Sun: 11:30 - 20:30</h3>
            <div className="accordion" id="accordionExample">
              {
                this.menu.map((item, index) => {
                  return (
                    <MenuSection key={index} menuSection={item} />
                  )
                })
              }
              <h3>Menu prices based on if we need more money</h3>
            </div>
          </div>
      </>
    )
  }
}
export default App;