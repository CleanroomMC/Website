---
order: 1000
---

# Reloading


GroovyScript recipes can be reloaded without having to do a full restart.
Any script file using the `postInit` loader can be reloaded.

::: info Danger {id="danger"}

Some compat may not properly implement reloading, and will not be reloaded properly or may have errors while reloading.

:::

To reload GroovyScript, either:

- Run the [`/gs reload` command](../minecraft/commands/index.md#reload)
- Use the keybind, by default bound to `CTRL+R`


## Command

The [`/gs reload` command](../minecraft/commands/index.md#reload) can also be passed the argument `--clean`.
This will delete the existing text in the [`groovy.log`](./groovy_log.md)


## Class Caching

For performance reasons, script classes are cached.
In some situations, they may not be properly reloaded in-game.
You can delete the cache to force these classes to be reloaded.

- Run the `/gs deleteScriptCache` command and then reload normally


## Add Custom Reloading

For reloading to be added, each compat needs to be explicit handled by GroovyScript.

However, you can add your own custom class and implement reloading for your recipes even if GroovyScript doesn't have support for the given recipes natively.
To do so, first make a new file in `classes` with the class containing an `add`, `remove`, and an `onReload` method.
It should have an instance created inside it for access purposes.

:::: info Example {id="example"}
::: code-group {id="example"}

```groovy [classes/DemoRegistry.groovy]
import example.DemoHolder
import example.DemoRecipe

class DemoRegistry {

    static def instance = new DemoRegistry()

    def scripted = []
    def backup = []

    void onReload() {
        scripted.each { DemoHolder.demoRecipeList.remove(it) }
        scripted.clear()
        backup.each { DemoHolder.demoRecipeList.add(it) }
        backup.clear()
    }

    void add(DemoRecipe recipe) {
        scripted << recipe
        DemoHolder.demoRecipeList.add(recipe)
    }

    void remove(DemoRecipe recipe) {
        backup << recipe
        DemoHolder.demoRecipeList.remove(recipe)
    }
}
```
:::
::::

Then, you can accomplish reloading via one of two ways:
1. Create an event listener that is listening for `GroovyReloadEvent` *in the `init` stage*.
2. Check `isReloading()` *in the `postInit` stage*.

::: code-group

```groovy [init/ReloadHelper.groovy]
import classes.DemoRegistry
import com.cleanroommc.groovyscript.event.GroovyReloadEvent

eventManager.listen(GroovyReloadEvent) {
    DemoRegistry.instance.onReload()
}
```

```groovy [postInit/ReloadHelper.groovy]
import classes.DemoRegistry

if (!isReloading()) return

DemoRegistry.instance.onReload()
```


:::

Finally, any time you would add a recipe to or remove a recipe from `DemoHolder.DemoRecipeList`,
ensure it is manipulated via `DemoRegistry.instance`.
