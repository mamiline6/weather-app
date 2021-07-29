let locationTimezone = document.querySelector(".location-timezone")
let temperatureIcon = document.querySelector(".temperature-icon")
let temperatureDegree = document.querySelector(".temperature-degree")
let temperatureDescription = document.querySelector(".temperature-description")
let char = 1

window.addEventListener("load", async function() {
  // データ取得
  const cityID = '016010' // sapporo
  const res = await fetch(`https://weather.tsukumijima.net/api/forecast/city/${cityID}`)
  const cityWeather = await res.json()

  // DOM操作
  locationTimezone.textContent = cityWeather.location.city // 地域
  temperatureIcon.innerHTML = `<img src='${cityWeather.forecasts[char].image.url}' alt='' width='220'>` // アイコン
  temperatureDegree.textContent = cityWeather.forecasts[char].temperature.max.celsius // 最高気温
  temperatureDescription.textContent = cityWeather.forecasts[char].telop // 天気
})
