const langEl = document.querySelector(".langWrap")
const link = document.querySelectorAll("a")
const homeEL = document.getElementById("home")
const contactEL = document.getElementById("contact")

const titleEl = document.querySelector(".title")
const descrEl = document.querySelector(".description")
const projEL = document.querySelector(".projT")
const proj2EL = document.getElementById("projA")
const hackEL = document.querySelector(".hackerP")
const biblioEL = document.querySelector(".biblioP")
const aboutEL = document.getElementById("aboutT")
const about2EL = document.getElementById("aboutP")
const about3EL = document.getElementById("aboutA")
const courseEL = document.getElementById("courseT")
const course2EL = document.getElementById("courseP")

link.forEach((el) => {
  el.addEventListener("click", () => {
    langEl.querySelector(".active").classList.remove("active")
    el.classList.add("active")

    const attr = el.getAttribute("language")

    homeEL.textContent = data[attr].home
    proj2EL.textContent = data[attr].projA
    about3EL.textContent = data[attr].aboutA

    contactEL.textContent = data[attr].contact

    titleEl.textContent = data[attr].title
    descrEl.textContent = data[attr].description
    projEL.textContent = data[attr].projT
    proj2EL.textContent = data[attr].projA
    hackEL.textContent = data[attr].hackP
    biblioEL.textContent = data[attr].biblioP
    aboutEL.textContent = data[attr].aboutT
    about2EL.textContent = data[attr].aboutP
    courseEL.textContent = data[attr].courseT
    course2EL.textContent = data[attr].courseP
  })
})

var data = {
  spanish: {
    home: "Inicio",

    contact: "Escribime!",

    title: "Desarrollador web",
    description:
      "Bienvenidos a mi portfolio, aqui vas a poder seguir mis proyectos y mis redes sociales",
    projT: "Estos son algunos de mis proyectos.",
    projA: "Projectos",
    hackP:
      "Web creada para mostrar el avance diario en ejercicios de JS y las certificaciones.",
    biblioP:
      "Web creada usando boostrap a pedido de un projecto final de TICs.",
    aboutT: "Sobre mi",
    aboutp:
      "Soy un estudiante de ingeniería electrónica, la pandemia despertó un gran interés por la programación, empezando por HTML/CSS y pasando por React JS pero pronto seguiré desarrollando e interiorizándome en el Back End como Node JS y JAVA.",
    aboutA: "Sobre mi",
    courseT: "Cursos y certificaciones",
    courseP:
      "Estos son algunos de mis cursos y certificaciones en progreso, tanto en ingenieria electronica como en programacion.",
  },
  english: {
    home: "Home",
    contact: "Contact me",
    title: "Web designer",
    description:
      "Welcome to my portfolio, here you can follow my projects and my social networks.",
    projT: "These are some of my projects.",
    projA: "Projects",
    hackP:
      "A web page created to show daily javascript exercises and certifications.",
    biblioP:
      "A website created using bootstrap as a deliverable for the final TIC's project.",
    aboutT: "About me",
    aboutP:
      " I am an electronic engineering student, the pandemic awakened a great interest in programming, starting with HTML/CSS and moving on to React JS but soon I will continue to develop and internalize myself in the Back End like Node JS and JAVA.",
    aboutA: "About me",
    courseT: "Courses and certification",
    aboutA: "About me",
    courseP:
      "These are some of my courses and certification in progress, both in electronic engineering and programming.",
  },
}
