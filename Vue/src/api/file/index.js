import { fetch } from "@/core/index.js";

export const getAllFiles_API = (data) => {
  return fetch({
    url: "/file/findFiles",
    method: "post",
    data,
  });
};

export const getFilesByFileId_API = (data) => {
  return fetch({
    url: "/file/findFileByFileId",
    method: "post",
    data,
  });
};

// 创建文件
export const createFile_API = (data) => {
  return fetch({
    url: "/file/createFile",
    method: "post",
    data,
  });
};

// 编辑页面上传图片文件
export const editUploadFile_API = (data) => {
  return fetch({
    url: "/file/uploadFile",
    method: "post",
    data,
    "Content-Type": "multipart/form-data",
  });
};

export const getShearFile_API = (userid) => {
  return fetch({
    url: "/file/shareFile",
    method: "post",
    data: { userid },
  });
};

// 加入文件编辑
export const joinFile_API = (userid, fileid) => {
  return fetch({
    url: "/file/joinFile",
    method: "post",
    data: { userid, fileid },
  });
};

// 收藏 置顶文件
export const favorOrTopFile_API = (data) => {
  return fetch({
    url: "/file/updateFileState",
    method: "post",
    data,
  });
};

// 更新文件信息（文件名、文件所属文件夹）
export const updateFile_API = (data) => {
  return fetch({
    url: "/file/updateFile",
    method: "post",
    data,
  });
};

// 保存文件
export const saveFile_API = (data) => {
  return fetch({
    url: "/version/updateVersion",
    method: "post",
    data,
  });
};

// 获取文件内容
export const getFileContent_API = (data) => {
  return fetch({
    url: "/file/getFileContent",
    method: "post",
    data,
  });
};

// 放入回收站
export const putFileToRecycle_API = (data) => {
  return fetch({
    url: "/file/putFileToRecycle",
    method: "post",
    data,
  });
};
// 删除文件

// excel文件的导入
export const uploadFile_API = (data) => {
  return fetch({
    url: "/excel/uploadFile",
    method: "post",
    "Content-Type": "multipart/form-data",
    data,
  });
};

// 导出文件
export const exportFile_API = (data) => {
  return fetch({
    url: "/file/exportFile", // 假设这个接口是用于导出文件的
    method: "post",
    data,
    //responseType: 'blob' 
    responseType: 'json' 
  }).then(response =>{ 
    console.log(response);
    console.log(typeof response);
    //console.log(response.json());
    return response;
    }) 
  .then(({ fileName, fileContent }) => {
      const blob = new Blob([fileContent],{ type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName; // 你可以根据需要设置文件名 
      document.body.appendChild(a);
      a.click();
      a.remove();
      return { code: 200, msg: '文件下载成功' }; // 返回成功信息
    })
    .catch(error => {
      console.error('Error:', error);
      return { code: 500, msg: '文件下载失败' }; // 返回错误信息 
    });
};

// 历史版本信息
export const getHistryoByFielId_API=(data)=>{
  return fetch({
    url: "/version/getVersion",
    method: "post",
    data,
  });
}