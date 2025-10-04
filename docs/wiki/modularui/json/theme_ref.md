---
title: Widget Theme Reference
---

# Widget Themes

## Fallback widget theme
The widget theme for all widgets if not specified otherwise.<br>
ID: `fallback` (or none if at top level)
Hover ID: `fallback:hover` or just `:hover`

### Properties:
- `width`: positive integer defining the widgets default width (default is 18)
- `height`: positive integer defining the widgets default height (default is 18)
- `color`: a [color](color.md), which is applied to background and overlay which are not icons (default is white)
- `textColor`: a [color](color.md), which is applied to text (default is `#404040` (dark grey))
- `iconColor`: a [color](color.md), which is applied to icons in background or overlay (default is white)
- `background`: a [drawable](drawable.md), which will be displayed in the background of the widget (default is empty)
- `textShadow`: a boolean (`true` or `false`) which determines if a shadow should be applied to text (default is `false`)

Fall back hover theme has the same defaults.
 
## Panel theme
This widget theme is applied to all panels.<br>
ID: `panel`

### Properties
All of [fallback widget theme](#properties) and no additional properties.
- default `width` value is 176
- default `height` value is 166
- default `background` is `vanilla_background`

## Button theme
This widget theme is applied to all buttons and cycle buttons.<br>
ID: `button`

### Properties
All of [fallback widget theme](#properties) and no additional properties.
- default `textColor` is white
- default `textShadow` is `true`
- default `background` is `mc_background`
- default hover `background` is `mc_button_hovered`

## Close button theme
This widget theme is applied to close buttons (usually top right corner of a sub panel to close the panel).<br>
ID: `closeButton`

### Properties
All of [fallback widget theme](#properties) and no additional properties.
- defaults are same as [button theme](#properties-2) and additionally
- default `width` is 10
- default `height` is 10

## Slot theme
This widget theme is applied to item/fluid slots.<br>
ID: `itemSlot` for item slots and `fluidSlot` for fluid slots

### Properties
All of [fallback widget theme](#properties) and
- `slotHoverColor`: a [color](color.md), which is rendered above everything in the widget (default is `#60FFFFFF` (non-opaque white))
- default `background` for item slot is `slot_item` (vanilla item slot texture)
- default `background` for fluid slot is `slot_fluid` (darker item slot texture)

## Text field theme
This widget theme is applied to all text fields.<br>
ID: `textField`

### Properties
All of [fallback widget theme](#properties) and
- `markedColor`: a [color](color.md), which is rendered behind a part text when it is marked
- `hintColor`: a [color](color.md), which is applied to the hint text, which appears when the field is empty
- default `background` is `display_small` (black rectangle with thin grey border)
- default `width` is 56
- default `height` is 18
- default `textColor` is white

## Toggle button theme
This widget theme is applied to all toggle buttons.<br>
ID: `toggleButton`

### Properties
All of [fallback widget theme](#properties) and
- `selectedColor`: a [color](color.md), which is applied to background and overlay which are not icons when the button is toggled (default is white)
- `selectedTextColor`: a [color](color.md), which is applied to text when the button is toggled (default is white)
- `selectedIconColor`: a [color](color.md), which is applied to icons in background or overlay when the button is toggled (default is white)
- `selectedBackground`: a [drawable](drawable.md), which will be displayed in the background of the widget when the button is toggled (default is `mc_button_disabled`)
- `selectedTextShadow`: a boolean (`true` or `false`) which determines if a shadow should be applied to text when the button is toggled (default is `true`)
- default `textColor` is white
- default `textShadow` is `true`
- default `background` is `mc_background`
- default hover `background` is `mc_button_hovered` (`selectedBackground` doesn't change on hover)

## Sub widget themes
- `itemSlot:player` inherits from `itemSlot` and is applied to player slots
- `itemSlot:playerHotbar` inherits from `itemSlot:player` and is applied to player hotbar slots
- `itemSlot:playerMainInventory` inherits from `itemSlot:player` and is applied to player main inventory slots (excluding hotbar)
- `itemSlot:playerArmor` inherits from `itemSlot:player` and is applied to player armor slots
- `itemSlot:playerOffhand` inherits from `itemSlot:player` and is applied to player offhand slots
