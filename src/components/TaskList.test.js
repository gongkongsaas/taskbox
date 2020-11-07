import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';

import { WidthPinnedTasks } from './TaskList.stories';

it('renders pinned tasks at the start of the list.', () => {
  const div = document.createElement('div');

  ReactDOM.render(<WidthPinnedTasks {...WidthPinnedTasks.args} />, div);

  const lastTaskInput = div.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]');
  expect(lastTaskInput).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
