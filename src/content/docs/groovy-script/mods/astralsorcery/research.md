---
title: Research Pages (Astral Sorcery)
description: Add custom Research Pages to the Astral Sorcery Book.
sidebar:
  label: Research Pages
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/astralsorcery/Research.java
---

## Description

Add custom Research Pages to the Astral Sorcery Book.

## Identifier

The identifier `mods.astralsorcery.research` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.astral.research
mods.astral.Research
mods.astralsorcery.research/* Used as page default */
mods.astralsorcery.Research
```

</details>

## Adding Entries

- Adds a new node to the given category in the format `category`, `node`:

    ```groovy
    mods.astralsorcery.research.addNode(ResearchProgression, ResearchNode)
    ```

- Moves the node with the given name to the x and y co-ords specified in the format `name`, `x`, `z`:

    ```groovy
    mods.astralsorcery.research.moveNode(String, int, int)
    ```

- Adds a connection between two nodes:

    ```groovy
    mods.astralsorcery.research.connectNodes(String, String)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.astralsorcery.research.moveNode('SOOTYMARBLE', 5, 6)
mods.astralsorcery.research.connectNodes('MY_TEST_RESEARCH2', 'ENHANCED_COLLECTOR')
```

</details>

### Recipe Builder

Just like other recipe types, the Research Pages also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Research Builder</summary>

---

- Create a builder to create research pages.

    ```groovy
    mods.astralsorcery.research.researchBuilder()
    ```

---

- `String`. Sets the unlocalized name of the node. Requires not null.

    ```groovy
    name(String)
    ```

- `ItemStack`. Sets the itemstack representing the node in the category. Requires not null.

    ```groovy
    icon(ItemStack)
    ```

- `List<IJournalPage>`. Sets the pages visible within the node.

    ```groovy
    page(IJournalPage)
    ```

- `ResearchProgression`. Sets the page the node is located on. Requires not null.

    ```groovy
    radiance()
    discovery()
    attunement()
    brilliance()
    exploration()
    constellation()
    ```

- `Point`. Sets the location of the node. Requires not null.

    ```groovy
    point(int, int)
    ```

- `List<ResearchNode>`. Sets what other nodes this node is connected to.

    ```groovy
    connectionFrom(String)
    connectionFrom(ResearchNode)
    ```

---

- First validates the builder, outputting errors to the log file if the validation failed, then registers the builder.

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
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

</details>

</details>

## Removing Entries

- Removes the node with the given name:

    ```groovy
    mods.astralsorcery.research.removeNode(String)
    ```

- Removes a connection between two nodes:

    ```groovy
    mods.astralsorcery.research.disconnectNodes(String, String)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.astralsorcery.research.removeNode('CPAPER')
mods.astralsorcery.research.disconnectNodes('MY_TEST_RESEARCH', 'ALTAR1')
```

</details>

## Getting the value of entries

- Returns the node with the given name:

    ```groovy
    mods.astralsorcery.research.getNode(String)
    ```
