import React, { useState } from 'react';
import { Separator } from './components/ui/separator';
import './Separator.css';

export function SeparatorDemo() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const cardClasses = (card) =>
    `separator-card ${selectedCard === card ? 'selected-card' : ''}`;

  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-lg font-bold leading-tight">What is your Business Model?</h4>
        <p className="text-sm text-muted-foreground">
          What kind of business do you want to build? Here are some options with explanations to help you out.
        </p>
      </div>
      <Separator className="my-4 separator-container" />
      <div className="flex flex-col gap-2">
        <div className={cardClasses('B2C')} onClick={() => handleCardClick('B2C')}>
          Individual B2C<br></br>
          B2C (Business-to-Consumer) refers to companies that sell products or services directly to individual consumers rather than to other businesses or organizations. Eg: Amazon, Netflix, Airbnb, Uber, Spotify, HelloFresh
        </div>
        <div className={cardClasses('B2B')} onClick={() => handleCardClick('B2B')}>
          B2B<br></br>
        B2B (Business-to-Business) refers to companies that sell products or services to other businesses or organizations, rather than to individual consumers. Eg: Salesforce, HubSpot, Slack, Zoom, Dropbox Business, Mailchimp
        </div>
        <div className={cardClasses('B2B2C')} onClick={() => handleCardClick('B2B2C')}>
          B2B2C<br></br>
          B2B2C (Business-to-Business-to-Consumer) refers to companies that provide products or services to businesses, which in turn sell those products or services to individual consumers. Eg: Shopify, AWS, Square
        </div>
      </div>
    </div>
  );
}
