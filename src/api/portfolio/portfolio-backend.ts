import { AxiosResponse } from 'axios';
import { IPost } from '../../model/post';
import { http } from '../axios'

export const getPosts = async () => {
    const posts: AxiosResponse<IPost[]> = await http.get("/posts")
    return posts;
}