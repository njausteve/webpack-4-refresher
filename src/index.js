import _ from 'lodash';


/**
 * Creare a new div with text in it
 * @returns {object } The created element
 * @param none
 */
function component() {
    var element = document.createElement('div');
     // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

document.body.appendChild(component());