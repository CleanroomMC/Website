---
title: Theme
---

# Theme

Make sure to check out [how to register themes](../themes.md).

Here we will take a look what the theme file can look like. If you are a mod developer you can directly translate it to
your `ThemeBuilder`.

Let's look at an example. This is what the default vanilla theme as a json file would look like.

```json
{
  "parent": "DEFAULT",
  "defaultWidth": 18,
  "defaultHeight": 18,
  "background": null,
  "hoverBackground": "none",
  "color": "#FFFFFFFF",
  "textColor": "#FF404040",
  "textShadow": false,
  "iconColor": "#FF404040",
  "panel": {
    "background": {
      "type": "texture",
      "id": "vanilla_background"
    }
  },
  "button": {
    "background": {
      "type": "texture",
      "id": "mc_button"
    },
    "hoverBackground": {
      "type": "texture",
      "id": "mc_button_hovered"
    },
    "textColor": "#FFFFFFFF",
    "textShadow": true
  },
  "itemSlot": {
    "background": {
      "type": "texture",
      "id": "slot_item"
    },
    "slotHoverColor": "#60FFFFFF"
  },
  "fluidSlot": {
    "background": {
      "type": "texture",
      "id": "slot_fluid"
    },
    "slotHoverColor": "#60FFFFFF"
  },
  "textField": {
    "background": {
      "type": "texture",
      "id": "display_small"
    },
    "textColor": "#FFFFFFFF",
    "markedColor": "#FF2F72A8",
    "hintColor": "#FF5F5F5F"
  },
  "toggleButton": {
    "background": {
      "type": "texture",
      "id": "mc_button"
    },
    "hoverBackground": {
      "type": "texture",
      "id": "mc_button_hovered"
    },
    "textColor": "#FFFFFFFF",
    "textShadow": true,
    "selectedBackground": {
      "type": "texture",
      "id": "mc_button_disabled"
    },
    "selectedHoverBackground": "none",
    "selectedColor": "#FFFFFFFF",
    "selectedTextColor": "#FFFFFFFF",
    "selectedTextShadow": true
  }
}
```

First we have the `parent` property. This defines the parent theme. If a theme does not define a widget theme, it will
be taken from its parent. If the `parent` property is not set, it defaults to `DEFAULT`, which is just the vanilla
theme.

After that we have the `defaultWidth`, `defaultHeight`, `color`, `background`, `hoverBackground`, `textColor`,
`textShadow` and `iconColor` properties. These are fallback properties of [widget themes](#widget-themes). You can put
any properties that any widget theme can have here. If a widget theme does not have said property it will fall back to
the top level property if defined. The `defaultWidth` and `defaultHeight` properties determine the default widget size
if it isn't specified. Note this won't work on every widget. `TextWidget` for example have a default size that is
exactly the size of the text they are displaying. Note that `"none"` is used for `hoverBackground` so it will be ignored
and the widget doesn't suddenly turn invisible. Read more about the difference between `"none"` and
`null` [here](./drawable.md#empty-drawable).

For `color`, `textColor` and `iconColor` see [color](./color.md). For `background` and `hoverBackground`
see [drawables](./drawable.md). Note that if `textColor` or `iconColor` are set to `0` they will inherit the value of `color`.

Next we have objects defined with the property name `panel`, `button`, `itemSlot`, `fluidSlot`, `textField` and
`toggleButton`.
These are widget themes. These are all widget themes ModularUI provides. Addons may add more.

## Widget themes

Widgets which don't use one of the existing widget themes use the fallback properties.

All widget themes have the properties `color`, `background`, `hoverBackground`, `textColor` and `textShadow`. Which are
all mostly self-explanatory. `color` is applied additionally to the background (if possible).

The `itemSlot` and `fluidSlot` also have the `slotHoverColor`, which is just the rendered color when the slot is
hovered.
Don't use full opacity here. Otherwise, you won't be able to see the item.

The `textField` theme has the `markedColor` property which is the marked text background and the `hintColor` property
which is the color of the text that is shown when the field is empty.

The `toggleButton` has `selectedBackground`, `selectedHoverBackground`, `selectedColor`, `selectedTextColor` and
`selectedTextShadow` which are all self-explanatory. Note that

:::info Note {id="note"}
All widget themes are optional. You can define as many as you like. Not defined widget themes will be taken from the
parent theme.
All properties of widget themes (and the fallback properties) are optional.
:::

## Inheritance of properties

All properties will default to the parent themes widget theme properties, except `color`, `textColor`, `textShadow` and
`iconColor`. These default first to the fallback properties. You can override this behavior, by adding a `inherit` 
property to a widget theme. The value of the property should either be a string or a list of strings where each string
is the name of the before mentioned properties. Let's look at an example

Let's say we have a theme A
```json
{
  "button": {
    "defaultWidth": 24,
    "color": "#FF0000"
  }
}
```
and a theme B which is a child of A
```json
{
  "parent": "A",
  "defaultWidth": 20,
  "color": "#00FF00",
  "button": {
  }
}
```
Since `defaultWidth` will be inherited from the parents widget theme, the default width of the button is 24 and not 20.
Contrary to `color` which uses the fallback value first. This means the button will have a color `#00FF00` and not
`#FF0000`. Sometimes this behavior is not desirable. We could copy the value from the parent, but that's extra work and
doesn't get updated when the parent value changes. Instead, we use the `inherit` property:
```json
{
  "parent": "A",
  "defaultWidth": 20,
  "color": "#00FF00",
  "button": {
    "inherit": [
      "color"
    ]
  }
}
```
Now the button color of B will be whatever the parent widget themes values is. In this case it is `#FF0000`. Since we 
only have one value in the inherit list, it can be shortened to `"inherit": "color"`.

:::info Note {id="note"}
Note that other mods may add properties which behaves similar to `color`.
:::

## Sub Widget Themes
Sometimes you want to have different widget themes for the same type of widget. Let's say for example you want to color
the player slots differently than normal slots. In that case you would add a widget theme which may look like this
```json
{
  "itemSlot:player": {
    "color": "#FF0000"
  }
}
```
This will color only player slots red. The syntax is `parentWidgetThemeName:subName`. Every sub widget theme has to be
defined via a mod. ModularUI currently only has the `itemSlot:player` sub widget theme defined. Every sub theme can have
any properties it's parent can have. Sub widget themes can't have sub widget themes. 

:::info Note {id="note"}
This feature is intended for widgets with the same type and not for different widget types which use the same widget 
class.
:::
