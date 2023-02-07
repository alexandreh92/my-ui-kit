
# Usage

You'll need to wrap your application with a context to use this library:

- React:
  ```js
  // src/index.js

  import { ThemeProvider, defaultTheme, ResetCSS } from 'my-ui'

  function MyApp() {
    return(
      <ThemeProvider theme={defaultTheme}>
        <ResetCSS />
        <Router />
        <OtherComponents />
      </ThemeProvider>
    )
  }

  export default MyApp
  ```

- Next:

  ```js
  // src/pages/_app.js

  import { ThemeProvider, defaultTheme } from 'my-ui'

  function MyApp({ Component, pageProps }) {
    return(
      <ThemeProvider theme={defaultTheme}>
        <ResetCSS />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }

  export default MyApp
  ```

you should import Google's Inter font, which is the default font, in your `<head/>` tag:

```html
<head>
  ...
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
  ...
</head>
```

then you can use components like this:

```js
// src/pages/foo.tsx

import React from 'react';
import { Input } from 'my-ui';

export default function Foo() {
  return (
    <Input label="Your Label" error="Foo"/>
  );
}
```

## Customize Theme

You can customize theme colors and add properties:

- Adding new colors/properties:

  ```js
  import { defaultTheme } from 'my-ui';

  const newTheme = {
    ...defaultTheme,
    foo: '#fff',
    baz: '#ABCDEF',
  };
  ```

- Customizing existing props:

  You can use [DefaultTheme](src/globals/defaultTheme.ts) interface to view all properties of the theme.

  ```js
  import { defaultTheme } from 'my-ui';

  const newTheme = {
    ...defaultTheme,
    textColor: '#F3F3F3',
  };
  ```

- Typescript

  If you're using Typescript maybe you should connect theme with styled-components:

  - If you're using legacy theme:
    ```ts
    // src/@types/styled-components.d.ts

    import { BycodersTheme } from 'my-ui';

    declare module 'styled-components' {
      export interface DefaultTheme extends BycodersTheme {}
    }
    ```

  - If you're using a custom theme:

    ```js
    // src/styles/newTheme.ts

    import { defaultTheme } from 'my-ui';

    const newTheme = {
      ...defaultTheme,
      textColor: '#F3F3F3',
    };
    ```

    ```ts
    // src/@types/styled-components.d.ts

    import { newTheme } from '../styles/newTheme';

    type MyThemeType = typeof newTheme

    declare module 'styled-components' {
      export interface DefaultTheme extends MyThemeType {}
    }
    ```

# Documentation
This project is documented on Storybook. You'll need to clone the project and execute storybook:

```bash
yarn install
yarn storybook
```

# Contribute

```bash
yarn install
```

To contribute, before merge your PR please run one of the following commands:
```bash
yarn bump-patch
yarn bump-minor
yarn bump-major
```

Then you can push it to repo:

**OBS: DO NOT PUSH TAGS**

```
git push origin <feature-branch>
```
