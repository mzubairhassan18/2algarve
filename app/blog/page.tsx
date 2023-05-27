import ClientOnly from "@/app/components/ClientOnly";
import Footer from "../components/Footer";
import Link from "next/link";
import PostPage from "../post/[postid]/page";
import Image from "next/image";
import BlogPost from "../components/BlogPost";

const BlogPage = async () => {
  const postsData = [
    {id: 1, imageSrc: "/images/1.jpg", title: "Another Article", date: "24 Feb, 2023"},
    {id: 2, imageSrc: "/images/1.jpg", title: "Another Article", date: "24 Feb, 2023"},
    {id: 3, imageSrc: "/images/1.jpg", title: "Another Article", date: "24 Feb, 2023"},
    {id: 4, imageSrc: "/images/1.jpg", title: "Another Article", date: "24 Feb, 2023"},
    {id: 5, imageSrc: "/images/1.jpg", title: "Another Article", date: "24 Feb, 2023"},
  ]

  return (
    <ClientOnly>
      <div className="relative block">
    <Image
      src="/images/aboutpic.png"
        width={300} height={200}  alt={""} unoptimized={true}
        className="w-full h-1/3 mb-5 -mt-10 "
      />
      <span className="absolute top-28 w-full block text-center text-5xl font-bold text-white">Blog</span>
    
    <div className="p-5
      px-24
      pt-24
      flex
      justify-around
      items-center4
      gap-10
      w-full" >
        
        {postsData.map((data) => { return (<BlogPost key={data.id} {...data}></BlogPost>)})}

      </div>
      </div>
      
      <Footer/>
    </ClientOnly>
  );
}
 
export default BlogPage;
