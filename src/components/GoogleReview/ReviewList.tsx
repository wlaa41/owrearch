// components/ReviewList.tsx
import React from 'react';
import GoogleReview from './GoogleReview';
import './GoogleReview.css';

const reviews = [
  {
    author_name: "Fernando Ferdov",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjUmIPeEgRibo6PpMZl0H3n2xWAKIGYFCPOBfIAKWAj4lZuBWOE=w90-h90-p-rp-mo-br100",
    rating: 5,
    relative_time_description: "3 weeks ago",
    text: "Highly recommend this electrician! His knowledge is at a very high level. I needed extra lighting installed for my project, and he gave me excellent advice on how to work around the camper van electric system. Very happy with the final result. He is my go-to electrician now. Thank you!",
    url: "https://maps.app.goo.gl/hPspbv9DGsVFw3o96",
    picture_url: "https://lh5.googleusercontent.com/p/AF1QipOv9pgEzLjwqa0HPaFgr0LwXEwzDBnEo0tVs4Py=w900-h1482-p-k-no",
    picture_url2: "https://lh5.googleusercontent.com/p/AF1QipN_mtHWPQhSgcMNrGp5lEUBvtmndsvBHrU0NAXi=w900-h1482-p-k-no",
    picture_url3: "https://lh5.googleusercontent.com/p/AF1QipMq0w5tQ-wIci_flQG_EtEXyIFbYLfbWUu9Nb68=w900-h1482-p-k-no",
    itemReviewed: "Electrical Services"

  },
  {
    author_name: "Petr Svacina",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjX4Nh_Igzh2D42BLVBTQ6EgqKnhqLwHOvs53kWqf-izmleX6y2k=w90-h90-p-rp-mo-br100",
    rating: 5,
    relative_time_description: "a month ago",
    text: "Just had a fantastic crew come over to set up my Ring security system, complete with a four-camera CCTV and door/window sensors at my house. They nailed the installation and cleverly tweaked the sensor placements for better security—all on the house. Highly recommend their first-rate service!",
    url: "https://maps.app.goo.gl/hPspbv9DGsVFw3o96",
    itemReviewed: "Security System Installation"

  },
  {
    author_name: "Raphael Pedrini",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjXoXHjxGpyfahlxDR010ZQf3l-lDzaT6m6sT3Pw_lCjQv3VXZTm=w90-h90-p-rp-mo-br100",
    rating: 5,
    relative_time_description: "a month ago",
    text: "Really good service, very kind and efficient. Would recommend!",
    url: "https://maps.app.goo.gl/hPspbv9DGsVFw3o96",
    picture_url: "https://lh5.googleusercontent.com/p/AF1QipPf85laS9DAjaUsefiWHF4-QCFyE-K3k5XUV1Vz=w900-h1281-p-k-no",
    picture_url2: "https://lh5.googleusercontent.com/p/AF1QipMrvdX2naGBV_s7hTrtLGN8dUJkltQ4LxUjX7km=w900-h1281-p-k-no",
    itemReviewed: "Networking and Outlet Replacing"

  },
  {
    author_name: "Tom M.",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjXFuzM4KIgvIdF-Y4Cb58IHBjkJtYVbX6yXaH75Wmi3uPZkdKX-=w90-h90-p-rp-mo-br100",
    rating: 5,
    relative_time_description: "1 year ago",
    text: "Changed my fuse box and certified the work. He responds quickly and works even on weekends if needed. Excellent electrical services!",
    url: "https://maps.app.goo.gl/hPspbv9DGsVFw3o96",
    itemReviewed: "Electrical Repair"

  }
  // Add more reviews as needed
];



const ReviewList: React.FC = () => {
  // Calculate the average rating
  // const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
  // const averageRating = totalRating / reviews.length;

  const reviewSchemaData = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "name": "Ow! London Emergency Electrician and Home Automation",
    "review": reviews.map(review => ({
      "@type": "Review",
      "itemReviewed": {
        "@type": "Service",
        "name": review.itemReviewed,
      },
      "author": {
        "@type": "Person",
        "name": review.author_name,
        "image": review.profile_photo_url,
        "url": review.url
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": review.text,
      "datePublished": review.relative_time_description
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": '5',
      "reviewCount": '30',
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <div className='google-review-strip'>
      <div className="review-list">
        <h2>Google Reviews</h2>
        <GoogleReview reviews={reviews} />
        {/* <script type="application/ld+json">
          {JSON.stringify(reviewSchemaData, null, 2)}
        </script> */}
        <script type="application/ld+json">
        {JSON.stringify(reviewSchemaData)}
      </script>
      </div>
    </div>
  );
}

export default ReviewList;
