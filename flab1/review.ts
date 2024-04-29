class Review {
    productName: string;
    reviewerName: string;
    rating: number;
    timestamp: Date;

    constructor(productName: string, reviewerName: string, rating: number) {
        this.productName = productName;
        this.reviewerName = reviewerName;
        this.rating = rating;
        this.timestamp = new Date(); // Set current time as timestamp
    }

    displayReview(): HTMLElement {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('card', 'mb-3');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const productNameHeader = document.createElement('h5');
        productNameHeader.classList.add('card-title');
        productNameHeader.textContent = this.productName;
        cardBody.appendChild(productNameHeader);

        const reviewerNameText = document.createElement('p');
        reviewerNameText.classList.add('card-text');
        reviewerNameText.textContent = `Reviewer: ${this.reviewerName}`;
        cardBody.appendChild(reviewerNameText);

        const ratingText = document.createElement('p');
        ratingText.classList.add('card-text');
        ratingText.textContent = `Rating: ${this.rating}`;
        cardBody.appendChild(ratingText);

        const timestampText = document.createElement('p');
        timestampText.classList.add('card-text', 'text-muted');
        timestampText.textContent = `Date: ${this.formatDate(this.timestamp)}`;
        cardBody.appendChild(timestampText);

        reviewElement.appendChild(cardBody);

        return reviewElement;
    }

    private formatDate(date: Date): string {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' };
        return date.toLocaleDateString('en-US', options);
    }
}

class ReviewManager {
    private reviews: Review[] = [];

    addReview(): void {
        const productNameInput = document.getElementById('productName') as HTMLInputElement;
        const reviewerNameInput = document.getElementById('reviewerName') as HTMLInputElement;
        const ratingInput = document.getElementById('rating') as HTMLInputElement;

        const productName = productNameInput.value;
        const reviewerName = reviewerNameInput.value;
        const rating = parseInt(ratingInput.value);

        if (productName.trim() === '' || reviewerName.trim() === '' || isNaN(rating) || rating < 1 || rating > 5) {
            alert('Please enter valid product name, reviewer name, and rating (1-5).');
            return;
        }

        const review = new Review(productName, reviewerName, rating);
        this.reviews.push(review);
        this.displayReviews();
        
        // Reset input fields
        productNameInput.value = '';
        reviewerNameInput.value = '';
        ratingInput.value = '';
    }

    displayReviews(): void {
        const reviewsContainer = document.getElementById('reviews');
        if (!reviewsContainer) return;
        reviewsContainer.innerHTML = '';

        if (this.reviews.length === 0) {
            reviewsContainer.innerText = 'No reviews yet.';
            return;
        }

        this.reviews.forEach(review => {
            const reviewElement = review.displayReview();
            reviewsContainer.appendChild(reviewElement);
        });
    }

    addCustomCSS(): void {
        const css = `
            body {
                background-color: #f8f9fa;
                font-family: Arial, sans-serif;
            }

            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }

            .mb-3 {
                margin-bottom: 20px;
            }

            .btn-primary {
                background-color: #007bff;
                border-color: #007bff;
            }

            .btn-primary:hover {
                background-color: #0056b3;
                border-color: #0056b3;
            }

            #reviews {
                margin-top: 20px;
            }

            .card {
                border: 1px solid rgba(0, 0, 0, 0.125);
                border-radius: 0.25rem;
            }

            .card-body {
                padding: 1.25rem;
            }

            .card-title {
                margin-bottom: 0.75rem;
            }

            .card-text:last-child {
                margin-bottom: 0;
            }
        `;

        const style = document.createElement('style');
        style.appendChild(document.createTextNode(css));

        document.head.appendChild(style);
    }
}

const reviewManager = new ReviewManager();

document.addEventListener('DOMContentLoaded', () => {
    reviewManager.addCustomCSS();

    const addReviewBtn = document.getElementById('addReviewBtn');
    if (addReviewBtn) {
        addReviewBtn.addEventListener('click', () => {
            reviewManager.addReview();
        });
    }
});
