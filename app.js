const inp=document.getElementById('input')
const temp_max_min=document.getElementById('temp_max_min')
const temp=document.getElementById('temp')
const cloud=document.getElementById('cloud')
const cname = document.getElementById('cname')
const humid = document.getElementById('humidity')

async function weather(city){
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a977eb9d9dedbc621c9aae7f1b627c04`)
        .then((res) => {
            return res.json()
        })
        .then(data => {
            console.log(data)
            cname.innerHTML = city+", "+data.sys.country
            temp_max = Math.round(data.main.temp_max-273.15)+'\u00B0'+'C'
            temp_min = Math.round(data.main.temp_min-273.15)+'\u00B0'+'C'
            temp_max_min.innerHTML = temp_max+"/"+temp_min
            temp.innerHTML = Math.round(data.main.temp-273.15)+'\u00B0'+'C'
            cloud.innerHTML = data.weather[0].description.toUpperCase()
            const x = data.main.humidity
            if (x<30){
                humid.innerHTML = "Less Humidity"
            }
            else if(x>=30 && x<=60){
                humid.innerHTML = "Moderate Humidity"
            }
            else{
                humid.innerHTML = "High Humidity"
            }
        })
        .catch(err => {
            console.log(err)
        })

    // const res = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a977eb9d9dedbc621c9aae7f1b627c04')
    // const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a977eb9d9dedbc621c9aae7f1b627c04`)
    // console.log(res.data)
    // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
}

inp.addEventListener('keypress', (e) => {
    if (e.key==="Enter"){
        const city = inp.value
        inp.value=""
        weather(city)
    }
})

$('input').on('click', function(){
    $('input').addClass('onclickInput')
})