import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';

import '../src/index.css';

const req = requireContext('../src/components', true, /\.stories\.tsx$/)

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);