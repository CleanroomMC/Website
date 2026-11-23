---
title: Lexicon Knowledge (Botania)
description: Creates a new type of knowledge that Lexica Botania entries may be gated with. Can only be created.
sidebar:
  label: Lexicon Knowledge
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/botania/Knowledge.java
---

## Description

Creates a new type of knowledge that Lexica Botania entries may be gated with. Can only be created.

## Identifier

The identifier `mods.botania.knowledge` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.botania.knowledge/* Used as page default */
mods.botania.Knowledge
```

</details>

## Adding Entries

- Adds entries in the format `id`, `formatting`:

    ```groovy
    mods.botania.knowledge.add(String, TextFormatting)
    ```

- Adds entries in the format `id`, `formatting`, `autoUnlock`:

    ```groovy
    mods.botania.knowledge.add(String, TextFormatting, boolean)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.botania.knowledge.add('newType', TextFormatting.RED, true)
```

</details>

## Getting the value of entries

- Iterates through every entry in the registry:

    ```groovy
    mods.botania.knowledge.streamKnowledgeTypes()
    ```
