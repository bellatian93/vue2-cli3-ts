// <template>
//     <div :class="classObj" class="app-wrapper" >
//         <div
//             v-if="classObj.mobile && sidebar.opened"
//             class="drawer-bg"
//             @click="handleClickOutside"
//         />
//         <sidebar class="sidebar-container"/>
//         <div class="main-container">
//             <navbar/>
//             <app-main/>
//         </div>
//     </div>
// </template>