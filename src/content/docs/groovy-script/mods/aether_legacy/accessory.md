---
title: Accessory (Aether Legacy)
description: The Aether Accessory system.
sidebar:
  label: Accessory
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/aetherlegacy/Accessory.java
---

## Description

The Aether Accessory system.

## Identifier

The identifier `mods.aether_legacy.accessory` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.aether.accessory
mods.aether.Accessory
mods.aether_legacy.accessory/* Used as page default */
mods.aether_legacy.Accessory
```

</details>

## Adding Recipes

- Adds the recipe:

    ```groovy
    mods.aether_legacy.accessory.add(AetherAccessory)
    ```

- Adds an Accessory in the format `item`, `type`, where type is one of the following: "Ring", "Pendant", "Cape", "Shield", "Glove", or "Misc":

    ```groovy
    mods.aether_legacy.accessory.add(ItemStack, String)
    ```

### Recipe Builder

Just like other recipe types, the Accessory also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.aether_legacy.accessory.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `AccessoryType`. Sets the type of accessory the item is, which controls what slot it can go into.

    ```groovy
    accessoryType(String)
    accessoryType(AccessoryType)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.gildedgames.the_aether.api.accessories.AetherAccessory`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.aether_legacy.accessory.recipeBuilder()
    .input(item('minecraft:shield'))
    .accessoryType('shield')
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the recipe:

    ```groovy
    mods.aether_legacy.accessory.remove(AetherAccessory)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy
    mods.aether_legacy.accessory.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy
    mods.aether_legacy.accessory.remove(ResourceLocation)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.aether_legacy.accessory.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.aether_legacy.accessory.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.aether_legacy.accessory.removeByInput(item('aether_legacy:iron_pendant'))
mods.aether_legacy.accessory.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.aether_legacy.accessory.streamRecipes()
    ```
