---
title: Strings
---

Strings are a sequence of characters.

There are multiple ways to define a string and each does something different.

:::caution[Warning]

Strings in Java function differently that in Groovy!
Read [here](/groovy-script/groovy/differences_from_java/#strings) to see a direct comparison.

:::

## Single-Quoted String

The most simple way is by using `''`.
This creates a `String`, and nothing else.
In most cases this is what you want.

## Double-Quoted String

A more advanced way is by using `""`.
This creates a `GString` instead of a `String`, which allows you to use variables inside the literal via the dollar sign `$`.

You can read more about `GString`s on the [official documentation](https://docs.groovy-lang.org/latest/html/documentation/core-syntax.html#_double_quoted_string)

:::tip[Tip]

Because `GString` can have unexpected results when containing a dollar sign `$`,
you should use single quotes `''` unless you explicitly desire the features of a `GString`.

:::

## Slashy String

The last way is by using `\\`. This is perfect for regex, because you don't need to escape any `\`.

## Examples

```groovy
def s = 'hello' // String
def s2 = "hello" // can use either '' or ""
assert s == s2 // both strings are equal

def num = 7
def numberOfDays = 'There are ' + num + ' days in a week' // using a variable inside the string with concatenation
def numberOfDays2 = "There are $num days in a week" // using a variable inside the string with $
```
