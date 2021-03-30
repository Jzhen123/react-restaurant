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
    axios.get(`http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/type/${this.menuSection.menuID}`)
      .then((response) => this.setState({ sectionItems: response.data })
      )
  }

  render() {
    if (this.state.sectionItems.length < 1) {
      return null
    }

    return (
      <>
        <div class="card m-5">
          <div class="card-header">
            {this.menuSection.name}
          </div>
          <ul className="list-group">
            {
              this.state.sectionItems.map((item, index) => {
                return (
                  <SectionItem key={index} sectionItem={item} />
                )
              })
            }
          </ul>
        </div>
      </>
    )
  }
}

export default MenuSection;