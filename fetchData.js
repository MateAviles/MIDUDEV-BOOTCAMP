

const container = document.querySelector('.jobs-container');
const RESULT_PER_PAGE = 3;

fetch("./data.json").then
((response) => {
    return response.json();
}).then((jobs) => {
    jobs.slice(0, RESULT_PER_PAGE).forEach(job => {
        const article = document.createElement('article');
        article.className = 'job-listing-card'

        article.dataset.modalidad = job.data.modalidad;
        article.dataset.technology = job.data.technology;
        article.dataset.nivel = job.data.nivel;

        article.innerHTML = `<div>
          <h3>${job.titulo}</h3>
          <small>${job.empresa} | ${job.ubicacion}</small>
          <p>${job.descripcion}</p>
        </div>
        <button class="button-apply-job">Aplicar</button>`

      container.appendChild(article);
    });
});