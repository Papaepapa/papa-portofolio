const image = document.getElementById('bouncing-image');

let direction = 1; // 1 for moving down, -1 for moving up
let yPos = 0;
const maxHeight = 50; // Adjust the maximum height the image should bounce

function animate() {
    // Update the image's vertical position
    yPos += direction;
    image.style.top = yPos + 'px';

    // Change direction if the image reaches the top or bottom of the bounce range
    if (yPos >= maxHeight || yPos <= 0) {
        direction *= -1;
    }

    // Request next animation frame
    requestAnimationFrame(animate);
}

// Start the animation
animate();
