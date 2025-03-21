
# Classes


While all Groovy files are technically class files,
this refers specifically to files interacting with the [`runConfig.json`](./run_config.md#classes) classes section.


## Class Declaration


::: info Bug {id="bug"}

Starting from version `1.0.0` and getting fixed in version `1.1.0`
there was a bug which caused class files require a package declaration
in the form of `package classes` at the top of the script to be functional.

:::

Classes must be declared in the locations specified in the [`runConfig.json`](./run_config.md#classes) by the classes element.


## Importing


You can import these classes the same way you would any package from Java.
The default package classes are located in is `classes`, so you would run `import classes.DemoClass`


## Example

:::: info Basic Example {id="example"}

With a named `DemoClass.groovy` that is registered by the `runConfig.json` to the `classes` element,
you can access that class from any script file or another class.

::: code-group

```groovy [classes/DemoClass.groovy]
class DemoClass {
    final static def iron = item 'minecraft:iron_ingot'
    final static def gold = item 'minecraft:gold_ingot'
}
```

```json [runConfig.json]
"classes": [
  "classes/" // targets either the file or a folder that the file is nested within
]
```

```groovy [postInit/CheckIron.groovy]
import classes.DemoClass

log.info(DemoClass.iron in ore('ingotIron'))
```

:::

::::
