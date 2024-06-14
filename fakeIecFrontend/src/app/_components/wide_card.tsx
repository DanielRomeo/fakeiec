import React, { PropsWithChildren } from 'react';
import Card from 'react-bootstrap/Card';
import { motion } from 'framer-motion';

interface WideCardProps {
    children: React.ReactNode;
    className?: string;
}

const WideCard : React.FC<WideCardProps> = ({ children, className = '' }) => {
  return (
    <Card className={`shadow-lg border-0 rounded-0 ${className}`}>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
};

export default WideCard;