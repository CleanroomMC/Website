---
title: Description Category (Just Enough Items)
description: Modify the description of the input items, where the description is a unique JEI tab containing text.
sidebar:
  label: Description Category
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/jei/Description.java
---

## Description

Modify the description of the input items, where the description is a unique JEI tab containing text.

## Identifier

The identifier `mods.jei.description` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.hei.description
mods.hei.Description
mods.jei.description/* Used as page default */
mods.jei.Description
```

</details>

## Adding Entries

- Adds the given description to the given ingredients, translating the description lines as needed:

    ```groovy
    mods.jei.description.add(IIngredient, String...)
    ```

- Adds the given description to the given ingredients, translating the description lines as needed:

    ```groovy
    mods.jei.description.add(IIngredient, List<String>)
    ```

- Adds the given description to the given ingredients, translating the description lines as needed:

    ```groovy
    mods.jei.description.add(List<IIngredient>, String...)
    ```

- Adds the given description to the given ingredients, translating the description lines as needed:

    ```groovy
    mods.jei.description.add(List<IIngredient>, List<String>)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.jei.description.add(item('minecraft:gold_ingot'), 'groovyscript.recipe.fluid_recipe')
mods.jei.description.add(item('minecraft:clay'), ['wow', 'this', 'is', 'neat'])
```

</details>

## Removing Entries

- Removes any description from the given ingredients:

    ```groovy
    mods.jei.description.remove(IIngredient...)
    ```

- Removes any description from the given ingredients:

    ```groovy
    mods.jei.description.remove(List<IIngredient>)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.jei.description.remove(item('thaumcraft:triple_meat_treat'))
```

</details>
