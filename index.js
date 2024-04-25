const ratingForm = document.getElementById('ratingForm');
const thankYouSection = document.querySelector('.thank-you-card');

ratingForm.addEventListener('submit', function (submission) {
    submission.preventDefault();
    // Hide the form and show the thank-you section
    ratingForm.style.display = 'none';
    thankYouSection.style.display = 'block';


    const selectedRating = document.querySelector('.selected-rating .user-rating');

    const checkedRadio = document.querySelector('input.rating-btn:checked');

    if (checkedRadio) {
        selectedRating.textContent = checkedRadio.value;
    }
});