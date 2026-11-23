---
title: Init Biome Gens
---

To use this event use the following import:
```groovy
import net.minecraftforge.event.terraingen.WorldTypeEvent.InitBiomeGens
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[WorldTypeEvent](/zh/groovy-script/minecraft/events/world_type_event/world_type_event/)

## Methods
```groovy
long getSeed()
```

```groovy
void setNewBiomeGens([Lnet.minecraft.world.gen.layer.GenLayer; arg0)
```

```groovy
[Lnet.minecraft.world.gen.layer.GenLayer; getNewBiomeGens()
```

```groovy
[Lnet.minecraft.world.gen.layer.GenLayer; getOriginalBiomeGens()
```
