function startSurprise() {
    document.querySelector('.btn').style.display = 'none';

    for (let i = 0; i < 20; i++) {
        let rose = document.createElement('div');
        rose.classList.add('rose');
        rose.style.left = Math.random() * 100 + 'vw';
        rose.style.animationDuration = (Math.random() * 2 + 3) + 's';
        document.getElementById('roseShower').appendChild(rose);
    }

    setTimeout(() => {
        document.getElementById('timeline').style.display = 'block';
        setTimeout(() => {
            document.getElementById('message').style.display = 'block';
        }, 3000);
    }, 3000);
}
