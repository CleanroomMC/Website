---
title: "Tartaric Forge (Blood Magic: Alchemical Wizardry)"
description: Converts up to 4 input items into an output itemstack, requiring a Tartaric gem with a minimum amount of souls, and consuming some.
sidebar:
  label: Tartaric Forge
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bloodmagic/TartaricForge.java
---

## Description

Converts up to 4 input items into an output itemstack, requiring a Tartaric gem with a minimum amount of souls, and consuming some.

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

Tartaric Forge can properly execute recipes that only have 1 input, but they're bugged in JEI. If a recipe only has 1 input, it will be duplicated in the bottom-right slot. This bug is purely visual, and the recipe still works as intended.

</details>

## Identifier

The identifier `mods.bloodmagic.tartaric_forge` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.bm.tartaricforge
mods.bm.tartaricForge
mods.bm.TartaricForge
mods.bm.tartaric_forge
mods.bloodmagic.tartaricforge
mods.bloodmagic.tartaricForge
mods.bloodmagic.TartaricForge
mods.bloodmagic.tartaric_forge/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.bloodmagic.tartaric_forge.add(RecipeTartaricForge)
    ```

- Adds recipes in the format `input`, `output`, `minimumSouls`, `soulDrain`:

    ```groovy
    mods.bloodmagic.tartaric_forge.add(Collection<IIngredient>, ItemStack, double, double)
    ```

### Recipe Builder

Just like other recipe types, the Tartaric Forge also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.bloodmagic.tartaric_forge.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 4.

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

- `double`. Sets how much Demonic Will is drained from the Tartaric Gem when the craft is completed. Requires greater than or equal to 0. (Default `0.0d`).

    ```groovy
    drain(int)
    soulDrain(double)
    ```

- `double`. Sets how much Demonic Will is required in the Tartaric Gem to start the craft. Requires greater than or equal to 0. (Default `0.0d`).

    ```groovy
    minimumSouls(double)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `WayofTime.bloodmagic.api.impl.recipe.RecipeTartaricForge`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.bloodmagic.tartaric_forge.recipeBuilder()
    .input(item('minecraft:clay'), item('minecraft:clay'), item('minecraft:clay'), item('minecraft:clay'))
    .output(item('minecraft:gold_ingot'))
    .soulDrain(5)
    .minimumSouls(10)
    .register()

mods.bloodmagic.tartaric_forge.recipeBuilder()
    .input(item('minecraft:gold_ingot'), item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .drain(200)
    .minimumSouls(500)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.bloodmagic.tartaric_forge.remove(RecipeTartaricForge)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.bloodmagic.tartaric_forge.removeByInput(IIngredient...)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.bloodmagic.tartaric_forge.removeByInput(NonNullList<IIngredient>)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.bloodmagic.tartaric_forge.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.bloodmagic.tartaric_forge.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.bloodmagic.tartaric_forge.removeByInput(item('minecraft:cauldron'), item('minecraft:stone'), item('minecraft:dye:4'), item('minecraft:diamond'))
mods.bloodmagic.tartaric_forge.removeByInput(item('minecraft:gunpowder'), item('minecraft:redstone'))
mods.bloodmagic.tartaric_forge.removeByOutput(item('bloodmagic:demon_crystal'))
mods.bloodmagic.tartaric_forge.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.bloodmagic.tartaric_forge.streamRecipes()
    ```
