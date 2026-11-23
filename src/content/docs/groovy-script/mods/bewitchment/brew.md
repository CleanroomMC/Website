---
title: Witches' Cauldron Brew (Bewitchment)
description: After throwing a `bewitchment:mandrake_root` in the Witches' Cauldron while Magic Power is provided, all items thrown in will add their potion effects when extracted via a `minecraft:glass_bottle`. Each fill of the Cauldron can create 3 bottles. An ingredient can also refund an itemstack.
sidebar:
  label: Witches' Cauldron Brew
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bewitchment/Brew.java
---

## Description

After throwing a `bewitchment:mandrake_root` in the Witches' Cauldron while Magic Power is provided, all items thrown in will add their potion effects when extracted via a `minecraft:glass_bottle`. Each fill of the Cauldron can create 3 bottles. An ingredient can also refund an itemstack.

<details class="cr-block cr-info" open>
<summary>Info</summary>

In addition to any potion effects granted, if the items included in the potion contain specific items the output potion will have additional effects - `bewitchment:ravens_feather` will cause the potion to not create particles, `minecraft:gunpowder` will cause the potion to be a splash potion, `bewitchment:owlets_wing` will cause the potion to be a lingering potion, `minecraft:glowstone` will increase the potency up to a max of 2, and `minecraft:redstone` will increase the duration up to a max of 3.

</details>

<details class="cr-block cr-info" open>
<summary>Info</summary>

Bewitchment has a pair of events that are fired - `WitchesCauldronEvent.CreatePotionEvent` and `WitchesCauldronEvent.PotionCreatedEvent`. Both can be cancelled. The first allows modifying the player creating the potions, the maximum potency of the potions to a max of 3, the base level of potency from 1 to 2, and how many bottles can be made from the Cauldron. The latter allows modifying the player creating the potions, the amount of bottles made, and the ItemStack created. This event is used when the player is wearing Alchemist equipment or when pledged to the demon Leonard.

</details>

<details class="cr-block cr-info" open>
<summary>Info</summary>

Magic Power is consumed at a rate of `16 * {itemCount - 1}` every second and each time an item is added to the Cauldron.

</details>

## Identifier

The identifier `mods.bewitchment.brew` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.bewitchment.brew/* Used as page default */
mods.bewitchment.Brew
```

</details>

## Adding Recipes

- Adds the recipe:

    ```groovy
    mods.bewitchment.brew.add(Brew)
    ```

### Recipe Builder

Just like other recipe types, the Witches' Cauldron Brew also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.bewitchment.brew.recipeBuilder()
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

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `PotionEffect`. Sets the potion effect the brew provides. Requires not null.

    ```groovy
    effect(PotionEffect)
    ```

- `Predicate<ItemStack>`. Sets the check for if the output itemstack is granted.

    ```groovy
    outputCheck(IIngredient)
    outputCheck(Predicate<ItemStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.bewitchment.api.registry.Brew`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.bewitchment.brew.recipeBuilder()
    .input(ore('netherStar'))
    .outputCheck(item('minecraft:nether_star'))
    .effect(new PotionEffect(potion('minecraft:strength'), 1800, 3))
    .output(item('bewitchment:catechu_brown'))
    .register()

mods.bewitchment.brew.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .effect(new PotionEffect(potion('minecraft:instant_health'), 1, 3))
    .output(item('minecraft:clay'))
    .register()

mods.bewitchment.brew.recipeBuilder()
    .input(item('minecraft:deadbush'))
    .effect(new PotionEffect(potion('minecraft:resistance'), 1800, 3))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the recipe:

    ```groovy
    mods.bewitchment.brew.remove(Brew)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy
    mods.bewitchment.brew.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy
    mods.bewitchment.brew.remove(ResourceLocation)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.bewitchment.brew.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.bewitchment.brew.removeByOutput(IIngredient)
    ```

- Removes all recipes providing the given potion effect:

    ```groovy
    mods.bewitchment.brew.removeByPotion(Potion)
    ```

- Removes all registered recipes:

    ```groovy
    mods.bewitchment.brew.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.bewitchment.brew.removeByInput(item('bewitchment:dragons_blood_resin'))
mods.bewitchment.brew.removeByOutput(item('minecraft:bowl'))
mods.bewitchment.brew.removeByPotion(potion('minecraft:instant_health'))
mods.bewitchment.brew.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.bewitchment.brew.streamRecipes()
    ```
