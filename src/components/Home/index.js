import {Component} from 'react'

import Property from '../Property';

import './index.css';

const propertyListings=[
  {
    id:1,
    title:'The Old Rectory',
    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbcrj53mGyk-u4JwrIb6z1RBAeCpxR78gfQ&s',
    location:'Mysore',
    bedRooms:3,
    price:1.5,
    description:'The Old Rectory is 3BHK house with amenties includes guest rooms,electricity,water supply,balcony,security,swimming pool,gym etc.'
  },
  {
    id:2,
    title:'Wisdom house',
    imageUrl:'https://nigerianbuildingdesigns.com/wp-content/uploads/2023/12/11-Photo-1-scaled.jpg',
    location:'Bangalore',
    bedRooms:1,
    price:1,
    description:'Wisdom house is single bedroom flat with beautiful amenties like security,club house, parking, gym,electricity,guest rooms etc.'
  },
  {
    id:3,
    title:'The Light side',
    imageUrl:'https://i.ytimg.com/vi/kNNeC5c5e84/sddefault.jpg',
    location:'Bangalore',
    bedRooms:2,
    price:2.2,
    description:'The Light Side is modern luxury house with more amenties and double bedRooms'
  },
  {
    id:4,
    title:'The Dark side',
    imageUrl:'https://www.homepictures.in/wp-content/uploads/2021/01/1100-Sq-Ft-2BHK-Modern-Single-Floor-House-and-Free-Plan-1-780x470.jpeg',
    location:'Bangalore',
    bedRooms:2,
    price:2.2,
    description:'The Dark Side is A beautiful house on a medium budget. The 1100 square feet house has 2 bedrooms and an attached bathroom for domestics. The small sit out with wall cladding’s is a striking feature of the elevation.'
  },
  {
    id:5,
    title:'Evil House',
    imageUrl:'https://www.homepictures.in/wp-content/uploads/2020/02/1200-Square-Feet-2-Bedroom-Flat-Roof-Box-Type-Single-Floor-House-780x470.jpg',
    location:'Manjeri, Malappuram',
    bedRooms:2,
    price:0.28,
    description:'Evil House is A beautiful house on a low budget. The 1200 square feet house has 2 bedrooms and an attached bathroom for domestics. The small sit out with wall cladding’s is a striking feature of the elevation.'
  },
  {
    id:6,
    title:'Absolute House',
    imageUrl:'https://abitechdesign.com/wp-content/uploads/2021/02/4-UNITS-OF-3-BEDROOM-FLATS2.jpg',
    location:'Manjeri, Malappuram',
    bedRooms:2,
    price:3.2,
    description:'Absolute House is A beautiful house on a high budget. The 2400 square feet house has 2 bedrooms and an attached bathroom for domestics. The big sit out with wall cladding’s is a striking feature of the elevation.'
  },
  {
    id:7,
    title:'Strategy house',
    imageUrl:'https://www.homepictures.in/wp-content/uploads/2020/01/82046439_1685384844935443_561760749991493632_n-780x470.jpg',
    location:'Kerala',
    bedRooms:4,
    price:0.45,
    description:'Strategy house is A beautiful house on a low budget. The 1957 square feet house has 4 bedrooms and an attached bathroom for domestics. The small sit out with wall cladding’s is a striking feature of the elevation.'
  },
  {
    id:8,
    title:'Immense house',
    imageUrl:'https://dedonnieshomes.com/wp-content/uploads/2024/01/3-bedroom-flat-plan-drawing-1080x648.jpg',
    location:'Manjeri, Malappuram',
    bedRooms:3,
    price:3.2,
    description:'Immense house is A beautiful house on a high budget. The 2400 square feet house has 3 bedrooms and an attached bathroom for domestics. The small sit out with wall cladding’s is a striking feature of the elevation.'
  },
  {
    id:9,
    title:'Hedera House',
    imageUrl:'https://i.pinimg.com/564x/06/f5/50/06f55049a6def7aa344640422e800897.jpg',
    location:'Kerala',
    bedRooms:3,
    price:3.2,
    description:'Immense house is A beautiful house on a high budget. The 1839 square feet house has 3 bedrooms and an attached bathroom for domestics. The big sit out with wall cladding’s is a striking feature of the elevation.'
  },
  {
    id:10,
    title:'Russett House',
    imageUrl:'https://pbs.twimg.com/media/FE-Qe2HVkAIihUa.jpg',
    location:'kerala',
    bedRooms:3,
    price:3.2,
    description:'Russett House is A beautiful house on a high budget. The 2400 square feet house has 3 bedrooms and an attached bathroom for domestics. The small big out with wall cladding’s is a striking feature of the elevation.'
  },
]

const sortedArray=propertyListings.sort(
  (s1,s2)=>{
    if(s1.location > s2.location) return 1 
    else return -1
  }
)

const filters=[
  {displayedText:'location',id:1},
  {displayedText:'price',id:2},
  {displayedText:'bedRooms',id:3}
]

class Home extends Component{
  state={resultArray:sortedArray}

  onchangeOption=(event)=>{
    const value=(event.target.value)
    const result=propertyListings.sort(
      (s1,s2)=>{
        if((s1[value]) > s2[value]) return 1 
        else return -1
      }
    )
    this.setState({
      resultArray:result
    })
  }

  render(){
    const {resultArray}=this.state
    
    return(
      <div className="app-container">
        <h1 className="app-title">Visit and Book The Properties Now</h1>
        <div className="dropdown-container">
          <select className="dropdown" onChange={this.onchangeOption}>
            {filters.map(each=>(
              <option value={each.displayedText} key={each.id}>{each.displayedText}</option>
            ))}
          </select>
        </div>
        <ul className="products-listings">
            {resultArray.map(eachItem=>(
              <Property propertyDetails={eachItem} key={eachItem.id} renderBookingForm={this.renderBookingForm} />
            ))}
        </ul>
      </div>
    )
  }
}

export default Home;