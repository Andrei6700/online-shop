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
        <p>Tara de origine</p>
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
     
      <p>Tip Tanck</p>
      <div>
        <input
          type="checkbox"
          name="Light Tanck"
          checked={checkedItems["Light Tanck"] || false}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="CHINA">Light Tanck</label>
      </div>

      <div>
        <input
          type="checkbox"
          name="heavy tanks"
          checked={checkedItems["heavy tanks"] || false}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="heavy tanks">heavy tanks</label>
      </div>

      <div>
        <input
          type="checkbox"
          name="medium tanks"
          checked={checkedItems["medium tanks"] || false}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="medium tanks">medium tanks</label>
      </div>

      <div>
        <input
          type="checkbox"
          name="SPAA"
          checked={checkedItems["SPAA"] || false}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="SPAA">SPAA</label>
      </div>

      <div>
        <input
          type="checkbox"
          name="tank destroyers"
          checked={checkedItems["tank destroyers"] || false}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="tank destroyers">tank destroyers</label>
      </div>



      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
