import { BlogItemProps } from "@/types/blog";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MDXComponent from "./MDXComponent";

const BlogDetail = (
    {
        title,
        image,
        slug
    }: BlogItemProps
) => {
    console.log(slug);
    const docDir = path.join(process.cwd(), 'src', 'blogContent');
    const filePath = path.join(docDir, `${slug}.mdx`);
    const source = fs.readFileSync(filePath, 'utf8');
    const { content } = matter(source);
    return (
        <div>
            {source && (
                <div className="mt-5 space-y-6 leading-[1.8]">
                    <MDXComponent>{content}</MDXComponent>
                </div>
            )}
        </div>
    )
}

export default BlogDetail;