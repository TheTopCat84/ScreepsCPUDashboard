# Screeps CPU Dashboard
A graphical dashboard for reviewing CPU in the game Screeps

![alt-taext](https://user-images.githubusercontent.com/119445189/213894868-956eb4a0-54da-47cc-889e-2374507f9e76.png)

## How to add:

### Step 1:

Before your main loop, add:
```
global.bucket = [];
global.CPU = [];
require('module.chartCPU');
```

### Step 2:

At the very end of your main loop, add:
```
bucket.push(Game.cpu.bucket)
if(bucket.length > 500) {
    bucket.shift()
}
CPU.push(Game.cpu.getUsed())
if(CPU.length > 500) {
    CPU.shift()
}
```

### Step 3:

Copy the module.chartCPU.js file into your repo/files

## How to run:

Within console, simply type:

```
chartCPU()
```

### Notes

- The chart will only show for 1 tick - you should be ready to use screen-snip (windows key + shift  + s)
- The scale is setup for Shard 3 players but can easily be modified
- The stats being tracked can easily be modified for other things - go nuts!
