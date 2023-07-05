

function EditUnitHp ({id, unitState, hpChange, setHpChange, updateUnit, killUnit}) {

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
        <form className='EditHp' onSubmit={(e) => submitHpChange(e)}>
            <input
                    value={hpChange}
                    type='text'
                    onChange={(e) => EditHp(e)}
                    placeholder='+/-HP | kill'/>
        </form>
    )
}

export {EditUnitHp}