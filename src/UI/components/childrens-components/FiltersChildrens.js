import React, { useState } from "react";

export const FiltersChildrens = () => {
  const [checkedItems, setCheckedItems] = useState({}); // Starea pentru a urmări checkbox-urile selectate

  const handleCheckboxChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = () => {
    // Procesează opțiunile selectate
    console.log(checkedItems);
  };

  return (
    <div className="layout-filtre">
      <div>
        <input
          type="checkbox"
          name="SUA"
          checked={checkedItems["SUA"] || false}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="SUA">SUA</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="GERMANIA"
          checked={checkedItems["GERMANIA"] || false}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="GERMANIA">GERMANIA</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="CHINA"
          checked={checkedItems["CHINA"] || false}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="CHINA">CHINA</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="FRANTA"
          checked={checkedItems["FRANTA"] || false}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="FRANTA">FRANTA</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="ROMANIA"
          checked={checkedItems["ROMANIA"] || false}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="ROMANIA">ROMANIA</label>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
