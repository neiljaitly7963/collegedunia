import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { colleges } from './colleges';

class App extends React.Component{
    constructor(){
        super();
        this.state={
            colleges: [],
            page: 'All'                                                                                                                                       
        }
    }    

    componentDidMount = () => {
        window.addEventListener('scroll', this.infiniteScroll);
        this.fetchData(this.state.page);
    }    

    infiniteScroll = () => {
        // End of the document reached?
        if (
          window.innerHeight + document.documentElement.scrollTop
          === document.documentElement.offsetHeight
        ) 
        {  
          this.fetchData();
        }
    }

    fetchData = () => {
        const temp = []
        if (this.state.colleges.length < colleges.length) {
            for (var i = this.state.colleges.length; i < this.state.colleges.length + 10 ; i++) {
                temp.push(colleges[i])
            }

            this.setState({
                colleges: [...this.state.colleges,...temp]
            })
        }

    }

    render(){
        return(
            <div className="App">
                <div className='grid-wrapper'>
                    
                    {
                        this.state.colleges.map((college, i) => {
                            return (
                                <Card
                                    className="box zone"
                                    key={i}
                                    name={college.college_name}
                                    originalFees={college.original_fees}
                                    discountedFees={college.discounted_fees}
                                    feesCycle={college.fees_cycle}
                                    ranking={college.ranking}
                                    tags={college.tags}
                                    amenties={college.amenties}
                                    rating={college.rating}
                                    ratingRemarks={college.rating_remarks}
                                    famousNearestPlaces={college.famous_nearest_places}
                                    nearestPlace={college.nearest_place}
                                    offerText={college.offertext}
                                />
                            );
                        })
                    }
                </div>
            </div>
            );
    }
}

export default App;






