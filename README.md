# Screeps Shard 3 CPU Dashboard
A graphical dashboard for reviewing CPU in the game Screeps for dedicated Shard 3 players

![alt-taext](https://user-images.githubusercontent.com/119445189/213865229-6d9569a3-ad78-4352-ad37-62180c3de794.png)

## How to add:

### Step 1:

Before your main loop, add:
```
global.CPU = [];
require('module.chartCPU');
```

### Step 2:

At the very end of your main loop, add:
```
CPU.push(Game.cpu.getUsed());
if(CPU.length>500) {
  CPU.shift();
}
```

### Step 3:

Copy the module.chartCPU.js file into your code

## How to run:

Within console, simply type:

```
chartCPU()
```

Note: the chart will only show for 1 tick - you should be ready to use screen-snip (windows key + shift  + s)
