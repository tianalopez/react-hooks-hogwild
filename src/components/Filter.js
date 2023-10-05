

function Filter ({toggleFilter, filter}) {
  return (
    <div>
      <button onClick={toggleFilter} >Filter for Greased Hogs: {filter ? "ON" : "OFF"}</button>
    </div>
  )
}

export default Filter;
