import { useState } from 'react'
import './EditPanel.css'

function EditPanel ({addUnit}) {

    const [unitState, setUnitState] = useState({
        name: '',
        hp: '50',
        maxhp: '50'
    })

    const changeUnit = (e, type) => {
        const value = e.currentTarget.value
        const newUnitState = {...unitState}
        if(type !== 'name' && !Number(value) && value !== '') return
        newUnitState[type] = value
        setUnitState(newUnitState)

        console.log(unitState)
    }

    return(
        <div className="EditPanel">
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
            <div onClick={(e) => {addUnit(unitState)}} className='AddUnit'>Add Unit</div>
        </div>
    )
}

export {EditPanel}