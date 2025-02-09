// components/GoogleReview.tsx
import React from "react";
import Image from 'next/image';


interface Review {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  url: string;
  picture_url?: string; // Optional field for review picture
  picture_url2?: string; // Optional field for review picture
  picture_url3?: string; // Optional field for review picture
}

interface GoogleReviewProps {
  reviews: Review[];
}

const GoogleReview: React.FC<GoogleReviewProps> = ({ reviews }) => {
  const isGenuineReview = (text: string): boolean => {
    const keywords = ["excellent", "great", "good", "recommend", "amazing"];
    return keywords.some(keyword => text.toLowerCase().includes(keyword)) || text.length > 50;
  };
  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <div key={index} className="review-item-container">
          <div className="review-item">
            <div className="review-item-left">
              <Image
                src={review.profile_photo_url}
                alt={review.author_name}
                width={100}  // Set your desired width
                height={100} // Set your desired height
                className="review-profile-photo"
              />
              <h3>{review.author_name}</h3>
              <div className="review-rating">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
                <span>({review.rating} stars)</span>
              </div>
              <p>{review.text}</p>
              <small>{review.relative_time_description}</small>{'    '}
              <a href={review.url} target="_blank" rel="noopener noreferrer" className="review-link"> Read more</a>
            </div>
  
            <div className="review-item-right">
              {review.picture_url && (
                <Image
                  src={review.picture_url}
                  alt={`${review.author_name} - Another photo for the project in London: Wiring, Lighting, Fusebox and more`}
                  width={200} // Set your desired width
                  height={200} // Set your desired height
                  className="review-picture"
                />
              )}
              {review.picture_url2 && (
                <Image
                  src={review.picture_url2}
                  alt={`${review.author_name} - Second picture of Electrical project in London: Wiring, Lighting, Fusebox and more`}
                  width={200} // Set your desired width
                  height={200} // Set your desired height
                  className="review-picture"
                />
              )}
              {review.picture_url3 && (
                <Image
                  src={review.picture_url3}
                  alt={`${review.author_name} - Third picture project in London: Wiring, Lighting, Fusebox and more`}
                  width={200} // Set your desired width
                  height={200} // Set your desired height
                  className="review-picture"
                />
              )}
            </div>
          </div>
          <div className={`review-genuine-status ${isGenuineReview(review.text) ? "review-genuine" : "review-not-genuine"}`}>
            {isGenuineReview(review.text) ? "Genuine Review" : "Not Sure"}
          </div>
        </div>
      ))}
    </div>
  );
};
export default GoogleReview;
