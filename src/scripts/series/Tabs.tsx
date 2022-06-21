import React from "react";
import { Tab } from "../components/Tab";

export const Tabs: React.FC<{
  tabs: string[];
  active: number;
  onChange: any;
}> = ({ tabs, active, onChange }) => {
  return (
    <ul className="series__tabs">
      {tabs.map((tab, index) => (
        <li key={index} className="series__tabs-item">
          <Tab isActive={index === active} onClick={() => onChange(index)}>
            {tab}
          </Tab>
        </li>
      ))}
    </ul>
  );
};
