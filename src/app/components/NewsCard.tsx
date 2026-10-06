import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface newsType {
    id: string,
    title: string,
    description: string,
    category: string,
    imageUrl: string,
    imageAlt: string,
}

const NewsCard = ({ news }: { news: newsType }) => {

    return (
        <Link href={`/news/${news.id}`}>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <Image
                        src={news.imageUrl}
                        width={600}
                        height={600}
                        alt='news image'
                    />
                </figure>
                <div className="card-body">

                    <p className="text-red-500 font-semibold">{news.category}</p>
                    <h2 className="card-title">{news.title}</h2>
                    <p>{news.description}</p>

                </div>
            </div>
        </Link>
    );
};

export default NewsCard;