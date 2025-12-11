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

The identifier `ore_dict` will be used as the default on this page.

:::::::::: details All Identifiers {id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {4}
oreDict
oredict
OreDict
ore_dict/* Used as page default */ // [!code focus]
oredictionary
OreDictionary
oreDictionary
ore_dictionary
mc.oredict
mc.oreDict
mc.OreDict
MC.oredict
MC.oreDict
MC.OreDict
mc.ore_dict
MC.ore_dict
mc.oredictionary
mc.oreDictionary
mc.OreDictionary
MC.oredictionary
MC.oreDictionary
MC.OreDictionary
mc.ore_dictionary
MC.ore_dictionary
vanilla.oredict
vanilla.oreDict
vanilla.OreDict
Vanilla.oredict
Vanilla.oreDict
Vanilla.OreDict
vanilla.ore_dict
Vanilla.ore_dict
vanilla.oredictionary
vanilla.oreDictionary
vanilla.OreDictionary
Vanilla.oredictionary
Vanilla.oreDictionary
Vanilla.OreDictionary
vanilla.ore_dictionary
Vanilla.ore_dictionary
minecraft.oredict
minecraft.oreDict
minecraft.OreDict
Minecraft.oredict
Minecraft.oreDict
Minecraft.OreDict
minecraft.ore_dict
Minecraft.ore_dict
minecraft.oredictionary
minecraft.oreDictionary
minecraft.OreDictionary
Minecraft.oredictionary
Minecraft.oreDictionary
Minecraft.OreDictionary
minecraft.ore_dictionary
Minecraft.ore_dictionary
mods.mc.oredict
mods.mc.oreDict
mods.mc.OreDict
mods.MC.oredict
mods.MC.oreDict
mods.MC.OreDict
mods.mc.ore_dict
mods.MC.ore_dict
mods.mc.oredictionary
mods.mc.oreDictionary
mods.mc.OreDictionary
mods.MC.oredictionary
mods.MC.oreDictionary
mods.MC.OreDictionary
mods.mc.ore_dictionary
mods.MC.ore_dictionary
mods.vanilla.oredict
mods.vanilla.oreDict
mods.vanilla.OreDict
mods.Vanilla.oredict
mods.Vanilla.oreDict
mods.Vanilla.OreDict
mods.vanilla.ore_dict
mods.Vanilla.ore_dict
mods.vanilla.oredictionary
mods.vanilla.oreDictionary
mods.vanilla.OreDictionary
mods.Vanilla.oredictionary
mods.Vanilla.oreDictionary
mods.Vanilla.OreDictionary
mods.vanilla.ore_dictionary
mods.Vanilla.ore_dictionary
mods.minecraft.oredict
mods.minecraft.oreDict
mods.minecraft.OreDict
mods.Minecraft.oredict
mods.Minecraft.oreDict
mods.Minecraft.OreDict
mods.minecraft.ore_dict
mods.Minecraft.ore_dict
mods.minecraft.oredictionary
mods.minecraft.oreDictionary
mods.minecraft.OreDictionary
mods.Minecraft.oredictionary
mods.Minecraft.oreDictionary
mods.Minecraft.OreDictionary
mods.minecraft.ore_dictionary
mods.Minecraft.ore_dictionary
```

::::::::::

## Adding Entries

- Adds the given itemstack to the given oredict:

    ```groovy:no-line-numbers
    ore_dict.add(String, Item)
    ```

- Adds the given itemstack to the given oredict:

    ```groovy:no-line-numbers
    ore_dict.add(String, Block)
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

- Returns an IIngredient containing all items for all matching oredicts at the time it is called:

    ```groovy:no-line-numbers
    ore_dict.getOres(String)
    ```

- Returns an IIngredient containing all items for all matching oredicts at the time it is called:

    ```groovy:no-line-numbers
    ore_dict.getOres(Pattern)
    ```

- Returns a list of all itemstacks in the given oredict:

    ```groovy:no-line-numbers
    ore_dict.getItems(String)
    ```

- Iterates through every registered oredict, with the ability to clear all items from each one:

    ```groovy:no-line-numbers
    ore_dict.streamOreNames()
    ```
