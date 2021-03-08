import React from 'react'
import ReactDOM from 'react-dom'
import Filho from './componentes/Filho'
import Pai from './componentes/Pai'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva" >
            <Filho nome="Pedro"  />
            <Filho nome="Paulo"  /> 
            <Filho nome="Carla"  /> 
        </Pai>
    </div>
, document.getElementById('root'))