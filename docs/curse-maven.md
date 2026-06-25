# CurseMaven

Cleanroom's simplified CurseMaven service: a CurseForge wrapper as maven repository for pulling CurseForge mods as dependencies into your mods. Even for mods that disallow distribution to third-parties!

## Repository

Add the repository with an `exclusiveContent` filter so only the `curse.maven` group resolves against it:

::: code-group
```groovy [build.gradle]
exclusiveContent {
    forRepository {
        maven {
            name 'CurseMaven'
            url 'https://curse.cleanroommc.com'
        }
    }
    filter {
        includeGroup 'curse.maven'
    }
}
```
:::

## Coordinate Anatomy

A CurseMaven coordinate is built from four parts (plus an optional source suffix):

<CurseMavenBuilder />

::: tip
Paste a CurseForge link above and the builder fills in everything. The **Project ID** is resolved automatically (it isn't part of the URL), and you can copy it into your gradle buildscript!
:::

## Dependencies

Drop the generated coordinate into your `dependencies` block:

::: code-group
```groovy [build.gradle]
dependencies {
    // Example
    // mouse-tweaks = Label
    // 60089        = Project ID
    // 3359843      = File ID
    // +3359844     = (OPTIONAL) suffix to denote the File ID of a "source jar"
    implementation 'curse.maven:mouse-tweaks-60089:3359843+3359844'
}
```
:::

<script setup>
import CurseMavenBuilder from "../components/internal/CurseMavenBuilder.vue";
</script>
