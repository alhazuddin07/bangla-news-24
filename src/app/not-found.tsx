import Link from 'next/link';


const NotFoundPage = () => {
    return (
        <div className="w-250 h-180 rounded-2xl flex items-center justify-center bg-red-50 px-4">
            <div className="text-center">

                {/* 404 */}
                <h1 className="text-[120px] md:text-[180px] font-black leading-none text-red-600 drop-shadow-sm">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-2xl md:text-4xl font-bold text-gray-900">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-3 max-w-md mx-auto text-gray-600">
                    Oops! The page you are looking for doesn&apos;t exist
                    or may have been moved.
                </p>

                {/* Button */}
                <Link
                    href="/"
                    className="inline-block mt-8 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-red-700 hover:shadow-lg"
                >
                    Back to Home
                </Link>

            </div>
        </div>
    );
};

export default NotFoundPage;