advice()

const btn = document.querySelector('button');
const idAdvice = document.querySelector('span');
const textAdvice = document.querySelector('p');


btn.addEventListener('click', function handleClick(){
    advice();
    btn.disabled = true
    setTimeout(() => {
       btn.disabled = false
    }, 2000)
})


function advice(){
    fetch(`https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`)
    .then( e => e.json())
    .then( advices => {
    idAdvice.innerText = advices.slip.id;
    textAdvice.innerText = `"${advices.slip.advice}"`
    })
    .catch(err => console.error('Erro ao obter advice:', err));
}

