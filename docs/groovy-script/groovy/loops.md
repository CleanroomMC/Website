
# Loops

Loops are useful if you want to do the operation multiple times or if you want to do an operation for each element in a list.

## While loop

A simple while loop looks like this:

```groovy:no-line-numbers
while (condition) {
    operation
}
```

The condition is a boolean. As long as that condition evaluates to true, the operation will be executed.
::: info Example {id="example"}
This will print `0, 1, 2, 3, 4, 5, 6, 7, 8, 9`.

```groovy:no-line-numbers
int i = 0;
while (i < 10) {
    print("${i++}, ")
}
```

There is also a `do while` loop which ignores the condition on its first run.

```groovy:no-line-numbers
do {
    operation
} while (condition)
```

:::

## For loop

For loops are similar to while loops.

```groovy:no-line-numbers
for(init; condition; incrementor) {
    operation
}
```

`init` is called before the loop. `condition` is checked before each run and `incrementor` is called after each run.

::: info Example {id="example"}

This will print `0, 1, 2, 3, 4, 5, 6, 7, 8, 9`.
```groovy:no-line-numbers
for(int i = 0; i < 10; i++) {
    print("${i++}, ")
}
```

:::

## Enhanced for loop

Those are very useful for lists and maps.
This will print `Hello world!`

```groovy:no-line-numbers
def list = ['He', 'llo', ' w', 'or', 'ld!']
for(part in list) {
    print(part)
}
```

`part` creates a new variable on each run for the current element in the list `lists`.

For maps, it looks like this

```groovy
def elements = [
        'Au': 'Gold',
        'Ag': 'Silver',
        'Pb': 'Lead',
        'H' : 'Hydrogen'
]
// prints al elements
for (entry in elements) {
    println("${entry.key}: ${entry.value}")
}
```

## Control flow in loops

`break` can be used at any time inside a loop to abort the current and all following runs.
`continue` will only abort the current run and _continues_ with the next run (if the condition is still true)


## Count

There are multiple different strategies to iterate through a loop a specific number of times.

::: code-group


```groovy:no-line-numbers [while]
def x = 0
while (x < 10) {
    log.info x++
}
```

```groovy:no-line-numbers [do-while]
def x = 0
do {
    log.info x++ // this would execute at least once, even if x was greater than 10
} while (x < 10)
```

```groovy:no-line-numbers [for]
for (def x = 0; x < 10; x++) {
    log.info x
}
```

```groovy:no-line-numbers [enhanced list]
for (def x in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
    log.info x
}
for (def x : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) { // "in" and ":" are the same here
    log.info x
}
```

```groovy:no-line-numbers [each list]
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].each {
    log.info x
}
```

```groovy:no-line-numbers [for in range]
for (def x : 0..<10) { // creates a range
    log.info x
}
```

```groovy:no-line-numbers [each range]
(0..<10).each {
    log.info x
}
```

:::
