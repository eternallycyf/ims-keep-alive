---
title: KeepAlive
description: React KeepAlive
toc: content
group:
  title: Components
  order: 0
demo:
  cols: 2
---

## KeepAlive

`KeepAlive` 是一个用于缓存组件的组件，可以在组件被销毁时保留组件的状态，以便在组件再次被渲染时恢复状态。

### 何时使用

- 当组件被销毁时需要保留组件的状态。

### 如何使用

在需要使用的地方引入 `KeepAlive` 组件， 并将需要缓存的组件作为 `KeepAlive` 的子组件。

## 示例

```tsx | pure
import { useState } from 'react';
import {
  Link,
  useLocation,
  RouterProvider,
  createBrowserRouter,
  Outlet,
  useOutlet,
} from 'react-router-dom';
import KeepAliveLayout, { useKeepOutlet } from 'ims-keep-alive';

const Layout = () => {
  const { pathname } = useLocation();
  const element = useKeepOutlet();

  return (
    <div>
      <div>当前路由: {pathname}</div>
      {element}
    </div>
  );
};

const Aaa = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <p>
        <button onClick={() => setCount((count) => count + 1)}>加一</button>
      </p>
      <Link to="/bbb">去 Bbb 页面</Link>
      <br />
      <Link to="/ccc">去 Ccc 页面</Link>
    </div>
  );
};

const Bbb = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <p>
        <button onClick={() => setCount((count) => count + 1)}>加一</button>
      </p>
      <Link to="/">去首页</Link>
    </div>
  );
};

const Ccc = () => {
  return (
    <div>
      <p>ccc</p>
      <Link to="/">去首面</Link>
    </div>
  );
};

const routes = [
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Aaa></Aaa>,
      },
      {
        path: '/bbb',
        element: <Bbb></Bbb>,
      },
      {
        path: '/ccc',
        element: <Ccc></Ccc>,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

const App = () => {
  return (
    <KeepAliveLayout keepPaths={[/bbb/, '/']}>
      <RouterProvider router={router} />
    </KeepAliveLayout>
  );
};

export default App;
```

## API

## KeepAliveLayoutProps

| 参数         | 说明           | 类型                        | 默认值 |
| ------------ | -------------- | --------------------------- | ------ |
| keepPaths    | 需要缓存的路径 | `Array<string \| RegExp>`   | -      |
| keepElements | 缓存的组件     | `Record<string, ReactNode>` | -      |
| dropByPath   | 删除缓存的组件 | `(path: string) => void`    | -      |

## KeepAliveContextType

```ts
export type KeepAliveContextType = Omit<Required<KeepAliveLayoutProps>, 'children'>;
```
