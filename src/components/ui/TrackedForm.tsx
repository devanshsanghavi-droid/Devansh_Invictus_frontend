import React from 'react';
import { trackFormSubmission } from '@/lib/ga4';

interface TrackedFormProps {
  trackingName: string;
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
}

export const TrackedForm: React.FC<TrackedFormProps> = ({
  trackingName,
  children,
  onSubmit,
  className,
  ...props
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Track the form submission
    trackFormSubmission(trackingName);
    
    // Call the original onSubmit if provided
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className} {...props}>
      {children}
    </form>
  );
}; 