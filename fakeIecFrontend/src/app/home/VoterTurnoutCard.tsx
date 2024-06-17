import React, { PropsWithChildren, useEffect, useRef } from 'react';
import AnimatedNumber from '../_components/AnimatedNumberComponent'
import Card from 'react-bootstrap/Card';

import Styles from '../_styles/home/totalVotesCard.module.scss'


export const TotalVotesCard: React.FC = () => {
 
  return (
    <div className='col-lg-4 col-md-4 col-sm-12'>
        <Card className={`shadow-lg border-0 rounded-0 `}>
            
            <Card.Body  >
            	<Card.Title className={Styles.title}>Voter turnout</Card.Title>

				<div  className={Styles.number}>
					<AnimatedNumber from={1} to={68} duration={4}></AnimatedNumber>% 
				</div>
                
            </Card.Body>
        </Card>
    </div>
  );
};


export default TotalVotesCard;