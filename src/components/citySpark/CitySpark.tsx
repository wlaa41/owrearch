import Image from "next/image";

const CitySpark: React.FC = () => {
  return (
    <div className="citySpark_stripe">
      <h2 className="citySpark_stripe_h2">CitySpark London&apos;s 1st Prize Winner</h2>
      <h3 className="citySpark_stripe_h3">
        Reinventing Math Education with Robotics, AI, & VR: First Prize at CitySpark and Best Startup Idea in London Competition
      </h3>
      <div className="citySpark_container">
        <div className="citySpark_title-container"></div>
        <div className="citySpark_image-container">
          <Image
            src="/images/cityspark/citySpark-price-5000-will-jamous-ShortArrow.webp"
            className="citysparkImgeArrows citysparkImgeArrows_short"
            alt="CitySpark Short Arrow"
            width={500}
            height={300}
          />
          <Image
            src="/images/cityspark/citySpark-price-5000-will-jamous-no-arrows-no-shadow.webp"
            className="citysparkImge"
            alt="CitySpark"
            width={500}
            height={300}
          />
          <Image
            src="/images/cityspark/citySpark-price-5000-will-jamous-LongArrow.webp"
            className="citysparkImgeArrows citysparkImgeArrows_Long"
            alt="CitySpark Long Arrow"
            width={500}
            height={300}
          />
        </div>
      </div>
      <p className="citySpark_para">
        In a competitive landscape, this project secured first place in the &quot;Maker&quot; category at the LondonVenture competition, showcasing a
        unique blend of robotics, VR, and a math simulator integrated into an interactive website. Designed to revolutionize math education, it
        uses advanced technologies to turn abstract concepts into hands-on learning experiences. The project distinguished itself among a field
        of strong contenders by demonstrating a practical, innovative approach to education, underscoring the potential of technology to enhance
        learning. This victory in London underscores the project&apos;s impact and the effectiveness of combining education with cutting-edge
        technology.
      </p>
    </div>
  );
};

export default CitySpark;
