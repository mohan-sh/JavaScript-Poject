var Review = /** @class */ (function () {
    function Review(productName, reviewerName, rating) {
        this.productName = productName;
        this.reviewerName = reviewerName;
        this.rating = rating;
        this.timestamp = new Date(); // Set current time as timestamp
    }
    Review.prototype.displayReview = function () {
        var reviewElement = document.createElement('div');
        reviewElement.classList.add('card', 'mb-3');
        var cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        var productNameHeader = document.createElement('h5');
        productNameHeader.classList.add('card-title');
        productNameHeader.textContent = this.productName;
        cardBody.appendChild(productNameHeader);
        var reviewerNameText = document.createElement('p');
        reviewerNameText.classList.add('card-text');
        reviewerNameText.textContent = "Reviewer: ".concat(this.reviewerName);
        cardBody.appendChild(reviewerNameText);
        var ratingText = document.createElement('p');
        ratingText.classList.add('card-text');
        ratingText.textContent = "Rating: ".concat(this.rating);
        cardBody.appendChild(ratingText);
        var timestampText = document.createElement('p');
        timestampText.classList.add('card-text', 'text-muted');
        timestampText.textContent = "Date: ".concat(this.formatDate(this.timestamp));
        cardBody.appendChild(timestampText);
        reviewElement.appendChild(cardBody);
        return reviewElement;
    };
    Review.prototype.formatDate = function (date) {
        var options = { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' };
        return date.toLocaleDateString('en-US', options);
    };
    return Review;
}());
var ReviewManager = /** @class */ (function () {
    function ReviewManager() {
        this.reviews = [];
    }
    ReviewManager.prototype.addReview = function () {
        var productNameInput = document.getElementById('productName');
        var reviewerNameInput = document.getElementById('reviewerName');
        var ratingInput = document.getElementById('rating');
        var productName = productNameInput.value;
        var reviewerName = reviewerNameInput.value;
        var rating = parseInt(ratingInput.value);
        if (productName.trim() === '' || reviewerName.trim() === '' || isNaN(rating) || rating < 1 || rating > 5) {
            alert('Please enter valid product name, reviewer name, and rating (1-5).');
            return;
        }
        var review = new Review(productName, reviewerName, rating);
        this.reviews.push(review);
        this.displayReviews();
        // Reset input fields
        productNameInput.value = '';
        reviewerNameInput.value = '';
        ratingInput.value = '';
    };
    ReviewManager.prototype.displayReviews = function () {
        var reviewsContainer = document.getElementById('reviews');
        if (!reviewsContainer)
            return;
        reviewsContainer.innerHTML = '';
        if (this.reviews.length === 0) {
            reviewsContainer.innerText = 'No reviews yet.';
            return;
        }
        this.reviews.forEach(function (review) {
            var reviewElement = review.displayReview();
            reviewsContainer.appendChild(reviewElement);
        });
    };
    ReviewManager.prototype.addCustomCSS = function () {
        var css = "\n            body {\n                background-color: #f8f9fa;\n                font-family: Arial, sans-serif;\n            }\n\n            .container {\n                max-width: 600px;\n                margin: 0 auto;\n                padding: 20px;\n                border-radius: 8px;\n                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n            }\n\n            .mb-3 {\n                margin-bottom: 20px;\n            }\n\n            .btn-primary {\n                background-color: #007bff;\n                border-color: #007bff;\n            }\n\n            .btn-primary:hover {\n                background-color: #0056b3;\n                border-color: #0056b3;\n            }\n\n            #reviews {\n                margin-top: 20px;\n            }\n\n            .card {\n                border: 1px solid rgba(0, 0, 0, 0.125);\n                border-radius: 0.25rem;\n            }\n\n            .card-body {\n                padding: 1.25rem;\n            }\n\n            .card-title {\n                margin-bottom: 0.75rem;\n            }\n\n            .card-text:last-child {\n                margin-bottom: 0;\n            }\n        ";
        var style = document.createElement('style');
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
    };
    return ReviewManager;
}());
var reviewManager = new ReviewManager();
document.addEventListener('DOMContentLoaded', function () {
    reviewManager.addCustomCSS();
    var addReviewBtn = document.getElementById('addReviewBtn');
    if (addReviewBtn) {
        addReviewBtn.addEventListener('click', function () {
            reviewManager.addReview();
        });
    }
});
