import Link from "next/link";

const BackLink = () => {
  return (
    <a className="pt-80">
      <Link href="/blog/" className=" pt-80 hover:underline">
        {'<'}Back
      </Link>
      
    </a>
  );
};

export default BackLink;
