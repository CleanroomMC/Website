---
title: Metallurgic Infuser (Mekanism)
description: Converts and input itemstack and a variable amount of an infusion type into an output itemstack.
sidebar:
  label: Metallurgic Infuser
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mekanism/MetallurgicInfuser.java
---

## Description

Converts and input itemstack and a variable amount of an infusion type into an output itemstack.

## Identifier

The identifier `mods.mekanism.metallurgic_infuser` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.mekanism.metallurgicinfuser
mods.mekanism.metallurgicInfuser
mods.mekanism.MetallurgicInfuser
mods.mekanism.metallurgic_infuser/* Used as page default */
```

</details>

## Adding Recipes

- Adds recipes in the format `ingredient`, `infuseType`, `infuseAmount`, `output`:

    ```groovy
    mods.mekanism.metallurgic_infuser.add(IIngredient, String, int, ItemStack)
    ```

- Adds recipes in the format `ingredient`, `infuseType`, `infuseAmount`, `output`:

    ```groovy
    mods.mekanism.metallurgic_infuser.add(IIngredient, InfuseType, int, ItemStack)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.metallurgic_infuser.add(item('minecraft:nether_star'), infusionType('groovy_example'), 50, item('minecraft:clay'))
```

</details>

### Recipe Builder

Just like other recipe types, the Metallurgic Infuser also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.mekanism.metallurgic_infuser.recipeBuilder()
    ```

---

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

- `int`. Sets the amount of the provided Infusion type consumed. Requires greater than 0. (Default `0`).

    ```groovy
    amount(int)
    ```

- `InfuseType`. Sets the Infusion type the recipe uses. Requires not null.

    ```groovy
    infuse(String)
    infuse(InfuseType)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mekanism.common.recipe.machines.MetallurgicInfuserRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.metallurgic_infuser.recipeBuilder()
    .input(item('minecraft:nether_star'))
    .infuse(infusionType('groovy_example'))
    .amount(50)
    .output(item('minecraft:clay'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.mekanism.metallurgic_infuser.removeByInput(IIngredient, InfuseType)
    ```

- Removes all registered recipes:

    ```groovy
    mods.mekanism.metallurgic_infuser.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.metallurgic_infuser.removeByInput(ore('dustObsidian'), 'DIAMOND')
mods.mekanism.metallurgic_infuser.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.mekanism.metallurgic_infuser.streamRecipes()
    ```
