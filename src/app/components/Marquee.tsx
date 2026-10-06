import Link from "next/link";
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface hType {
    id: string,
    title: string
}

const Marquee = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10')
    const data = await res.json();
    const headLines: hType[] = data.data;

    return (
        <div className="bg-red-700 text-white m-4">

            <div className="flex max-w-7xl mx-auto">
                <div className="bg-red-800 py-1 px-5 font-bold">সর্বশেষ</div>

                <MarqueeText className="py-1" direction="right" duration={10}>
                    {
                        headLines.map(h => <Link key={h.id} href={`/news/${h.id}`}><span>
                            <span className="hover:underline">{h.title}</span>
                            <span className="mx-5">•</span>
                        </span>
                        </Link>)
                    }
                </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;