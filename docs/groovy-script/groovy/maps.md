---
order: 400
---

# Maps

Maps are similar to lists, but they assign each value to a key.
Meaning instead of accessing the value by the index, you can get it by using the key.
There can only be one value for a given key, but multiple keys can have the same value.

There different types of maps.
Java's default map is `HashMap`.
It doesn't keep the elements order causing the elements to be seemingly random.

The key and value can be of different types. If the key is a string you can leave out the `'` or `"`.

```groovy
def simpleMap = [:] // a empty ordered hash map
def hashMap = new HashMap() // a empty unordered hash map

// this maps the short form of some periodic elements to their real name
def elements = [
        Au: 'Gold',
        Ag: 'Silver',
        Pb: 'Lead',
        H: 'Hydrogen'
]
```

## Getting values

We are using the map we created above here.

```groovy:no-line-numbers
println(elements['Pb']) // Lead
println(elements['Ag']) // Silver
println(elements['B'])  // null since there is no key 'B'
```

## Modifying maps

We are using the map we created above here.

```groovy:no-line-numbers
elements['Au'] = 'Copper' // Au is now mapped to copper
elements.remove('H')      // removes H: Hydrogen
```

## Variable keys

Groovy can have the keys of a map be set via variables.
However, in order to do this, the key might need to be surrounded in parentheses
to be properly handled.

This is particularly relevant with GroovyScript [Object Mappers](../getting_started/object_mappers.md).

```groovy:no-line-numbers
def itemStackToValue = [
    (item('minecraft:dirt')): -1,
    (item('minecraft:stone')): 5,
    (item('minecraft:clay')): 1000,
]
```

::: info Warning {id="danger"}

Failing to properly surround a key in parentheses if it requires them may result in the script file
throwing a `MultipleCompilationErrorsException` due to being "unable to resolve class".

:::
