const Header = {
    render() {
        return /*html*/ `
            <!-- header -->
            <header class="bg-white shadow-sm sticky top-0">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 md:py-4">
                    <div class="flex items-center justify-between md:justify-start">
                        <!-- Menu Trigger -->
                        <button type="button" class="md:hidden w-10 h-10 rounded-lg -ml-2 flex justify-center items-center">
                            <svg class="text-gray-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <!-- ./ Menu Trigger -->

                        <a href="/" class="font-bold text-gray-700 text-2xl">Shop.</a>

                        <div class="hidden md:flex space-x-3 flex-1 lg:ml-8">
                            <a href="/" class="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-gray-800">Trang
                                Chủ</a>
                            <a href="/#/products"
                                class="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-gray-800">Sản
                                Phẩm</a>
                            <a href="#"
                                class="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-gray-800">Blog</a>
                            <a href="#"
                                class="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-gray-800">Về Chúng Tôi</a>
                            <a href="#"
                                class="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-gray-800">Liên Hệ</a>
                        </div>

                        <div class="flex items-center space-x-4">
                            <div class="relative hidden md:block">
                                <input type="search"
                                    class="pl-10 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none"
                                    placeholder="Search">
                                <svg class="h-6 w-6 text-gray-300 ml-2 mt-2 stroke-current absolute top-0 left-0"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>

                            <a href="#"
                                class="flex h-10 items-center px-2 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none hover:shadow-inner">
                                <svg class="h-6 w-6 leading-none text-gray-300 stroke-current"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                <span class="pl-1 text-gray-500 text-md">0</span>
                            </a>

                            <button type="button"
                                class="hidden md:block w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex justify-center items-center">
                                <img src="https://avatars.dicebear.com/api/bottts/2.svg" alt="bottts" width="28" height="28"
                                    class="rounded-lg mx-auto">
                            </button>
                        </div>
                    </div>

                    <!-- Search Mobile -->
                    <div class="relative md:hidden">
                        <input type="search"
                            class="mt-1 w-full pl-10 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none"
                            placeholder="Search">

                        <svg class="h-6 w-6 text-gray-300 ml-2 mt-3 stroke-current absolute top-0 left-0"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <!-- ./ Search Mobile -->

                </div>
            </header>

        <!-- mobile navbar -->
        <div class="mobile-navbar">

            <!-- navbar wrapper -->
            <div class="navbar-wrapper fixed top-0 left-0 h-full bg-white z-30 w-64 shadow-lg p-5" x-show="isOpen"
                @click.away=" isOpen = false" x-transition:enter="transition duration-300 -ml-64"
                x-transition:enter-start="" x-transition:enter-end="transform translate-x-64"
                x-transition:leave="transition duration-300" x-transition:enter-start=""
                x-transition:leave-end="transform -translate-x-64">
                <div class="close">
                    <button class="absolute top-0 right-0 mt-4 mr-4" @click=" isOpen = false">
                        <svg class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <ul class="divide-y">
                    <li><a href="#" class="my-4 inline-block active font-bold">Reviews</a></li>
                    <li><a href="#" class="my-4 inline-block hover:text-orange-500">People</a></li>
                    <li><a href="#" class="my-4 inline-block hover:text-orange-500">Partners</a></li>
                    <li><a href="#" class="my-4 inline-block hover:text-orange-500">Feedback</a></li>
                    <li><a href="#" class="my-4 inline-block hover:text-orange-500">Pricing</a></li>
                    <li><a href="#"
                            class="my-8 w-full text-center font-semibold cta inline-block bg-orange-500 hover:bg-orange-600 px-3 py-2 rounded text-white font-normal">Get
                            the App</a></li>
                </ul>

                <!-- follow us -->
                <div class="follow">
                    <p class=" italic font-semibold">follow us:</p>
                    <div class="social flex space-x-5 mt-4 ">
                        <a href="#">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter"
                                class="h-5 w-5 fill-current text-gray-600" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                                </path>
                            </svg>
                        </a>
                        <a href="#">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f"
                                class="h-5 w-5 fill-current text-gray-600" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512">
                                <path fill="currentColor"
                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                                </path>
                            </svg>
                        </a>
                        <a href="#">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram"
                                class="h-5 w-5 fill-current text-gray-600" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512">
                                <path fill="currentColor"
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                                </path>
                            </svg>
                        </a>
                        <a href="#">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube"
                                class="h-5 w-5 fill-current text-gray-600" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path fill="currentColor"
                                    d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                                </path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div><!-- end mobile navbar -->
        `
    }
}

export default Header;