const ImageUpload = ({ UploadImageHandler }) => {
    const ShowImageHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            UploadImageHandler(file);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="relative group border border-white/10 bg-white/5 rounded-3xl p-8 shadow-xl shadow-black/30 hover:shadow-amber-500/20 backdrop-blur-2xl transition-all duration-500">
                {/* Gradient glow background */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-50 group-hover:opacity-70 transition-all duration-500 blur-xl pointer-events-none z-0" />

                <label
                    htmlFor="fileInput"
                    className="relative z-10 block cursor-pointer border-2 border-dashed border-amber-400/30 rounded-2xl p-10 text-center hover:border-amber-400 transition-all duration-300"
                >
                    <input
                        type="file"
                        id="fileInput"
                        className="hidden"
                        onChange={ShowImageHandler}
                    />
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-amber-400 via-orange-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-inner shadow-amber-400/30 animate-pulse">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 12V4m0 0L8 8m4-4l4 4"
                                />
                            </svg>
                        </div>
                        <span className="text-lg font-light text-gray-300">
                            Click or drag to upload your image
                        </span>
                    </div>
                </label>
            </div>
        </div>
    );
};

export default ImageUpload;
