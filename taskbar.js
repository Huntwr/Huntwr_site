const startBtn = document.getElementById("start-button");
let startMenu = document.getElementById("start-menu");
if (!startMenu) {
    startMenu = document.createElement("div");
    startMenu.id = "start-menu";
    startMenu.style.display = "none";
    startMenu.style.position = "absolute";
    startMenu.style.bottom = "30px";
    startMenu.style.left = "0";
    startMenu.style.width = "200px";
    startMenu.style.background = "#c0c0c0";
    startMenu.style.border = "1px solid #000";
    startMenu.style.padding = "5px";
    startMenu.innerHTML = "<p>Start Menu Content</p>";
    document.body.appendChild(startMenu);
}
startBtn.addEventListener("mouseenter", () => startBtn.classList.add("hover"));
startBtn.addEventListener("mouseleave", () => startBtn.classList.remove("hover"));
startBtn.addEventListener("mousedown", () => startBtn.classList.add("pressed"));
startBtn.addEventListener("mouseup", () => startBtn.classList.remove("pressed"));
startBtn.addEventListener("click", () => {
    startMenu.style.display = startMenu.style.display === "block" ? "none" : "block";
});
