

function Sort({hogs, onSetSort}) {
  return (
    <div>
      <select onChange={(event) => onSetSort(event.target.value)}>
        <option value="All">All</option>
        <option value="weight">Weight</option>
        <option value="name">Name</option>
      </select>
    </div>
  )
}

export default Sort;
