import { Separator } from "./components/ui/separator"
export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">What is your Business Model?</h4>
        <p className="text-sm text-muted-foreground">
          What kind of business do you want to build? Here are some options with explanations to help you out
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Individual B2C</div>
        <Separator orientation="vertical" />
        <div>B2B</div>
        <Separator orientation="vertical" />
        <div>B2B2C</div>
      </div>
    </div>
  )
}
