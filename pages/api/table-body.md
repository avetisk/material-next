---
filename: /src/Table/TableBody.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# TableBody



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| children | Node |  | The content of the component, normally `TableRow`. |
| classes | Object |  | Useful to extend the style applied to components. |
| component | ElementType | 'tbody' | The component used for the root node. Either a string to use a DOM element or a component. |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## CSS API

You can override all the class names injected by Material-Next thanks to the `classes` property.
This property accepts the following keys:
- `root`

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/material-next/material-next/tree/master/src/Table/TableBody.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `MuiTableBody`.

## Demos

- [Tables](/demos/tables)

