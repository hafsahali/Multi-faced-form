const personalInfo    = document.getElementById("personalInfo")
const educationalInfo = document.getElementById("educationalInfo")
const healthInfo      = document.getElementById("healthInfo")
 function nextbtn1(){
     personalInfo.style.display="none"
     educationalInfo.style.display="flex"
     healthInfo.style.display="none"
 }
 function nextbtn2(){
    educationalInfo.style.display="none"
    healthInfo.style.display="flex"
    personalInfo.style.display="none"
}
function backbtn1(){
    personalInfo.style.display="flex"
    educationalInfo.style.display="none"
    healthInfo.style.display="none"
}
function backbtn2(){
    educationalInfo.style.display="flex"
    healthInfo.style.display="none"
}
 
 