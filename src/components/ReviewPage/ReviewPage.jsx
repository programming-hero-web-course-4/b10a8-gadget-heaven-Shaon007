import React, { useState, useEffect } from 'react';

const ReviewPage = () => {
  // Load reviews from localStorage or set default
  const loadReviews = () => {
    const savedReviews = localStorage.getItem('reviews');
    return savedReviews ? JSON.parse(savedReviews) : [];
  };

  const [reviews, setReviews] = useState(loadReviews());
  const [newReview, setNewReview] = useState({ user: '', rating: 0, reviewText: '' });

  // Update localStorage when reviews change
  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.rating === 0 || newReview.reviewText.trim() === '' || newReview.user.trim() === '') {
      alert('Please provide a username, rating, and a review!');
      return;
    }
    setReviews([...reviews, newReview]);
    setNewReview({ user: '', rating: 0, reviewText: '' }); // Reset form
  };

  const handleRemoveReview = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Product Reviews</h2>

      <form onSubmit={handleReviewSubmit} className="mb-6">
        {/* Username Input */}
        <div className="mb-4">
          <label className="block text-lg font-semibold">Your Name</label>
          <input
            type="text"
            value={newReview.user}
            onChange={(e) => setNewReview({ ...newReview, user: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your name"
          />
        </div>

        {/* Rating Input */}
        <div className="mb-4">
          <label className="block text-lg font-semibold">Rating</label>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`cursor-pointer text-xl ${newReview.rating > index ? 'text-yellow-400' : 'text-gray-300'}`}
                onClick={() => setNewReview({ ...newReview, rating: index + 1 })}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Review Text Input */}
        <div className="mb-4">
          <label className="block text-lg font-semibold">Your Review</label>
          <textarea
            value={newReview.reviewText}
            onChange={(e) => setNewReview({ ...newReview, reviewText: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Write your review here..."
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700"
        >
          Submit Review
        </button>
      </form>

      <div>
        <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          reviews.map((review, index) => (
            <div key={index} className="mb-6 p-4 border rounded-md bg-gray-50">
              <div className="flex items-center mb-2">
                <span className="font-semibold text-lg mr-2">{review.user}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-xl ${review.rating > i ? 'text-yellow-400' : 'text-gray-300'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p>{review.reviewText}</p>
              <button
                onClick={() => handleRemoveReview(index)}
                className="mt-2 text-red-500 hover:text-red-700"
              >
                Remove Review
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewPage;
