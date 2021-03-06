import {
    isAuthenticated
} from "../pages/utils.js";

const Signin = {
    render() {
        if (isAuthenticated() == false) {
            return /*html*/ `
                <button type="button"
                    class="inline-block hidden md:block w-10 h-10 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none hover:shadow-inner flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                </button>

                <div class="absolute right-0 bg-gray-300 w-max border border-gray-400 mt-14 opacity-0 invisible group-hover:opacity-95 group-hover:visible group-hover:mt-0 transition-all duration-500">
                    <div class="bg-white max-w-sm py-4 px-5 rounded shadow-2xl text-gray-800">
                        <h1 class="font-Playfair text-center font-normal text-xl">Đăng Nhập</h1>
                        <svg class="mx-auto" width="120" height="3" viewBox="0 0 799 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.000226236 2H799" stroke="#E2B65C" stroke-width="7" stroke-linejoin="round"/>
                        </svg>
                            
                        <svg class="absolute -top-1.5 w-4 right-12 shadow-2xl" viewBox="0 0 20 9" role="presentation">
                            <path d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z" 
                            fill="#ffffff"></path>
                        </svg>
                        
                        <form id="form-signin" class="mt-4 pt-2 relative mx-auto text-gray-600">
                            <div class="mb-6">
                                <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email</label>
                                <input type="email" id="email_signin" placeholder="you@company.com" class="w-80 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"/>
                            </div>

                            <div class="mb-6">
                                <div class="flex justify-between mb-2">
                                    <label for="password" class="text-sm text-gray-600 dark:text-gray-400">Mật Khẩu</label>
                                    <a href="#" class="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300">Quên mật khẩu?</a>
                                </div>
                                <input type="password" id="password_signin" placeholder="Your Password" class="w-80 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"/>
                            </div>
                            
                            <div class="mb-6">
                                <button type="submit" class="w-80 px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:bg-indigo-700 focus:outline-none">Đăng Nhập</button>
                            </div>

                            <p class="text-sm text-center text-gray-400">Nếu bạn chưa có tài khoản? <a href="/#/signup" class="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">Đăng Ký</a></p>
                        </form>
                    </div>
                </div>
            `
        } else {
            const user_storage = JSON.parse(localStorage.getItem("user"))
            //console.log(user_storage);
            //console.log(user_storage.role)
            if (user_storage.role == 0) {
                return /*html*/ `
                    <button type="button"
                        class="h-10 w-10 rounded-full overflow-hidden shadow inline-block hidden md:block w-10 h-10 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none hover:shadow-inner flex justify-center items-center">
                        <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80" alt="Your avatar">
                    </button>
                    
                    <ul class="absolute right-0 bg-gray-300 w-max border border-gray-400 shadow-2xl mt-14 opacity-0 invisible group-hover:opacity-95 group-hover:visible group-hover:mt-0 transition-all duration-500">
                        <li><a href="/#/dashboard" class="hover:bg-gray-400 hover:text-black hover:shadow-xl shadow-sm px-2 py-2 block text-gray-800">Quản trị hệ thống</a></li>
                        <li><a href="#/user_infor" class="hover:bg-gray-400 hover:text-black hover:shadow-xl shadow-sm px-2 py-2 block text-gray-800">Thông tin tài khoản</a></li>
                        <li><a href="#" class="hover:bg-gray-400 hover:text-black hover:shadow-xl shadow-sm px-2 py-2 block text-gray-800">Đơn hàng</a></li>
                        <li><a href="/#/signout" id="signout_btn" class="hover:bg-gray-400 hover:text-black hover:shadow-xl shadow-sm px-2 py-2 block text-gray-800">Đăng xuất</a></li>
                    </ul>
                `
            } else if (user_storage.role == 1) {
                return /*html*/ `
                <button type="button"
                    class="h-10 w-10 rounded-full overflow-hidden shadow inline-block hidden md:block w-10 h-10 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none hover:shadow-inner flex justify-center items-center">
                    <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80" alt="Your avatar">
                </button>
                
                <ul class="absolute right-0 bg-gray-300 w-max border border-gray-400 shadow-2xl mt-14 opacity-0 invisible group-hover:opacity-95 group-hover:visible group-hover:mt-0 transition-all duration-500">
                    <li><a href="#/user_infor" class="hover:bg-gray-400 hover:text-black hover:shadow-xl shadow-sm px-2 py-2 block text-gray-800">Thông tin tài khoản</a></li>
                    <li><a href="#" class="hover:bg-gray-400 hover:text-black hover:shadow-xl shadow-sm px-2 py-2 block text-gray-800">Đơn hàng</a></li>
                    <li><a href="/#/signout" id="signout_btn" class="hover:bg-gray-400 hover:text-black hover:shadow-xl shadow-sm px-2 py-2 block text-gray-800">Đăng xuất</a></li>
                </ul>
            `
            }
        }
    }
}

export default Signin;