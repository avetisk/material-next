---
filename: /src/AppBar/AppBar.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# AppBar



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| children | Node |  | The content of the component. |
| classes | Object |  | Useful to extend the style applied to components. |
| color | union:&nbsp;'inherit'&nbsp;&#124;<br>&nbsp;'primary'&nbsp;&#124;<br>&nbsp;'accent'&nbsp;&#124;<br>&nbsp;'default'<br> | 'primary' | The color of the component. It's using the theme palette when that makes sense. |
| position | union:&nbsp;'static'&nbsp;&#124;<br>&nbsp;'fixed'&nbsp;&#124;<br>&nbsp;'absolute'<br> | 'fixed' | The positioning type. |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## CSS API

You can override all the class names injected by Material-Next thanks to the `classes` property.
This property accepts the following keys:
- `root`
- `positionFixed`
- `positionAbsolute`
- `positionStatic`
- `colorDefault`
- `colorPrimary`
- `colorAccent`

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/material-next/material-next/tree/master/src/AppBar/AppBar.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiAppBar`.

## Inheritance

The properties of the [&lt;Paper /&gt;](/api/paper) component are also available.

## Demos

- [App Bar](/demos/app-bar)

