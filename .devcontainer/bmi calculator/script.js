const form = document.querySelector('form')

form.addEventListener('submit', function(event){
    event.preventDefault() //it prevent default action

    const height = parseInt(document.querySelector('#height').value) // ".value" to get the height, input value
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML = `please give a valid height $(height)`;
    }
    else if(weight === '' || height<0 || isNaN(height)){
        results.innerHTML = `please give a valid height $(weight)`;
    }
    else {
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        //show the result
        results.innerHTML = `<span>${bmi}</span>`
    }
})