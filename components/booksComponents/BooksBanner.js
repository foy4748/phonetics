import Image from "next/image";
import styles from '../../styles/BooksBanner.module.css';

const BooksBanner = () => {
    return (
        <div className="relative text-white">
            <div className={`${styles.banner_img}`}>
                <Image src='/BookBannerImg.jpeg' width={1000} height={0} className='h-[300px] md:h-[600px] w-full' alt='' />
            </div>
            <div className="text-center absolute top-12 md:top-1/4 left-3 md:left-1/4 right-3 md:right-1/4">
                <h2 className="text-2xl md:text-5xl font-bold">Get Your New Book With Best Price <br /> Find Your Book Now</h2>
                <p className="mt-2 md:mt-5 text-xs md:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunta sunt quaerat, eligendi ad, ipsum sit culpa porro fuga atque andersi delectus nostrum sapiente cupiditate.</p>
                <div className="form-control mt-5">
                    <div className="input-group justify-center">
                        <input type="text" placeholder="Search…" className=" w-1/2 md:w-full input input-bordered" />
                        <button className="btn btn-square w-1/5 bg-gradient-to-r from-blue-500 to-fuchsia-600 border-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksBanner;