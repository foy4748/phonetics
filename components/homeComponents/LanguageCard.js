import Link from "next/link";
export default function LanguageCard() {
  return (
    <div className="">
      <div className="carousel w-full rounded-md">
        <div id="item1" className="carousel-item w-full relative">
          <img
            src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Library-Wallpaper-Free-Download.jpg"
            className="w-full brightness-50"
          />
          <div className="text-white absolute top-20 lg:top-48 left-20">
            <h1 className="text-6xl">Phonetics</h1>
            <p className="text-xl lg:text-2xl">
              A leading foreign language learning platform
            </p>
            <p className="text-xl">Connecting people across the world</p>
            <Link href="/lessons">
              <button className="btn btn-primary mt-4">Lessons</button>
            </Link>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full relative">
          <img
            src="https://www.inquirer.com/resizer/F8xkqCivbCRwtDe_rXRRaeEnpuY=/arc-anglerfish-arc2-prod-pmn/public/AEDHAROSANFP3K32SKCAW2ZBPA.jpg"
            className="w-full brightness-50"
          />
          <div className="text-white absolute top-20 lg:top-48 left-20">
            <h1 className="text-6xl">Phonetics</h1>
            <p className="text-xl lg:text-2xl">
              A leading foreign language learning platform
            </p>
            <p className="text-xl">Connecting people across the world</p>
            <Link href="/lessons">
              <button className="btn btn-primary mt-4">Lessons</button>
            </Link>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full relative">
          <img
            src="https://img.freepik.com/premium-photo/students-sitting-grass-studying-together-park_53419-10068.jpg?w=2000"
            className="w-full brightness-50"
          />
          <div className="text-white absolute top-20 lg:top-48 left-20">
            <h1 className="text-6xl">Phonetics</h1>
            <p className="text-xl lg:text-2xl">
              A leading foreign language learning platform
            </p>
            <p className="text-xl">Connecting people across the world</p>
            <Link href="/lessons">
              <button className="btn btn-primary mt-4">Lessons</button>
            </Link>
          </div>
        </div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide relative"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner relative w-full overflow-hidden">
            <div className="carousel-item active relative float-left w-full">
              <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                className="block w-full"
                alt="..."
              />
              <div className="carousel-caption hidden md:block absolute text-center">
                <h5 className="text-xl">First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                className="block w-full"
                alt="..."
              />
              <div className="carousel-caption hidden md:block absolute text-center">
                <h5 className="text-xl">Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                className="block w-full"
                alt="..."
              />
              <div className="carousel-caption hidden md:block absolute text-center">
                <h5 className="text-xl">Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
      {/* <div className="hero min-h-screen" style={{ backgroundImage: `url(https://www.pixelstalk.net/wp-content/uploads/2016/08/Library-Wallpaper-Free-Download.jpg)` }}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-6xl font-bold">Language Learning <br /> Platform</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
      <div className="mx-auto md:max-w-[1240px] absolute flex justify-end transform left-5 right-5 top-3/4">
      <a href="#slide4" className="btn btn-circle bg-info mr-3">❮</a>
      <a href="#slide2" className="btn btn-circle bg-info">❯</a>
    </div>
    </div>
  </div>
</div> */}
    </div>
  );
}
