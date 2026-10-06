import Image from 'next/image';
import { notFound } from 'next/navigation';


const NewsDetails = async ({ params }: { params: { newsId: string } }) => {
    const { newsId } = await params;
    console.log(newsId);

    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`);
    const data = await res.json();
    console.log('Lets see the result', data);

    const news = data.data;
    console.log('news data', news);

    if(!news){
        notFound()
    }

    return (
        <div className='space-y-7'>

            <h1 className='text-3xl font-bold'>{news.title}</h1>

            <Image
                src={news.imageUrl}
                width={600}
                height={600}
                alt='news image'
            />

            <p>{news.text}</p>

        </div>
    )
};

export default NewsDetails;