import { Section, Cell, List } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import { Link } from '@/components/Link/Link.tsx';


export const IndexPage: FC = () => {
  return (
    <List>
      <Section
        header='Demos'
      >
        <Link to='/confirmation-popup-page'>
          <Cell subtitle='Confirmation popup demo page'>Confirmation popup</Cell>
        </Link>
      </Section>
    </List>
  );
};
