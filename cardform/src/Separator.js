import { Separator } from "./components/ui/separator";
import "./Seperator.css"
export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-lg font-bold leading-tight">What is your Business Model?</h4>
        <p className="text-sm text-muted-foreground">
          What kind of business do you want to build? Here are some options with explanations to help you out
        </p>
      </div>
      <Separator className="my-4 separator-container" />
      <div className="flex flex-col gap-2">
        <div className="separator-card">Individual B2C
        <p>B2C (Business-to-Consumer) refers to companies that sell products or services. directly to individual consumers rather than to other businesses or organizations. Eg: Amazon, Netflix, Airbnb, Uber, Spotify, HelloFresh</p>
        </div>
        <Separator orientation="vertical" className="separator-vertical" />
        <div className="separator-card">B2B
        <p>B2B (Business-to-Business) refers to companies that sell products or services to other businesses or organizations, rather than to individual consumers. Eg: Salesforce, HubSpot, Slack, Zoom, Dropbox Business, Malichimp</p>
        </div>
        <Separator orientation="vertical" className="separator-vertical" />
        <div className="separator-card">B2B2C
        <p>B2B2C (Business-to-Business-to- Consumer) refers to companies that provide products or services to businesses, which in turn sell those products or services to individual consumers. Eg Shop ly, AWS, Square</p>
        </div>
      </div>
    </div>
  );
}
