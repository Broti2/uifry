import Image from 'next/image';
import logo from '../public/logo.svg';
import star from '../public/Star 1.svg';
import arrow from '../public/Vector 1.svg';
import play from '../public/play.svg';
import iphone from '../public/iPhone.svg';
import iphonemid from '../public/iPhone-mid.svg';
import tropy from '../public/Group 1.svg';
import bankmoney from '../public/Group 2.svg';
import star1 from '../public/star-05.png';
import cube1 from '../public/cube-02.png';
import cube2 from '../public/cube-04.png';
import Link from 'next/link';
import Blur from './components/Blur';
import Ring from './components/Ring';
import onhold from '../public/On Hold.png';
import bell from '../public/bell.svg';
import star3 from '../public/star3.svg';
import ellips1 from '../public/Ellipse 41.png';
import ellips2 from '../public/Ellipse 42.png';
import ellips3 from '../public/Ellipse 43.png';
import ellips4 from '../public/Ellipse 44.png';
import ellips5 from '../public/Ellipse 45.png';
import group1 from '../public/Group 27.png';
import group2 from '../public/Group 28.png';
import group3 from '../public/Group 29.png';
import group4 from '../public/Group 30.png';
import group5 from '../public/Group 31.png';
import iphone13 from '../public/iPhone13.png';
import apple from '../public/apple.svg';
import msg from '../public/msg.svg';
import call from '../public/call.svg';

export default function Home() {
  return (
    <>
      <header className="md:px-10 lg:px-40 h-[120vh]">
        <nav className="flex w-full py-6 justify-between ">
          <div className="flex">
            <Link href={'/'}>
              <div className="flex mr-10">
                <Image
                  className="w-[34px] mr-2 h-[34px]"
                  height={34}
                  width={34}
                  alt=""
                  src={logo}
                ></Image>
                <h1 className=" font-bold text-3xl">uifry</h1>
              </div>
            </Link>
            <ul className="flex py-1 text-balance text-lg font-sans font-semibold space-x-9">
              <Link href={'/'}>
                <li className="font-black text-[--pink]">Homes</li>
              </Link>
              <Link href={'#'}>
                <li>About Us</li>
              </Link>
              <Link href={'#'}>
                <li>Pricing</li>
              </Link>
              <Link href={'#'}>
                <li>Features</li>
              </Link>
            </ul>
          </div>
          <button className="h-[60px] w-[180px] rounded-md  bg-black text-white">
            Download
          </button>
        </nav>
        <Image
          className="absolute w-[64px] h-[64px] top-12 right-12"
          alt=""
          width={64}
          height={64}
          src={star}
        ></Image>
        <Image
          className="absolute w-[48px] h-[48px] top-24 left-12 rotate-45"
          alt=""
          width={48}
          height={48}
          src={star}
        ></Image>
        <div className="w-[55%]  relative">
          <div className="w-[317px] h-[230px]  float-right mr-40 blur-xl  ">
            <div className="w-[284px] mix-blend-multiply h-[153px] absolute right-0    rounded-[50%]  bg-[--red]"></div>
            <div className="w-[290px] mix-blend-multiply h-[153px] absolute left-0 bottom-5    rounded-[60%]  bg-[--yellow]"></div>
          </div>
          <h1 className="font-black text-6xl top-14 absolute z-10">
            Make The Best Financial Decisions
          </h1>
          <p className="absolute  text-xl top-48 opacity-70">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className="absolute w-[374px] h-[60px] top-[17rem] flex justify-between ">
            <div className=" w-[180px] h-[60px] bg-black text-white flex justify-center rounded-lg">
              <div className="py-4 px-1">get started</div>{' '}
              <Image
                className="w-[24px]"
                width={24}
                height={24}
                alt=""
                src={arrow}
              ></Image>
            </div>
            <div className="w-[154px] h-[29px] py-4 flex">
              <Image
                className="w-[29px] h-[29px]"
                width={29}
                height={29}
                alt=""
                src={play}
              ></Image>
              <div className="py-1 px-2">Watch Video</div>
            </div>
          </div>
        </div>
        <div className="absolute top-20 right-0 w-[725px] overflow-hidden  h-[725px]  ">
          <div className="w-[383.17px] h-[551.56px] absolute right-20  top-8  border-black rounded-[50%] -rotate-45 border-[1px]"></div>
          <div className="w-[383.17px] h-[551.56px] absolute right-28   top-16 border-black rounded-[50%] -rotate-45 border-[1px]"></div>
          <div className="w-[383.17px] h-[551.56px] absolute right-36   top-24 border-black rounded-[50%] -rotate-45 border-[1px]"></div>
          <div className="w-[397.43px] h-[214.11px] rounded-[50%] absolute bottom-24 left-40 blur-xl rotate-[150deg] bg-[--red]"></div>
          <Image
            className="w-[40px] h-[40px] bottom-20 left-28 absolute"
            width={48}
            height={48}
            alt=""
            src={star}
          ></Image>

          <Image
            className="top-28 left-72 absolute w-[420px] h-[700px] -rotate-[15deg]"
            width={249}
            height={505}
            alt=""
            src={iphone}
          ></Image>
          <Image
            className="top-14 left-40 absolute w-[420px] h-[700px] -rotate-[15deg]"
            width={249}
            height={505}
            alt=""
            src={iphonemid}
          ></Image>
          <Image
            className="-top-5 left-5 absolute w-[420px] h-[700px] -rotate-[15deg]"
            width={249}
            height={505}
            alt=""
            src={iphone}
          ></Image>
        </div>
        <div className="absolute  left-36 bottom-44">
          <div className="absolute z-10  flex -rotate-[25deg] ">
            <h1 className=" text-9xl text-black font-black">A</h1>
            <div className=" flex w-[550px] bg-black -mx-9 my-[1.1rem] h-[93px] rounded-r-md ">
              <div className="text-white w-3/5 flex py-5">
                <Image
                  className="m-2 w-[33px] h-[33px] "
                  width={31.37}
                  height={31.37}
                  alt=""
                  src={tropy}
                ></Image>
                <div className="text-balance font-sans text-sm">
                  <h1 className="font-semibold">Achivements</h1>
                  <p>best finance app on playstore</p>
                </div>
                <div className="h-[60px] py-2 border-white border-l-2 rotate-[20deg]  m-5 -my-1"></div>
              </div>
              <div className="text-white w-3/5 flex py-5">
                <Image
                  className="m-2 w-[33px] h-[33px] "
                  width={31.37}
                  height={31.37}
                  alt=""
                  src={bankmoney}
                ></Image>
                <div className="text-balance font-sans text-sm">
                  <h1 className="font-semibold">Finance</h1>
                  <p>Most popular accounting app</p>
                </div>
              </div>
            </div>
          </div>
          <div className="z-0 w-[400px] h-[90px] bg-[--red] absolute -bottom-[7.5rem] left-[14rem]  -rotate-45 rounded-l-xl flex">
            <div className=" border-r-[40px] border-l-transparent border-r-transparent border-t-[100px] -m-[1px] border-t-white w-0 h-0 "></div>
            <h1 className="font-sans font-black px-10 py-8">
              make the best financial decisions
            </h1>
          </div>
          <div className="flex -z-10 h-[84px] w-[300px] bg-[--red] absolute -bottom-[15.2rem] left-[20rem] ">
            {' '}
            <div className="ml-16 border-l-2 h-full border-l-black"></div>
            <div className="p-3 ">
              {' '}
              <Image alt="" width={60} height={60} src={star}></Image>
            </div>
            <div className="border-l-2 h-full border-l-black"></div>
            <div className="py-5 px-4">
              <h1 className="font-bold">Uifry Premium</h1>
              <p className="font-semibold">free trial</p>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full   relative">
        <div className="relative h-[85vh] overflow-hidden w-full ">
          <div className=" w-[450px]   absolute left-20   ">
            <Image alt="" src={star}></Image>
            <div className="w-[393px] h-[285px] rotate-180 absolute top-[140px] left-[15%]    blur-xl  ">
              <div className="w-[352px] mix-blend-multiply h-[189px] absolute right-0    rounded-[50%]  bg-[--red]"></div>
              <div className="w-[359px] mix-blend-multiply h-[189px] absolute left-0 bottom-5    rounded-[60%]  bg-[--yellow]"></div>
            </div>
            <div className="w-[400px] h-[550px] absolute left-36  top-8  border-black rounded-[50%] -rotate-45 border-[1px]"></div>
            <div className="w-[400px] h-[550px] absolute left-28   top-16 border-black rounded-[50%] -rotate-45 border-[1px]"></div>
            <div className="w-[400px] h-[550px] absolute left-20   top-24 border-black rounded-[50%] -rotate-45 border-[1px]"></div>
            <Image
              className="z-10 absolute left-32 top-8"
              alt=""
              src={iphone}
            ></Image>
          </div>
        </div>
        <div className=" w-2/5 absolute pr-20 right-0 top-28 overflow-hidden">
          <h1 className="font-semibold text-[--red]">FEATURES</h1>
          <h1 className="text-5xl font-black py-3 ">Uifry Premium</h1>
          <h1 className="flex text-xl font-bold py-2">
            <Image
              className="w-[24px] h-[24px] m-1"
              width={24}
              height={24}
              alt=""
              src={star1}
            ></Image>
            Budgeting Intervals
          </h1>
          <div className="relative h-16">
            <p className="opacity-70 absolute z-10  m-1 font-sans font-semibold ">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <h1 className="flex text-xl font-bold py-2">
            <Image
              className="w-[24px] h-[24px] m-1"
              width={24}
              height={24}
              alt=""
              src={cube1}
            ></Image>
            Budgeting Intervals
          </h1>
          <p className="opacity-70 m-1 font-sans font-semibold ">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <h1 className="flex text-xl font-bold py-4">
            <Image
              className="w-[24px] h-[24px] m-1"
              width={24}
              height={24}
              alt=""
              src={cube2}
            ></Image>
            Budgeting Intervals
          </h1>
          <p className="opacity-70  m-1 font-sans font-semibold ">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className="absolute top-16 -right-[50%]">
            <Blur />
          </div>
        </div>
        <div className="relative flex ">
          <div className="md:w-[50%] h-[90vh] relative">
            <div className="w-full pt-48 pl-40">
              <h1 className="text-[--red] text-xl font-semibold">ADVANTAGES</h1>
              <h1 className=" text-5xl  font-black ">Why Choose Uifry?</h1>
              <div className="flex py-5">
                <Image
                  className="mr-3"
                  width={48}
                  height={48}
                  alt=""
                  src={bell}
                ></Image>{' '}
                <h1 className="py-4 text-3xl font-bold ">
                  Clever Notifications
                </h1>
              </div>
              <p className="opacity-70 text-xl font-sans ">
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.
              </p>
            </div>
          </div>
          <div className="md:w-[55%] h-[90vh] overflow-hidden float-right relative ">
            <Image className="absolute right-0" alt="" src={star}></Image>
            <div className="absolute bottom-28 left-40 z-0">
              <Blur />
            </div>
            <div>
              <Ring />
            </div>{' '}
            <Image
              className="z-10 absolute right-28  top-5"
              width={470}
              height={950}
              alt=""
              src={iphonemid}
            ></Image>{' '}
            <div className="absolute z-10 top-[16rem] right-20">
              <Image width={400} height={101.47} alt="" src={onhold}></Image>
            </div>
          </div>
        </div>
        <div className="relative flex h-[90vh]">
          <div className="w-[50%] relative">
            <Ring />
            <div className="absolute bottom-40 left-52">
              <Blur />
            </div>
            <Image
              className="absolute right-20"
              width={48}
              height={48}
              alt=""
              src={star}
            ></Image>
            <div className="relative z-10 left-48">
              <Image className="absolute z-10" alt="" src={iphone}></Image>
              <div className="w-[270px] h-[170px] rounded-xl absolute top-40 left-20 z-10 bg-black">
                {' '}
                <div className="p-4">
                  <div className="flex justify-between ">
                    <div className="flex ">
                      <div className="mr-[2px]">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 34 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M26.3829 10.8852C26.1564 10.6651 25.8387 10.5651 25.5277 10.6163C25.2162 10.6672 24.9472 10.8628 24.8027 11.1434C24.3057 12.1089 23.6745 12.9961 22.9318 13.7805C23.0058 13.2139 23.0431 12.6439 23.0431 12.0724C23.0431 10.9759 22.8961 9.84742 22.6061 8.71805C21.6527 5.00853 19.1525 1.87144 15.7468 0.111205C15.4503 -0.0419942 15.097 -0.0366153 14.8053 0.125549C14.5136 0.287779 14.3226 0.585213 14.2964 0.917908C14.0309 4.28895 12.2945 7.35586 9.52981 9.33424C9.49322 9.3606 9.4569 9.38729 9.42057 9.41386C9.34534 9.46891 9.27441 9.52097 9.20814 9.56467C9.19778 9.57157 9.18749 9.57861 9.17739 9.58585C7.43861 10.8308 6.00391 12.4903 5.0282 14.3854C4.03675 16.3131 3.53406 18.3818 3.53406 20.5336C3.53406 21.6299 3.68101 22.7583 3.97088 23.8879C5.50055 29.8417 10.8585 33.9999 17.0004 33.9999C24.4253 33.9999 30.4659 27.9589 30.4659 20.5336C30.4659 16.872 29.0159 13.4454 26.3829 10.8852Z"
                            fill="#fff"
                          />
                          <circle cx="16" cy="20" r="4" fill="black" />
                        </svg>
                      </div>
                      <h1 className="text-white font-bold ">uifry</h1>
                    </div>
                    <h1 className="text-white font-bold italic text-xl">
                      VISA
                    </h1>
                  </div>
                  <h1 className="text-white pt-16">0000 8888 2222 3333</h1>
                  <div className="text-white flex py-2">
                    <p className="text-[0.5rem] py-[0.15rem] mr-1">
                      VALID THRU
                    </p>
                    <p className="text-xs opacity-90">07/24</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%] my-40">
            <div className="pr-52">
              <div className="flex py-8">
                <Image
                  className="mr-3"
                  width={48}
                  height={48}
                  alt=""
                  src={star3}
                ></Image>{' '}
                <h1 className="text-4xl font-bold py-1">Fully Customizable</h1>
              </div>
              <p className="opacity-70 font-sans text-xl">
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.
              </p>
            </div>
            <Image
              className="absolute w-[60px] h-[60px] bottom-20 right-64"
              width={50}
              height={50}
              alt=""
              src={star}
            ></Image>
          </div>
        </div>
        <div className="relative   w-full h-[100vh]">
          <div className="flex justify-center">
            <div className="w-[30%] ">
              <h1 className="text-center text-xl font-semibold">TESTIMOIAL</h1>
              <h1 className="text-5xl font-black text-center">
                What Our Users Say About Us?
              </h1>
            </div>
          </div>
          <div className="flex">
            <div className="w-[50%] h-full relative">
              <div className="z-10 relative">
                <Ring />
              </div>{' '}
              <div className="absolute left-[20%] -bottom-20">
                <Blur />
              </div>
              <div className="w-[450px] h-[450px] flex  flex-col justify-center  relative left-32 top-24">
                {' '}
                <Image className=" mx-auto z-10" alt="" src={ellips1}></Image>
                <Image
                  className="absolute z-10 right-0 top-0"
                  alt=""
                  src={ellips2}
                ></Image>
                <Image
                  className="absolute z-10 left-0 top-0"
                  alt=""
                  src={ellips3}
                ></Image>
                <Image
                  className="absolute z-10 right-0 bottom-0"
                  alt=""
                  src={ellips4}
                ></Image>
                <Image
                  className="absolute m-7 z-10 left-0 bottom-0"
                  alt=""
                  src={ellips5}
                ></Image>
                <div className="h-[100px] w-[100px] bg-[--red] text-8xl rounded-full font-serif font-black text-center py-5 absolute z-20 right-16 text-white">
                  <h1>&ldquo;</h1>
                </div>
              </div>
            </div>
            <div className="w-[45%] py-48 px-10 h-full relative">
              <h1 className="text-4xl font-bold">
                The Best Financial Accounting App Ever!{' '}
              </h1>
              <p className="text-xl opacity-70  py-5">
                &ldquo;Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.&rdquo;
              </p>
              <div className="flex w-full space-x-1">
                <Image
                  className="inset-0 object-contain"
                  width={35}
                  height={35}
                  alt=""
                  src={group2}
                ></Image>
                <Image
                  className="inset-0 object-contain opacity-60"
                  width={30}
                  height={30}
                  alt=""
                  src={group1}
                ></Image>

                <Image
                  className="inset-0 object-contain opacity-60"
                  width={30}
                  height={30}
                  alt=""
                  src={group3}
                ></Image>
                <Image
                  className="inset-0 object-contain opacity-60"
                  width={30}
                  height={30}
                  alt=""
                  src={group4}
                ></Image>
                <Image
                  className="inset-0 object-contain opacity-60"
                  width={30}
                  height={30}
                  alt=""
                  src={group5}
                ></Image>
              </div>
              <div>
                <h1 className="text-xl font-bold p-2">Niok Jonas</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-fit px-40 py-10">
          <h1 className="text-[--red] py-2 font-semibold text-2xl">FAQ</h1>
          <h1 className="text-5xl pb-10 font-black md:w-[50%] ">
            Frequently Asked Questions
          </h1>
          <div className="grid gap-5 w-full grid-cols-2">
            <div className="rounded-xl py-10 px-8 text-white w-full h-full bg-[--red]">
              <h1 className="text-3xl font-sans font-bold pr-16">
                The Best Financial Accounting App Ever!
              </h1>
              <p>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="rounded-xl  py-10 px-8  w-full h-full">
              <h1 className="text-3xl font-sans font-bold pr-16">
                The Best Financial Accounting App Ever!
              </h1>
              <p>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="rounded-xl  py-10 px-8  w-full h-full">
              <h1 className="text-3xl font-sans font-bold pr-16">
                The Best Financial Accounting App Ever!
              </h1>
              <p>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="rounded-xl  py-10 px-8 text-white w-full h-full bg-[--red]">
              <h1 className="text-3xl font-sans font-bold pr-16">
                The Best Financial Accounting App Ever!
              </h1>
              <p>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="rounded-xl py-10 px-8 text-white w-full h-full bg-[--red]">
              <h1 className="text-3xl font-sans font-bold pr-16">
                The Best Financial Accounting App Ever!
              </h1>
              <p>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="rounded-xl  py-10 px-8  w-full h-full">
              <h1 className="text-3xl font-sans font-bold pr-16">
                The Best Financial Accounting App Ever!
              </h1>
              <p>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
          <div className="relative flex justify-center py-32">
            <div className="relative w-[90%] rounded-xl py-8 overflow-hidden h-fit bg-black">
              <div className="absolute z-0 -left-[35%] top-[45%]">
                <div className=" w-[400px]   absolute left-20   ">
                  <div className="w-[350px] h-[500px] absolute left-36  top-8  border-white rounded-[50%] -rotate-45 border-[1px]"></div>
                  <div className="w-[350px] h-[500px] absolute left-28   top-16 border-white rounded-[50%] -rotate-45 border-[1px]"></div>
                  <div className="w-[350px] h-[500px] absolute left-20   top-24 border-white rounded-[50%] -rotate-45 border-[1px]"></div>
                </div>
              </div>
              <div className="absolute bottom-20 -right-20">
                <Blur></Blur>
              </div>
              <div className="absolute right-[40%]">
                <svg
                  width="62"
                  height="59"
                  viewBox="0 0 62 59"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.0001 0.70874L32.5049 30.6377L61.4339 22.8202L33.4348 33.4998L49.8092 58.5973L31.0001 35.2687L12.191 58.5973L28.5654 33.4998L0.566313 22.8202L29.4954 30.6377L31.0001 0.70874Z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <div className="absolute left-[35%] bottom-[20%]">
                <svg
                  width="59"
                  height="55"
                  viewBox="0 0 62 59"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.0001 0.70874L32.5049 30.6377L61.4339 22.8202L33.4348 33.4998L49.8092 58.5973L31.0001 35.2687L12.191 58.5973L28.5654 33.4998L0.566313 22.8202L29.4954 30.6377L31.0001 0.70874Z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <div className="absolute z-0 left-[60%] -top-[60%]">
                <div className=" w-[400px]   absolute left-20   ">
                  <div className="w-[350px] h-[500px] absolute left-36  top-8  border-white rounded-[50%] -rotate-45 border-[1px]"></div>
                  <div className="w-[350px] h-[500px] absolute left-28   top-16 border-white rounded-[50%] -rotate-45 border-[1px]"></div>
                  <div className="w-[350px] h-[500px] absolute left-20   top-24 border-white rounded-[50%] -rotate-45 border-[1px]"></div>
                </div>
              </div>

              <Image
                className="relative z-10 float-right"
                alt=""
                src={iphone13}
              ></Image>
              <div className="text-white mx-20 py-24 absolute h-fit w-[550px]">
                <h1 className="font-black text-4xl py-5">
                  Ready To Get Started?
                </h1>
                <p className="font-sans text-lg opacity-90 ">
                  Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus
                  Vulputate.
                </p>
                <div className="py-8">
                  <button className="w-[208px] h-[60px] text-black rounded-lg flex text-xl font-bold bg-white py-3 px-2">
                    <div className="py-1 px-2">Download App </div>
                    <Image
                      width={25.77}
                      height={31.64}
                      alt=""
                      src={apple}
                    ></Image>
                  </button>
                </div>
              </div>
            </div>
            <div className="-left-24 -rotate-12 top-10 -z-10 absolute">
              <Blur></Blur>
            </div>
            <Image
              className="absolute -right-10 top-0"
              alt=""
              width={60}
              height={67}
              src={star}
            ></Image>
            <Image
              className="absolute -left-20 top-[40%]"
              alt=""
              width={60}
              height={67}
              src={star}
            ></Image>
          </div>
        </div>
      </main>
      <footer className=" px-40  font-semibold">
        <div className='pb-10 flex justify-between'>
        <ul>
          <li>
            {' '}
            <div className="flex mr-10">
              <Image
                className="w-[34px] mr-2 h-[34px]"
                height={34}
                width={34}
                alt=""
                src={logo}
              ></Image>
              <h1 className=" font-bold text-3xl">uifry</h1>
            </div>
          </li>
          <li className="flex font-semibold m-1 mt-4">
            <Image
              className="mr-4"
              width={24}
              height={24}
              alt=""
              src={msg}
            ></Image>{' '}
            Help@Fryblx.Com
          </li>
          <li className="flex font-semibold m-1 mt-4">
            <Image
              className="mr-4"
              width={24}
              height={24}
              alt=""
              src={call}
            ></Image>{' '}
            +123445667889
          </li>
        </ul>
        <ul className="space-y-5">
          <li className="text-2xl font-semibold ">Links</li>
          <li className="hover:text-[--red] cursor-pointer">Home</li>
          <li className="hover:text-[--red] cursor-pointer">About Us</li>
          <li className="hover:text-[--red] cursor-pointer">Bookings</li>
          <li className="hover:text-[--red] cursor-pointer">Blog</li>
        </ul>
        <ul className="space-y-5">
          <li className="text-2xl font-semibold ">Legal</li>
          <li className="hover:text-[--red] cursor-pointer">Terms Of Use</li>
          <li className="hover:text-[--red] cursor-pointer">Privacy Policy</li>
          <li className="hover:text-[--red] cursor-pointer">Cookie Policy</li>
        </ul>
        <ul className="space-y-5">
          <li className="text-2xl font-semibold ">Product</li>
          <li className="hover:text-[--red] cursor-pointer">Take Tour</li>
          <li className="hover:text-[--red] cursor-pointer">Live Chat</li>
          <li className="hover:text-[--red] cursor-pointer">Reveiws</li>
        </ul>
        <ul className="space-y-5">
          <li className="text-2xl font-semibold ">Newsletter</li>
          <li className="hover:text-[--red] cursor-pointer">Stay Up To Date</li>
          <li>
            <form
              className="bg-white shadow-2xl drop-shadow-2xl shadow-gray-400 px-2"
              action=""
            >
              <input
                className="py-3 px-5 h-20 w-44 "
                placeholder="Your email"
                type="text"
              />
              <button
                className="rounded-lg w-40 h-16 py-3 px-5 bg-black text-white"
                type="submit"
              >
                {' '}
                Subscribe
              </button>
            </form>
          </li>
        </ul>
        </div>
        <div className='w-full mx-auto border-t-2 border-t-black opacity-50 pt-5'></div>
        <div className='flex justify-center pt-5 pb-16 font-mono'><h1>Copyright2022Uifry.com All Rights Reserved</h1></div>
      </footer>
      
    </>
  );
}
