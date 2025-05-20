---
title: "Categories"
titleTemplate: "Just Enough Items | CleanroomMC"
description: "Modify the Categories visible in JEI, each of which contain recipes and are associated with specific blocks, typically machines. Can also set the order of Categories."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/jei/Category.java"
---

# Categories (Just Enough Items)

## Description

Modify the Categories visible in JEI, each of which contain recipes and are associated with specific blocks, typically machines. Can also set the order of Categories.

:::::::::: details Note {open id="note"}
Hidden Categories will still take up load time, and recipes contained within can still be processed. This only prevents seeing Categories.
::::::::::

:::::::::: details Tip {open id="tip"}
Use the command `/gs jeiCategories` to log the UIDs of all JEI Categories to the `groovy.log` file!
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.hei.category
mods.hei.Category
mods.jei.category/* Used as page default */ // [!code focus]
mods.jei.Category
```


## Editing Values

- Sets the order of categories in JEI. Categories not included in the list will be placed at the end according to their normal order:

    ```groovy:no-line-numbers
    mods.jei.category.setOrder(List<String>)
    ```

- Sets the order of categories in JEI. Categories not included in the list will be placed at the end according to their normal order:

    ```groovy:no-line-numbers
    mods.jei.category.setOrder(String...)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.jei.category.setOrder('minecraft.crafting', 'jei.information', 'minecraft.smelting', 'groovyscript:burning', 'groovyscript:explosion', 'groovyscript:fluid_recipe', 'groovyscript:piston_push', 'minecraft.anvil')
```

::::::::::

## Adding Entries

### Recipe Builder

Just like other recipe types, the Categories also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Category Builder {open id="abstract"}

---

- Create a builder for custom JEI categories.

    ```groovy:no-line-numbers
    mods.jei.category.categoryBuilder()
    ```

---

- `String`. Sets the ID of the Category, which must be unique among all other Categories. Requires not empty.

    ```groovy:no-line-numbers
    id(String)
    ```

- `List<IRecipeWrapper>`. Sets the `IRecipeWrapper`s used by the Category to generate entries.

    ```groovy:no-line-numbers
    wrapper(IRecipeWrapper)
    wrapper(IRecipeWrapper...)
    wrapper(Collection<? extends IRecipeWrapper>)
    ```

- `List<Object>`. Sets the catalyst ingredients of the Category, which must belong to a class that has ingredient handling in JEI.

    ```groovy:no-line-numbers
    catalyst(Object)
    catalyst(Object...)
    catalyst(Collection<Object>)
    ```

- `Function<IGuiHelper, ? extends IRecipeCategory<? extends IRecipeWrapper>>`. Sets the function used to generate the category. Must be a Function accepting a single input parameter `IGuiHelper` and creating the class, which itself must extend `IRecipeCategory`. Requires not null.

    ```groovy:no-line-numbers
    category(Function<IGuiHelper, ? extends IRecipeCategory<? extends IRecipeWrapper>>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.cleanroommc.groovyscript.compat.mods.jei.Category$CustomCategory`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.jei.category.categoryBuilder()
    .id(classes.GenericRecipeCategory.UID)/* Note that `classes.GenericRecipeCategory` must be defined elsewhere, and this example presumes certain fields and methods exist. */
    .category(guiHelper -> new classes.GenericRecipeCategory(guiHelper))
    .catalyst(item('minecraft:clay'))
    .wrapper(classes.GenericRecipeCategory.getRecipeWrappers())
    .register()
```


:::::::::

::::::::::

## Removing Entries

- Adds a new Category to JEI in the format `id`, `category`, `catalsyts`, `wrappers`:

    ```groovy:no-line-numbers
    mods.jei.category.add(Category.CustomCategory)
    ```

- Adds a new Category to JEI in the format `id`, `category`, `catalsyts`, `wrappers`:

    ```groovy:no-line-numbers
    mods.jei.category.add(String, Function<IGuiHelper, ? extends IRecipeCategory<? extends IRecipeWrapper>>, List<?>, List<? extends IRecipeWrapper>)
    ```

- Hides the given category from JEI:

    ```groovy:no-line-numbers
    mods.jei.category.hideCategory(String)
    ```

- Hides the given category from JEI:

    ```groovy:no-line-numbers
    mods.jei.category.remove(String)
    ```

- Hides all categories from JEI:

    ```groovy:no-line-numbers
    mods.jei.category.hideAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.jei.category.hideCategory('minecraft.fuel')
mods.jei.category.hideAll()
```

::::::::::
