---
title: Color
---

# Color

There are many different way to define color in JSON

## Hexadecimal number

The simplest way is by using hexadecimal numbers. You can do that be prefixing your number string with `0x`, `0X` or `#`.
The format is `AARRGGBB`. If `A` (alpha) is not set, it defaults to full opacity

::: details Example {open id="example"}
```json
{
  "color": "#FFFFFF"
}
```
:::

The following formats can all have the `alpha` or `a` property, with a value from either 0.0 to 1.0 or from 0 to 255.
If you want to use the 0.0 to 1.0 range you need use a `.`. `1` will use the
0 to 255 range and is very low. `1.0` will use the 0.0 to 1.0 range and is full opacity.

## RGB

- `red` or `r`: The red value from 0 to 255
- `green` or `g`: The green value from 0 to 255
- `blue` or `b`: The blue value from 0 to 255

::: details Example {open id="example"}
```json
{
  "color": {
    "r": 200,
    "g": 0,
    "b": 44,
    "alpha": 1.0
  }
}
```
:::

Here you can see how alpha can be added.

## HSV

- `hue` or `h`: The hue value from 0 to 360 (wraps around) (default is 0)
- `saturation` or `s`: The saturation from 0.0 to 1.0 (default is 0.0)
- `value` or `v`: The value from 0.0 to 1.0 (default is 1.0)

If `value` is not defined, [HSL](#hsl) will be used.

::: details Example {open id="example"}
```json
{
  "color": {
    "hue": 120,
    "saturation": 0.5,
    "value": 0.75
  }
}
```
:::

## HSL

- `hue` or `h`: The hue value from 0 to 360 (wraps around) (default is 0)
- `saturation` or `s`: The saturation from 0.0 to 1.0 (default is 0.0)
- `lightness` or `l`: The value from 0.0 to 1.0 (default is 0.5)

::: details Example {open id="example"}
```json
{
  "color": {
    "hue": 120,
    "saturation": 0.5,
    "lightness": 0.75
  }
}
```
:::

:::info Note {id="note"}
The saturation is not the same from [HSV](#hsv) as from [HSL](#hsl) (they are calculated slightly different), but the hue is.
:::

## CMYK

- `cyan` or `c`: The cyan value from 0.0 to 1.0 (default is 1.0)
- `magenta` or `m`: The cyan value from 0.0 to 1.0 (default is 1.0)
- `yellow` or `y`: The cyan value from 0.0 to 1.0 (default is 1.0)
- `black` or `k`: The cyan value from 0.0 to 1.0 (default is 1.0)

::: details Example {open id="example"}
```json
{
  "color": {
    "c": 1.0,
    "m": 0.5,
    "y": 0.75,
    "k": 0.2
  }
}
```
:::

::: warning {id="warning"}
You can NOT mix any of those formats! (except of course alpha)
:::

## Predefined colors
There is a shortcut for an invisible color:
```json
{
  "color": "invisible"
}
```
Which is equal to
```json
{
  "color": "#00FFFFFF"
}
```
Other predefined colors include for example `red`, `blue` and `green`. All predefined color ModularUI defines can be
found [here](https://github.com/CleanroomMC/ModularUI/blob/e52f70accd97d2c9b02635f6c70627d2112d9f6f/src/main/java/com/cleanroommc/modularui/utils/Color.java#L879).
You can also vary the shade of the predefined color by appending a ':' and a positive or negative integer. For example
```json
{
  "color": "red:2"
}
```
This would choose red, but two steps brighter. Negative number means darker. Zero is the main color. How many shades 
there are for a color is not constant. You will have to look it up at the page above.
