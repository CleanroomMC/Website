---
title: Carving (Chisel)
description: Sets a group of items any item can be converted between freely, in world and in a GUI.
sidebar:
  label: Carving
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/chisel/Carving.java
---

## Description

Sets a group of items any item can be converted between freely, in world and in a GUI.

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

This compat is not fully documented. Some or all of its features are not present on the wiki. View the source code to gain an accurate understanding of the compat.

</details>

:::danger[Danger]
You cannot addVariation/removeVariation to chisel groups based on the oredict, you have to modify the oredict directly.
:::

:::danger[Bug]
Some mods use "registry replacement" to change a preexisting entry in a registry. If this has been done to a block used by chisel, this will result in errors when manipulating *any* carving group and prevent the chiseling of that block. Of particular note is Inspirations, which can replace carpets and causes [this issue](https://github.com/Chisel-Team/Chisel/issues/828).
:::

## Identifier

The identifier `mods.chisel.carving` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.chisel.carving/* Used as page default */
mods.chisel.Carving
```

</details>

## Adding Entries

- Adds a new Chisel Group with the given name:

    ```groovy
    mods.chisel.carving.addGroup(String)
    ```

- Sets the sound of the Chisel Group:

    ```groovy
    mods.chisel.carving.setSound(String, SoundEvent)
    ```

- Sets the sound of the Chisel Group:

    ```groovy
    mods.chisel.carving.setSound(ICarvingGroup, SoundEvent)
    ```

- Adds a new Item Variation to the Chisel Group:

    ```groovy
    mods.chisel.carving.addVariation(String, ItemStack)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.chisel.carving.addGroup('demo')
mods.chisel.carving.setSound('demo', sound('minecraft:block.glass.break'))
mods.chisel.carving.addVariation('demo', item('minecraft:diamond_block'))
mods.chisel.carving.addVariation('demo', item('chisel:antiblock:3'))
mods.chisel.carving.addVariation('demo', item('minecraft:sea_lantern'))
```

</details>

## Removing Entries

- Removes all Chisel Groups and Variations within each Chisel Group:

    ```groovy
    mods.chisel.carving.removeAll()
    ```

- Removes a Chisel Group and all Item Variations with that Chisel Group:

    ```groovy
    mods.chisel.carving.removeGroup(String)
    ```

- Removes an Item Variation from the given Chisel Group:

    ```groovy
    mods.chisel.carving.removeVariation(String, ItemStack)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.chisel.carving.removeAll()
mods.chisel.carving.removeGroup('blockDiamond')
mods.chisel.carving.removeVariation('antiblock', item('chisel:antiblock:3'))
mods.chisel.carving.removeVariation('antiblock', item('chisel:antiblock:15'))
```

</details>
