import Header_Admin from "../component/Header_Admin"
import ListCategories from "../component/ListCategories"
import SidebarMenu from "../component/SidebarMenu"

const AdminCategory = {
    async render() {
        const user_storage = JSON.parse(localStorage.getItem("user"));
        if (user_storage.role == 0) {
            return /*html*/ `
                <div>
                    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
                    
                    <div x-data="{ sidebarOpen: false }" class="flex h-screen bg-gray-200">
                        ${await SidebarMenu.render()}

                        <div class="flex-1 flex flex-col overflow-hidden">
                            ${await Header_Admin.render()}
                            
                            <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                                <div class="container mx-auto px-6 py-8">
                                    <h3 class="text-gray-700 text-3xl font-medium">Danh mục sản phẩm</h3>

                                    <div class="mt-8">
                                        <a href="/#/add-category" class="bg-indigo-600 px-4 py-2 text-white rounded-md">Thêm mới</a>
                                    </div>
                                    
                                    <div class="flex flex-col mt-6">
                                        <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                                            <div id="list-categories" class="btn align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                                                ${await ListCategories.render()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            `
        } else if (user_storage.role == 1) {
            return /*html*/ `
                <p>Không phải tài khoản quản trị</p>
            `
        }

    },

    async afterRender() {
        return /*html*/ `
            ${await ListCategories.afterRender()}
            ${await SidebarMenu.afterRender()}
        `
    }
}

export default AdminCategory;