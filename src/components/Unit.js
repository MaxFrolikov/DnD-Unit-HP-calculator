import { useEffect, useState } from 'react'
import './Unit.css'
import { EditUnitHp } from './EditUnitHp'

function Unit ({unit, updateUnit, id, killUnit}) {

	const [unitState, setUnitState] = useState(unit)
	const [hpChange, setHpChange] = useState('')

	useEffect(() => {
		setUnitState(unit)
	})

	const changeUnit = (e, type) => {
		const value = e.currentTarget.value
		const newUnitState = {...unitState}
		if(type !== 'name' && !Number(value) && value !== '') return
		newUnitState[type] = value
		updateUnit(id, newUnitState)
	}

	const calculate = (fn) => {
		return new Function('return ' + fn)();
	}

	const EditHp = (e) => {
		setHpChange(e.currentTarget.value)
	}

	const submitHpChange = (e) => {
		e.preventDefault()
		if(hpChange === '')  return
		if(hpChange === 'kill') {
			killUnit(id)
			setHpChange('')
			return
		}
		
		const newUnitState = {...unitState}
		if(hpChange.search(/[^0-9,+,\-,*,/,.]/ || hpChange[0] === '.') !== -1) return

		hpChange[0].match(/[+,\-,*,/]/)
		? newUnitState['hp'] = calculate(unitState.hp +''+ hpChange)
		: newUnitState['hp'] = calculate(hpChange)
		
		updateUnit(id, newUnitState)
		setHpChange('')
	}

	return(
		<div className='UnitCard'>
			<div className="Unit">
				<div className="UnitName">
					<input
						value={unitState.name}
						type='text'
						onChange={(e) => changeUnit(e, 'name')}
						placeholder='Unit Name'
					/>
				</div>
				<div className="UnitHp">
					<input
						value={unitState.hp}
						type='text'
						onChange={(e) => changeUnit(e, 'hp')}
						placeholder='HP'
					/> /
					<input
						value={unitState.maxhp}
						type='text'
						onChange={(e) => changeUnit(e, 'maxhp')}
						placeholder='MAX'
					/>
				</div>
			</div>
			<EditUnitHp
				id={id}
				unitState={unitState}
				hpChange={hpChange}
				setHpChange={setHpChange}
				updateUnit={updateUnit}
				killUnit={killUnit}
			/>
		</div>
	)
}

export {Unit}