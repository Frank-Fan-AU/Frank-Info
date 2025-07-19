import Container from "@/components/Container";
import { BLOG_ITEMS } from "@/constant/blog";
import BlogDetail from "@/components/BlogDetail";
import BackButton from "@/components/BackButton";
import PageHeading from "@/components/PageHeading";


const BlogDetailPage = async ({ params }: {params:Promise<{slug:string, lang:string}>}) => {

  const { slug, lang } = await params;
  const blog = BLOG_ITEMS.find((item) => item.slug === slug);
  
  if (!blog) {
      return <div>Blog not found</div>;
  }
    
      return(
        <Container data-aos='fade-up'>
            <BackButton url={`/${lang}/blog`} />
            <PageHeading title={blog.title} description={blog.description} />
            <BlogDetail {...blog} />
        </Container>

    )
};

export default BlogDetailPage;