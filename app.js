document.querySelectorAll(".draggable").forEach(item => {
    item.addEventListener("dragstart", event => {
        event.dataTransfer.setData('text/plain', getComputedStyle(item).backgroundColor)
        console.log("Drag Started...")
    })
})

document.querySelectorAll(".droptarget").forEach(item => {
    item.addEventListener("dragover", event => {
        event.preventDefault();
        console.log("dragged over the zone")
    })

    item.addEventListener("dragleave", event => {
        item.classList.remove("hover")
        console.log("drag left the zone")
    })

    item.addEventListener("dragenter", event =>{
        item.classList.add("hover")
        console.log("drag entered the zone...")
    })

    item.addEventListener("drop", event => {
        item.style.backgroundColor = event.dataTransfer.getData('text/plain')
    })
})