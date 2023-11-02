const btnMobile = document.getElementById("btn-mobile")
const img = document.getElementById("btn-mobile-img")
function toggleMenu() {
    const body = document.getElementById('body')
    const nav = document.getElementById("nav")
    body.classList.toggle('Scroll-off')
    nav.classList.toggle('active')
  

    function troca(img) {
        img.src='../assets/imagens/menuFecha.svg'
    }
    if (nav.classList.contains("active")) {
        // Troca a imagem
        troca(img);
      }else {
        img.src='../assets/imagens/menu.svg'
      }
}
btnMobile.addEventListener("click", toggleMenu)
