const LoadingPage = () => {
    return (
        <div className="h-180 w-250 flex items-center justify-center bg-red-50">
            <div className="text-center">

                {/* Spinner */}
                <div className="mx-auto mb-5 h-12 w-12 animate-spin rounded-full border-4 border-red-200 border-t-red-600"></div>

                {/* Loading text */}
                <h2 className="text-xl font-semibold text-red-600">
                    Loading...
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                    Please wait a moment
                </p>

            </div>
        </div>
    );
};

export default LoadingPage;