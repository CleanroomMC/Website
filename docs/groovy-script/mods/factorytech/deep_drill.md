---
title: "Terraneous Extractor"
titleTemplate: "Factory Tech | CleanroomMC"
description: "Passively generates resources when placed at or below y 8 and."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/factorytech/DeepDrill.java"
---

# Terraneous Extractor (Factory Tech)

## Description

Passively generates resources when placed at or below y 8 and.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.factorytech.deep_drill/* Used as page default */ // [!code focus]
mods.factorytech.deepdrill
mods.factorytech.deepDrill
mods.factorytech.DeepDrill
```


## Adding Entries

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.factorytech.deep_drill.add(Pair<ItemStack, Double>)
    ```


### Recipe Builder

Just like other recipe types, the Terraneous Extractor also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.factorytech.deep_drill.recipeBuilder()
    ```

---

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `double`. Sets the weight compared to other entries. Requires greater than or equal to 0. (Default `0.0d`).

    ```groovy:no-line-numbers
    weight(double)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `dalapo.factech.helper.Pair<net.minecraft.item.ItemStack, java.lang.Double>`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.factorytech.deep_drill.recipeBuilder()
    .output(item('minecraft:diamond'))
    .weight(10)
    .register()

mods.factorytech.deep_drill.recipeBuilder()
    .output(item('minecraft:clay'))
    .weight(30)
    .register()
```

:::::::::

::::::::::

## Removing Entries

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.factorytech.deep_drill.remove(Pair<ItemStack, Double>)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.factorytech.deep_drill.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.factorytech.deep_drill.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.factorytech.deep_drill.removeByInput(item('minecraft:gold_ore'))
mods.factorytech.deep_drill.removeAll()
```

::::::::::

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.factorytech.deep_drill.streamRecipes()
    ```
