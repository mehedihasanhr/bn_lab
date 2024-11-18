import { PageProps as InertiaPageProps } from '@inertiajs/core';
import '@tanstack/react-table';
import { AxiosInstance } from 'axios';
import { route as ziggyRoute } from 'ziggy-js';
import { PageProps as AppPageProps } from './';

declare global {
  interface Window {
    axios: AxiosInstance;
  }

  /* eslint-disable no-var */
  var route: typeof ziggyRoute;
}

declare module '@inertiajs/core' {
  interface PageProps extends InertiaPageProps, AppPageProps {}
}

declare module '@tanstack/react-table' {
  interface ColumnMeta {
    className: string;
  }
}
