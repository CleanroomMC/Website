
# Object Mappers

GroovyScript uses Object Mappers to reference game objects such as ItemStacks, BlockStates, or Entities.
These are always available by default in every file.

:::: info Danger {id="danger"}

If the file name is the same as the name of an Object Mapper the Object Mapper will not function properly.

::: info Example {id="example"}

If file name is `fluid.groovy`, using `fluid` will refer to the file object *instead* of the Object Mapper.

:::

::::

The syntax for all Object Mappers is

```groovy
[name]([parameters]) // basic version
mods.[modid].[name]([parameters]) // if added by a mod, can also refer to it specifically via the modid
```

::: info Warning {id="warning"}

If two mods add an Object Mapper with the same name, the basic version will not work,
and you will need to use the version that specifies the Object Mapper via the `modid`.

:::

::: info Example {id="example"}

```groovy
item('minecraft:clay')
item('minecraft:fish:1')
blockstate('minecraft:leaves', 'variant=birch')
blockstate('minecraft:log:axis=z:variant=oak')
enchantment('minecraft:unbreaking')
entity('minecraft:wither_skeleton')
fluid('lava')
ore('blockDiamond')
resource('roots:cod')
sound('minecraft:block.glass.break')
```

:::

::: info Note {id="note"}

In all cases, it must be the full resource location of the item/sound/enchantment - you cannot omit `minecraft`.

:::


## Individual Object Mappers

Object Mappers are added by multiple mods, and specific information is listed on their given pages.

::: info Work In Progress {id="warning"}

Object Mapper documentation is a Work In Progress, and is not fully documented on the wiki.
Currently, the best way to observe what Object Mappers will do is to use the Language Server in a compatible [editor](./editors.md).

:::

- [All Vanilla Object Mappers](../minecraft/vanilla_object_mappers.md)


## General Methods


Many Object Mappers share the same set of the methods.
Many of these methods utilize [Operator Overloading](../groovy/operators.md#operator-overloading),
which allows things like `item(...)` to be an alias of `item.call(...)`.


### Retrieval

Using `call(...)` returns the relevant data of the Object Mapper,
and is the primary purpose of an Object Mapper's existence.
<br>
Every Object Mapper has this capability, with the parameters varying based on the Object Mapper.

See above for examples of this.


### Default Value


Using `call()` without any parameters will attempt to return
the default value of the Object Mapper, presuming it exists.
If it does not exist, `null` will be returned instead
<br>
Some Object Mappers have this functionality.

::: info Example {id="example"}

```groovy
item()        // returns ItemStack.EMPTY
block()       // returns Blocks.AIR
creativeTab() // returns CreativeTabs.SEARCH
```

:::


### Inversion


Using `mod(...)` returns a String that can create the retrieval method
of the parameter, presuming that the parameter is of the type that the Object Mapper returns.
<br>
The main purpose of this is to convert an object obtained through some means
into text interpretable by GroovyScript.
For some Object Mappers, there are multiple valid ways to retrieve the same object -
in such a situation, the return value will only be one of those ways.
<br>
Most Object Mappers have this capability.

::: info Example {id="example"}

```groovy
log(item % item('minecraft:clay')) // returns item('minecraft:clay')
log(blockstate % blockstate('minecraft:log:0')) // returns blockstate('minecraft:log', 'axis=y', 'variant=oak')
log(item % minecraft.getAllItems()) // returns a String for every item from vanilla minecraft
```

:::
