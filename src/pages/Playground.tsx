import React, { useState } from "react";
import Input from "../components/ui/Input";
import Tag from "../components/ui/Tag";

const Playground: React.FC = () => {
  const demoCategories = ["Electronics", "Books", "Art"];
  const [toggleSelected, setToggleSelected] = useState<string | null>(
    demoCategories[0],
  );
  const [lightToggleSelected, setLightToggleSelected] = useState<string | null>(
    demoCategories[0],
  );

  return (
    <div style={{ padding: 32 }}>
      <h1 className="text-2xl font-bold mb-4">UI Component Playground</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Input Component</h2>
        <h3 className="text-lg font-semibold mb-2">Dark Theme</h3>
        <Input theme="dark" placeholder="Type something..." />
        <Input
          theme="dark"
          placeholder="Disabled dark input"
          disabled
          className="mt-2"
        />
        <Input
          theme="dark"
          placeholder="With value"
          defaultValue="Hello"
          className="mt-2"
        />
        <h3 className="text-lg font-semibold mt-4 mb-2">Light Theme</h3>
        <Input theme="light" placeholder="Type something..." />
        <Input
          theme="light"
          placeholder="Disabled light input"
          disabled
          className="mt-2"
        />
        <Input
          theme="light"
          placeholder="With value"
          defaultValue="Hello"
          className="mt-2"
        />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Tag Component</h2>
        <h3 className="text-lg font-semibold mb-2">Dark Theme</h3>
        <Tag theme="dark" variant="main">
          Dark Main 1
        </Tag>
        <Tag theme="dark" variant="main" className="ml-2">
          Dark Main 2
        </Tag>
        <Tag theme="dark" variant="normal" className="ml-2">
          Dark Normal 1
        </Tag>

        <h3 className="text-lg font-semibold mt-4 mb-2">Light Theme</h3>
        <div className="bg-white rounded-xl p-4 shadow-sm inline-block">
          <Tag theme="light" variant="main">
            Light Main 1
          </Tag>
          <Tag theme="light" variant="main" className="ml-2">
            Light Main 2
          </Tag>
          <Tag theme="light" variant="normal" className="ml-2">
            Light Normal 1
          </Tag>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          Clickable Demo - Toggle Allowed
        </h3>
        <p className="text-sm text-muted mb-2">
          Clicking the active tag toggles it off.
        </p>
        <div className="flex flex-wrap gap-2">
          {demoCategories.map((name) => (
            <Tag
              key={`toggle-${name}`}
              theme="dark"
              active={toggleSelected === name}
              onClick={() =>
                setToggleSelected(toggleSelected === name ? null : name)
              }
            >
              {name}
            </Tag>
          ))}
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          Clickable Demo - Light Theme (Toggle Allowed)
        </h3>
        <p className="text-sm text-muted mb-2">
          Light mode clickable tags in a white rectangle, with toggle behavior.
        </p>
        <div className="bg-white rounded-xl p-4 shadow-sm inline-block">
          <div className="flex flex-wrap gap-2">
            {demoCategories.map((name) => (
              <Tag
                key={`light-toggle-${name}`}
                theme="light"
                active={lightToggleSelected === name}
                onClick={() =>
                  setLightToggleSelected(
                    lightToggleSelected === name ? null : name,
                  )
                }
              >
                {name}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
