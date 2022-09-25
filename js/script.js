let share = document.querySelector(".fa-share");
let footer = document.querySelector("footer");

share.addEventListener("click", () => {
  if (window.innerWidth < 724) {
    footer.innerHTML =
      `
            <ul
          class="flex p-8 items-center justify-start space-x-3 bg-Desaturated-Dark-Blue md:hidden"
        >
          <li class="font-light uppercase tracking-[4px] text-Grayish-Blue text-[14px]">
            Share
          </li>
          <li class="space-x-2 grow">
            <a href="https://www.facebook.com" target="_blank"><i class="fa-brands fa-facebook text-white text-[20px]"></i></a>
            <a href="https://www.twitter.com" target="_blank"><i class="fa-brands fa-twitter text-white text-[20px]"></i></a>
            <a href="https://www.pinterest.com" target="_blank"><i class="fa-brands fa-pinterest text-white text-[20px]"></i></a>

          </li>
          <li>
            <i
              class="fa-solid fa-share text-white bg-gray-200 bg-opacity-25 p-2 rounded-full cursor-pointer lg:bg-Very-Dark-Grayish-Blue"
            ></i>
          </li>
        </ul>
    `
  } else {
    footer.innerHTML =
      `
          <ul class="flex relative p-6 items-center justify-start space-x-3">
            <li class="w-[45px] rounded-full overflow-hidden">
              <img class="w-[100%]" src="images/avatar-michelle.jpg" alt="" />
            </li>
            <li class="grow">
              <p class="text-Desaturated-Dark-Blue text-[15px] font-bold">
                Michelle Appleton
              </p>
              <p class="text-[13px] text-Grayish-Blue">28 Jun 2020</p>
            </li>
            <li>
              <i
                class="fa-solid fa-share text-Desaturated-Dark-Blue bg-Light-Grayish-blue p-2 rounded-full cursor-pointer"
              ></i>
            </li>

            <li
              class="space-x-2 grow absolute flex gap-2 px-4 py-6 rounded-3xl bg-Desaturated-Dark-Blue -top-16 -right-0"
            >
              <p
                class="font-light uppercase tracking-[4px] text-Grayish-Blue text-[14px]"
              >
                Share
              </p>
              <a href="https://www.facebook.com" target="_blank"
                ><i class="fa-brands fa-facebook text-white text-[20px]"></i
              ></a>
              <a href="https://www.twitter.com" target="_blank"
                ><i class="fa-brands fa-twitter text-white text-[20px]"></i
              ></a>
              <a href="https://www.pinterest.com" target="_blank"
                ><i class="fa-brands fa-pinterest text-white text-[20px]"></i
              ></a>
            </li>
          </ul>
    `
  }
})