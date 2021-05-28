// import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import PrimeraApp from "../PrimeraApp";

describe("Pruebas en <PrimeraApp />", () => {
  //Pruebas default de react
  // test('debe de mostrar el mensaje "Buenas"', () => {
  //     const saludo = "Buenas";
  //     const {getByText} = render(<PrimeraApp saludo={saludo}/>);
  //     expect(getByText(saludo)).toBeInTheDocument();
  // })

  //prueba con enzyme
  test("Debe mostrar <PrimeraApp /> correctamente", () => {
    const saludo = "Buenas";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar el subtitulo enviado por props', ()=>{
    const saludo = "Buenas";
    const subtitulo = "soy un subtitulo";
    const wrapper = shallow(
        <PrimeraApp 
            saludo={saludo} 
            subtitulo={subtitulo}
        />
    );

    const textoParrafo=wrapper.find('p').text();

    expect(textoParrafo).toBe(subtitulo);
  })
});
