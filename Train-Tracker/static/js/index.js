var addNewElement = () => {
    var elem = document.getElementById("newElem")
    var head = document.getElementById("newHead")
    elem.className = "text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap"
    head.className = "text-sm font-medium  text-white bg-gray-700 px-6 py-4"

}

const getData = (search) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({search})
     };
    fetch('/api', options).then(response =>
        (response.json())).then(response => {
            console.log(response)
        })
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getData(searchBtn.value)

})