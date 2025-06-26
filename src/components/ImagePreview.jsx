import Loading from "./Loading";

const ImagePreview = (props) => {
    return (
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl mx-auto px-4 animate-fade-in-elegant">
            {/* Image Card */}
            {[
                { title: "Original Image", img: props.uploaded, bgFrom: "gray-800", bgTo: "gray-700", fallback: "No Image Selected" },
                { title: "Enhanced Image", img: props.enhanced, bgFrom: "amber-900", bgTo: "orange-800", fallback: "No Enhanced Image", isLoading: props.loading }
            ].map(({ title, img, bgFrom, bgTo, fallback, isLoading }, i) => (
                <div
                    key={i}
                    className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden group hover:shadow-amber-400/20 transition-all duration-700"
                >
                    <div className={`text-xl font-semibold text-center bg-gradient-to-r from-${bgFrom} to-${bgTo} text-white py-4 border-b border-white/10 tracking-wide`}>
                        {title}
                    </div>

                    <div className="relative w-full h-[22rem] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
                        {img && !isLoading ? (
                            <img
                                src={img}
                                alt={title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        ) : isLoading ? (
                            <div className="h-full flex items-center justify-center">
                                <Loading />
                            </div>
                        ) : (
                            <span className="text-gray-400 font-medium text-lg">{fallback}</span>
                        )}

                        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/5 via-white/0 to-white/5 opacity-10 pointer-events-none" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImagePreview;