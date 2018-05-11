
var name = "Lindsey Weir";
var career = "High School Student";
var careerDescrip = "I spend my time fitting in with my new friends, the freaks while appeasing my old friends, the geeks, while ace-ing all my classes."
var interests = ["attending concerts", "eating dinner at Kim's house", "watching Nick play drums", "throwing parties at my parent's house"]
var experience = [
    {position: "Head mathlete", 
    school: "Mckinley High School",
    role: "won math competitions"},

    {position: "Chill friend",
    school: "Mckinley HS Patio",
    role: "smoked with the freaks"}
]

var skills = ["defending little brother", "befriending Kim", "motivating Nick", "math tutoring"]


console.log("Name: "+name.toUpperCase());
console.log("Career: "+career);
console.log("Description: "+careerDescrip);

console.log("My Interests:");
interests.forEach(function (element){
    console.log("* "+element);
})

console.log("My Previous Experience:");

function displayPosition(position, school, role){
    console.log("* "+position+" at "+school+" - "+role);
}

displayPosition(experience[0].position, experience[0].school, experience[0].role);
displayPosition(experience[1].position, experience[1].school, experience[1].role);

console.log("My Skills:");
function displaySkill(skill, bool){
    if (bool==true){
        console.log("* BAM: "+skill);
    } else {
        console.log("* "+skill);
    }
}

displaySkill(skills[0], false);
displaySkill(skills[1], false);
displaySkill(skills[2], false);
displaySkill(skills[3], true);