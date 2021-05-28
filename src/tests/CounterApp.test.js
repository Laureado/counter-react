import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import CounterApp from "../CounterApp";

describe('Pruebas en <CounterApp />', ()=>{

    let wrapper;
    //de este modo abajo te mostrara las referencias que puedes colocar
    // let wrapper = shallow(<CounterApp />);
    //Para que la pagina se renderice otra vez para hacer las pruebas
    beforeEach(()=>{
        wrapper = shallow(<CounterApp />);
    })

    test('Debe mostrar <CounterApp/> Correctamente', ()=>{
        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar el valor por defecto de 100', () => {
        const wrapper = shallow(<CounterApp value={100}/>);

        const valorDefault = wrapper.find('h2').text().trim();

        expect(valorDefault).toBe('100');
    })

    test('debe de incrementar con el botón +1', ()=>{
        const btn1 = wrapper.find('button').at(0).simulate('click');

        const valorDefault = wrapper.find('h2').text().trim();

        expect(valorDefault).toBe('11');
    })

    test('debe de decrementar con el botón -1', ()=>{
        
        const btn1 = wrapper.find('button').at(2).simulate('click');
        const valorDefault = wrapper.find('h2').text().trim();
        expect(valorDefault).toBe('9');
    })

    test('debe devolver al valor por defecto', ()=>{
        const wrapper = shallow(<CounterApp value={105}/>);

        const btn1 = wrapper.find('button').at(0).simulate('click');
        const btn2 = wrapper.find('button').at(1).simulate('click');

        const valorDefault = wrapper.find('h2').text().trim();
        expect(valorDefault).toBe('105');
    })
    
})