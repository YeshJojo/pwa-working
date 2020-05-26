let fetchJSONButton = document.getElementById('fetchJSON');
fetchJSONButton.addEventListener('click', fetchJSON);

let fetchTxtButton = document.getElementById('fetchTxt');
fetchTxtButton.addEventListener('click', fetchTxt);

let fetchImgButton = document.getElementById('fetchImage');
fetchImgButton.addEventListener('click', fetchImg);

let imgAttach = document.getElementById('imgToAttach');

function fetchJSON(){
    fetch('data.json')
        .then(result => {
            return result.json()
        })
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
}

function fetchTxt(){
    fetch('data.txt')
        .then(result => {
            return result.text()
        })
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
}

function fetchImg(){
    fetch('web.png')
        .then(result => {
            return result.blob()
        })
        .then(res => {
            imgAttach.src = URL.createObjectURL(res)
        })
        .catch(error => {
            console.log(error)
        })
}