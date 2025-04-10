---
title: "Ore Dictionary"
titleTemplate: "Minecraft | CleanroomMC"
description: "Manipulate the Ore Dictionary and what itemstacks are part of what oredicts."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/vanilla/OreDict.java"
---

# Ore Dictionary (Minecraft)

## Description

Manipulate the Ore Dictionary and what itemstacks are part of what oredicts.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
ore_dict/* Used as page default */ // [!code focus]
oredict
oreDict
OreDict
ore_dictionary
oredictionary
oreDictionary
OreDictionary
minecraft.ore_dict
minecraft.oredict
minecraft.oreDict
minecraft.OreDict
minecraft.ore_dictionary
minecraft.oredictionary
minecraft.oreDictionary
minecraft.OreDictionary
Minecraft.ore_dict
Minecraft.oredict
Minecraft.oreDict
Minecraft.OreDict
Minecraft.ore_dictionary
Minecraft.oredictionary
Minecraft.oreDictionary
Minecraft.OreDictionary
vanilla.ore_dict
vanilla.oredict
vanilla.oreDict
vanilla.OreDict
vanilla.ore_dictionary
vanilla.oredictionary
vanilla.oreDictionary
vanilla.OreDictionary
Vanilla.ore_dict
Vanilla.oredict
Vanilla.oreDict
Vanilla.OreDict
Vanilla.ore_dictionary
Vanilla.oredictionary
Vanilla.oreDictionary
Vanilla.OreDictionary
mods.mc.ore_dict
mods.mc.oredict
mods.mc.oreDict
mods.mc.OreDict
mods.mc.ore_dictionary
mods.mc.oredictionary
mods.mc.oreDictionary
mods.mc.OreDictionary
mods.minecraft.ore_dict
mods.minecraft.oredict
mods.minecraft.oreDict
mods.minecraft.OreDict
mods.minecraft.ore_dictionary
mods.minecraft.oredictionary
mods.minecraft.oreDictionary
mods.minecraft.OreDictionary
```


## Adding Entries

- Adds the given itemstack to the given oredict:

    ```groovy:no-line-numbers
    ore_dict.add(String, Block)
    ```

- Adds the given itemstack to the given oredict:

    ```groovy:no-line-numbers
    ore_dict.add(String, Item)
    ```

- Adds the given itemstack to the given oredict:

    ```groovy:no-line-numbers
    ore_dict.add(String, ItemStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
ore_dict.add('ingotGold', item('minecraft:nether_star'))
ore_dict.add('netherStar', item('minecraft:gold_ingot'))
```

::::::::::

## Removing Entries

- Removes all itemstacks from the given oredict:

    ```groovy:no-line-numbers
    ore_dict.clear(String)
    ```

- Removes the given itemstack from the given oredict:

    ```groovy:no-line-numbers
    ore_dict.remove(String, ItemStack)
    ```

- Removes all itemstacks from the given oredict:

    ```groovy:no-line-numbers
    ore_dict.removeAll(String)
    ```

- Removes all itemstacks from all oredicts:

    ```groovy:no-line-numbers
    ore_dict.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
ore_dict.clear('plankWood')
ore_dict.remove('netherStar', item('minecraft:nether_star'))
ore_dict.removeAll('ingotIron')
ore_dict.removeAll()
```

::::::::::

## Getting the value of entries

- Returns true if the given oredict exists, although this does not check if the oredict contains entries:

    ```groovy:no-line-numbers
    ore_dict.exists(String)
    ```

- Returns a list of all itemstacks in the given oredict:

    ```groovy:no-line-numbers
    ore_dict.getItems(String)
    ```
