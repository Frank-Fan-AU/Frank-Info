export interface BlogItemProps {
    title: string;
    slug: string;
    description: string;
    image?: string;
    is_show: boolean;
    is_featured: boolean;
    updated_at: Date;
    tags: string[];
  }
  
  export interface BlogsProps {
    blogs: BlogItemProps[];
  } 