import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        width={431}
        height={144}
        alt="logo"
        priority
        className="h-8 md:h-11 w-[146px]"
      />
    </Link>
  );
}
export default Logo;
