    const themeChanger = document.getElementById('theme-changer');
    themeChanger.classList.add('cursor-pointer');
    document.getElementById('theme-changer').addEventListener('click', function(event){
        let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

        document.body.style.backgroundColor = randomColor;
    })