document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("walkCanvas");
  const button25 = document.getElementById("25");
  //   const button75 = document.getElementById("75");
  const ctx = canvas.getContext("2d");
  const gridSize = 50;
  const stepLength = canvas.width / gridSize;

  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function generateWalk(walkLength) {
    let path = [{ x: Math.floor(gridSize / 2), y: Math.floor(gridSize / 2) }];
    const directions = ["up", "down", "left", "right"];

    while (path.length < walkLength) {
      let lastStep = path[path.length - 1];
      let validDirections = directions.filter((dir) => {
        let checkStep = getNextStep(lastStep, dir);
        return isStepValid(checkStep, path);
      });

      if (validDirections.length === 0) {
        // Backtrack if no valid directions
        path.pop(); // Remove the last step
        if (path.length === 0) {
          // Restart if the path is empty
          path.push({
            x: Math.floor(gridSize / 2),
            y: Math.floor(gridSize / 2),
          });
        }
        continue;
      }

      let direction =
        validDirections[Math.floor(Math.random() * validDirections.length)];
      path.push(getNextStep(lastStep, direction));
    }
    return path;
  }

  function getNextStep(step, direction) {
    let nextStep = { ...step };
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
    return nextStep;
  }

  function isStepValid(step, path) {
    return (
      step.x >= 0 &&
      step.x < gridSize &&
      step.y >= 0 &&
      step.y < gridSize &&
      !path.some((p) => p.x === step.x && p.y === step.y)
    );
  }

  function drawWalk(path) {
    path.forEach((step) => {
      ctx.fillStyle = "blue";
      ctx.fillRect(
        step.x * stepLength,
        step.y * stepLength,
        stepLength,
        stepLength
      );
      ctx.strokeStyle = "red"; // Set the stroke color to a different color, e.g., red
      ctx.strokeRect(
        step.x * stepLength,
        step.y * stepLength,
        stepLength,
        stepLength
      );
    });
  }

  let walk = generateWalk(25);
  drawWalk(walk);

  button25.addEventListener("click", function () {
    clearCanvas();
    let walk = generateWalk(25);
    drawWalk(walk);
  });

  //   button75.addEventListener("click", function () {
  //     clearCanvas();
  //     let walk = generateWalk(75);
  //     drawWalk(walk);
  //   });
});
