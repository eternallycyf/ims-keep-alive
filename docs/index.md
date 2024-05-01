---
showCustomContent: true
hero:
  title: ims-keep-alive
  description: React KeepAlive
  showCustomContent: true
  actions:
    - text: 快速上手
      link: /components
    - text: Github
      link: https://github.com/eternallycyf/ims-keep-alive/
---

```tsx | demo
/**
 * inline: true
 */
import React from 'react';
import { Section } from './site/Section';
import './site/styles.less';

export default () => (
  <Section
    title="Experience the ultimate in lordaeron online"
    style={{ marginTop: 40 }}
    titleStyle={{
      paddingBottom: 100,
      fontWeight: 'bold',
      fontSize: 50,
      textAlign: 'center',
      color: 'black',
    }}
  >
    <iframe
      className="codesandbox"
      src="https://codesandbox.io/p/sandbox/ims-keep-alive-gzn58l?file=%2Fsrc%2FApp.tsx"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  </Section>
);
```
