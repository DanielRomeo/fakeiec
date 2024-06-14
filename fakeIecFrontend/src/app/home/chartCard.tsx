import React, { PropsWithChildren } from 'react';
import Card from 'react-bootstrap/Card';
import { motion } from 'framer-motion';
import { Col } from 'react-bootstrap';
import BarChart from './BarChart'

interface ChartCardProps {
    children: React.ReactNode;
    className?: string;
}

export const ChartCard: React.FC<ChartCardProps> = ({ children, className='' }) => {
 
  return (
    <div>
        <Card className={`shadow-lg border-0 rounded-0 ${className}`}>
            <Card.Body>
                {/* <motion.div
                    animate={{ y: [0, -50] }}  // Move up 50px and then return to original position
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    // style={{
                    //     width: 100,
                    //     height: 100,
                    //     backgroundColor: 'green',
                    //     margin: '0 auto',  // Center the div horizontally
                    // }}
                >
                    {children}
                </motion.div> */}
                {children}
                <BarChart></BarChart>
            </Card.Body>
        </Card>
    </div>
  );
};


export default ChartCard;