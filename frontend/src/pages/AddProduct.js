import ProductAPI from "../api/productAPI"
import {
    v4 as uuidv4
} from 'uuid';
import {
    $
} from './utils';
import SidebarMenu from "../component/SidebarMenu"
import firebase from '../firebase'
import CategoryAPI from "../api/categoryAPI";

const AddProduct = {
    async render() {
        const {
            data: categories
        } = await CategoryAPI.list();
        //console.log(categories);
        const result = categories.map(category => {
            return /*html*/ `
                <option value="${category.id}">${category.name}</a></option>
            `
        }).join("")

        return /*html*/ `
            <div>
                <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
                
                <div x-data="{ sidebarOpen: false }" class="flex h-screen bg-gray-200">
                    ${SidebarMenu.render()}

                    <div class="flex-1 flex flex-col overflow-hidden">
                        <header class="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
                            <div class="flex items-center">
                                <button @click="sidebarOpen = true" class="text-gray-500 focus:outline-none lg:hidden">
                                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                
                                <div class="relative mx-4 lg:mx-0">
                                    <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                                        <svg class="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            </path>
                                        </svg>
                                    </span>
                
                                    <input class="form-input w-32 sm:w-64 rounded-md pl-10 pr-4 focus:border-indigo-600" type="text"
                                        placeholder="Search">
                                </div>
                            </div>
                
                            <div class="flex items-center">
                                <div x-data="{ notificationOpen: false }" class="relative">
                                    <button @click="notificationOpen = ! notificationOpen"
                                        class="flex mx-4 text-gray-600 focus:outline-none">
                                        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            </path>
                                        </svg>
                                    </button>
                
                                    <div x-show="notificationOpen" @click="notificationOpen = false"
                                        class="fixed inset-0 h-full w-full z-10" style="display: none;"></div>
                
                                    <div x-show="notificationOpen"
                                        class="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl overflow-hidden z-10"
                                        style="width: 20rem; display: none;">
                                        <a href="#"
                                            class="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2">
                                            <img class="h-8 w-8 rounded-full object-cover mx-1"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
                                                alt="avatar">
                                            <p class="text-sm mx-2">
                                                <span class="font-bold" href="#">Sara Salah</span> replied on the <span
                                                    class="font-bold text-indigo-400" href="#">Upload Image</span> artical . 2m
                                            </p>
                                        </a>
                                        <a href="#"
                                            class="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2">
                                            <img class="h-8 w-8 rounded-full object-cover mx-1"
                                                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
                                                alt="avatar">
                                            <p class="text-sm mx-2">
                                                <span class="font-bold" href="#">Slick Net</span> start following you . 45m
                                            </p>
                                        </a>
                                        <a href="#"
                                            class="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2">
                                            <img class="h-8 w-8 rounded-full object-cover mx-1"
                                                src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
                                                alt="avatar">
                                            <p class="text-sm mx-2">
                                                <span class="font-bold" href="#">Jane Doe</span> Like Your reply on <span
                                                    class="font-bold text-indigo-400" href="#">Test with TDD</span> artical . 1h
                                            </p>
                                        </a>
                                        <a href="#"
                                            class="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2">
                                            <img class="h-8 w-8 rounded-full object-cover mx-1"
                                                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=398&amp;q=80"
                                                alt="avatar">
                                            <p class="text-sm mx-2">
                                                <span class="font-bold" href="#">Abigail Bennett</span> start following you . 3h
                                            </p>
                                        </a>
                                    </div>
                                </div>
                
                                <div x-data="{ dropdownOpen: false }" class="relative">
                                    <button @click="dropdownOpen = ! dropdownOpen"
                                        class="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none">
                                        <img class="h-full w-full object-cover"
                                            src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80"
                                            alt="Your avatar">
                                    </button>
                
                                    <div x-show="dropdownOpen" @click="dropdownOpen = false" class="fixed inset-0 h-full w-full z-10"
                                        style="display: none;"></div>
                
                                    <div x-show="dropdownOpen"
                                        class="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10"
                                        style="display: none;">
                                        <a href="#"
                                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Profile</a>
                                        <a href="#"
                                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Products</a>
                                        <a href="/login"
                                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Logout</a>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                            <div class="container mx-auto px-6 py-8">
                                <h3 class="text-gray-700 text-3xl font-medium">Thêm sản phẩm</h3>

                                <form id="form-add" enctype="multipart/form-data" class="mt-10 ml-6">
                                    <div class="grid grid-cols-2">
                                        <div class="">
                                        <h5 class="mb-2 text-xl font-semibold">Tên sản phẩm:</h5>
                                        <input class="w-4/5 h-8 mb-6 focus:outline-none border border-gray-400 rounded-sm pl-2" type="text" placeholder="Tên sản phẩm" id="product-name">
                                            <h5 class="mb-2 text-xl font-semibold">Danh mục:</h5>
                                            <select class="w-4/5 h-8 mb-6 focus:outline-none border border-gray-400 rounded-sm pl-2" id="cate-id">
                                                <option value="">Danh mục</option>
                                                ${result}
                                            </select>
                                            <h5 class="mb-2 text-xl font-semibold">Đơn giá:</h5>
                                            <input class="w-4/5 h-8 mb-6 focus:outline-none border border-gray-400 rounded-sm pl-2" type="number" name="don_gia" id="price">
                                            <h5 class="mb-2 text-xl font-semibold">Số lượng:</h5>
                                            <input class="w-4/5 h-8 mb-6 focus:outline-none border border-gray-400 rounded-sm pl-2" type="number" name="so_luong" id="quantity">
                                        </div>

                                        <div class="">
                                            <h5 class="mb-2 text-xl font-semibold">Mô tả:</h5>
                                            <textarea class="w-4/5 h-32 mb-4 focus:outline-none border border-gray-400 rounded-sm pl-2 bg-white" name="mo_ta" id = "description" cols="63" rows="5"></textarea>
                                            <h5 class="mb-2 text-xl font-semibold">Ảnh sản phẩm:</h5>
                                            <input class="w-4/5 h-8 mb-6 focus:outline-none border border-gray-400 rounded-sm pl-2 bg-white" type="file" id="product-image">
                                            <h5 class="mb-2 text-xl font-semibold">Trạng thái:</h5>
                                            <div id="status">
                                                <label class="mb-2 text-base font-medium mr-4"><input class="mr-2" name="status" id="" value="Còn hàng" type="radio" checked>Còn Hàng</label>
                                                <label class="mb-2 text-base font-medium"><input class="mr-2" name="status" id="" value="Hết hàng" type="radio">Hết hàng</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mt-4">
                                        <input type="submit" value="Cập nhật" class="bg-indigo-600 px-4 py-2 text-white rounded-md">
                                        <input type="reset" value="Nhập lại" class="bg-indigo-600 px-4 py-2 text-white rounded-md ml-2">
                                        <a href="/#/list-products" class="bg-indigo-600 px-4 py-2 text-white rounded-md ml-2">Danh sách</a>
                                    </div>
                                </form>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        `
    },

    afterRender() {
        $('#form-add').addEventListener('submit', e => {
            e.preventDefault();
            const productImage = $('#product-image').files[0];
            let storageRef = firebase.storage().ref(`images/${productImage.name}`);
            storageRef.put(productImage).then(function () {
                console.log('Upload thành công!');
                storageRef.getDownloadURL().then(async (url) => {
                    const product = {
                        id: uuidv4(),
                        name: $('#product-name').value,
                        image: url,
                        price: $('#price').value,
                        quantity: $('#quantity').value,
                        description: $('#description').value,
                        cate_id: $('#cate-id').value,
                        status: $('#status').value
                    }
                    //console.log(product);
                    await ProductAPI.add(product);
                    window.location.hash = '/list-products';
                })
            })
        })
    }
}

export default AddProduct;