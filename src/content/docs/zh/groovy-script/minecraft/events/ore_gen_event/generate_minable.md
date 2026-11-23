---
title: Generate Minable
---

To use this event use the following import:
```groovy
import net.minecraftforge.event.terraingen.OreGenEvent.GenerateMinable
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[OreGenEvent](/zh/groovy-script/minecraft/events/ore_gen_event/ore_gen_event/)

## Methods
```groovy
net.minecraftforge.event.terraingen.OreGenEvent$GenerateMinable$EventType getType()
```

```groovy
boolean hasResult()
```

```groovy
net.minecraft.world.gen.feature.WorldGenerator getGenerator()
```
