---
title: Categories (Just Enough Items)
description: Modify the Categories visible in JEI, each of which contain recipes and are associated with specific blocks, typically machines. Can also set the order of Categories.
sidebar:
  label: Categories
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/jei/Category.java
---

## Description

Modify the Categories visible in JEI, each of which contain recipes and are associated with specific blocks, typically machines. Can also set the order of Categories.

<details class="cr-block cr-note" open>
<summary>Note</summary>

Hidden Categories will still take up load time, and recipes contained within can still be processed. This only prevents seeing Categories.

</details>

<details class="cr-block cr-tip" open>
<summary>Tip</summary>

Use the command `/gs jeiCategories` to log the UIDs of all JEI Categories to the `groovy.log` file!

</details>

## Identifier

The identifier `mods.jei.category` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.hei.category
mods.hei.Category
mods.jei.category/* Used as page default */
mods.jei.Category
```

</details>

## Editing Values

- Sets the order of categories in JEI. Categories not included in the list will be placed at the end according to their normal order:

    ```groovy
    mods.jei.category.setOrder(String...)
    ```

- Sets the order of categories in JEI. Categories not included in the list will be placed at the end according to their normal order:

    ```groovy
    mods.jei.category.setOrder(List<String>)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.jei.category.setOrder('minecraft.crafting', 'jei.information', 'minecraft.smelting', 'groovyscript:burning', 'groovyscript:explosion', 'groovyscript:fluid_recipe', 'groovyscript:piston_push', 'minecraft.anvil')
```

</details>

## Adding Entries

### Recipe Builder

Just like other recipe types, the Categories also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Category Builder</summary>

---

- Create a builder for custom JEI categories.

    ```groovy
    mods.jei.category.categoryBuilder()
    ```

---

- `String`. Sets the ID of the Category, which must be unique among all other Categories. Requires not empty.

    ```groovy
    id(String)
    ```

- `List<IRecipeWrapper>`. Sets the `IRecipeWrapper`s used by the Category to generate entries.

    ```groovy
    wrapper(IRecipeWrapper)
    wrapper(IRecipeWrapper...)
    wrapper(Collection<? extends IRecipeWrapper>)
    ```

- `List<Object>`. Sets the catalyst ingredients of the Category, which must belong to a class that has ingredient handling in JEI.

    ```groovy
    catalyst(Object)
    catalyst(Object...)
    catalyst(Collection<Object>)
    ```

- `Function<IGuiHelper, ? extends IRecipeCategory<? extends IRecipeWrapper>>`. Sets the function used to generate the category. Must be a Function accepting a single input parameter `IGuiHelper` and creating the class, which itself must extend `IRecipeCategory`. Requires not null.

    ```groovy
    category(Function<IGuiHelper, ? extends IRecipeCategory<? extends IRecipeWrapper>>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.cleanroommc.groovyscript.compat.mods.jei.Category$CustomCategory`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.jei.category.categoryBuilder()
    .id(classes.GenericRecipeCategory.UID)/* Note that `classes.GenericRecipeCategory` must be defined elsewhere, and this example presumes certain fields and methods exist. */
    .category(guiHelper -> new classes.GenericRecipeCategory(guiHelper))
    .catalyst(item('minecraft:clay'))
    .wrapper(classes.GenericRecipeCategory.getRecipeWrappers())
    .register()
```

</details>

</details>

## Removing Entries

- Adds a new Category to JEI in the format `id`, `category`, `catalsyts`, `wrappers`:

    ```groovy
    mods.jei.category.add(String, Function<IGuiHelper, ? extends IRecipeCategory<? extends IRecipeWrapper>>, List<?>, List<? extends IRecipeWrapper>)
    ```

- Adds a new Category to JEI in the format `id`, `category`, `catalsyts`, `wrappers`:

    ```groovy
    mods.jei.category.add(Category.CustomCategory)
    ```

- Hides the given category from JEI:

    ```groovy
    mods.jei.category.remove(String)
    ```

- Hides the given category from JEI:

    ```groovy
    mods.jei.category.hideCategory(String)
    ```

- Hides all categories from JEI:

    ```groovy
    mods.jei.category.hideAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.jei.category.hideCategory('minecraft.fuel')
mods.jei.category.hideAll()
```

</details>
