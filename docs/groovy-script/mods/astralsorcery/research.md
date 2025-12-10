---
title: "Research Pages"
titleTemplate: "Astral Sorcery | CleanroomMC"
description: "Add custom Research Pages to the Astral Sorcery Book."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/astralsorcery/Research.java"
---

# Research Pages (Astral Sorcery)

## Description

Add custom Research Pages to the Astral Sorcery Book.

## Identifier

The identifier `mods.astralsorcery.research` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {3}
mods.astral.research
mods.astral.Research
mods.astralsorcery.research/* Used as page default */ // [!code focus]
mods.astralsorcery.Research
```

::::::::::

## Adding Entries

- Adds a new node to the given category in the format `category`, `node`:

    ```groovy:no-line-numbers
    mods.astralsorcery.research.addNode(ResearchProgression, ResearchNode)
    ```

- Moves the node with the given name to the x and y co-ords specified in the format `name`, `x`, `z`:

    ```groovy:no-line-numbers
    mods.astralsorcery.research.moveNode(String, int, int)
    ```

- Adds a connection between two nodes:

    ```groovy:no-line-numbers
    mods.astralsorcery.research.connectNodes(String, String)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.astralsorcery.research.moveNode('SOOTYMARBLE', 5, 6)
mods.astralsorcery.research.connectNodes('MY_TEST_RESEARCH2', 'ENHANCED_COLLECTOR')
```

::::::::::

### Recipe Builder

Just like other recipe types, the Research Pages also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Research Builder {open id="abstract"}

---

- Create a builder to create research pages.

    ```groovy:no-line-numbers
    mods.astralsorcery.research.researchBuilder()
    ```

---

- `String`. Sets the unlocalized name of the node. Requires not null.

    ```groovy:no-line-numbers
    name(String)
    ```

- `ItemStack`. Sets the itemstack representing the node in the category. Requires not null.

    ```groovy:no-line-numbers
    icon(ItemStack)
    ```

- `List<IJournalPage>`. Sets the pages visible within the node.

    ```groovy:no-line-numbers
    page(IJournalPage)
    ```

- `ResearchProgression`. Sets the page the node is located on. Requires not null.

    ```groovy:no-line-numbers
    radiance()
    discovery()
    attunement()
    brilliance()
    exploration()
    constellation()
    ```

- `Point`. Sets the location of the node. Requires not null.

    ```groovy:no-line-numbers
    point(int, int)
    ```

- `List<ResearchNode>`. Sets what other nodes this node is connected to.

    ```groovy:no-line-numbers
    connectionFrom(String)
    connectionFrom(ResearchNode)
    ```

---

- First validates the builder, outputting errors to the log file if the validation failed, then registers the builder.

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.astralsorcery.research.researchBuilder()
    .name('MY_TEST_RESEARCH')
    .point(5,5)
    .icon(item('minecraft:pumpkin'))
    .discovery()
    .page(mods.astralsorcery.research.pageBuilder().textPage('GROOVYSCRIPT.RESEARCH.PAGE.TEST'))
    .page(mods.astralsorcery.research.pageBuilder().emptyPage())
    .connectionFrom('ALTAR1')
    .register()

mods.astralsorcery.research.researchBuilder()
    .name('MY_TEST_RESEARCH2')
    .point(5,5)
    .icon(item('minecraft:pumpkin'))
    .constellation()
    .page(mods.astralsorcery.research.pageBuilder().textPage('GROOVYSCRIPT.RESEARCH.PAGE.TEST2'))
    .page(mods.astralsorcery.research.pageBuilder().constellationRecipePage(item('minecraft:pumpkin')))
    .register()
```

:::::::::

::::::::::

## Removing Entries

- Removes the node with the given name:

    ```groovy:no-line-numbers
    mods.astralsorcery.research.removeNode(String)
    ```

- Removes a connection between two nodes:

    ```groovy:no-line-numbers
    mods.astralsorcery.research.disconnectNodes(String, String)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.astralsorcery.research.removeNode('CPAPER')
mods.astralsorcery.research.disconnectNodes('MY_TEST_RESEARCH', 'ALTAR1')
```

::::::::::

## Getting the value of entries

- Returns the node with the given name:

    ```groovy:no-line-numbers
    mods.astralsorcery.research.getNode(String)
    ```
