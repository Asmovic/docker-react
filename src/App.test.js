import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  return <div>Hi</div>
}

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<App />, div);
  expect(div.innerHTML).toContain('Hi');
  ReactDOM.unmountComponentAtNode(div);
})

/* import { render } from '@testing-library/react';
import App from './App'; */

/* test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */










