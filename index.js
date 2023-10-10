function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')
    
    if(html.classList.contains('light')) {
        let avatar = document.querySelector('img')
        avatar.src = 'assets/avatar-light.jpg'
    } else {
        avatar.src = 'assets/avatar-dark.jpg'
    }
}