---
title: Theme
---

# Theme

Make sure to check out [how to register themes](../themes.md).

Here we will take a look what the theme file can look like. If you are a mod developer you can directly translate it to
your `ThemeBuilder`.

Let's look at an example. This is what the default vanilla theme as a json file would mostly look like.

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
    "textColor": "#FFFFFFFF",
    "textShadow": true
  },
  "button:hover": {
    "background": {
      "type": "texture",
      "id": "mc_button_hovered"
    }
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
    "textColor": "#FFFFFFFF",
    "textShadow": true,
    "selectedBackground": {
      "type": "texture",
      "id": "mc_button_disabled"
    },
    "selectedColor": "#FFFFFFFF",
    "selectedTextColor": "#FFFFFFFF",
    "selectedTextShadow": true
  },
  "toggleButton:hover": {
    "background": {
      "type": "texture",
      "id": "mc_button_hovered"
    },
    "selectedBackground": "none"
  }
}
```

First we have the `parent` property. This defines the parent theme. If a theme does not define a widget theme, it will
be taken from its parent. If the `parent` property is not set, it defaults to `DEFAULT`, which is just the vanilla
theme.

After that we have the `defaultWidth`, `defaultHeight`, `color`, `background`, `textColor`,
`textShadow` and `iconColor` properties. These are fallback properties of [widget themes](#widget-themes). You can put
any properties that any widget theme can have here. If a widget theme does not have said property it will fall back to
the top level property if defined. The `defaultWidth` and `defaultHeight` properties determine the default widget size
if it isn't specified. Note this won't work on every widget. `TextWidget` for example have a default size that is
exactly the size of the text they are displaying.

See [widget themes](theme_ref.md) to find out what widget themes ModularUI provides and what properties they have. 
Addons may add more.

Additionally, you can add a
```json
{
  "override": true
}
```
property to the top level. This will discard any previous defined themes with the same name of other resourcepacks.
Otherwise, they will be merged, where the theme will only override properties it has defined.

:::info Note {id="note"}
All widget themes are optional. You can define as many as you like. Not defined widget themes will be taken from the
parent theme.
All properties of widget themes (and the fallback properties) are optional.
:::

## Hover widget themes
You may have noticed the widget themes in the example `"button:hover": {...}` and `"toggleButton:hover": {...}`. This is
because when a widget is hovered with the mouse a separate widget theme will be applied. This hover widget theme has all
the properties of the non hover variant. In terms of property inheritance they behave like 
[sub widget themes](#sub-widget-themes). If the non hover variant is specified in the current theme, then the properties
will be inherited from there. Otherwise, it will be inherited from the hover widget theme in the parent theme. This also
means that if the none hover variant is specified with any amount of properties, all hover effects from a parent theme
are lost. You will have to re-add them to you current theme.
Unlike sub widget themes, hover widget themes don't need to be registered. Just add the suffix `:hover` to any
registered widget theme (yes, even sub widget themes) and it will work.

Note that `"none"` is used for `background` inside the hover widget theme so it will be ignored
and the widget doesn't suddenly turn invisible when you don't want a separate hover texture. Read more about the 
difference between `"none"` and `null` [here](./drawable.md#empty-drawable).

You might think that `slotHoverColor` from item slot and fluid slot would belong in the hover widget theme, however
these are special. Specifying them in the hover widget theme variant has no effect.

The `defaultWidth` and the `defaultHeight` property obviously have no effect in the hover variant.

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
Note that other mods may add properties which behave similar to `color`.
:::

## Sub Widget Themes
Sometimes you want to have different widget themes for the same type of widget. Let's say for example you want to color
the player slots differently than normal slots. In java, we first need to register the sub widget theme with
```java
WidgetThemeKey<SlotTheme> ITEM_SLOT_PLAYER = ITEM_SLOT.createSubKey("player");
```

Then inside a theme json we can do this.
```json
{
  "itemSlot:player": {
    "color": "#FF0000"
  }
}
```
This will color only player slots red. The syntax is `parentWidgetThemeName:subName`. Every sub widget theme has to be
defined via a mod. ModularUI currently only has the `itemSlot:player` sub widget theme defined. Every sub theme can have
any properties it's parent can have. Sub widget themes can have sub widget themes.

Let's say that we now want to color hotbar slots a different color. We could create a new sub widget theme from 
`ITEM_SLOT`, but if the hotbar theme is not specified it should inherit the player slot theme. We therefore create a sub
widget theme for the just created sub widget theme.
```java
WidgetThemeKey<SlotTheme> ITEM_SLOT_PLAYER_HOTBAR = ITEM_SLOT_PLAYER.createSubKey("playerHotbar");
```
This new widget theme can be accessed with `"itemSlot:playerHotbar"` and **not** `"itemSlot:player:playerHotbar"`.
The syntax is `rootParentWidgetThemeName:subName`. You can find the sub widget themes ModularUI provides [here](theme_ref.md#sub-widget-themes).

:::info Note {id="note"}
This feature is intended for widgets with the same type and not for different widget types which use the same widget 
theme class.
:::
