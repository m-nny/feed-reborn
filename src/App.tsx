import React from 'react';

import Feed from './components/Feed/Feed';
import { content } from './components/Feed/Feed.stories';

const App: React.FC = () => {
  return (
    <div className="App">
      <Feed
        data={content}
      />
    </div>
  );
}

export default App;
