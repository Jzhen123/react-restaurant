import React from 'react';
import axios from 'axios';
import SectionItem from './SectionItem';

class MenuSection extends React.Component {
  constructor(props) {
    super(props);
    this.menuSection = props.menuSection;
    this.state = {
      sectionItems: []
    }
  }

  componentDidMount() {
    // Uses Ian's API to set each sections data array to the API call of 10 random items of a certain id
    if (this.menuSection.name === 'Dinner') { // Using two API calls and concatting them to get the atleast 12 unique items for Dinner
      this.axiosHelper();
      axios.get(`http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/type/${this.menuSection.menuID}`)
        .then((response) => this.setState({ sectionItems: this.state.sectionItems.concat(response.data) }))
    } else {
      this.axiosHelper();
    }
  }

  // Function to get API call
  axiosHelper(){
    axios.get(`http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/type/${this.menuSection.menuID}`)
        .then((response) => this.setState({ sectionItems: response.data }))
  }

  // Rendering Every Section of Items in an accordion section 
  render() {
    return (
      <>
        <div className="accordion-item">
          <h2 className="accordion-header" id={this.menuSection.menuID}>
            <button id="text" className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${this.menuSection.name}`} aria-expanded="true" aria-controls={this.menuSection.name}>
              {this.menuSection.name}
            </button>
          </h2>
          <div id={this.menuSection.name} className="accordion-collapse collapse" aria-labelledby={this.menuSection.menuID} data-bs-parent="#accordionExample">
            <div className="accordion-body">
              {this.state.sectionItems.map((item, index) => {
                  return (
                    <SectionItem key={index} sectionItem={item} />
                  )
                })}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default MenuSection;