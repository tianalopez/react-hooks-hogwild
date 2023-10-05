import React, { useState } from "react";
function Hogtile({name, specialty, greased, weight, "highest medal achieved": highestMedalAchieved, image}) {
  const [displayDetails, setDisplayDetails] = useState(false)

  const details =
    <span>
    <p>Specialty: {specialty}</p>
    <p>Greased: {greased ? "Yes" : "No"}</p>
    <p>Weight: {weight} lbs</p>
    <p>Highest Medal Achieved: {highestMedalAchieved}</p>
    </span>

  const toggleDetails = () => {
    setDisplayDetails((current) => !current)
  }
  return(
    <div onClick={toggleDetails} className="pigTile">
      <h2>{name}</h2>
      <img src={image} alt={name}></img>

      {displayDetails ? details : null}
    </div>
  )
}

export default Hogtile;
