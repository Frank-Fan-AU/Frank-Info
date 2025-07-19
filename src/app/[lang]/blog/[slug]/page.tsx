import Container from "@/components/Container";
import { BLOG_ITEMS_EN, BLOG_ITEMS_ZH } from "@/constant/blog";
import BlogDetail from "@/components/BlogDetail";
import BackButton from "@/components/BackButton";
import PageHeading from "@/components/PageHeading";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const BlogDetailPage = async ({ params }: {params:Promise<{slug:string, lang:string}>}) => {

  const { slug, lang } = await params;
  const blogList = lang === 'zh' ? BLOG_ITEMS_ZH : BLOG_ITEMS_EN;
  const blog = blogList.find((item) => item.slug === slug);
  
  if (!blog) {
      return <div>Blog not found</div>;
  }

  // 根据语言选择对应的文件夹
  const langFolder = lang === 'zh' ? 'ch' : 'en';
  const docDir = path.join(process.cwd(), 'src', 'blogContent', langFolder);
  const filePath = path.join(docDir, `${slug}.mdx`);
  
  let content = '';
  try {
    const source = fs.readFileSync(filePath, 'utf8');
    const { content: parsedContent } = matter(source);
    content = parsedContent;
  } catch (error) {
    console.error(`Blog content not found for slug: ${slug} in language: ${lang}`);
    content = lang === 'zh' ? '博客内容未找到' : 'Blog content not found';
  }

    
  return(
      <Container data-aos='fade-up'>
          <BackButton url={`/${lang}/blog`} />
          <PageHeading 
            title={blog.title} 
            description={blog.description} 
          />
          <BlogDetail {...blog} content={content} />
      </Container>

  )
};

export default BlogDetailPage;