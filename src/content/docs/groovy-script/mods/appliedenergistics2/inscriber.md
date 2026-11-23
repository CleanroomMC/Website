---
title: Inscriber (Applied Energistics 2)
description: Converts an item into another item, requiring either one or two additional items as either catalysts or ingredients.
sidebar:
  label: Inscriber
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/appliedenergistics2/Inscriber.java
---

## Description

Converts an item into another item, requiring either one or two additional items as either catalysts or ingredients.

## Identifier

The identifier `mods.appliedenergistics2.inscriber` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.ae2.inscriber
mods.ae2.Inscriber
mods.appliedenergistics2.inscriber/* Used as page default */
mods.appliedenergistics2.Inscriber
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Inscriber also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.appliedenergistics2.inscriber.recipeBuilder()
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

- `ItemStack`. Sets the top item of the inscriber recipe. Requires either top or bottom to be non-empty. (Default `ItemStack.EMPTY`).

    ```groovy
    top(ItemStack)
    ```

- `InscriberProcessType`. Sets the type of recipe, determining if the top/bottom items function as catalysts. Requires not null. (Default `InscriberProcessType.PRESS`).

    ```groovy
    type(String)
    type(InscriberProcessType)
    press()
    inscribe()
    ```

- `ItemStack`. Sets the bottom item of the inscriber recipe. Requires either top or bottom to be non-empty. (Default `ItemStack.EMPTY`).

    ```groovy
    bottom(ItemStack)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `appeng.api.features.IInscriberRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.appliedenergistics2.inscriber.recipeBuilder()
    .input(ore('blockGlass'))
    .output(item('minecraft:diamond'))
    .top(item('minecraft:diamond'))
    .bottom(item('minecraft:diamond'))
    .inscribe()
    .register()

mods.appliedenergistics2.inscriber.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond'))
    .top(item('minecraft:diamond'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy
    mods.appliedenergistics2.inscriber.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.appliedenergistics2.inscriber.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.appliedenergistics2.inscriber.removeByOutput(item('appliedenergistics2:material:59'))
mods.appliedenergistics2.inscriber.removeAll()
```

</details>
