import Link from "next/link";
import { Itype } from "../types/type";


const NavLinks = async() => {

    const res = await fetch('https://news-api-v2.vercel.app/api/categories');
    const data = await res.json();
    const navs:Itype[] = data.data
    
    const filterNavs = navs.filter(n => n.scrapable);

    return (
        <div className="flex justify-center gap-4">
            <Link href={'/'}>হোম</Link>
            {
                filterNavs.map((n, ind) => <Link key={ind} href={`/category/${n.slug}`}>{n.title}</Link>)
            }
        </div>
    );
};

export default NavLinks;