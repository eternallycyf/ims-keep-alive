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

## API

### KeepAliveLayoutProps

| 参数         | 说明           | 类型                        | 默认值 |
| ------------ | -------------- | --------------------------- | ------ |
| keepPaths    | 需要缓存的路径 | `Array<string \| RegExp>`   | -      |
| keepElements | 缓存的组件     | `Record<string, ReactNode>` | -      |
| dropByPath   | 删除缓存的组件 | `(path: string) => void`    | -      |

### KeepAliveContextType

```ts
export type KeepAliveContextType = Omit<Required<KeepAliveLayoutProps>, 'children'>;
```
