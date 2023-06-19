import Link from "next/link";

export default function NavBar () {
    return(
        <>
        <nav>
            <Link href="/">
                <div>통판보기</div>
            </Link>
            <Link href="/artist">
                <div>통판등록</div>
            </Link>
            <div>테그123</div>
            <div>뭐올리지</div>
        </nav>
        <style jsx>{`
        nav{
            display : flex;
        }
        div{
            padding : 10px;
        }
        `}</style>
        </>
    )
}