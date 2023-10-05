import Hogtile from "./Hogtile";

function Hoglist({hogs}) {
  const renderTile = hogs.map((hog) => (
    <Hogtile key={hog.name} {...hog}/>
  ))

  return (
    <div>
      {renderTile}
    </div>
  )
}

export default Hoglist;
