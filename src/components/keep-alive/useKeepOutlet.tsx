import { useContext } from 'react';
import { matchPath, useLocation, useOutlet } from 'react-router-dom';
import { KeepAliveContext } from './KeepAliveLayout';
import { isKeepPath } from './utils';

export function useKeepOutlet() {
  const location = useLocation();
  const element = useOutlet();

  const { keepElements, keepPaths } = useContext(KeepAliveContext);
  const isKeep = isKeepPath(keepPaths, location.pathname);

  if (isKeep) {
    keepElements![location.pathname] = element;
  }

  return (
    <>
      {Object.entries(keepElements).map(([pathname, element]) => (
        <div
          key={pathname}
          style={{ height: '100%', width: '100%', position: 'relative', overflow: 'hidden auto' }}
          className="keep-alive-page"
          hidden={!matchPath(location.pathname, pathname)}
        >
          {element}
        </div>
      ))}
      {!isKeep && element}
    </>
  );
}
