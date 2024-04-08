window.onload = function(){
    var depot = document.querySelector('.valise')
    depot.addEventListener('dragover', DragoverEvent, false)
    depot.addEventListener('drop', DropEvent, false)
}
function DragoverEvent(e){
    e.preventDefault()
}
function DropEvent(e){
    var liste = e.dataTransfer.files
    e.preventDefault()
}