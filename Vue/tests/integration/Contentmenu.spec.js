import { mount } from '@vue/test-utils';
import Contentmenu from '@/src/components/Contentmenu/index.vue';
import { createFolder_API, createFile_API } from '@/api/folder';
import { ElMessage } from 'element-plus';

jest.mock('@/api/folder');
jest.mock('element-plus');

describe('Contentmenu Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Contentmenu, {
      global: {
        plugins: [ElMessage],
      },
    });
  });

  it('should show and hide context menu', async () => {
    // 模拟右键点击
    const event = new MouseEvent('contextmenu', {
      pageX: 100,
      pageY: 100,
      bubbles: true,
    });
    document.body.dispatchEvent(event);

    await wrapper.vm.$nextTick();

    // 检查菜单是否显示
    expect(wrapper.find('.contentmenu').attributes('style')).toContain('display: block;');

    // 模拟点击其他区域
    const clickEvent = new MouseEvent('click', {
      bubbles: true,
    });
    document.body.dispatchEvent(clickEvent);

    await wrapper.vm.$nextTick();

    // 检查菜单是否隐藏
    expect(wrapper.find('.contentmenu').attributes('style')).toContain('display: none;');
  });

  it('should open create folder dialog when "folder" menu item is clicked', async () => {
    // 模拟右键点击
    const event = new MouseEvent('contextmenu', {
      pageX: 100,
      pageY: 100,
      bubbles: true,
    });
    document.body.dispatchEvent(event);

    await wrapper.vm.$nextTick();

    // 点击 "新建文件夹" 菜单项
    const folderMenuItem = wrapper.find('.contentmenu div').at(0);
    folderMenuItem.trigger('click');

    await wrapper.vm.$nextTick();

    // 检查对话框是否显示
    expect(wrapper.find('.el-dialog').exists()).toBe(true);
    expect(wrapper.find('.el-dialog').text()).toContain('创建文件夹');
  });

  it('should create a folder when dialog is confirmed', async () => {
    // 模拟右键点击
    const event = new MouseEvent('contextmenu', {
      pageX: 100,
      pageY: 100,
      bubbles: true,
    });
    document.body.dispatchEvent(event);

    await wrapper.vm.$nextTick();

    // 点击 "新建文件夹" 菜单项
    const folderMenuItem = wrapper.find('.contentmenu div').at(0);
    folderMenuItem.trigger('click');

    await wrapper.vm.$nextTick();

    // 输入文件夹名称并点击确定
    const input = wrapper.find('.el-input input');
    input.setValue('New Folder');
    const confirmButton = wrapper.find('.el-button--primary');
    confirmButton.trigger('click');

    await wrapper.vm.$nextTick();

    // 检查 API 调用
    expect(createFolder_API).toHaveBeenCalledWith({
      userid: expect.any(String),
      foldername: 'New Folder',
      parentfolderid: undefined,
    });

    // 检查成功消息
    expect(ElMessage.success).toHaveBeenCalledWith(expect.stringContaining('成功'));
  });

  it('should create a file when dialog is confirmed', async () => {
    // 模拟右键点击
    const event = new MouseEvent('contextmenu', {
      pageX: 100,
      pageY: 100,
      bubbles: true,
    });
    document.body.dispatchEvent(event);

    await wrapper.vm.$nextTick();

    // 点击 "新建 Word" 菜单项
    const wordMenuItem = wrapper.find('.contentmenu div').at(1);
    wordMenuItem.trigger('click');

    await wrapper.vm.$nextTick();

    // 输入文件名称并点击确定
    const input = wrapper.find('.el-input input');
    input.setValue('New Word');
    const confirmButton = wrapper.find('.el-button--primary');
    confirmButton.trigger('click');

    await wrapper.vm.$nextTick();

    // 检查 API 调用
    expect(createFile_API).toHaveBeenCalledWith({
      userid: expect.any(String),
      filename: 'New Word',
      filetype: 'word',
      filesuffix: 'docx',
      fileownerfolderid: undefined,
    });

    // 检查成功消息
    expect(ElMessage.success).toHaveBeenCalledWith(expect.stringContaining('成功'));
  });
});