import bannermage from '../../Images/banner-image.png';
import Image from "next/image";

const TeacherBanner = () => {
    return (
        <div className="my-12 teacher-banner bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 p-4 min-h-[600px] items-center">
                <div className="image">
                    <Image src={bannermage} alt="bannerimage" />
                </div>
                <div className="text flex justify-center lg:justify-end items-center">
                    <div className="p-2 text-white font-serif">
                        <h1 className="text-center lg:text-right text-3xl lg:text-5xl">Teacher !</h1>
                        <h2 className="text-center lg:text-right text-lg lg:text-3xl">A Good Teacher Can Change Your Life</h2>
                        <p className="text-center lg:text-right text-2xl">Our Teachers are Qualityful, helpful, Co-operative.</p>
                        <p className="text-center lg:text-right">Find your teacher right now</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherBanner;