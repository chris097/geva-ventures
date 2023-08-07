import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";

const CookiesPage = () => {

   const [isLoading, setLoading] = useState(true);
  const [hasCookie, setHasCookie] = useState(false);

  useEffect(() => {
    const checkCookie = () => {
      const cookieValue = Cookies.get('gevac');
      setHasCookie(!!cookieValue);
      setLoading(false);
    };

    checkCookie();
  }, []);

  const handleSetCookie = () => {
    Cookies.set('gevac', 'true', { expires: 30 });
    setHasCookie(true);
  };

  if (isLoading) return null;

    return (
        <div>
            {hasCookie ? (
                null
            ) : (
                <>
                    <div className="fixed flex top-0 left-0 inset-0 bg-black/30 overflow-y-hidden justify-end items-center flex-col z-50">
                            <div className="relative w-full">
                                 <div className="bg-primaryblue py-6 xl:block flex justify-center md:px-[29px] w-full">
                            <div className="items-center h-full">
                                <div className="flex items-center lg:justify-start justify-center h-full md:gap-4 gap-3">
                                    <svg className="md:w-[40px] md:h-[40px] sm:w-[28px] sm:h-[28px] w-[22.17px] h-[22.17px]" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.1071 11.3039C15.5037 11.3039 14.9923 11.0929 14.5726 10.671C14.153 10.2492 13.9432 9.73687 13.9432 9.13416C13.9432 8.53147 14.1544 8.02055 14.5768 7.6014C14.9991 7.18225 15.512 6.97267 16.1153 6.97267C16.7187 6.97267 17.2301 7.18362 17.6497 7.60552C18.0694 8.02739 18.2792 8.53969 18.2792 9.1424C18.2792 9.74509 18.068 10.256 17.6456 10.6752C17.2233 11.0943 16.7104 11.3039 16.1071 11.3039ZM18.9044 18.2897C18.3011 18.2897 17.7896 18.0788 17.37 17.6569C16.9504 17.235 16.7406 16.7227 16.7406 16.12C16.7406 15.5173 16.9518 15.0064 17.3741 14.5872C17.7965 14.1681 18.3093 13.9585 18.9127 13.9585C19.516 13.9585 20.0275 14.1694 20.4471 14.5913C20.8667 15.0132 21.0765 15.5255 21.0765 16.1282C21.0765 16.7309 20.8653 17.2418 20.443 17.661C20.0207 18.0801 19.5078 18.2897 18.9044 18.2897ZM9.81712 19.617C9.42083 19.617 9.08864 19.4831 8.82056 19.2153C8.55248 18.9475 8.41844 18.6157 8.41844 18.2198C8.41844 17.824 8.55248 17.4922 8.82056 17.2244C9.08864 16.9566 9.42083 16.8227 9.81712 16.8227C10.2134 16.8227 10.5456 16.9566 10.8137 17.2244C11.0818 17.4922 11.2158 17.824 11.2158 18.2198C11.2158 18.6157 11.0818 18.9475 10.8137 19.2153C10.5456 19.4831 10.2134 19.617 9.81712 19.617ZM14.005 28C15.922 28 17.7313 27.6332 19.4331 26.8997C21.1348 26.1662 22.6209 25.1649 23.8914 23.8958C25.1618 22.6267 26.1642 21.1423 26.8985 19.4424C27.6328 17.7425 28 15.9378 28 14.0284C28 11.886 27.5454 9.88343 26.6363 8.02055C25.7271 6.15766 24.5091 4.58003 22.9822 3.28765C21.4553 1.99527 19.6953 1.06383 17.7022 0.493322C15.7091 -0.0771865 13.6402 -0.152866 11.4955 0.266283C11.6354 1.31416 11.5422 2.30381 11.2158 3.23526C10.8894 4.1667 10.3941 4.95843 9.72971 5.61044C9.06533 6.26245 8.26692 6.73981 7.33446 7.04253C6.40201 7.34525 5.42293 7.41511 4.39723 7.25211C4.86346 8.67256 4.60703 9.94747 3.62795 11.0768C2.64888 12.2062 1.46 12.8291 0.0613117 12.9456C-0.125179 14.9714 0.113762 16.8925 0.778137 18.7089C1.44251 20.5252 2.41576 22.1203 3.69789 23.4941C4.98001 24.868 6.50451 25.9625 8.27137 26.7775C10.0382 27.5925 11.9494 28 14.005 28Z" fill="white" />
                                    </svg>
                                    <div className="font-circular text-center">
                                        <h1 className="font-medium text-white md:text-[28px] sm:text-2xl text-base">Cookie Notification</h1>
                                    </div>
                                        </div>
                                        <p className="md:text-xl smtext-xl text-xs lg:text-left text-center font-[450] font-circular text-white py-4 md:leading-[32px] md:tracking-wide xl:w-[78%] md:w-full w-full lg:px-0 px-6">
                                            We use cookies on our website to enhance your user experience and improve our services. By clicking &apos;Accept&apos;, you agree to our use of cookies as described in our Policy
                                            {/* <Link href="/cookie-policy" className="md:border-b-2 border-b font-circular border-primarypink md:font-bold text-primarypink ml-2">Cookie Policy</Link> */}
                                        </p>
                                        <button onClick={handleSetCookie} type="button" className="bg-primaryblack lg:block lg:mx-0 flex items-center justify-center mx-auto text-white w-[181px] md:h-[56px] h-[40px] md:text-sm text-xs lg:mt-0 mt-2 rounded-[4px]">Accept</button>
                            </div>
                        </div>
                       </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CookiesPage;