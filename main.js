var Color = "black"

//Body background
document.getElementsByTagName("body")[0].style.cssText = style=`background-color:${Color}`

// Code block
let Number_Of_Parts = document.getElementsByClassName("code leading")
for (let i=0; i<Number_Of_Parts.length;i++){
    Number_Of_Parts[i].style.cssText = style=`background-color:${Color}`
}

// Code empty
let code_empty = document.getElementsByClassName("code empty")
for (let i=0; i<code_empty.length;i++){
    code_empty[i].style.cssText = style=`background-color:${Color}`
}

//code
let Chroma = document.getElementsByClassName("code")
for (let i=0; i<Chroma.length;i++){
    Chroma[i].style.cssText = style=`background-color:${Color}`
}

//Text
let Text = document.getElementsByTagName("p")
for (let i=0; i<Text.length;i++){
    Text[i].style.cssText = style=`color:white`
}