---
title: Aspect Creator (Thaumcraft)
description: Creates a custom Aspect.
sidebar:
  label: Aspect Creator
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thaumcraft/aspect/Aspect.java
---

## Description

Creates a custom Aspect.

## Identifier

The identifier `mods.thaumcraft.aspect` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {5}
mods.tc.aspect
mods.tc.Aspect
mods.thaum.aspect
mods.thaum.Aspect
mods.thaumcraft.aspect/* Used as page default */
mods.thaumcraft.Aspect
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Aspect Creator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Aspect Builder</summary>

---

- Create a builder to create a custom aspect.

    ```groovy
    mods.thaumcraft.aspect.aspectBuilder()
    ```

---

- `String`. Sets the name of the new Aspect. Requires not null and the name must be a unique string.

    ```groovy
    tag(String)
    ```

- `int`. Sets the blend value of the Aspect. (Default `1`).

    ```groovy
    blend(int)
    ```

- `ResourceLocation`. Sets the resource location of the image used to represent the Aspect.

    ```groovy
    image(String)
    image(String, String)
    image(ResourceLocation)
    ```

- `int`. Sets the color formatting code used. (Default `0`).

    ```groovy
    chatColor(int)
    ```

- `AspectList`. Sets the other Aspects that make up this Aspect. Requires greater than or equal to 0 and less than or equal to 2.

    ```groovy
    component(String)
    component(AspectStack)
    component(String, int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `thaumcraft.api.aspects.Aspect`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thaumcraft.aspect.aspectBuilder()
    .tag('clay')
    .chatColor(0xD5D4EC)
    .image(resource('placeholdername:textures/items/clay_2.png'))
    .register()

mods.thaumcraft.aspect.aspectBuilder()
    .tag('snack')
    .chatColor(0xD5D4EC)
    .component(aspect('cognitio'))
    .component('clay')
    .image(resource('placeholdername:textures/items/snack.png'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all registered recipes:

    ```groovy
    mods.thaumcraft.aspect.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thaumcraft.aspect.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thaumcraft.aspect.streamRecipes()
    ```
