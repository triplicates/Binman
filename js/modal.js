window.onload = function(){
    let add_button = document.querySelector('.add_but');
    let closeModal = document.querySelector('.modalWindow__form__closeModal');
    let modal = document.querySelector('.modalWindow');
    let inputJobs = document.querySelector('#jobs');
    let selectJob = document.querySelector('.select_job');

    add_button.addEventListener('click', () => {
        modal.style.display = "block";
    });
    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
    });
    inputJobs.addEventListener('focus', () => {
        selectJob.style.display = "block"
    });
    inputJobs.addEventListener('focusout', () => {
        selectJob.style.display = "none"
    });
}