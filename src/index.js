import _ from 'lodash';
import printMe from './print';

/**
 * Creare a new div with text in it
 * @returns {object } The created element
 * @param none
 */
function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    btn.innerHTML = 'Click me and check console';
    btn.onclick = printMe;

    element.appendChild(btn);


    return element;
}

document.body.appendChild(component());