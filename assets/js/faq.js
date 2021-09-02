
function toggleAccordion(element) {
    element.parentElement.classList.toggle('is-open')
    element.children[0].classList.toggle('is-open');
}