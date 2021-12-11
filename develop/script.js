// https://opentdb.com/api.php?amount=20

const _question = document.getElementById('question');
const _options = document.querySelector('.quiz-options');


async function loadQuestion(){
    const APIUrl = 'https://opentdb.com/api.php?amount=1';
    const result = await fetch(`${APIUrl}`);
    const data = await result.json();
    //console.log(data.results[0]);
    showQuestion(data.results[0]);
}

function showQuestion(data){
}
