import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
  layoutFill?: boolean;  // Optional prop to decide if layout should be "fill"
  objectFitCover?: boolean;  // Optional prop to decide if objectFit should be "cover"
  objectPositionCenter?: boolean;  // Optional prop to decide if objectPosition should be "center"
  width?: number;  // Optional width, used when not using layout="fill"
  height?: number;  // Optional height, used when not using layout="fill"
};

const CoverImage = ({
  title,
  src,
  slug,
  layoutFill,
  objectFitCover,
  objectPositionCenter,
  width,
  height
}: Props) => {
  const imageProps = {
    src: src,
    alt: `Cover Image for ${title}`,
    className: cn("card-img-top", { "img-hover-zoom": slug }),
  };

  // Apply conditional properties based on the layoutFill prop
  if (layoutFill) {
    Object.assign(imageProps, {
      layout: "fill",
      objectFit: objectFitCover ? "cover" : undefined,
      objectPosition: objectPositionCenter ? "center" : undefined,
    });
  } else {
    Object.assign(imageProps, {
      width: width || 1600,  // Default width if not provided
      height: height || 900,  // Default height if not provided
    });
  }

  const image = <Image {...imageProps} />;

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title} style={{ display: 'block', height: '100%' }}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
