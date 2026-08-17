import React from 'react';
import { Link } from 'react-router-dom';
import { trackNavigation } from '@/lib/ga4';

interface TrackedLinkProps {
  to: string;
  trackingName: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const TrackedLink: React.FC<TrackedLinkProps> = ({
  to,
  trackingName,
  children,
  className,
  onClick,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Track the navigation
    trackNavigation(trackingName, to);
    
    // Call the original onClick if provided
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link to={to} onClick={handleClick} className={className} {...props}>
      {children}
    </Link>
  );
}; 