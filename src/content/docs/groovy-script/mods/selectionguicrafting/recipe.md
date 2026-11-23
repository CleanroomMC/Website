---
title: Crafting Recipe (Selection GUI Crafting)
description: Creates a recipe that is shown in the specified category. Each recipe requires at least an input and output. There can also be an optional input for either hand. The recipe can have its own frame, sounds, particles, progress bar, can specify how the sounds are played, if the recipe can be added to the crafting queue, how the output items are handed to the player, how much durability is consumed if the tool is a damageable item, the crafting time, and how much XP is rewarded. Most of these have a fallback to the category settings.
sidebar:
  label: Crafting Recipe
source_code_link: https://github.com/Ender-Development/selection-gui-crafting-continued/blob/master/src/main/java/io/enderdev/selectionguicrafting/integration/groovyscript/Recipe.java
---

## Description

Creates a recipe that is shown in the specified category. Each recipe requires at least an input and output. There can also be an optional input for either hand. The recipe can have its own frame, sounds, particles, progress bar, can specify how the sounds are played, if the recipe can be added to the crafting queue, how the output items are handed to the player, how much durability is consumed if the tool is a damageable item, the crafting time, and how much XP is rewarded. Most of these have a fallback to the category settings.

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.selectionguicrafting.recipe/* Used as page default */
mods.selectionguicrafting.Recipe
```

## Adding Recipes

- Adds a new recipe:

    ```groovy
    mods.selectionguicrafting.recipe.add(Recipe)
    ```

### Recipe Builder

Just like other recipe types, the Crafting Recipe also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.selectionguicrafting.recipe.recipeBuilder()
    ```

---

- `Integer`. The amount of XP that will be granted to the player when the recipe is crafted. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    xp(int)
    ```

- `Integer`. The time in ticks it takes to craft the recipe. Requires greater than or equal to 0. (Default `20`).

    ```groovy
    time(int)
    ```

- `ResourceLocation`. The path to the frame texture. Overrides the category frame. [Textures that come with the mod](https://github.com/Ender-Development/selection-gui-crafting-continued/tree/master/src/main/resources/assets/selectionguicrafting/textures/gui/frame). (Default `selectionguicrafting:textures/gui/frame/default.png`).

    ```groovy
    frame(String)
    frame(ResourceLocation)
    ```

- `RecipeInput`. The input items that are required to craft the recipe. Input refers to the offhand item. You can add multiple inputs each with a different amount. The `int` value is the damage applied to the item, the `double` value is the chance the item will be damaged / consumed. Requires greater than or equal to 0.

    ```groovy
    input(IIngredient)
    input(RecipeInput)
    input(Collection<?>)
    input(IIngredient...)
    input(RecipeInput...)
    input(IIngredient, int)
    input(IIngredient, double)
    input(IIngredient, double, int)
    ```

- `String`. The skills required to craft the recipe. (Requires: [Reskillable](https://www.curseforge.com/minecraft/mc-mods/reskillable-fork)).

    ```groovy
    skill(String, int)
    ```

- `Sound`. The sounds that will be played when the recipe is crafted. Overrides the category sounds. The first `float` value is the volume, the second `float` value is the pitch of the sound.

    ```groovy
    sound(Sound)
    sound(String)
    sound(SoundEvent)
    sound(ResourceLocation)
    sound(String, float, float)
    sound(SoundEvent, float, float)
    sound(ResourceLocation, float, float)
    ```

- `RecipeOutput`. The output items that will be given to the player. You can add multiple outputs each with a different chance. The `double` value is the chance of the item being dropped. Requires greater than or equal to 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(RecipeOutput)
    output(Collection<?>)
    output(RecipeOutput...)
    output(ItemStack, double)
    ```

- `String`. The commands to execute after crafting the recipe.

    ```groovy
    command(String)
    command(String...)
    ```

- `RecipeInput`. The offhand input that will be used to craft the recipe. The `int` value is the damage applied to the item, the `double` value is the chance the item will be damaged / consumed. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy
    offhand(IIngredient)
    offhand(RecipeInput)
    offhand(IIngredient, int)
    offhand(IIngredient, double)
    offhand(IIngredient, double, int)
    ```

- `String`. The category that the recipe belongs to. Requires not null and the category must exist.

    ```groovy
    category(String)
    ```

- `RecipeInput`. The mainhand input that will be used to craft the recipe. The `int` value is the damage applied to the item, the `double` value is the chance the item will be damaged / consumed. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy
    mainhand(IIngredient)
    mainhand(RecipeInput)
    mainhand(IIngredient, int)
    mainhand(IIngredient, double)
    mainhand(IIngredient, double, int)
    ```

- `Particle`. The particles that will be spawned when the recipe is crafted. Overrides the category particles. The `int` value is the amount of particles, the `float` value is the speed of the particles.

    ```groovy
    particle(String)
    particle(Particle)
    particle(EnumParticleTypes)
    particle(String, int, float)
    particle(EnumParticleTypes, int, float)
    ```

- `String`. The game stages required to craft the recipe. (Requires: [Game Stages](https://www.curseforge.com/minecraft/mc-mods/game-stages)).

    ```groovy
    gamestage(String)
    gamestage(String...)
    ```

- `QueueType`. If the recipe can be queued. Overrides the category queueable. Allowed values are either: `true`, `false` or `YES`, `NO`.

    ```groovy
    queueable(String)
    queueable(boolean)
    queueable(QueueType)
    ```

- `SoundType`. How the sounds will be played. Overrides the category soundType. Allowed values are: `RANDOM` or `COMBINED`.

    ```groovy
    soundType(String)
    soundType(SoundType)
    ```

- `OutputType`. How the output will be handed to the player. Overrides the category outputType. Allowed values are: `DROP` or `INVENTORY`.

    ```groovy
    outputType(String)
    outputType(OutputType)
    ```

- `ResourceLocation`. The advancements required to craft the recipe.

    ```groovy
    advancement(String)
    advancement(String...)
    advancement(ResourceLocation)
    advancement(ResourceLocation...)
    ```

- `ResourceLocation`. The path to the progress bar texture. Overrides the category progressBar. [Textures that come with the mod](https://github.com/Ender-Development/selection-gui-crafting-continued/tree/master/src/main/resources/assets/selectionguicrafting/textures/gui/bar). (Default `selectionguicrafting:textures/gui/progress/default.png`).

    ```groovy
    progressBar(String)
    progressBar(ResourceLocation)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `io.enderdev.selectionguicrafting.registry.recipe.Recipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.selectionguicrafting.recipe.recipeBuilder()
    .category('dummy_category')
    .input(item('minecraft:stone') * 3)
    .output(item('minecraft:cobblestone') * 2, 0.5)
    .time(200)
    .xp(1)
    .sound('minecraft:block.anvil.land', 1.0f, 1.0f)
    .register()

mods.selectionguicrafting.recipe.recipeBuilder()
    .category('blub')
    .input(item('minecraft:diamond'))
    .output(item('minecraft:wheat_seeds') * 5, 0.5)
    .register()

mods.selectionguicrafting.recipe.recipeBuilder()
    .category('dummy_category')
    .input(item('minecraft:stone') * 32)
    .output(item('minecraft:diamond') * 50, 0.5)
    .output(item('minecraft:clay') * 2, 0.1)
    .time(200)
    .xp(10)
    .sound('minecraft:block.anvil.land', 1.0f, 1.0f)
    .register()

mods.selectionguicrafting.recipe.recipeBuilder()
    .category('dead')
    .input(item('minecraft:wheat_seeds') * 3)
    .output(item('minecraft:sand') * 2)
    .time(40)
    .queueable(false)
    .outputType('DROP')
    .xp(100)
    .register()

mods.selectionguicrafting.recipe.recipeBuilder()
    .category('dead')
    .input(item('minecraft:stick') * 3)
    .output(item('minecraft:sand') * 2)
    .frame('selectionguicrafting:textures/gui/frame/iron.png')
    .time(40)
    .queueable(false)
    .command('kill @p')
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe:

    ```groovy
    mods.selectionguicrafting.recipe.remove(Recipe)
    ```

- Remove all recipes in a category:

    ```groovy
    mods.selectionguicrafting.recipe.removeByCategory(String)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.selectionguicrafting.recipe.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.selectionguicrafting.recipe.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.selectionguicrafting.recipe.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.selectionguicrafting.recipe.removeByCategory('dummy_category')
mods.selectionguicrafting.recipe.removeByInput(item('minecraft:cobblestone'))
mods.selectionguicrafting.recipe.removeByOutput(item('minecraft:stone'))
mods.selectionguicrafting.recipe.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.selectionguicrafting.recipe.streamRecipes()
    ```
