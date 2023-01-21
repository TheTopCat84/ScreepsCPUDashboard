global.chartCPU = function() {
    let x = 0,
    xpoints = [],
    maxXValue = CPUManager.length,
    maxYValue = Math.max(...CPUManager);
    
    for (let value of CPUManager) {
    	let y = value / maxYValue,
    	xpoint = 46 * x / maxXValue + 2;
    	xpoints.push([xpoint, 10 - 10*y]);
    	x++;
    }
    
    new RoomVisual().rect(0, 0, 49 * x / maxXValue, 13, {fill: 'black'});

    new RoomVisual().line(2, 10, 45 * x / maxXValue + 5, 10, {color: 'white', lineStyle: 'solid'});
    new RoomVisual().text("0",1, 10);

    new RoomVisual().poly(xpoints, {color: 'white', lineStyle: 'solid'});
    
    new RoomVisual().line(2, 10 - 10*(20/maxYValue), 44 * x / maxXValue + 5, 10 - 10*(20/maxYValue), {color: 'red', lineStyle: 'dashed'});
    new RoomVisual().text("20",1, 10 - 10*(20/maxYValue));

    new RoomVisual().line(2, 10 - 10*(10/maxYValue), 44 * x / maxXValue + 5, 10 - 10*(10/maxYValue), {color: 'red', lineStyle: 'dashed'});
    new RoomVisual().text("10",1, 10 - 10*(10/maxYValue));
    
    new RoomVisual().line(2, 10 - 10*(30/maxYValue), 44 * x / maxXValue + 5, 10 - 10*(30/maxYValue), {color: 'red', lineStyle: 'dashed'});
    new RoomVisual().text("30",1, 10 - 10*(30/maxYValue));
    
    new RoomVisual().line(2, 10 - 10*((_.sum(CPUManager)/CPUManager.length)/maxYValue), 44 * x / maxXValue + 5, 10 - 10*((_.sum(CPUManager)/CPUManager.length)/maxYValue), {color: 'green', lineStyle: 'dashed'});
    new RoomVisual().text("Avg",1, 10 - 10*(_.sum(CPUManager)/CPUManager.length)/maxYValue,{color: 'green'});

    new RoomVisual().text("Avg: " + Math.round(100*(_.sum(CPUManager)/CPUManager.length))/100,20, 12,{color: 'white', strokeWidth: 0.2});
    new RoomVisual().text("Min: " + Math.round(100*_.min(CPUManager))/100,30, 12,{color: 'white', strokeWidth: 0.2});
    new RoomVisual().text("Bucket: " + Game.cpu.bucket, 10, 12,{color: 'white', strokeWidth: 0.2});
    new RoomVisual().text("# ticks: " + CPUManager.length, 40, 12,{color: 'white', strokeWidth: 0.2});
}
