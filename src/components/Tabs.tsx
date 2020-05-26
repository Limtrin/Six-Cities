import * as React from "react";
import Tab from "./Tab";

const SIX_CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const Tabs: React.SFC = () => {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {SIX_CITIES.map((city, index) => (
            <Tab
              city={city}
              key={index}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Tabs;
