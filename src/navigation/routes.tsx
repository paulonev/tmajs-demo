import type { ComponentType, JSX } from 'react';

import { ConfirmationPopupPage } from '@/pages/ConfirmationPopupPage/ConfirmationPopupPage';

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: '/', Component: ConfirmationPopupPage, title: 'Confirmation Popup' },
];
