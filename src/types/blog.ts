export interface BlogItemProps {
    title: {
      en: string;
      zh: string;
    };
    slug: string;
    description: {
      en: string;
      zh: string;
    };
    image?: string;
    is_show: boolean;
    is_featured: boolean;
    updated_at: Date;
    tags: string[];
  }
  
  export interface BlogsProps {
    blogs: BlogItemProps[];
  } 