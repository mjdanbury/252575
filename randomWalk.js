document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("walkCanvas");
  const ctx = canvas.getContext("2d");
  const gridSize = 20;
  const stepLength = canvas.width / gridSize;

  function generateWalk() {
    let path = [{ x: Math.floor(gridSize / 2), y: Math.floor(gridSize / 2) }];
    const directions = ["up", "down", "left", "right"];

    while (path.length < 25) {
      let lastStep = path[path.length - 1];
      let direction = directions[Math.floor(Math.random() * directions.length)];

      let nextStep = { ...lastStep };
      switch (direction) {
        case "up":
          nextStep.y--;
          break;
        case "down":
          nextStep.y++;
          break;
        case "left":
          nextStep.x--;
          break;
        case "right":
          nextStep.x++;
          break;
      }

      if (
        nextStep.x >= 0 &&
        nextStep.x < gridSize &&
        nextStep.y >= 0 &&
        nextStep.y < gridSize &&
        !path.some((step) => step.x === nextStep.x && step.y === nextStep.y)
      ) {
        path.push(nextStep);
      }
    }
    return path;
  }

  function drawWalk(path) {
    ctx.beginPath();
    ctx.moveTo(path[0].x * stepLength, path[0].y * stepLength);

    for (let step of path) {
      ctx.lineTo(step.x * stepLength, step.y * stepLength);
    }

    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  let walk = generateWalk();
  drawWalk(walk);
});
