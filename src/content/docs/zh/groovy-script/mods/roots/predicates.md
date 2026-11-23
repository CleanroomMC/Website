---
title: Predicates (Roots 3)
description: Predicates are used in Transmution and RunicShearBlock. They either match all blockstates of a block, or all blockstates that have the given properties that match the input blockstate.
sidebar:
  label: Predicates
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/roots/Predicates.java
---

## Description

Predicates are used in Transmution and RunicShearBlock. They either match all blockstates of a block, or all blockstates that have the given properties that match the input blockstate.

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.roots.predicates/* Used as page default */
mods.roots.Predicates
```

## Adding Entries

### Recipe Builder

Just like other recipe types, the Predicates also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.roots.predicates.stateBuilder()</summary>

- `boolean`. Sets if the predicate checks the block above for validation. Requires that only at most one of either `above` or `below` may be true. (Default `false`).

    ```groovy
    above()
    ```

- `boolean`. Sets if the predicate checks the block below for validation. Requires that only at most one of either `above` or `below` may be true. (Default `false`).

    ```groovy
    below()
    ```

- `IBlockState`. Sets the IBlockState compared against. Requires not null.

    ```groovy
    block(Block)
    blockstate(IBlockState)
    ```

- `Collection<String>`. Sets what properties of the blockstate are checked, where any properties not checked are. Requires that each property must be a valid property of the provided `blockstate`.

    ```groovy
    properties(String...)
    properties(Collection<String>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `epicsquid.roots.recipe.transmutation.MatchingStates`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.roots.predicates.stateBuilder()
    .blockstate(blockstate('minecraft:red_flower'))
    .register()

mods.roots.predicates.stateBuilder()
    .block(block('minecraft:red_flower'))
    .register()

mods.roots.predicates.stateBuilder()
    .blockstate(blockstate('minecraft:red_flower:type=poppy'))
    .properties('type')
    .register()

mods.roots.predicates.stateBuilder()
    .blockstate(blockstate('minecraft:log:axis=z:variant=oak'))
    .properties('axis')
    .above()
    .register()

mods.roots.predicates.stateBuilder()
    .blockstate(blockstate('minecraft:log'))
    .below()
    .register()
```

</details>

</details>
