<script>
	import '../app.css';
	import { onMount } from 'svelte';

	import Navigation from '$lib/components/Navigation.svelte';

	import { base } from '$app/paths';
	import Up from '$lib/components/Up.svelte';

	let year = new Date().getFullYear();

	onMount(() => {
		const emailtag = document.querySelector('.email-hidden');
		let observer = new IntersectionObserver((entries) => {
			entries.map((entry) => {
				if (entry.isIntersecting) {
					let email = atob(entry.target.dataset.email);
					entry.target.href = 'mailto:' + email;
					entry.target.innerHTML = email;
				}
			});
		}).observe(emailtag);
	});
</script>

<style>
	@media (min-width: 375px) {
		.border-top-left-radius-fix {
			border-top-right-radius: 8px !important;
		}
	}
</style>

<div class="min-h-screen w-full flex flex-col items-center">
	<Navigation />
	<Up />

	<main class="w-full grow flex flex-col items-center bg-base-100">
		<slot />
	</main>

	<footer class="footer gap-6 footer-center p-10 bg-base-300 text-base-content">
		<div class="join join-vertical w-full xs:w-fit xs:join-horizontal gap-0">
			<a class="email-hidden join-item btn btn-sm xs:btn-md btn-outline border-neutral normal-case" href="email" data-email="aW5mb0BpdGFjcGMuaXQ=">
				info
			</a>

			<span data-tip="Telegram" class="tooltip join-item">
				<a href="https://t.me/itacpc" class="join-item btn btn-sm xs:btn-md btn-outline border-neutral bg-[#0088cc] hover:bg-[#00527a]">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-white" viewBox="0 0 496 512"> <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" /></svg>
				</a>
			</span>

			<span data-tip="Instagram" class="tooltip join-item">
				<a href="https://www.instagram.com/itacpc.it/" class="join-item btn btn-sm xs:btn-md btn-outline border-neutral bg-[#c13584] hover:bg-[#74204f]">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
				</a>
			</span>

			<span data-tip="Facebook" class="tooltip join-item">
				<a href="https://www.facebook.com/itacpc.it/" class="join-item btn btn-sm xs:btn-md btn-outline border-neutral bg-[#1877f2] hover:bg-[#094797]">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-white" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
				</a>
			</span>

			<span data-tip="LinkedIn" class="tooltip join-item">
				<a href="https://linkedin.com/company/itacpc" class="border-top-left-radius-fix join-item btn btn-sm xs:btn-md btn-outline border-neutral bg-[#3b5998] hover:bg-[#23355b]">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-white" viewBox="0 0 24 24"> <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
				</a>
			</span>
		</div>
		<div>
			<p class="opacity-90">Copyright © {year} - ITACPC</p>
		</div>
	</footer>
</div>
