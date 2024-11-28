import { shallowMount } from '@vue/test-utils';
import Login from '@/views/Login/index.vue';
import loginFormVue from '@/views/Login/components/loginForm.vue';
import registerForm from '@/views/Login/components/registerForm.vue';

describe('Login.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Login);
  });

  it('should render the login component correctly', () => {
    expect(wrapper.find('.login').exists()).toBe(true);
    expect(wrapper.find('.login-mask').exists()).toBe(true);
    expect(wrapper.find('.login-box').exists()).toBe(true);
    expect(wrapper.find('.login-box-left').exists()).toBe(true);
    expect(wrapper.find('.login-box-form').exists()).toBe(true);
  });

  it('should switch to register form when toRegister is called', async () => {
    const toRegisterButton = wrapper.findComponent(loginFormVue);
    await toRegisterButton.vm.$emit('toRegister');
    expect(wrapper.vm.ActiveFormType).toBe('login');
    expect(wrapper.vm.formType).toBe('RegisterAnimation');
    expect(wrapper.vm.tabLabel).toBe('注册');
  });

  it('should switch to login form when toLogin is called', async () => {
    const toLoginButton = wrapper.findComponent(registerForm);
    await toLoginButton.vm.$emit('toLogin');
    expect(wrapper.vm.ActiveFormType).toBe('login');
    expect(wrapper.vm.formType).toBe('LoginAnimation');
    expect(wrapper.vm.tabLabel).toBe('登录');
  });

  it('should clear session storage on mount', () => {
    const sessionStorageSpy = jest.spyOn(sessionStorage, 'clear');
    shallowMount(Login);
    expect(sessionStorageSpy).toHaveBeenCalled();
  });
});