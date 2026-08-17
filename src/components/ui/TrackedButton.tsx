import React from 'react';
import { Button } from '@/components/ui/button';
import { trackButtonClick } from '@/lib/ga4';
import { ButtonProps } from '@radix-ui/react-slot';

interface TrackedButtonProps extends ButtonProps {
  trackingName: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const TrackedButton: React.FC<TrackedButtonProps> = ({
  trackingName,
  children,
  onClick,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Track the button click
    trackButtonClick(trackingName);
    
    // Call the original onClick if provided
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  );
}; 