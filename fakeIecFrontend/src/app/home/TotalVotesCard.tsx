import React, { PropsWithChildren, useEffect, useRef } from 'react';
import AnimatedNumber from '../_components/AnimatedNumberComponent'
import Card from 'react-bootstrap/Card';

import Styles from '../_styles/home/totalVotesCard.module.scss'

export const TotalVotesCard: React.FC = () => {

  return (
    <div className='col-lg-6 col-md-6 col-sm-12'>
        <Card className={`shadow-lg border-0 rounded-0 `}>
            <Card.Body>
            	<Card.Title className={Styles.title}>Total number of votes</Card.Title>

				<div className={Styles.number}>
					<AnimatedNumber from={1} to={1000} duration={4}></AnimatedNumber>
				</div>
                
            </Card.Body>
        </Card>
    </div>
  );
};


export default TotalVotesCard;