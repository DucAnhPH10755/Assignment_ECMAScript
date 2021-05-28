import {
    axiosClient
} from "./axiosClient";

const ProductAPI = {
    list() {
        const url = `/products`;
        return axiosClient.get(url)
    },

    read(id) {
        const url = `/products/${id}`;
        return axiosClient.get(url)
    },

    remove(id) {
        const url = `/products/${id}`;
        return axiosClient.delete(url)
    }
}

export default ProductAPI;