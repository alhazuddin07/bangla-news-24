import NewsCard from "@/app/components/NewsCard";
import { notFound } from "next/navigation";

interface idType {
    id: string,
    title: string,
    description: string,
    category: string,
    imageUrl: string,
    imageAlt: string,
}


const CategoryNews = async({ params }: {params: {id: string}}) => {
    const { id } = await params;
    
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${id}`);
    const data = await res.json();
    const categoryNews: idType[] = data.data;

    if(!categoryNews){
        notFound()
    }


    return (
        <div>
            <h1 className="text-2xl font-bold border-b-2 border-red-700 mb-5">{data.title}</h1>

            <div className="grid grid-cols-3 gap-5">
                {categoryNews.map(news => <NewsCard key={news.id} news={news}/>)}
            </div>

        </div>
    );
};

export default CategoryNews;