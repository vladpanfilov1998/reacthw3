import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const commentsService = {
    getByPostId:(postId)=>axiosService.get(`${urls.posts}/${postId}${urls.comments}`).then(value => value.data)
}