//initialize queue data structure
class Queue {
    constructor() {
        this.items = [];
    }

    //push new item in the que
    enqueue(item) {
        this.items.push(item);
    }

    //remove first item from the que
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift();
    }

    //check if que is empty or not
    isEmpty() {
        return this.items.length === 0;
    }
}
  
function knightTravails(start, target, chessboardSize) {
    //Knight's possible moves
    const moves = [
        [1,2], [1,-2],
        [2,1], [2,-1],
        [-1,2], [-1,-2],
        [-2,1], [-2,-1]
    ];

    const queue = new Queue();
    const visited = new Map();
    const parent = new Map();

    //push in the que the start position of the knight
    //and update visited map
    queue.enqueue(start);
    visited.set(start.join(), true);

    //main loop runs till the que is empty or
    //the target position is reached
    while (!queue.isEmpty()) {
        //remove from the que the current position
        const currentPosition = queue.dequeue();

        if (currentPosition[0] === target[0] && currentPosition[1] === target[1]) {
            break;
        }
        //iterate through each possible moves
        //and calculate the nextX and nextY
        for(const move of moves) {
            const nextX = currentPosition[0] + move[0];
            const nextY = currentPosition[1] + move[1];
            const nextPosition = [nextX, nextY];
        
        //if nextPosition is valid and has not been visited yet
        //enqueue it, mark it as visited
        //and set it in the parent map
        if (isValidPosition(nextX, nextY, chessboardSize) && !visited.has(nextPosition.join())) {
            queue.enqueue(nextPosition);
            visited.set(nextPosition.join(), true);
            parent.set(nextPosition.join(), currentPosition.join());
            }
        }
    }

    return reconstructPath(start.join(), target.join(), parent);
}

//returns true or false after checking if the position is valid
//given x,y position and the board size
function isValidPosition(x, y, chessboardSize) {
    return x >= 0 && y >= 0 && x < chessboardSize && y < chessboardSize;
}

function reconstructPath(start, target, parent) {

    const path = [];
    let current = target.split(',').map(Number);
  
    while (current.join() !== start) {
      path.push(current);
      current = parent.get(current.join()).split(',').map(Number);
    }
    console.log(current);

    path.push(current);
    return path.reverse();
}

// Example usage:
const start = [0, 0];
const target = [7, 7];
const chessboardSize = 8;
const shortestPath = knightTravails(start, target, chessboardSize);
console.log(shortestPath);
