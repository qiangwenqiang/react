import ajax from './ajax'
const BASE = ''
// 登录接口
export const reqLogin = (usernaeme, password) => ajax(BASE + '/login', { usernaeme, password }, 'POST');
// 添加用户
export const reqAddUser = (user) => ajax(BASE + '/manage/user/add', user, 'POST');