import React, { PropsWithChildren, useEffect, useRef } from 'react';
import AnimatedNumber from '../_components/AnimatedNumberComponent'
import Card from 'react-bootstrap/Card';
export const TotalVotesCard: React.FC = () => {
 
  return (
    <div className='col-lg-4 col-md-4 col-sm-12'>
        <Card className={`shadow-lg border-0 rounded-0 `}>
            
            <Card.Body>
            <Card.Title>Voter turnout</Card.Title>
                <AnimatedNumber from={1} to={58} duration={2}></AnimatedNumber>% of registered people voted
                
            </Card.Body>
        </Card>
    </div>
  );
};


export default TotalVotesCard;