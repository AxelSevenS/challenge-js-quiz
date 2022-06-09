function ValidateForm(){
    let score = 0;
    let questionCount = document.getElementsByClassName("question").length;

    console.log(document.forms["question1"]["answer"].value);

    var quizContainer = document.getElementById('quiz-container');
    var resultContainer = document.getElementById('result-container');
    var resultText = document.getElementById('result');
    resultText.innerHTML = '';

    if ( document.forms["question1"]["answer"].value == "2" ){
        score += 1;
        resultText.innerHTML += '<p>Question 1: Correcte!</p>';
    }else {
        resultText.innerHTML += '<p>Question 1: Incorrecte!</p>';
    }

    if ( document.forms["question2"]["answer"].value == "3" ){
        score += 1;
        resultText.innerHTML += '<p>Question 2: Correcte!</p>';
    }else {
        resultText.innerHTML += '<p>Question 2: Incorrecte!</p>';
    }

    if ( document.forms["question3"]["actor"].checked && document.forms["question3"]["wife"].checked && document.forms["question3"]["abusive"].checked ){
        score += 1;
        resultText.innerHTML += '<p>Question 3: Correcte!</p>';
    }else {
        resultText.innerHTML += '<p>Question 3: Incorrecte!</p>';
    }

    if ( document.forms["question4"]["answer"].value == "2" ){
        score += 1;
        resultText.innerHTML += '<p>Question 4: Correcte!</p>';
    }else {
        resultText.innerHTML += '<p>Question 4: Incorrecte!</p>';
    }

    if ( document.forms["question5"]["answer"].value == "1" ){
        score += 1;
        resultText.innerHTML += '<p>Question 5: Correcte!</p>';
    }else {
        resultText.innerHTML += '<p>Question 5: Incorrecte!</p>';
    }

    if ( !document.forms["question6"]["danny"].checked && document.forms["question6"]["dwayne"].checked && document.forms["question6"]["arnold"].checked && !document.forms["question6"]["chris"].checked && document.forms["question6"]["john"].checked && !document.forms["question6"]["will"].checked ){
        score += 1;
        resultText.innerHTML += '<p>Question 6: Correcte!</p>';
    }else {
        resultText.innerHTML += '<p>Question 6: Incorrecte!</p>';
    }

    resultText.innerHTML += '<p>Vous avez eu ' + score + ' points sur ' + questionCount + '!</p>';

    quizContainer.style.display = 'none';
    resultContainer.style.display = 'flex';
}