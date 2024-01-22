import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import App from './App';

it('renders without crashing', function() {
    render(<App/>)
});

//This is without any ToDos added on the page. Will fail whenever events are triggered. Will be good to see if actual changes are occuring!
it('matches snapshot', function() {
    const {asFragment} = render(<App />);
    expect(asFragment()).toMatchSnapshot();
});


// I tried my best and even used some tools chatGPT gave me. 
  // I want to be able to update the value of my text input. 
        // The todo SHOULD be added to the page but, react isn't processing the text input due to state i'm sure. This wasn't gone over in the testing tutorial BUT the tutorial did help me make sense of SOME of the problems occuring not all!
it('handles adding a todo', async function() {
  const { asFragment, getByPlaceholderText, getByText } = render(<App />);
  
  const input = getByPlaceholderText("Enter task");
  const button = getByText('Add Todo');
  
  // Set the input value
  input.value = "Wash dishes";

  // Use act to ensure state updates are processed
  act(() => {
    // Click the "Add Todo" button
    fireEvent.click(button);
  });

  // Make your assertions
  expect(asFragment()).toMatchSnapshot();
  expect(button).toBeInTheDocument();
  expect(input).toBeInTheDocument();
});
