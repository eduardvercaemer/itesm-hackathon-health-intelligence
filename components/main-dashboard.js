// medicaments
// history
// reminders
// ...

import { Tab, Tabs } from "react-bootstrap";

// show tabs with information for each field: medicaments, history, reminders, ...
export default function MainDashboard() {
  const tabs = ["Medicaments", "Med History", "Reminders"];

  return (
    <Tabs defaultActiveKey="Medicaments" id="uncontrolled-tab-example">
      {tabs.map((tab, index) => (
        <Tab eventKey={tab} title={tab} key={index}>
          {tab}
        </Tab>
      ))}
    </Tabs>
  );
}
