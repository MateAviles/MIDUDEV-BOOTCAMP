

const jobsContainer = document.querySelector('.jobs-container');

jobsContainer.addEventListener("click", (event) => {
    const element = event.target;

    if(element.classList.contains('button-apply-job')){
        element.textContent = 'Aplicado!'
        element.classList.add("is-applied");
        element.disabled = true;
    };
});

const filter = document.querySelector('#filter-location');
const msj = document.querySelector('#filter-selected-value')

filter.addEventListener('change', () => {
    const selectedValue = filter.value;

    if(selectedValue) {
        msj.textContent = `seleccionaste: ${selectedValue}`
    } else {
        msj.textContent = ''
    }

    const jobs = document.querySelectorAll('.job-listing-card');

    jobs.forEach(job => {
        const modalidad = job.dataset.modalidad;

        if (selectedValue === '' || selectedValue === modalidad) {
            job.style.display = 'flex'
        } else {
            job.style.display = 'none'
        };
    });
});