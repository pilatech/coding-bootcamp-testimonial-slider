const testimonials = [
 {
  name: 'Tany Sinclair',
  position: 'UX Engineer',
  testimonial: `I’ve been interested in coding for a while but never taken the jump, until now. 
  I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
  excited about the future.`,
  image: 'images/image-tanya.jpg'
 },
 {
  name: 'John Tarkpor',
  position: 'Junior Front-end Developer',
  testimonial: `If you want to lay the best foundation possible I’d recommend taking this course. 
  The depth the instructors go into is incredible. I now feel so confident about 
  starting up as a professional developer.`,
  image: 'images/image-john.jpg'
 }
]


const btnNext = document.querySelector('.btn--next')
const btnPrev = document.querySelector('.btn--prev')
let index = 0
let currentItem = testimonials[index]

updateUI(currentItem)

btnNext.addEventListener('click', e => {
 index === testimonials.length - 1 ? index = 0 : index = index + 1

 currentItem = testimonials[index]
 updateUI(currentItem)
})

btnPrev.addEventListener('click', e => {
 index === 0 ? index = testimonials.length - 1 : index = index - 1

 currentItem = testimonials[index]
 updateUI(currentItem)
})

function updateUI(currentItem){
  console.log(currentItem)
  const testimonial = document.querySelector('.testimonial__quote')
  const name = document.querySelector('.testimonial__author')
  const position = document.querySelector('.testimonial__position')
  const hero = document.querySelector('.testimonial__hero')
  testimonial.textContent = currentItem.testimonial
  name.textContent = currentItem.name
  position.textContent = currentItem.position
  hero.style.backgroundImage = `url(${currentItem.image})`
}
