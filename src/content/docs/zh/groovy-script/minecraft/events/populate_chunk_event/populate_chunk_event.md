---
title: Populate Chunk Event
---

To use this event use the following import:
```groovy
import net.minecraftforge.event.terraingen.PopulateChunkEvent
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[ChunkGeneratorEvent](/zh/groovy-script/minecraft/events/chunk_generator_event/chunk_generator_event/)

## Methods
```groovy
boolean isHasVillageGenerated()
```

```groovy
net.minecraft.world.World getWorld()
```

```groovy
int getChunkZ()
```

```groovy
int getChunkX()
```

```groovy
java.util.Random getRand()
```

# Pre

To use this event use the following import:
```groovy
import net.minecraftforge.event.terraingen.PopulateChunkEvent.Pre
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[PopulateChunkEvent](/zh/groovy-script/minecraft/events/populate_chunk_event/populate_chunk_event/), [ChunkGeneratorEvent](/zh/groovy-script/minecraft/events/chunk_generator_event/chunk_generator_event/)

## Methods
# Post

To use this event use the following import:
```groovy
import net.minecraftforge.event.terraingen.PopulateChunkEvent.Post
```

## Sub-Classes
This event extends the following events and can use all their methods and fields: <br>
[PopulateChunkEvent](/zh/groovy-script/minecraft/events/populate_chunk_event/populate_chunk_event/), [ChunkGeneratorEvent](/zh/groovy-script/minecraft/events/chunk_generator_event/chunk_generator_event/)

## Methods
