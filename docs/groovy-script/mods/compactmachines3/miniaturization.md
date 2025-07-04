---
title: "Miniaturization"
titleTemplate: "Compact Machines 3 | CleanroomMC"
description: "Consumes a 3d structure in-world based on keys when an item is thrown into the field."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/compactmachines/Miniaturization.java"
---

# Miniaturization (Compact Machines 3)

## Description

Consumes a 3d structure in-world based on keys when an item is thrown into the field.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.compactmachines3.miniaturization/* Used as page default */ // [!code focus]
mods.compactmachines3.Miniaturization
mods.compactmachines.miniaturization
mods.compactmachines.Miniaturization
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.compactmachines3.miniaturization.add(MultiblockRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Miniaturization also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.compactmachines3.miniaturization.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `List<List<String>>`. Sets the structure in order of a descending Y-axis.

    ```groovy:no-line-numbers
    layer(String...)
    layer(List<String>)
    shape(List<List<String>>)
    ```

- `int`. Sets the time in ticks the recipe takes to process before dropping the output item. (Default `100`).

    ```groovy:no-line-numbers
    ticks(int)
    duration(int)
    ```

- `Char2ObjectOpenHashMap<Miniaturization.RecipeBuilder.ReferenceValues>`. Sets the IBlockState, specific NBT, if the metadata is checked, and a representative itemstack for each `char` key. (Default `' ' = air, '_' = air`).

    ```groovy:no-line-numbers
    key(String, IBlockState)
    key(String, IBlockState, boolean)
    key(String, IBlockState, NBTTagCompound)
    key(String, IBlockState, NBTTagCompound, boolean)
    key(String, IBlockState, NBTTagCompound, boolean, ItemStack)
    ```

- `boolean`. Sets if the recipe does not have to test all 4 rotations to determine if the multiblock is valid. (Default `false`).

    ```groovy:no-line-numbers
    symmetrical()
    symmetrical(boolean)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `org.dave.compactmachines3.miniaturization.MultiblockRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.compactmachines3.miniaturization.recipeBuilder()
    .name('diamond_rectangle')
    .input(item('minecraft:clay'))
    .output(item('minecraft:clay'))
    .symmetrical()
    .ticks(10)
    .shape([['www',
             'www']])
    .key('w', blockstate('minecraft:diamond_block'))
    .register()

mods.compactmachines3.miniaturization.recipeBuilder()
    .name('groovy_rocket')
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay') * 64)
    .symmetrical()
    .ticks(5400)
    .key('a', blockstate('minecraft:stained_glass:0'))
    .key('b', blockstate('minecraft:stained_glass:1'))
    .key('c', blockstate('minecraft:stained_glass:2'))
    .key('d', blockstate('minecraft:stained_glass:3'))
    .key('e', blockstate('minecraft:diamond_block'))
    .key('f', blockstate('minecraft:stained_glass:5'))
    .key('g', blockstate('minecraft:stained_glass:6'))
    .layer('       ',
           '       ',
           '   a   ',
           '  aaa  ',
           '   a   ',
           '       ',
           '       ')
    .layer('       ',
           '   b   ',
           '  aaa  ',
           ' baaab ',
           '  aaa  ',
           '   b   ',
           '       ')
    .layer('       ',
           '   c   ',
           '  cac  ',
           ' caeac ',
           '  cac  ',
           '   c   ',
           '       ')
    .layer('       ',
           '   a   ',
           '  aaa  ',
           ' aaeaa ',
           '  aaa  ',
           '   a   ',
           '       ')
    .layer('       ',
           '   a   ',
           '  aaa  ',
           ' aaeaa ',
           '  aaa  ',
           '   a   ',
           '       ')
    .layer('       ',
           '   a   ',
           '  aaa  ',
           ' aaeaa ',
           '  aaa  ',
           '   a   ',
           '       ')
    .layer('       ',
           '   g   ',
           '  cac  ',
           ' caeac ',
           '  cac  ',
           '   f   ',
           '       ')
    .layer('       ',
           '   a   ',
           '  aaa  ',
           ' aaeaa ',
           '  aaa  ',
           '   a   ',
           '       ')
    .layer('       ',
           '   a   ',
           '  aaa  ',
           ' aaeaa ',
           '  aaa  ',
           '   a   ',
           '       ')
    .layer('       ',
           '   a   ',
           '  aaa  ',
           ' aaeaa ',
           '  aaa  ',
           '   a   ',
           '       ')
    .layer('       ',
           '   c   ',
           '  cac  ',
           ' caeac ',
           '  cac  ',
           '   c   ',
           '       ')
    .layer('       ',
           '   a   ',
           '  aaa  ',
           ' aaaaa ',
           '  aaa  ',
           '   a   ',
           '       ')
    .layer('   a   ',
           '  ccc  ',
           ' cdddc ',
           'acdddca',
           ' cdddc ',
           '  ccc  ',
           '   a   ')
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.compactmachines3.miniaturization.remove(MultiblockRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.compactmachines3.miniaturization.removeByCatalyst(ItemStack)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.compactmachines3.miniaturization.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.compactmachines3.miniaturization.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.compactmachines3.miniaturization.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.compactmachines3.miniaturization.removeByCatalyst(item('minecraft:redstone'))
mods.compactmachines3.miniaturization.removeByInput(item('minecraft:ender_pearl'))
mods.compactmachines3.miniaturization.removeByOutput(item('compactmachines3:machine:3'))
mods.compactmachines3.miniaturization.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.compactmachines3.miniaturization.streamRecipes()
    ```
