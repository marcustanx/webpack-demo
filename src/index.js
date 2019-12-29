import _ from 'lodash';
import React from  'react' ;
import ReactDOM from 'react-dom';
import App from './components/App';

function component() {
  const element = document.createElement('div');
 
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

ReactDOM.render(<App />, document.getElementById('app'));
