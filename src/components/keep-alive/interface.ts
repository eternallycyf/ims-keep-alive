import type { PropsWithChildren, ReactNode } from 'react';

export interface KeepAliveLayoutProps extends PropsWithChildren {
  keepPaths: Array<string | RegExp>;
  keepElements?: Record<string, ReactNode>;
  dropByPath?: (path: string) => void;
}

export type KeepAliveContextType = Omit<Required<KeepAliveLayoutProps>, 'children'>;
