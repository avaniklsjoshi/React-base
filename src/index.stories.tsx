import React from 'react';
import { Button } from '@storybook/react/demo';

export default { title: 'Test set up' };

export const withText = () => <Button>Hello Avani</Button>;

export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
