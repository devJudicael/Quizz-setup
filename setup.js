

    // un tableau d'objet pour contenir les différentes questions
var quizData = [

    {
        question: "Qui a été le premier president de la Côte d'Ivoire ?" ,
        a: "John Kenedy" , 
        b: "Toma Sankara" ,
        c: "Guei Robert" ,
        d: "Félix Houphouet Boigny",
        
        correct : "d",

    }   ,

    {
        question: "Quel est la date d'independance de la Côte d'Ivoire ?" ,
        a: "07 Août 1960" , 
        b: "11 Avril 2010" ,
        c: "01 janvier 1962" ,
        d: "07 Mars 1960",
        
        correct : "a",

    }   ,

    {
        question: "Quelle est la devise de la Côte d'Ivoire ?" ,
        a: "Liberté - Égalité - Fraternité" , 
        b: "Union - Respect - Travail" ,
        c: "Union - Discipline - Travail" ,
        d: "Liberté - Foi - Respect",
        
        correct : "c",

    }   ,

    {
        question: "À quelle date est décédé le président Henry Konan Bédié" ,
        a: "30 Juillet 2022" , 
        b: "30 Juillet 2023" ,
        c: "03 Août 2023" ,
        d: "01 Août 2023",
        
        correct : "d",

    }




]


var quiz = document.querySelector("#quiz") // la div quiz
var answers  = document.querySelectorAll(".answer") // les inputs
var question = document.querySelector("#question") // la question


        // les labels
var a_text = document.querySelector("#a_text")
var b_text = document.querySelector("#b_text")
var c_text = document.querySelector("#c_text")
var d_text = document.querySelector("#d_text")

var submit = document.querySelector("#submit")

var current = 0;
var score = 0;


// fonction pour insérer les différentes questions 

function loadQuiz() {

    unselect()


    var currentQuiz = quizData[current] // obtenir l'indice du tableau 

    // à partir de l'indice , insérer les différentes questions

    question.textContent = currentQuiz.question
    a_text.textContent = currentQuiz.a
    b_text.textContent = currentQuiz.b
    c_text.textContent = currentQuiz.c
    d_text.textContent = currentQuiz.d
}


loadQuiz()


    // fonction pour déselectionner tous les boutons radio
function unselect() {

    answers.forEach (answers =>{
        answers.checked=false
    })
}


// function qui vérifie si une réponse a été sélectionner afin de récupérer son id 

function getSelected() {
    var reponse

    answers.forEach (answers =>{
        if (answers.checked) {
        reponse = answers.id
        }
    })

    return reponse
}




submit.addEventListener ("click" , ()=>{
    var reponse = getSelected() // recevoir l'id de la reponse cliquée

    if (reponse) {  // le submit est cliqué mais on vérifie aussi si une réponse a été émise
        
        if (reponse == quizData[current].correct) { // si reponse correct , incrementer l'indice du tableau et incrementer le score
        
            score ++
        }

        current ++


        if (current < quizData.length) { // si on est pas encore à la fin des questons du tableau , continuer d'appeler loadQuiz à chaque click
            loadQuiz()
        }

        else { // dans le cas où l'on se retrouve à la fin du tableau donc plus de question
           document.querySelector(".quiz-header").innerHTML = `Vous avez correctement repondu à <span style=" color: #008DDA; font-weight: bold; "> ${score}/${quizData.length}</span> questions`
           
           document.querySelector(".sub").style.display="block"
           submit.style.display="none"
           
           
           document.querySelector(".sub").addEventListener("click" , ()=>{
            location.reload()
           })



        }




    }
})