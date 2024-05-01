import type { FC } from 'react';
import { createContext, useContext } from 'react';
import type { KeepAliveContextType, KeepAliveLayoutProps } from './interface';

export const keepElements: KeepAliveContextType['keepElements'] = {};

export const KeepAliveContext = createContext<KeepAliveContextType>({
  keepPaths: [],
  keepElements,
  dropByPath(path: string) {
    keepElements[path] = null;
  },
});

export const KeepAliveLayout: FC<KeepAliveLayoutProps> = (props) => {
  const { keepPaths, ...other } = props;

  const { keepElements, dropByPath } = useContext(KeepAliveContext);

  return <KeepAliveContext.Provider value={{ keepPaths, keepElements, dropByPath }} {...other} />;
};
