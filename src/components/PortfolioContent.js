import React, {Component} from 'react';

import Header from './Header';
import Summary from './Summary';
import ContactoInfo from './ContactInfo'

class PortfolioContent extends Component {
    render(){
        return(
            <div class="portfolio-content">
                <Header />
                <Summary />
                <ContactoInfo />
            </div>
        )
    }
}

export default PortfolioContent;