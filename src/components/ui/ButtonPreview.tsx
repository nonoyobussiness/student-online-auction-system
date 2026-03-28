import Button from "./Button";

export default function ButtonPreview() {
  return (
    <div className="min-h-screen bg-bg p-8 space-y-8">
      
      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">Primary</h2>
        <div className="flex gap-4 flex-wrap">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="compact">Compact</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">Secondary</h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="secondary" size="sm">Small</Button>
          <Button variant="secondary">Medium</Button>
          <Button variant="secondary" size="lg">Large</Button>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">Outline</h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="outline" size="sm">Small</Button>
          <Button variant="outline">Medium</Button>
          <Button variant="outline" size="lg">Large</Button>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">Ghost</h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">PrimaryLight</h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="primaryLight" size="sm">Small</Button>
          <Button variant="primaryLight" size="md">Medium</Button>
          <Button variant="primaryLight" size="lg">Large</Button>
          <Button variant="primaryLight" size="compact">Compact</Button>
          <Button variant="primaryLight" disabled>Disabled</Button>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">SecondaryLight</h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="secondaryLight" size="sm">Small</Button>
          <Button variant="secondaryLight" size="md">Medium</Button>
          <Button variant="secondaryLight" size="lg">Large</Button>
          <Button variant="secondaryLight" size="compact">Compact</Button>
          <Button variant="secondaryLight" disabled>Disabled</Button>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">Login</h2>
        <div className="flex gap-4 flex-wrap">
        <Button variant="Login">Log in</Button>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">Start selling</h2>
        <div className="flex gap-4 flex-wrap">
        <Button variant="Start Selling">+ Start Selling</Button>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">Get Started</h2>
        <div className="flex gap-4 flex-wrap">
        <Button variant="Get Started" radius= "rounded">Get Started Now</Button>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">Sign up</h2>
        <div className="flex gap-4 flex-wrap">
        <Button variant="signup" radius="pill">Sign up</Button>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">View All</h2>
        <div className="flex gap-4 flex-wrap">
        <Button variant="viewall" radius="smallpill" >View All</Button>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">Place Bid</h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="PlaceBid">Place Bid</Button>
        </div>
      </div>

      <div className="space-y-3">
    <h2 className="text-lg font-semibold text-white">Light Theme</h2>

    <div className="flex gap-4 flex-wrap">
    <Button variant="LoginLight">Log in</Button>

    <Button variant="StartSellingLight">
      + Start Selling
    </Button>

    <Button variant="GetStartedLight" radius="rounded">
      Get Started Now
    </Button>

    <Button variant="signupLight" radius="pill">
      Sign up
    </Button>

    <Button variant="viewallLight" radius="smallpill">
      View All
    </Button>

    <Button variant="PlaceBidLight" radius="smallpill">
      Place Bid
    </Button>
    </div>
    </div>

    </div>
  );
}