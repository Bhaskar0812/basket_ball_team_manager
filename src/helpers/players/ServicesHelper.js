import { axiosGet } from './RequestsHelper.js';

export const getPlayerData = async () => {
	return await axiosGet('https://api.npoint.io/20c1afef1661881ddc9c');
}
