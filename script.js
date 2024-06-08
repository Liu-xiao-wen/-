// 轮播图
const images = [
  { url: `images/assets/p1.jpg` },
  { url: `images/assets/p2.jpg` },
  { url: `images/assets/p3.jpg` },
  { url: `images/assets/p4.jpg` },
  { url: `images/assets/p5.jpg` },
  { url: `images/assets/p6.jpg` }
]

const img = document.querySelector('.banner .slider .img img')
const prevBtn = document.querySelector('.banner .slider .toggle .prev')
const nextBtn = document.querySelector('.banner .slider .toggle .next')
const lis = document.querySelectorAll('.banner .slider .indicator li')

let active = 0

function toggle() {
  lis[active].classList.remove('active')

  if (active === 5) active = 0
  else active += 1

  lis[active].classList.add('active')
  img.src = images[active]['url']
}

function startToggle() {
  nextImg = setInterval(toggle, 3000)
}

function stopToggle() {
  clearInterval(nextImg)
}

startToggle()

prevBtn.addEventListener('click', () => {
  lis[active].classList.remove('active')

  if (active === 0) active = 5
  else active -= 1

  lis[active].classList.add('active')
  img.src = images[active]['url']
})

nextBtn.addEventListener('click', () => {
  lis[active].classList.remove('active')

  if (active === 5) active = 0
  else active += 1

  lis[active].classList.add('active')
  img.src = images[active]['url']
})

img.addEventListener('mouseover', stopToggle)
img.addEventListener('mouseout', startToggle)

//倒计时

/* const hours =  document.getElementById('hours')
const minutes =  document.getElementById('minutes')
const seconds =  document.getElementById('seconds') */

const countdownDate = new Date('June 18, 2024 00:00:00').getTime()

function updateCountdown() {
  let now = new Date().getTime()

  let distance = countdownDate - now

  let days = Math.floor(distance / 1000 / (3600 * 24))
  let hours = Math.floor(distance / 1000 % (3600 * 24) / 3600)
  let minutes = Math.floor(distance / 1000 % 3600 / 60)
  let seconds = Math.floor(distance / 1000 % 60)

  document.getElementById('hours').innerHTML = hours < 10 ? '0' + hours : hours
  document.getElementById('minutes').innerHTML = minutes < 10 ? '0' + minutes : minutes
  document.getElementById('seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds

  if (distance < 0) {
    clearInterval(countdown)
  }
}

const countdown = setInterval(updateCountdown, 1000)