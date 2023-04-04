import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
import Image from "next/image";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar]);

const Products = () => {
  return (
    <>
      <div className="w-full min-h-[272px] h-[272px] px-4 mt-4">
        <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-css-mode">
          <div className="swiper-wrapper">
            <div
              style={{ display: "grid" }}
              className="swiper-slide  mr-[10px] grid grid-cols-4 grid-rows-2 gap-3 es:gap-4 place-items-stretch !h-[244px] w-[416px] swiper-slide-active"
            >
              <a className="flex flex-col space-y-2 max-w-[80px] max-h-[114px] min-w-[80px] items-center focus-visible:outline-none">
                <div className="w-[4rem] h-[4rem] relative rounded-2xl bg-gray-200 overflow-hidden p-2 dark:bg-dark-secondary">
                  <Image
                    src="/public/img/1.png"
                    width={64}
                    height={64}
                    alt="img-1"
                  />
                </div>
                <div className="text-small-medium max-w-[100%] text-center text-break align-top break-all category_name">
                  Бакалея и
                  <br />
                  крупы
                </div>
              </a>
              <a className="flex flex-col space-y-2 max-w-[80px] max-h-[114px] min-w-[80px] items-center focus-visible:outline-none">
                <div className="w-[4rem] h-[4rem] relative rounded-2xl bg-gray-200 overflow-hidden p-2 dark:bg-dark-secondary">
                  <Image
                    src="/public/img/1.png"
                    width={64}
                    height={64}
                    alt="img-2"
                  />
                </div>
                <div className="text-small-medium max-w-[100%] text-center text-break align-top break-all category_name">
                  Вода и
                  <br />
                  напитки
                </div>
              </a>
              <a className="flex flex-col space-y-2 max-w-[80px] max-h-[114px] min-w-[80px] items-center focus-visible:outline-none">
                <div className="w-[4rem] h-[4rem] relative rounded-2xl bg-gray-200 overflow-hidden p-2 dark:bg-dark-secondary">
                  <Image
                    src="/public/img/1.png"
                    width={64}
                    height={64}
                    alt="img-3"
                  />
                </div>
                <div class="text-small-medium max-w-[100%] text-center text-break align-top break-all category_name">
                  Для <br /> гигиены
                </div>
              </a>
              <a className="flex flex-col space-y-2 max-w-[80px] max-h-[114px] min-w-[80px] items-center focus-visible:outline-none">
                <div className="w-[4rem] h-[4rem] relative rounded-2xl bg-gray-200 overflow-hidden p-2 dark:bg-dark-secondary">
                  <Image
                    src="/public/img/1.png"
                    width={64}
                    height={64}
                    alt="img-4"
                  />
                </div>
                <div class="text-small-medium max-w-[100%] text-center text-break align-top break-all category_name">
                  Для <br />
                  детей
                </div>
              </a>
              <a className="flex flex-col space-y-2 max-w-[80px] max-h-[114px] min-w-[80px] items-center focus-visible:outline-none">
                <div className="w-[4rem] h-[4rem] relative rounded-2xl bg-gray-200 overflow-hidden p-2 dark:bg-dark-secondary">
                  <Image
                    src="/public/img/1.png"
                    width={64}
                    height={64}
                    alt="img-5"
                  />
                </div>
                <div class="text-small-medium max-w-[100%] text-center text-break align-top break-all category_name">
                  Для <br />
                  дома
                </div>
              </a>
              <a className="flex flex-col space-y-2 max-w-[80px] max-h-[114px] min-w-[80px] items-center focus-visible:outline-none">
                <div className="w-[4rem] h-[4rem] relative rounded-2xl bg-gray-200 overflow-hidden p-2 dark:bg-dark-secondary">
                  <Image
                    src="/public/img/1.png"
                    width={64}
                    height={64}
                    alt="img-6"
                  />
                </div>
                <div class="text-small-medium max-w-[100%] text-center text-break align-top break-all category_name">
                  Для <br />
                  офиса
                </div>
              </a>
              <a className="flex flex-col space-y-2 max-w-[80px] max-h-[114px] min-w-[80px] items-center focus-visible:outline-none">
                <div className="w-[4rem] h-[4rem] relative rounded-2xl bg-gray-200 overflow-hidden p-2 dark:bg-dark-secondary">
                  <Image
                    src="/public/img/1.png"
                    width={64}
                    height={64}
                    alt="img-7"
                  />
                </div>
                <div class="text-small-medium max-w-[100%] text-center text-break align-top break-all category_name">
                  Сладости <br />и печенья
                </div>
              </a>
              <a className="flex flex-col space-y-2 max-w-[80px] max-h-[114px] min-w-[80px] items-center focus-visible:outline-none">
                <div className="w-[4rem] h-[4rem] relative rounded-2xl bg-gray-200 overflow-hidden p-2 dark:bg-dark-secondary">
                  <Image
                    src="/public/img/1.png"
                    width={64}
                    height={64}
                    alt="img-8"
                  />
                </div>
                <div className="text-small-medium max-w-[100%] text-center text-break align-top break-all category_name">
                  Снэки и <br /> другое
                </div>
              </a>
            </div>
            <div
              style={{ display: "grid" }}
              className="swiper-slide grid grid-cols-4 grid-rows-2 gap-3 es:gap-4 place-items-stretch !h-[244px] swiper-slide-next w-[416px]"
            >
              <a className="flex flex-col space-y-2 max-w-[80px] max-h-[114px] min-w-[80px] items-center focus-visible:outline-none">
                <div className="w-[4rem] h-[4rem] relative rounded-2xl bg-gray-200 overflow-hidden p-2 dark:bg-dark-secondary">
                  <Image
                    src="/public/img/1.png"
                    width={64}
                    height={64}
                    alt="img-9"
                  />
                </div>
                <div className="text-small-medium max-w-[100%] text-center text-break align-top break-all category_name">
                  Стирка и <br /> уборка
                </div>
              </a>
              <a className="flex flex-col space-y-2 max-w-[80px] max-h-[114px] min-w-[80px] items-center focus-visible:outline-none">
                <div className="w-[4rem] h-[4rem] relative rounded-2xl bg-gray-200 overflow-hidden p-2 dark:bg-dark-secondary">
                  <Image
                    src="/public/img/1.png"
                    width={64}
                    height={64}
                    alt="img-10"
                  />
                </div>
                <div className="text-small-medium max-w-[100%] text-center text-break align-top break-all category_name">
                  Фарма и <br /> медицина
                </div>
              </a>
              <a className="flex flex-col space-y-2 max-w-[80px] max-h-[114px] min-w-[80px] items-center focus-visible:outline-none">
                <div className="w-[4rem] h-[4rem] relative rounded-2xl bg-gray-200 overflow-hidden p-2 dark:bg-dark-secondary">
                  <Image
                    src="/public/img/1.png"
                    width={64}
                    height={64}
                    alt="img-11"
                  />
                </div>
                <div className="text-small-medium max-w-[100%] text-center text-break align-top break-all category_name">
                  Чай и<br /> кофе
                </div>
              </a>
              <a className="flex flex-col space-y-2 max-w-[80px] max-h-[114px] min-w-[80px] items-center focus-visible:outline-none">
                <div className="w-[4rem] h-[4rem] relative rounded-2xl bg-gray-200 overflow-hidden p-2 dark:bg-dark-secondary">
                  <Image
                    src="/_next/image?url=https%3A%2F%2Fapi.oqot.uz%2Fapi%2F1.0%2Ffile%2Fdownload%2Fd04edab9fecec961283266133ddeb8b2.png&w=128&q=75"
                    width={64}
                    height={64}
                    alt="img-12"
                  />
                </div>
                <div className="text-small-medium max-w-[100%] text-center text-break align-top break-all category_name">
                  Зоо <br />
                  маркет
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
