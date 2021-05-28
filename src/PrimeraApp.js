// import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types'

const PrimeraApp=( {saludo, subtitulo} )=>{

    // const saludo = 'Hola Mundo';
    // const arreglo = [1,2,3,4,5,6]
    // const booleano = true;
    // const persona = {
    //     nombre: 'Laureado',
    //     edad: 23
    // }

    return (
        <>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>

            {/* <h1>{arreglo}</h1>
            <p>Imprimiendo un arreglo</p>

            <h1>{booleano} (Aquí no hay nada)</h1>
            <p>Imprimiendo un booleano</p>

            <pre>{ JSON.stringify(persona, null, 3) }</pre>
            <p>Imprimiendo un objeto</p> */}
        </>
    );

}

PrimeraApp.propTypes={
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps={
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;