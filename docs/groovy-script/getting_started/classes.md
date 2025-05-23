
# Classes


All groovy files are classes.
However, if no specific class declaration is used, the file will be parsed as a script file.


## Groovy File Extensions


A Groovy file is a file with the extension `groovy`, `gy`, `gvy`, or `gsh`.

In almost all places on the wiki, only `groovy` will be used.


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
