<template>
    <div class="block md:flex lg:mx-64 pt-6 pb-3 font-sans tracking-wide px-3">
        <div class="lg:w-32 flex flex-col">
            <router-link to="/">
                <svg class="w-12 h-12 text-purple-400  mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <p class=" font-mono">Absent Online</p>
            </router-link>
        </div>
        <div class="block md:flex flex-auto space-x-5 md:justify-center items-center">
            <div><router-link class="" to="/camera">Add Student</router-link></div>
            <div><router-link to="/student-list">Student List</router-link></div>
            <div><router-link to="/absent">Take Absent</router-link> </div>
            <div><router-link to="/record">Records</router-link></div>
            <div><router-link to="/sispak">Sistem Pakar</router-link></div>
        </div>
        <div class="px-4 py-2 rounded-2xl cursor-pointer shadow-sm  flex justify-center items-center h-8 my-auto bg-purple-500 hover:bg-purple-700 text-white text-sm">Contact Support</div>
    </div>
</template>
