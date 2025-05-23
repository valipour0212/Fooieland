type BlogPostType = {
    id: number;
    title: string;
    subtitle: string;
    author: {
        name: string;
        avatar: string;
    };
    published_at: string;
    image: string;
    content: string;
};
