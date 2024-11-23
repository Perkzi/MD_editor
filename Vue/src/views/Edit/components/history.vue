<template>
    <dropdown :list="versionList" @command="commandhandle">
        <template #content>
            <div class="list">
                <div v-for="(version, index) in versionList.slice(0, 5)" :key="index">
          <!-- :style="{ transform: `translateX(${getTranslate(index)}px)` }" class="version-item">  -->
                    <div class="version-card"  @click="changeVid(version.fileid)">
                        <h4>版本号: {{ version.index }}</h4>
                        <p>创建时间: {{ formatDate(version.createtime) }}</p>
                    </div>
                </div>

                <!-- <el-avatar v-if="versionList.length > 3" class="allVersion" shape="square"
                    :style="{ transform: `translateX(${versionList.length > 3 ? -30 : versionList.length * -10}px)` }">
                    {{ versionList.length }}
                </el-avatar> -->
            </div>
        </template>
    </dropdown>
</template>

<script setup>
import { ref } from 'vue';
import dropdown from "@el/DropdownUserList/index.vue";
import router from "@/router";


defineProps({
    versionList: { type: Array, default: () => [] },
});

const commandhandle = (command) => console.log("Command triggered:", command);
const getTranslate = (index) => -10 * index;

const parseContent = (content) => {
    try {
        const parsed = JSON.parse(content);
        return parsed[0]?.insert || "无内容";
    } catch {
        return "无效内容";
    }
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`; // 返回格式为 YYYY-MM-DD
};

const changeVid = (vid) => {
    console.log(vid); // 你可以根据需要设置新的 VID 值
    //emit('update-vid', newVid); // 触发事件并传递新的 VID 值
};
</script>

<style lang="less" scoped>
.list {
    display: flex;
    //align-items: center;
    padding: 0px 0px 0px 0px;
    flex-direction: column; 
    align-items: flex-start; 
}
.version-item {
    display: flex;
    justify-content: space-between; /* 水平分散对齐 */
    //width: 100%; /* 确保每个版本项占满宽度 */
    border: 1px solid #ddd;
    margin: 5px;
    padding: 0px 0px 0px 0px;
    border-radius: 4px;
    background-color: #f9f9f9;
    transition: transform 0.3s ease-in-out;
}
.version-info {
    display: flex;
    flex-direction: column; /* 垂直排列版本信息 */
    justify-content: center; /* 垂直居中对齐 */
}
.version-card {
    background-color: #f9f9f9; /* 卡片背景颜色 */
    border: 1px solid #e0e0e0; /* 边框 */
    border-radius: 8px; /* 圆角 */
    padding: 15px; /* 内边距 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 阴影效果 */
    transition: transform 0.2s; /* 添加过渡效果 */
}

/deep/.el-avatar {
    border: solid #fff 1px;
    cursor: pointer;
    height: 25px;
    width: 25px;
    background-color: transparent;
}

.allVersion {
    color: var(--main-color);
    background-color: rgba(0, 0, 0, 0.9);
}
</style>