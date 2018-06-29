import _ from 'lodash';
import './excel.png';
import Icon from './excel.png';
import Data from './data.xml';
import eData from './4e UPLOAD.csv';

/**
 * Creare a new div with text in it
 * @returns {object } The created element
 * @param none
 */
function component() {
    var element = document.createElement('div');
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);
    console.log(eData);

    return element;
}

document.body.appendChild(component());