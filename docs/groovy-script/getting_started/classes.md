
# Classes


All groovy files are classes.
However, if no specific class declaration is used, the file will be parsed as a script file.


## Groovy File Extensions


A Groovy file is a file with the extension `groovy`, `gy`, `gvy`, or `gsh`.

In almost all places on the wiki, only `groovy` will be used.

Groovy file names must follow the [Java class naming specification](https://docs.oracle.com/javase/specs/jls/se7/html/jls-3.html#jls-3.8),
meaning valid names match the regex pattern of `[a-zA-Z$_][a-zA-Z0-9$_]*`.
To spell it out: a file name must begin with a letter, dollar sign, or underscore,
and every character afterwards is must be either a letter, number, dollar sign, or underscore.

::: warning Invalid Name {id="danger"}

If the file does not have a valid name it will not be loaded!

:::

::: warning Global Object Confusion {id="warning"}

As the file name will create a class with the same name, naming your file with the
same name as a global object such as `item`, `mods`, `eventManager`, or otherwise
may cause unexpected issues due to accessing the class instead of the desired global object!

:::


## Script Files


Script files must be placed in a specific [loader](./run_config.md#loaders) to be run,
and will be executed in that stage.

::: code-group

```groovy [postInit/Example.groovy]
log.info('A normal script file')
```

```json [runConfig.json]
{
  "loaders": {
    "postInit": [
      "postInit/Example.groovy"
    ]
  },
}
```
:::

Behind the scenes, a script file will be converted like so:

::: code-group

```groovy [postInit/Example.groovy]
import groovy.transform.Field

@Field // this annotation makes what would otherwise be a local to become a field
int baseValue = 2

def hello = 'hello, world!' // creates a local variable

log.info(hello)
int power(int n) { baseValue**n }
log.info(power(3))
```

```groovy [Script File]
package postInit

import groovy.transform.Field
// imports still occur before the code

class Example extends groovy.lang.Script {

    @Field
    int baseValue = 2

    int power(int n) { baseValue**n } // if baseValue was not annotated with @Field, an exception will be thrown!

    def run() {
        def hello = 'hello, world!'
        log.info(hello)
        log.info(power(3))
    }
}
```

:::

::: warning Maximum method size {id="danger"}

Java cannot load methods larger than [64kb](https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.11).
Particularly large GroovyScript scripts may pass this - in this situation,
you will need to refactor your scripts in some fashion to avoid this issue.

:::


## Custom Classes

:::: info Basic Example {id="example"}

With a named `DemoClass.groovy` from any other groovy class.

::: code-group

```groovy [classes/DemoClass.groovy]
class DemoClass {
    final static def iron = item 'minecraft:iron_ingot'
    final static def gold = item 'minecraft:gold_ingot'
}
```

```json [runConfig.json]
"loaders": {
  "preInit": [
    "classes/" // targets either the file or a folder that the file is nested within
  ]
}
```

```groovy [postInit/CheckIron.groovy]
import classes.DemoClass

log.info(DemoClass.iron in ore('ingotIron'))
```

:::

::::
