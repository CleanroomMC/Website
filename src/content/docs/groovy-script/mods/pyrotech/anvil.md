---
title: Anvil (Pyrotech)
description: When using hammer or pickaxe it can convert items.
sidebar:
  label: Anvil
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pyrotech/Anvil.java
---

## Description

When using hammer or pickaxe it can convert items.

## Identifier

The identifier `mods.pyrotech.anvil` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.pyrotech.anvil/* Used as page default */
mods.pyrotech.Anvil
```

</details>

## Adding Recipes

- Adds the recipe:

    ```groovy
    mods.pyrotech.anvil.add(AnvilRecipe)
    ```

- Adds recipes in the format `name`, `input`, `output`, `hits`, `tier`, `type`:

    ```groovy
    mods.pyrotech.anvil.add(String, IIngredient, ItemStack, int, String, String)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pyrotech.anvil.add('iron_to_clay', ore('ingotIron'), item('minecraft:clay_ball'), 9, 'granite', 'hammer')
```

</details>

### Recipe Builder

Just like other recipe types, the Anvil also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.pyrotech.anvil.recipeBuilder()
    ```

---

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy
    name(String)
    name(ResourceLocation)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets how often the item needs to be hit. Requires greater than 0. (Default `0`).

    ```groovy
    hits(int)
    ```

- `AnvilRecipe.EnumTier`. Sets the tier of the required anvil (Granite, Ironclad, Obsidian).

    ```groovy
    tier(AnvilRecipe.EnumTier)
    tierGranite()
    tierIronclad()
    tierObsidian()
    ```

- `AnvilRecipe.EnumType`. Sets the type of tool required (Hammer, Pickaxe).

    ```groovy
    type(AnvilRecipe.EnumType)
    typeHammer()
    typePickaxe()
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.codetaylor.mc.pyrotech.modules.tech.basic.recipe.AnvilRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pyrotech.anvil.recipeBuilder()
    .input(item('minecraft:diamond') * 4)
    .output(item('minecraft:emerald') * 2)
    .hits(5)
    .typeHammer()
    .tierGranite()
    .name('diamond_to_emerald_granite_anvil')
    .register()

mods.pyrotech.anvil.recipeBuilder()
    .input(item('minecraft:diamond') * 8)
    .output(item('minecraft:nether_star') * 1)
    .hits(10)
    .typePickaxe()
    .tierIronclad()
    .name('diamond_to_nether_star_ironclad_anvil')
    .register()

mods.pyrotech.anvil.recipeBuilder()
    .input(item('minecraft:diamond') * 4)
    .output(item('minecraft:gold_ingot') * 16)
    .hits(5)
    .typePickaxe()
    .tierObsidian()
    .name('diamond_to_gold_obsidian_anvil')
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the recipe:

    ```groovy
    mods.pyrotech.anvil.remove(AnvilRecipe)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy
    mods.pyrotech.anvil.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy
    mods.pyrotech.anvil.remove(ResourceLocation)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.pyrotech.anvil.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.pyrotech.anvil.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pyrotech.anvil.removeByOutput(item('minecraft:stone_slab', 3))
mods.pyrotech.anvil.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.pyrotech.anvil.streamRecipes()
    ```
