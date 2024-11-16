<template>
    <dropdown :list="versionList" @command="commandhandle">
        <template #content>
            <div class="list">
                <div v-for="(version, index) in versionList.slice(0, 3)" :key="index"
                    :style="{ transform: `translateX(${getTranslate(index)}px)` }" class="version-item">
                    <p>版本号: {{ version.index }}</p>
                    <p>修改时间: {{ version.lastmodified }}</p>
                </div>

                <el-avatar v-if="versionList.length > 3" class="allVersion" shape="square"
                    :style="{ transform: `translateX(${versionList.length > 3 ? -30 : versionList.length * -10}px)` }">
                    {{ versionList.length }}
                </el-avatar>
            </div>
        </template>
    </dropdown>
</template>

<script setup>
import dropdown from "@el/DropdownUserList/index.vue";

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
</script>

<style lang="less" scoped>
.list {
    display: flex;
    align-items: center;
    flex-direction: column; 
    align-items: flex-start; 
    .version-item {
        border: 1px solid #ddd;
        margin: 5px;
        padding: 10px;
        border-radius: 4px;
        background-color: #f9f9f9;
        transition: transform 0.3s ease-in-out;
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
}
</style>