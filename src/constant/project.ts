import { ProjectItemProps } from "@/types/project";

export const PROJECT_ITEMS_EN: ProjectItemProps[] = [
    {
        title: "visa-dashboard",
        slug: "visa-dashboard",
        description: "Tracking visa progress and sharing visa-related information, offering insights, guides, and community support.",
        image: "/images/projectImages/visa-dashoard.png",
        link_demo: "https://visadashboard.top",
        link_github: "https://github.com/Frank-Fan-AU/visa-dashboard",
        stacks: ["Next.js", "TypeScript", "TailwindCSS", "MongoDB", "AwsAmplify", "Amazon S3"],
        is_show: true,
        is_featured: true,
        updated_at: new Date("2024-03-15")
      },
      {
        title: "Monitor Data Screen",
        slug: "datascreen",
        description: "This project offers a 12-screen platform for O&M personnel, featuring real-time data visualization with customizable layouts and interactive charts.",
        image: "/images/projectImages/sparkwithmask.png",
        link_demo: "https://master.d198b3fe2208q6.amplifyapp.com",
        link_github: "https://github.com/Frank-Fan-AU/mobile-web-vue2",
        stacks: ["Vue.js", "TailwindCSS", "Ant Design", "Element UI", "AntV|G6"],
        is_show: true,
        is_featured: false,
        updated_at: new Date("2025-02-25")
      },
      {
        title: "monitor-mobile",
        slug: "monitor-mobile",
        description: "A responsive monitoring tool that adapts to both mobile and desktop platforms, supporting various types of monitoring metric displays.",
        image: "/images/projectImages/monitor-mobile-web-preview.png",
        link_demo: "https://master.d198b3fe2208q6.amplifyapp.com",
        link_github: "https://github.com/Frank-Fan-AU/mobile-web-vue2",
        stacks: ["Vue.js", "TailwindCSS", "Ant Design", "Element UI", "AntV|G6"],
        is_show: true,
        is_featured: false,
        updated_at: new Date("2024-03-15")
      },
]

export const PROJECT_ITEMS_ZH: ProjectItemProps[] = [
    {
        title: "签证仪表板",
        slug: "visa-dashboard",
        description: "跟踪签证进度并分享签证相关信息，提供见解、指南和社区支持。",
        image: "/images/projectImages/visa-dashoard.png",
        link_demo: "https://visadashboard.top",
        link_github: "https://github.com/Frank-Fan-AU/visa-dashboard",
        stacks: ["Next.js", "TypeScript", "TailwindCSS", "MongoDB", "AwsAmplify", "Amazon S3"],
        is_show: true,
        is_featured: true,
        updated_at: new Date("2024-03-15")
      },
      {
        title: "监控数据大屏",
        slug: "datascreen",
        description: "该项目为运维人员提供12屏平台，具有实时数据可视化功能，支持自定义布局和交互式图表。",
        image: "/images/projectImages/sparkwithmask.png",
        link_demo: "https://master.d198b3fe2208q6.amplifyapp.com",
        link_github: "https://github.com/Frank-Fan-AU/mobile-web-vue2",
        stacks: ["Vue.js", "TailwindCSS", "Ant Design", "Element UI", "AntV|G6"],
        is_show: true,
        is_featured: false,
        updated_at: new Date("2025-02-25")
      },
      {
        title: "移动端监控",
        slug: "monitor-mobile",
        description: "一个响应式监控工具，适配移动端和桌面端平台，支持各种类型的监控指标显示。",
        image: "/images/projectImages/monitor-mobile-web-preview.png",
        link_demo: "https://master.d198b3fe2208q6.amplifyapp.com",
        link_github: "https://github.com/Frank-Fan-AU/mobile-web-vue2",
        stacks: ["Vue.js", "TailwindCSS", "Ant Design", "Element UI", "AntV|G6"],
        is_show: true,
        is_featured: false,
        updated_at: new Date("2024-03-15")
      },
]

export const HOME_PROJECT_ITEMS_EN: ProjectItemProps[] = [
  {
    title: "visa-dashboard",
    slug: "visa-dashboard",
    description: `
    Designed and implemented a responsive user interface using React, Next.js, TypeScript, Tailwind CSS, and shadcn/ui.\n
    Created scalable RESTful API using Node.js, Express.\n
    Implemented end-to-end DevOps deployment using AWS Amplify. Configured custom do-mains via Route53 and integrated SSL certificates.\n
    The platform has supported over 200 registered users, with more than 2,000 visits in the past 7 days, demonstrating strong engagement and real-world impact.
    `,
    image: "/projectImages/visadashboard.png",
    link_demo: "https://visadashboard.top",
    link_github: "https://github.com/Frank-Fan-AU/visa-dashboard",
    stacks: ["React", "Next.js", "Express.js", "TypeScript", "TailwindCSS","shadcn/ui", "MongoDB","Contentful CMS", "AwsAmplify", "Amazon S3"],
    is_show: true,
    is_featured: true,
    updated_at: new Date("2024-03-15")
  },
  {
    title: "CL-Master",
    slug: "cl-master",
    description: `
    Built a full-stack AI platform that generates personalized cover letters using OpenAI, based on job descriptions and user input.\n
    Designed and implemented a clean, responsive frontend using React, Next.js (App Router), TypeScript, Tailwind CSS, and shadcn/ui to deliver an intuitive cross-device experience.\n
    Integrated OpenAI API to generate highly personalized\n
    Developed a full-stack payment system with Stripe, handling client-side checkout flows and server-side webhook validation.\n
    Deployed the platform on Vercel with environment configuration and performance optimiza-tion, achieving fast load times and high availability.`,
    image: "/projectImages/clmaster.png",
    link_demo: "https://visadashboard.top",
    link_github: "https://github.com/Frank-Fan-AU/visa-dashboard",
    stacks: ["React","Next.js", "TypeScript", "TailwindCSS","shadcn/ui","OpenAI API","Vercel"],
    is_show: true,
    is_featured: true,
    updated_at: new Date("2024-03-15")
  },
  {
    title:"Frank's Portfolio",
    slug:"frank-portfolio",
    description:`
    Developed a responsive portfolio website using React, Next.js, TypeScript, Tailwind CSS, and shadcn/ui to showcase my projects and skills.\n
    Integrated interactive 3D elements using Three.js to enhance user engagement and visual appeal.\n
    Integrated internationalization (i18n) to support both Chinese and English languages across the application.\n
    Built the content system with MDX to enable rich, component-based blog posts and documentation.\n
    Deployed the application on Vercel for seamless CI/CD and global edge network performance.
    `,
    image: "/projectImages/frankInfo.png",
    link_demo: "https://frank-portfolio.vercel.app",
    link_github: "https://github.com/Frank-Fan-AU/frank-portfolio",
    stacks: ["React","Next.js", "TypeScript", "TailwindCSS","shadcn/ui","Three.js","MDX","Vercel"],
    is_show: true,
    is_featured: true,
    updated_at: new Date("2024-03-15")
  }
]


export const HOME_PROJECT_ITEMS_ZH: ProjectItemProps[] = [
  {
    title: "签证仪表板",
    slug: "visa-dashboard",
    description: `
    使用React, Next.js, TypeScript, Tailwind CSS, shadcn/ui实现响应式用户界面。\n
    使用Node.js, Express构建可扩展的后端服务。\n
    使用AWS Amplify实现端到端DevOps部署。配置自定义域名并集成SSL证书。\n
    平台已支持超过200注册用户，过去7天访问量超过2,000次，展示出强劲的参与度和实际影响。
    `,
    image: "/projectImages/visadashboard.png",
    link_demo: "https://visadashboard.top",
    link_github: "https://github.com/Frank-Fan-AU/visa-dashboard",
    stacks: ["React", "Next.js", "Express.js", "TypeScript", "TailwindCSS","shadcn/ui", "MongoDB","Contentful CMS", "AwsAmplify", "Amazon S3"],
    is_show: true,
    is_featured: true,
    updated_at: new Date("2024-03-15")
  },
  {
    title: "CL-Master",
    slug: "cl-master",
    description: `
    构建了一个基于OpenAI的全栈AI平台，根据职位描述和用户输入生成个性化求职信。\n
    使用React, Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui设计和实现简洁、响应式的前端，提供直观的跨设备体验。\n
    集成OpenAI API生成高度个性化的内容。\n
    开发了一个全栈支付系统，使用Stripe处理客户端结账流程和后端Webhook验证。\n
    在Vercel上部署平台，配置环境变量和性能优化，实现快速加载时间和高可用性。`,
    image: "/projectImages/clmaster.png",
    link_demo: "https://visadashboard.top",
    link_github: "https://github.com/Frank-Fan-AU/visa-dashboard",
    stacks: ["React","Next.js", "TypeScript", "TailwindCSS","shadcn/ui","OpenAI API","Vercel"],
    is_show: true,
    is_featured: true,
    updated_at: new Date("2024-03-15")
  },
  {
    title: "Frank的个人作品集",
    slug: "frank-portfolio",
    description: `
    开发了一个响应式个人作品集网站，使用React、Next.js、TypeScript、Tailwind CSS和shadcn/ui，全面展示我的项目与技能。\n
    集成Three.js实现交互式3D元素，提升用户参与度和视觉体验。\n
    集成国际化的i18n支持，实现中英文双语切换。\n
    采用MDX构建内容系统，支持富组件化的博客和文档。\n
    应用部署在Vercel，实现无缝CI/CD和全球边缘网络高性能访问。
    `,
    image: "/projectImages/frankInfo.png",
    link_demo: "https://frank-portfolio.vercel.app",
    link_github: "https://github.com/Frank-Fan-AU/frank-portfolio",
    stacks: ["React","Next.js", "TypeScript", "TailwindCSS","shadcn/ui","Three.js","MDX","Vercel"],
    is_show: true,
    is_featured: true,
    updated_at: new Date("2024-03-15")
  },
]