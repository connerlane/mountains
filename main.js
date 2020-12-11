const mountains = [];
let currentMountain = undefined;
shouldDrawBehind = true;

document.addEventListener('mousedown', (e) => {
    createNewMountain(e.offsetX, e.offsetY);
});
document.addEventListener('touchdown', (e) => {
    createNewMountain(e.offsetX, e.offsetY);
});
document.addEventListener('mouseup', (e) => {
    completeCurrentMountain();
});
document.addEventListener('touchup', (e) => {
    completeCurrentMountain();
});
document.addEventListener('mousemove', (e) => {
    updateCurrentMountain(e.offsetX, e.offsetY);
});
document.addEventListener('touchmove', (e) => {
    updateCurrentMountain(e.offsetX, e.offsetY);
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Space") {
        e.preventDefault();
        shouldDrawBehind = !shouldDrawBehind; // toggle
        console.log(`Draw Behind = ${shouldDrawBehind}`);
    }   
});

/** Main loop */ 
const update = function () {
    // wipe the screen
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // draws the mountains in the order they were created (newer on top)
    for (const mountain of mountains) {
        mountain.draw(ctx);
    }
    requestAnimationFrame(update);
};

const createNewMountain = function (x, y) {
    if (currentMountain !== undefined) {
        return; // exit early
    }
    currentMountain = new Mountain(x, y);
    if (shouldDrawBehind) {
        mountains.splice(0, 0, currentMountain);
    }
    else {
        mountains.push(currentMountain);
    }
}

const completeCurrentMountain = function () {
    if (currentMountain === undefined) {
        return; // exit early
    }
    currentMountain.complete();
    currentMountain = undefined;
}

const updateCurrentMountain = function (x, y) {
    if (currentMountain === undefined) {
        return; // exit early
    }
    currentMountain.x = x;
    currentMountain.y = y;
}

update(); // kick off the game loop (above)