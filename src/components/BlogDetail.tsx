
import { BlogItemProps } from "@/types/blog";
import MDXComponent from "./MDXComponent";

interface BlogDetailProps extends BlogItemProps {
  content: string;
}

const BlogDetail = ({
    title,
    image,
    slug,
    content
}: BlogDetailProps) => {
    return (
        <div>
            {content && (
                <div className="mt-5 space-y-6 leading-[1.8]">
                    <MDXComponent>{content}</MDXComponent>
                </div>
            )}
        </div>
    );
}

export default BlogDetail;