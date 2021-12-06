<template>
    <div class="pt-12">
        <footer id="footer" class="relative z-50 dark:bg-gray-900 pt-24">
            <div class="border-t border-b border-gray-200 dark:border-gray-700 py-16">
                <div class="mx-auto container px-4 xl:px-12 2xl:px-4">
                    <div class="lg:flex">
                        <div class="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
                            <div class="w-full lg:w-1/2 px-6">
                                <ul>
                                    <li>
                                        <a class="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50" href="javascript:void(0)">Components</a>
                                    </li>
                                    <li class="mt-6">
                                        <a class="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50" href="javascript:void(0)">Templates</a>
                                    </li>
                                    <li class="mt-6">
                                        <a class="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50" href="javascript:void(0)">Pricing</a>
                                    </li>
                                    <li class="mt-6">
                                        <a class="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50" href="javascript:void(0)">FAQ</a>
                                    </li>
                                    <li class="mt-6">
                                        <a href="javascript:void(0)" class="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">Documentation</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="w-full lg:w-1/2 px-6">
                                <ul>
                                    <li>
                                        <a class="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50" href="javascript:void(0)">Free components</a>
                                    </li>
                                    <li class="mt-6">
                                        <a class="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50" href="javascript:void(0)">Blog</a>
                                    </li>
                                    <li class="mt-6">
                                        <a class="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50" href="javascript:void(0)">Changelog</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="w-full lg:w-1/2 flex">
                            <div class="w-full lg:w-1/2 px-6">
                                <ul>
                                    <li>
                                        <a href="javascript:void(0)" class="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">Privacy policy</a>
                                    </li>
                                    <li class="mt-6">
                                        <a class="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50" href="javascript:void(0)">Terms of service</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="w-full lg:w-1/2 px-6 flex flex-col justify-between">
                                <div class="flex items-center mb-6">
                                    <a href="javascript:void(0)">
                                        <div class="text-gray-800 dark:text-gray-50 cursor-pointer hover:text-brand dark:hover:text-brand">
                                            <svg class="footer-icon feather feather-github" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                            </svg>
                                        </div>
                                    </a>
                                    <a href="javascript:void(0)">
                                        <div class="pl-4">
                                            <svg class="footer-icon feather feather-twitter text-gray-800 dark:text-gray-50 cursor-pointer hover:text-brand dark:hover:text-brand" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-16 flex flex-col justify-center items-center">
                <p class="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">2021 Yblog.</p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: "index",
    data() {
        return {
            auto: true,
            light: false,
            dark: false,
        };
    },
    mounted() {},
    methods: {
        toggle(event) {
            if (event.target.value === "auto") {
                this.auto = true;
                this.light = false;
                this.dark = false;
            }
            if (event.target.value === "light") {
                this.auto = false;
                this.light = true;
                this.dark = false;
            }
            if (event.target.value === "dark") {
                this.auto = false;
                this.light = false;
                this.dark = true;
            }
        },
    },
};
</script>
