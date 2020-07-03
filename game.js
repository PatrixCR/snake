const snake = {
    coords: [[600, 350], [550, 350], [500, 350]],
    direction: 'r'
}
const FPS = 60;

function processInput() {
    document.addEventListener("keydown", event => {
      if (event.key === 'ArrowLeft' && snake.direction !== 'r') {
          snake.direction = 'l';
      } else if (event.key === 'ArrowRight' && snake.direction !== 'l') {
          snake.direction = 'r';
      } else if (event.key === 'ArrowUp' && snake.direction !== 'd') {
          snake.direction = 'u';
      } else if (event.key === 'ArrowDown' && snake.direction !== 'u') {
          snake.direction = 'd';
      }
    }, {once: true});
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function render() {
    renderSnake();
}

function renderSnake() {
    ctx.clearRect(0, 0, 1200, 700);

    ctx.fillStyle = 'green';
    for (const element of snake.coords) {
        ctx.fillRect(element[0], element[1], 50, 50);
    }
}

function update() {
    for (let i = snake.coords.length - 1; snake.coords.length > 1 && i > 0; i--) {
        snake.coords[i][0] = snake.coords[i-1][0];
        snake.coords[i][1] = snake.coords[i-1][1];
    }

    const snakeStep = 50;
    switch (snake.direction) {
        case 'r':
            snake.coords[0][0] += snakeStep;
            break;
        case 'l':
            snake.coords[0][0] += -snakeStep;
            break;
        case 'u':
            snake.coords[0][1] += -snakeStep;
            break;
        case 'd':
            snake.coords[0][1] += snakeStep;
            break;
    
        default:
            break;
    }
}

function main() {
    processInput();
    update();
    render();

    setTimeout(main, 300)
}

main();