---
title: Sanguine Infusion (Blood Arsenal)
description: Converts an input infusion itemstack and up to 8 input surrounding itemstacks into an output itemstack, consuming Life Essence from the network to do so when the Infusion de Sanguine Ritual is activated. Alternatively, instead of consuming an infusion item, adds or upgrades a modifier to the given stasis tool, with the ability to increase the quantity of inputs consumed based on level.
sidebar:
  label: Sanguine Infusion
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bloodarsenal/SanguineInfusion.java
---

## Description

Converts an input infusion itemstack and up to 8 input surrounding itemstacks into an output itemstack, consuming Life Essence from the network to do so when the Infusion de Sanguine Ritual is activated. Alternatively, instead of consuming an infusion item, adds or upgrades a modifier to the given stasis tool, with the ability to increase the quantity of inputs consumed based on level.

<details class="cr-block cr-note" open>
<summary>Note</summary>

Blacklisting classes only have effect in conjunction with a recipe using a `filter` and a respective of a Modifier that overrides `getSpecialNBT` to save the relevant filtered stack. The `filter` can only be used for modifier recipes. By default, the relevant Modifiers are `bad_potion`, `beneficial_potion`, and `sigil`.

</details>

## Identifier

The identifier `mods.bloodarsenal.sanguine_infusion` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {6}
mods.bloodarsenal.infusion
mods.bloodarsenal.Infusion
mods.bloodarsenal.sanguineinfusion
mods.bloodarsenal.sanguineInfusion
mods.bloodarsenal.SanguineInfusion
mods.bloodarsenal.sanguine_infusion/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.bloodarsenal.sanguine_infusion.add(RecipeSanguineInfusion)
    ```

- Remove the given class from the blacklist:

    ```groovy
    mods.bloodarsenal.sanguine_infusion.addBlacklist(Class)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.bloodarsenal.sanguine_infusion.addBlacklist(WayofTime.bloodmagic.iface.ISigil.class)
```

</details>

### Recipe Builder

Just like other recipe types, the Sanguine Infusion also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.bloodarsenal.sanguine_infusion.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 8.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the Life Essence cost. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    cost(int)
    ```

- `IIngredient`. Sets the filter the recipe.

    ```groovy
    filter(IIngredient)
    ```

- `IIngredient`. Sets the item being infused.

    ```groovy
    infuse(IIngredient)
    ```

- `String`. Sets the modifier key.

    ```groovy
    modifier(String)
    ```

- `int`. Sets the amount inputs are multiplied for higher levels of the modifier. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    levelMultiplier(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `arcaratus.bloodarsenal.recipe.RecipeSanguineInfusion`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.bloodarsenal.sanguine_infusion.recipeBuilder()
    .infuse(item('minecraft:gold_ingot'))
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .cost(1000)
    .register()

mods.bloodarsenal.sanguine_infusion.recipeBuilder()
    .infuse(item('minecraft:emerald'))
    .input(item('minecraft:clay') * 64, item('minecraft:clay') * 64, item('minecraft:clay') * 64, item('minecraft:clay') * 64, item('minecraft:clay') * 64, item('minecraft:clay') * 64, item('minecraft:clay') * 64, item('minecraft:clay') * 64)
    .output(item('minecraft:diamond') * 64)
    .cost(5000)
    .register()

mods.bloodarsenal.sanguine_infusion.recipeBuilder()
    .infuse(item('minecraft:gold_ingot'))
    .input(item('minecraft:clay'), item('minecraft:diamond'))
    .output(item('minecraft:diamond'))
    .register()

mods.bloodarsenal.sanguine_infusion.recipeBuilder()
    .input(item('minecraft:gold_ingot') * 2, item('minecraft:gold_ingot') * 2, item('minecraft:gold_ingot') * 2, item('minecraft:gold_ingot') * 2, item('minecraft:gold_ingot') * 2, item('minecraft:gold_ingot') * 2, item('minecraft:gold_ingot') * 2, item('minecraft:gold_ingot') * 2)
    .modifier('xperienced')
    .levelMultiplier(3)
    .cost(3000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.bloodarsenal.sanguine_infusion.remove(RecipeSanguineInfusion)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.bloodarsenal.sanguine_infusion.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.bloodarsenal.sanguine_infusion.removeByOutput(IIngredient)
    ```

- Add the given class to the blacklist:

    ```groovy
    mods.bloodarsenal.sanguine_infusion.removeBlacklist(Class)
    ```

- Removes all recipes with the given modifier key:

    ```groovy
    mods.bloodarsenal.sanguine_infusion.removeByModifierKey(String)
    ```

- Removes all registered recipes:

    ```groovy
    mods.bloodarsenal.sanguine_infusion.removeAll()
    ```

- Removes all entries from the blacklist:

    ```groovy
    mods.bloodarsenal.sanguine_infusion.removeAllBlacklist()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.bloodarsenal.sanguine_infusion.removeByInput(item('minecraft:feather'))
mods.bloodarsenal.sanguine_infusion.removeByInput(item('bloodmagic:bound_axe'))
mods.bloodarsenal.sanguine_infusion.removeByOutput(item('bloodarsenal:stasis_pickaxe'))
mods.bloodarsenal.sanguine_infusion.removeBlacklist(WayofTime.bloodmagic.iface.ISigil.class)
mods.bloodarsenal.sanguine_infusion.removeByModifierKey('beneficial_potion')
mods.bloodarsenal.sanguine_infusion.removeAll()
mods.bloodarsenal.sanguine_infusion.removeAllBlacklist()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.bloodarsenal.sanguine_infusion.streamRecipes()
    ```
