# React Should Component Update

Higher-Order Component for adding `shouldComponentUpdate` to components. It supports easy to set shortcuts.

## Install

```sh
npm install --save react-should-component-update
```

## Usage

```ts
import shouldComponentUpdate from 'react-should-component-update';
import MyComponent from './my_component';

// Path shortcut
// `shouldComponentUpdate ( path )( Component )`
// Updates the component if the prop at `path` changed

shouldComponentUpdate ( 'myprop.foo' )( MyComponent );

// Path toggle shortcut
// `shouldComponentUpdate ( [path, valuePath] )( Component )`
// Updates the component if the prop at `path` becomes equal-to/different-from the prop at `valuePath`
// This is useful when your component should be re-rendered only when it gets selected/unselected

shouldComponentUpdate ( ['myprop.foo', 'foo'] )( MyComponent );

// Plain function
// `shouldComponentUpdate ( myFn )( Component )`
// Updates the component if `myFn` returns true

function myFn ( props, nextProps ) {
  // Update logic here
}

shouldComponentUpdate ( myFn )( MyComponent );

// Boolean shortcut
// `shouldComponentUpdate ( bool )( Component )`

shouldComponentUpdate ( false )( MyComponent );

// Multiple rules
// Updates the component if at least one updating rule passes

shouldComponentUpdate ( 'myprop.bar', ['myprop.foo', 'foo'], myFn )( MyComponent );
```

## Related

- **[react-log-updates](https://github.com/fabiospampinato/react-log-updates)**: Log the number of updates occurring, broken down by components.
- **[react-selectr](https://github.com/fabiospampinato/react-selectr)**: Simple selector for React components.

## License

MIT © Fabio Spampinato
