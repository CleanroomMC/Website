---
title: Spatial Storage Allowed Tile Entities (Applied Energistics 2)
description: Either the class itself or its String name to add or remove from the Tile Entities allowed in Spatial Storage.
sidebar:
  label: Spatial Storage Allowed Tile Entities
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/appliedenergistics2/Spatial.java
---

## Description

Either the class itself or its String name to add or remove from the Tile Entities allowed in Spatial Storage.

## Identifier

The identifier `mods.appliedenergistics2.spatial` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.ae2.spatial
mods.ae2.Spatial
mods.appliedenergistics2.spatial/* Used as page default */
mods.appliedenergistics2.Spatial
```

</details>

## Adding Entries

- Adds the given class to the list of allowed TileEntities to be moved by Spatial Storage:

    ```groovy
    mods.appliedenergistics2.spatial.add(String)
    ```

- Adds the given class to the list of allowed TileEntities to be moved by Spatial Storage:

    ```groovy
    mods.appliedenergistics2.spatial.add(Class<? extends TileEntity>)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.appliedenergistics2.spatial.add('net.minecraft.tileentity.TileEntityStructure')
```

</details>

## Removing Entries

- Removes the given class from the list of allowed TileEntities to be moved by Spatial Storage:

    ```groovy
    mods.appliedenergistics2.spatial.remove(String)
    ```

- Removes the given class from the list of allowed TileEntities to be moved by Spatial Storage:

    ```groovy
    mods.appliedenergistics2.spatial.remove(Class<? extends TileEntity>)
    ```

- Removes all registered recipes:

    ```groovy
    mods.appliedenergistics2.spatial.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.appliedenergistics2.spatial.remove('net.minecraft.tileentity.TileEntityChest')
mods.appliedenergistics2.spatial.removeAll()
```

</details>
