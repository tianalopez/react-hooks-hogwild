import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import Sort from "./Sort";
import Hoglist from "./Hoglist";

import hogs from "../porkers_data";

function App() {
	const [currentHogs, setCurrentHogs] = useState(hogs)
	const [filter, setFilter] = useState(false)
	const [sort, setSort] = useState("All")

	const onSetSort = (sortValue) => {setSort(sortValue)}


	const onToggleFilter = () => {
		setFilter((state) => !state)
	}

	const visibleHogs = currentHogs.filter((hog) => (
		!filter || hog.greased === filter
	))
		.sort((a,b) => {
			if (sort === "weight") {
				return b.weight - a.weight
			}
			else if (sort === "name") {
				return a.name.localeCompare(b.name)
			}
		})

	return (
		<div className="App">
			<Nav />
			<Filter toggleFilter={onToggleFilter} filter={filter}/>
			<Sort hogs={visibleHogs} onSetSort={onSetSort}/>
			<Hoglist hogs={visibleHogs} />
		</div>
	);
}

export default App;
