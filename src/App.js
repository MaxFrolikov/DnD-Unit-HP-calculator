import { useState } from 'react';
import { EditPanel } from './components/EditPanel';
import { Unit } from './components/Unit';

function App() {
	
	const initialLis = []

	const [unitList, setUnitList] = useState(initialLis)

	const addUnit = (unit) => {
		setUnitList([...unitList, unit])
	}

	const updateUnit = (id, unit) => {
		console.log(unit)
		const newUnitList = [...unitList]
		newUnitList[id] = unit
		setUnitList(newUnitList)
	}

	const killUnit = (id) => {
		const newUnitList = [...unitList]
		newUnitList.splice(id, 1)
		
		setUnitList(newUnitList)
	}

	return (
		<div className="App">
				<EditPanel addUnit={addUnit}/>
				{unitList.map((unit, i) => {
					return(
						<div key={i}>
							<Unit
								unit={unit}
								updateUnit={updateUnit}
								id={i}
								killUnit={killUnit}
							/>
						</div>
					)
				})}
		</div>
	);
}

export default App;
