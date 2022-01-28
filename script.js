const testBtn = document.getElementById('testPro')
const modal = document.getElementById('modal')
const closer = document.getElementById('closer')
testBtn.onclick = function () {
  return (modal.style.display = 'block')
}
closer.onclick = function () {
  return (modal.style.display = 'none')
}
