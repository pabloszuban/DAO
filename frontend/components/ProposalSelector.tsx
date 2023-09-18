import React, { useState } from "react";

function ProposalSelector({ onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <div>
      <label htmlFor="proposalCategory">See Proposals: </label>
      <select
        id="proposalCategory"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="Active">Active</option>
        <option value="Canceled">Canceled</option>
        <option value="Defeated">Defeated</option>
        <option value="Succeeded">Succeeded</option>
        <option value="Queued">Queued</option>
        <option value="Expired">Expired</option>
        <option value="Executed">Executed</option>
      </select>
    </div>
  );
}

export default ProposalSelector;
