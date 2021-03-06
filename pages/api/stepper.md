---
filename: /src/Stepper/Stepper.js
---

<!--- This documentation is automatically generated, do not try to edit it. -->

# Stepper



## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| activeStep | number | 0 | Set the active step (zero based index). |
| alternativeLabel | boolean | false | If set to 'true' and orientation is horizontal, then the step label will be positioned under the icon. |
| <span style="color: #31a148">children *</span> | ChildrenArray |  | Two or more `&lt;Step />` components. |
| classes | Object |  | Useful to extend the style applied to components. |
| connector | union:&nbsp;Element&lt;typeof StepConnector>&nbsp;&#124;<br>&nbsp;Node<br> | &lt;StepConnector /> | A component to be placed between each step. |
| nonLinear | boolean | false | If set the `Stepper` will not assist in controlling steps for linear flow. |
| orientation | union:&nbsp;'horizontal'&nbsp;&#124;<br>&nbsp;'vertical'<br> | 'horizontal' | The stepper orientation (layout flow direction). |

Any other properties supplied will be [spread to the root element](/guides/api#spread).

## CSS API

You can override all the class names injected by Material-Next thanks to the `classes` property.
This property accepts the following keys:
- `root`
- `horizontal`
- `vertical`

Have a look at [overriding with classes](/customization/overrides#overriding-with-classes) section
and the [implementation of the component](https://github.com/material-next/material-next/tree/master/src/Stepper/Stepper.js)
for more detail.

If using the `overrides` key of the theme as documented
[here](/customization/themes#customizing-all-instances-of-a-component-type),
you need to use the following style sheet name: `undefined`.

## Inheritance

The properties of the [&lt;Paper /&gt;](/api/paper) component are also available.

## Demos

- [Stepper](/demos/stepper)

