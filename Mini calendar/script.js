const date = document.getElementById("date")
const day = document.getElementById("day")
const month = document.getElementById("month")
const year = document.getElementById("year")

const today = new Date();


const days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];


date.innerHTML = (today.getDate() <10?"0":"")+today.getDate()
day.innerHTML = days[today.getDay()]
month.innerHTML = months[today.getMonth()]
year.innerHTML = today.getFullYear()