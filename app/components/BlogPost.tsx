'use client';

import Image from "next/image";
import Link from "next/link";

interface Props {
  id: number;
  imageSrc: string;
  title: string;
  date: string;
}

const BlogPost: React.FC<Props> = ({ id, date,imageSrc,title }) => {
  return ( 
    <Link href={"/post/"+id}><div className="w-[230px]  shadow-lg">
        <Image
        src={imageSrc}
        width={300} height={200}  alt={""} unoptimized={true}
        className="w-full  mb-2 -mt-10 "
      />
      <span className="bg-black text-white p-2 mb-2 border-r-2 text-xs ml-5">{date}</span>
      <h2 className="mt-5 text-2xl pl-5 font-bold" >{title}</h2>
      </div></Link>
   );
}
 
export default BlogPost;