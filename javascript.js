const main = document.querySelector(".content")
const container = document.querySelector(".container")
const button = document.querySelector(".butt")
main.appendChild(container)

button.addEventListener("click",() =>{
    const dimension = parseInt(prompt("Enter the dimensions: "), 10);

    if (dimension > 100 || dimension <= 0) {
        alert("Please enter a valid number (0 - 100).");
        return;
    }

    const maxWidth = 960;
    const width = maxWidth/dimension;

    container.innerHTML = ""

    for(let i = 0; i < dimension*dimension; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.classList.add(`square${i}`) ;
        square.style.width = `${width}px`
        square.style.height = `${width}px`
        container.appendChild(square);
    
        square.addEventListener("mouseover", function (){
            square.style.backgroundColor = getRandomColor();
        });
    
        // square.style.backgroundColor = getRandomColor();

        // square.dataset.darkness = "0";

        // square.addEventListener("mouseover", function () {
        //     let darknessLevel = parseInt(square.dataset.darkness, 10);
        //     if (darknessLevel < 10) {
        //         darknessLevel += 1; // Increase darkness level
        //         square.dataset.darkness = darknessLevel; // Update dataset

        //         let shade = 255 - (darknessLevel * 25.5); // Reduce brightness by 10% per hover
        //         square.style.backgroundColor = `rgb(${shade}, ${shade}, ${shade})`;
        //     }
        // });
        
    }
})



function getRandomColor(){
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}
