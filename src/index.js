import _ from 'lodash';
import printMe from './print';
import './style.css';
import {cube} from './math';

/**
 * Creare a new div with text in it
 * @returns {object } The created element
 * @param none
 */
function component() {
    var element = document.createElement('pre');
   
    element.innerHTML = ['Hellow webpack!', ' 5 cubed is equal to ' +  cube(5)].join('\n\n');
 
    return element;
}

let element = component();
document.body.appendChild(element);


if(module.hot){
    module.hot.accept('./print.js', function(){
        
        console.log('Accepting the updated printMe module');
      
    });
}