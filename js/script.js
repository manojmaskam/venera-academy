// ---- Lucide-style icons (inline SVG paths) ----
const ICONS = {
	globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
	layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
	userPlus: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6"/><path d="M22 11h-6"/>',
	barChart: '<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>',
	plug: '<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>',
	code: '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
	users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
	star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
	handshake: '<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>',
	fileText: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',
	shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
	rotateCcw: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
	leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/>',
	helpCircle: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
	makeup: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>',
	hair: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/>',
	cosmo: '<path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/>',
	beautician: '<path d="M14.5 17.5 4.5 15"/><path d="M9 8c-1.8 2.5-3.5 3-6 4l8 10c2-1 6-5 6-7"/><path d="M14.37 7 9 12.34"/><path d="M18.37 2.63 14 7l3 3 4.37-4.37a2.12 2.12 0 1 0-3-3Z"/>',
	nail: '<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/>',
	skin: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
};

const svg = (name) =>
	`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ''}</svg>`;

// ---- Data ----
const productLinks = [
	{ title: 'Makeup Artist', href: 'makeup-artist.html', description: 'Bridal, HD, party, fashion & airbrush makeup', icon: 'makeup' },
	{ title: 'Hair Stylist', href: 'hair-stylist.html', description: 'Haircuts, coloring, keratin & bridal styling', icon: 'hair' },
	{ title: 'Cosmetologist', href: 'cosmetologist.html', description: 'Advanced skin, hair & beauty therapy', icon: 'cosmo' },
	{ title: 'Beautician', href: 'beautician.html', description: 'Facials, waxing, threading & grooming', icon: 'beautician' },
	{ title: 'Nail Art', href: 'nail.html', description: 'Manicure, pedicure, gel & acrylic designs', icon: 'nail' },
	{ title: 'Skin Specialist', href: 'skin-specialist.html', description: 'Facials, peels & advanced skin treatments', icon: 'skin' },
];

const companyLinks = [
	{ title: 'About Us', href: 'about.html', description: 'Learn more about our story and team', icon: 'users' },
	{ title: 'Customer Stories', href: '#', description: 'See how we’ve helped our clients succeed', icon: 'star' },
	{ title: 'Partnerships', href: '#', description: 'Collaborate with us for mutual growth', icon: 'handshake' },
];

const companyLinks2 = [
	{ title: 'Terms of Service', href: '#', icon: 'fileText' },
	{ title: 'Privacy Policy', href: '#', icon: 'shield' },
	{ title: 'Refund Policy', href: '#', icon: 'rotateCcw' },
	{ title: 'Blog', href: '#', icon: 'leaf' },
	{ title: 'Help Center', href: '#', icon: 'helpCircle' },
];

// ---- Renderers ----
const listItem = (item) => `
	<a href="${item.href}" class="list-item" title="${item.title}">
		<div class="icon-box">${svg(item.icon)}</div>
		<div class="text">
			<span class="title">${item.title}</span>
			${item.description ? `<span class="desc">${item.description}</span>` : ''}
		</div>
	</a>`;

const listLink = (item) => `
	<a href="${item.href}" class="list-link" title="${item.title}">${svg(item.icon)}<span>${item.title}</span></a>`;

const renderLi = (items, fn) => items.map((i) => `<li>${fn(i)}</li>`).join('');

// Desktop dropdowns (guarded — some menus may be removed)
const setHTML = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };
setHTML('product-list', renderLi(productLinks, listItem));
setHTML('company-list', renderLi(companyLinks, listItem));
setHTML('company-list-2', renderLi(companyLinks2, listLink));

// Mobile menu
setHTML('m-product', productLinks.map(listItem).join(''));
setHTML('m-company', companyLinks.map(listItem).join(''));
setHTML('m-company-2', companyLinks2.map(listItem).join(''));

// ---- Dropdown behaviour (hover on desktop, click for keyboard/touch) ----
const navItems = document.querySelectorAll('.nav-item');
const closeAll = (except) => {
	navItems.forEach((item) => {
		if (item !== except) {
			item.classList.remove('open');
			item.querySelector('.nav-trigger')?.setAttribute('aria-expanded', 'false');
		}
	});
};

navItems.forEach((item) => {
	const trigger = item.querySelector('.nav-trigger');
	item.addEventListener('mouseenter', () => {
		closeAll(item);
		item.classList.add('open');
		trigger.setAttribute('aria-expanded', 'true');
	});
	item.addEventListener('mouseleave', () => {
		item.classList.remove('open');
		trigger.setAttribute('aria-expanded', 'false');
	});
	trigger.addEventListener('click', (e) => {
		// The Courses trigger is a real link to courses.html. On a pointer
		// device the dropdown has already opened on hover, so let the click
		// through; only hijack it as a toggle where hover never fires.
		const href = trigger.getAttribute('href');
		const isLink = href && href !== '#';
		if (isLink && window.matchMedia('(hover: hover)').matches) return;
		e.preventDefault();
		const isOpen = item.classList.toggle('open');
		trigger.setAttribute('aria-expanded', String(isOpen));
		if (isOpen) closeAll(item);
	});
});

document.addEventListener('click', (e) => {
	if (!e.target.closest('.nav-item')) closeAll(null);
});
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') closeAll(null);
});

// ---- Mobile menu toggle ----
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

const setMobile = (open) => {
	mobileMenu.classList.toggle('open', open);
	menuToggle.setAttribute('aria-expanded', String(open));
	mobileMenu.setAttribute('aria-hidden', String(!open));
	document.body.style.overflow = open ? 'hidden' : '';
};

menuToggle.addEventListener('click', () => {
	setMobile(!mobileMenu.classList.contains('open'));
});

// Close mobile menu when a link is clicked or viewport grows to desktop
mobileMenu.addEventListener('click', (e) => {
	if (e.target.closest('a')) setMobile(false);
});
window.addEventListener('resize', () => {
	if (window.innerWidth >= 768 && mobileMenu.classList.contains('open')) setMobile(false);
});

// ---- Scroll effect on header ----
const header = document.getElementById('header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ---- Top Courses feature cards ----
const COURSE_ICONS = {
	makeup: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>',
	hair: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/>',
	cosmo: '<path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/>',
	beautician: '<path d="M14.5 17.5 4.5 15"/><path d="M9 8c-1.8 2.5-3.5 3-6 4l8 10c2-1 6-5 6-7"/><path d="M14.37 7 9 12.34"/><path d="M18.37 2.63 14 7l3 3 4.37-4.37a2.12 2.12 0 1 0-3-3Z"/>',
	nail: '<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>',
	skin: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
};

const courses = [
	{ key: 'makeup', title: 'Makeup Artist', href: 'makeup-artist.html', img: 'assets/img/makeup-artist-course-card.jpg', alt: 'Makeup artist applying a bridal look during the Makeup Artist course at Venera Academy Dilsukhnagar', description: 'Bridal, HD, party, fashion & airbrush makeup with hands-on training and pro kits.' },
	{ key: 'hair', title: 'Hair Stylist', href: 'hair-stylist.html', img: 'assets/img/hair-stylist-course-card.jpg', alt: 'Student cutting and styling hair during the Hair Stylist course at Venera Academy Dilsukhnagar', description: 'Haircuts, coloring, keratin, smoothening & bridal hair styling techniques.' },
	{ key: 'cosmo', title: 'Cosmetologist', href: 'cosmetologist.html', img: 'assets/img/cosmetology-course-card.jpg', alt: 'Cosmetology student carrying out a professional skin and beauty therapy treatment', description: 'Advanced skin, hair & beauty therapy that blends science with practical skill.' },
	{ key: 'beautician', title: 'Beautician', href: 'beautician.html', img: 'assets/img/beautician-course-card.jpg', alt: 'Beautician student performing a facial treatment during hands-on salon training', description: 'Facials, waxing, threading, grooming & basic makeup — ideal for beginners.' },
	{ key: 'nail', title: 'Nail Art', href: 'nail.html', img: 'assets/img/nail-art-course-card.jpg', alt: 'Nail technician creating a nail art design during the Nail Art course in Hyderabad', description: 'Manicure, pedicure, gel, acrylic extensions & creative nail art designs.' },
	{ key: 'skin', title: 'Skin Specialist', href: 'skin-specialist.html', img: 'assets/img/skin-specialist-course-card.jpg', alt: 'Skin specialist student performing a facial treatment during advanced skin training', description: 'Facials, peels, clean-ups & advanced treatments for healthy, glowing skin.' },
];

const featureGrid = document.getElementById('feature-grid');
if (featureGrid) {
	featureGrid.innerHTML = courses
		.map(
			(c) => `
		<a class="course-img-card reveal reveal-up" href="${c.href}" title="${c.title} Course">
			<div class="cic-media">
				<img src="${c.img}" alt="${c.alt}" title="${c.title} Course in Hyderabad" width="1200" height="896" loading="lazy" decoding="async">
				<span class="cic-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${COURSE_ICONS[c.key]}</svg></span>
			</div>
			<div class="cic-body">
				<h3>${c.title}</h3>
				<p>${c.description}</p>
				<span class="cic-link">View Course
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
				</span>
			</div>
		</a>`
		)
		.join('');
}

// ---- 3D Circular Gallery ----
const galleryItems = [
	{ slug: 'bridal-makeup-portrait', title: 'Bridal Makeup', alt: 'Finished bridal makeup look with full base, eyes and lip' },
	{ slug: 'hairdresser-precision-cutting', title: 'Precision Cutting', alt: 'Precision haircut being sectioned and cut at the styling chair' },
	{ slug: 'smoky-eye-makeup-portrait', title: 'HD & Smokey Eye', alt: 'Smokey eye makeup blended over an HD base' },
	{ slug: 'nail-art-crystal-extensions', title: 'Nail Extensions', alt: 'Crystal-set nail extensions shaped and finished' },
	{ slug: 'hydra-facial-treatment', title: 'Skin & Facial Therapy', alt: 'Hydrating facial treatment being carried out in the skin lab' },
	{ slug: 'bridal-hair-updo-styling', title: 'Bridal Hair', alt: 'Bridal updo being pinned and dressed' },
	{ slug: 'creative-eye-makeup-crystals', title: 'Creative & Editorial', alt: 'Creative editorial eye makeup finished with crystal detail' },
	{ slug: 'floral-nail-art', title: 'Nail Art', alt: 'Hand-painted floral nail art on a full set' },
	{ slug: 'advanced-skin-treatment', title: 'Advanced Skin', alt: 'Advanced machine-assisted skin treatment in progress' },
	{ slug: 'saree-draping-portrait', title: 'Saree Draping', alt: 'Saree draping finished as part of a complete bridal look' },
];

const hgTrack = document.getElementById('hg-track');
if (hgTrack) {
	const prevBtn = document.getElementById('hg-prev');
	const nextBtn = document.getElementById('hg-next');

	// Build slides — render twice so we can loop seamlessly (infinite scroll)
	const slide = (item, clone) => `
		<div class="hg-item" role="group" aria-label="${item.title}"${clone ? ' aria-hidden="true"' : ''}>
			<div class="hg-card">
				<img src="assets/img/library/${item.slug}-800.webp" srcset="assets/img/library/${item.slug}-800.webp 800w, assets/img/library/${item.slug}.webp 1600w" sizes="280px" alt="${clone ? '' : item.alt}" title="${item.title}" width="800" height="533" loading="lazy" decoding="async">
				<div class="hg-caption">
					<h3>${item.title}</h3>
					<p>Venera Academy, Dilsukhnagar</p>
				</div>
			</div>
		</div>`;
	hgTrack.innerHTML = galleryItems.map((i) => slide(i, false)).join('') + galleryItems.map((i) => slide(i, true)).join('');

	// Width of one full set of items (half the track) — the loop boundary
	// Cache the loop boundary (half the track) — recompute on resize only,
	// never per-frame, to avoid layout thrashing.
	let halfWidth = hgTrack.scrollWidth / 2;
	const recalc = () => { halfWidth = hgTrack.scrollWidth / 2; };
	window.addEventListener('resize', recalc);
	window.addEventListener('load', recalc);

	// Keep scrollLeft within [0, halfWidth) so the loop is invisible
	const wrap = () => {
		if (hgTrack.scrollLeft >= halfWidth) hgTrack.scrollLeft -= halfWidth;
		else if (hgTrack.scrollLeft < 0) hgTrack.scrollLeft += halfWidth;
	};

	// Scroll by roughly one card width (plus gap) per button press
	const scrollAmount = () => {
		const first = hgTrack.querySelector('.hg-item');
		const gap = parseFloat(getComputedStyle(hgTrack).columnGap || '0') || 0;
		return first ? first.getBoundingClientRect().width + gap : hgTrack.clientWidth * 0.8;
	};

	prevBtn.addEventListener('click', () => {
		hgTrack.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
	});
	nextBtn.addEventListener('click', () => {
		hgTrack.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
	});

	hgTrack.addEventListener('scroll', wrap, { passive: true });

	// ---- Slow auto-scroll (pauses on hover / interaction / when off-screen) ----
	const AUTO_PX_PER_FRAME = 0.5; // gentle drift
	let autoOn = true;
	let onScreen = true;
	let rafId = null;

	const autoLoop = () => {
		if (autoOn && onScreen) {
			hgTrack.scrollLeft += AUTO_PX_PER_FRAME;
			wrap();
			rafId = requestAnimationFrame(autoLoop);
		} else {
			rafId = null; // stop the loop entirely while idle — saves the CPU/repaint
		}
	};
	const startLoop = () => { if (rafId == null) rafId = requestAnimationFrame(autoLoop); };

	const pause = () => { autoOn = false; };
	const resume = () => { autoOn = true; startLoop(); };

	// only animate while the gallery is actually visible on screen
	if ('IntersectionObserver' in window) {
		new IntersectionObserver((entries) => {
			onScreen = entries[0].isIntersecting;
			if (onScreen) startLoop();
		}).observe(hgTrack);
	}

	// pause while the user is interacting, resume shortly after
	let resumeTimer = null;
	const pauseThenResume = () => {
		pause();
		clearTimeout(resumeTimer);
		resumeTimer = setTimeout(resume, 2500);
	};

	hgTrack.addEventListener('mouseenter', pause);
	hgTrack.addEventListener('mouseleave', resume);
	hgTrack.addEventListener('pointerdown', pause);
	hgTrack.addEventListener('touchstart', pause, { passive: true });
	hgTrack.addEventListener('wheel', pauseThenResume, { passive: true });
	prevBtn.addEventListener('click', pauseThenResume);
	nextBtn.addEventListener('click', pauseThenResume);

	// respect reduced-motion preference
	if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		startLoop();
	}
}

// ---- Why Choose Us: reasons grid + scroll text reveal ----
const whyReasons = [
	{ icon: 'award', title: 'Certified expert trainers', note: 'Working artists, not textbook teachers' },
	{ icon: 'hand', title: '100% practical learning', note: 'On the tools from day one' },
	{ icon: 'user', title: 'Real model practice', note: 'Live faces, hair and skin every week' },
	{ icon: 'camera', title: 'Portfolio photoshoots', note: 'Leave with images clients will see' },
	{ icon: 'briefcase', title: 'Placement support', note: 'Salon introductions and interview prep' },
	{ icon: 'pin', title: 'Centrally located', note: 'Minutes from Dilsukhnagar metro' },
	{ icon: 'seal', title: 'Recognised certification', note: 'Valid with salons across India' },
];

const WHY_ICONS = {
	award: '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
	hand: '<path d="M8 13V5a2 2 0 1 1 4 0v6"/><path d="M12 11V4a2 2 0 1 1 4 0v7"/><path d="M16 11V6a2 2 0 1 1 4 0v9a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6v-2a2 2 0 1 1 4 0"/>',
	user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
	camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3Z"/><circle cx="12" cy="13" r="3.5"/>',
	briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
	pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
	seal: '<circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/>',
};

const whyGrid = document.getElementById('why-grid');
if (whyGrid) {
	whyGrid.innerHTML = whyReasons
		.map(
			(r) =>
				`<li class="why-item">` +
				`<span class="why-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${WHY_ICONS[r.icon]}</svg></span>` +
				`<span class="why-body"><span class="why-title">${r.title}</span><span class="why-note">${r.note}</span></span>` +
				`</li>`
		)
		.join('');
}

// Scroll-driven word-by-word reveal
const trText = document.getElementById('tr-text');
const trWrap = document.getElementById('text-reveal');
if (trText && trWrap) {
	const words = (trText.dataset.text || '').split(' ');
	// highlight the brand-relevant words
	const brandWords = new Set(['Venera', 'Academy', 'Dilsukhnagar,', 'certified', '100%', 'India.']);
	trText.innerHTML = words
		.map((w) => {
			const cls = brandWords.has(w) ? ' brand' : '';
			return `<span class="tr-word"><span class="tr-base">${w}</span><span class="tr-fill${cls}">${w}</span></span>`;
		})
		.join(' ');

	// the whole section is pinned via .why-track / .why-stage
	const track = document.getElementById('why-track');
	const stage = track ? track.querySelector('.why-stage') : null;
	const fills = Array.from(trText.querySelectorAll('.tr-fill'));
	const n = fills.length;

	const updateReveal = () => {
		const scrollEl = track || trWrap;
		const rect = scrollEl.getBoundingClientRect();
		// pinned for (track height - stage height) of scrolling
		const stageH = stage ? stage.offsetHeight : window.innerHeight;
		// the stage pins at `top: var(--header-h)`, so the reveal starts when
		// the track reaches that line rather than the viewport edge
		const pinTop = stage ? (parseFloat(getComputedStyle(stage).top) || 0) : 0;
		const scrollable = scrollEl.offsetHeight - stageH - pinTop;
		const scrolled = Math.min(Math.max(pinTop - rect.top, 0), Math.max(scrollable, 0));
		// finish the reveal a touch before the block unpins so the words are
		// fully filled by the time the grid below scrolls into view
		const raw = scrollable > 0 ? scrolled / scrollable : 0;
		const progress = Math.min(raw / 0.85, 1);
		fills.forEach((el, i) => {
			// each word reveals over a small overlapping window for a smooth sweep
			const start = i / n;
			const end = (i + 1) / n;
			const o = Math.min(Math.max((progress - start) / (end - start), 0), 1);
			el.style.opacity = String(o);
		});
	};
	window.addEventListener('scroll', updateReveal, { passive: true });
	window.addEventListener('resize', updateReveal);
	updateReveal();
}

// ---- Testimonials carousel ----
const testimonials = [
	{ quote: 'The bridal makeup training was incredible. I started my own studio within 3 months of finishing!', name: 'Sneha Reddy', role: 'Makeup Artist' },
	{ quote: 'Hands-on practice with real models gave me so much confidence. Best decision I ever made.', name: 'Priya Sharma', role: 'Hair Stylist' },
	{ quote: 'The best beauty academy in Dilsukhnagar. The trainers are patient, skilled and so supportive.', name: 'Ayesha Khan', role: 'Beautician' },
	{ quote: 'A hands-on curriculum plus placement support — I got hired right after my course ended.', name: 'Divya Naidu', role: 'Cosmetologist' },
	{ quote: 'I learned nail art completely from scratch. Now I earn doing exactly what I love every day.', name: 'Lavanya Rao', role: 'Nail Artist' },
];

const track = document.getElementById('t-track');
if (track) {
	const prevBtn = document.getElementById('t-prev');
	const nextBtn = document.getElementById('t-next');
	const dotsWrap = document.getElementById('t-dots');

	const initials = (name) =>
		name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase();

	track.innerHTML = testimonials
		.map(
			(t) => `
		<div class="t-card-wrap">
			<div class="t-card">
				<span class="t-quote-mark">&ldquo;</span>
				<p class="t-quote">&ldquo;${t.quote}&rdquo;</p>
				<div class="t-foot">
					<div class="t-avatar">${initials(t.name)}</div>
					<div>
						<div class="t-name">${t.name}</div>
						<div class="t-role">${t.role}</div>
					</div>
				</div>
			</div>
		</div>`
		)
		.join('');

	const visibleCount = () => {
		const w = window.innerWidth;
		return w >= 1280 ? 3 : w >= 768 ? 2 : 1;
	};

	let index = 0;
	let dir = 1;
	let autoTimer = null;
	let resumeTimer = null;

	const render = () => {
		const vis = visibleCount();
		const maxIndex = Math.max(0, testimonials.length - vis);
		if (index > maxIndex) index = maxIndex;

		track.style.setProperty('--visible', vis);
		track.style.transform = `translateX(-${index * (100 / vis)}%)`;

		prevBtn.disabled = index <= 0;
		nextBtn.disabled = index >= maxIndex;

		// dots
		const dotCount = maxIndex + 1;
		dotsWrap.innerHTML = Array.from({ length: dotCount }, (_, i) =>
			`<button class="t-dot${i === index ? ' active' : ''}" data-i="${i}" aria-label="Go to slide ${i + 1}"></button>`
		).join('');
	};

	const maxIndex = () => Math.max(0, testimonials.length - visibleCount());

	const goTo = (i, pause = true) => {
		index = Math.min(Math.max(i, 0), maxIndex());
		render();
		if (pause) pauseAuto();
	};
	const next = (pause) => goTo(index + 1, pause);
	const prev = (pause) => goTo(index - 1, pause);

	const startAuto = () => {
		stopAuto();
		autoTimer = setInterval(() => {
			const m = maxIndex();
			if (m === 0) return;
			if (index >= m) dir = -1;
			else if (index <= 0) dir = 1;
			goTo(index + dir, false);
		}, 4000);
	};
	const stopAuto = () => autoTimer && clearInterval(autoTimer);
	const pauseAuto = () => {
		stopAuto();
		if (resumeTimer) clearTimeout(resumeTimer);
		resumeTimer = setTimeout(startAuto, 8000);
	};

	prevBtn.addEventListener('click', () => prev(true));
	nextBtn.addEventListener('click', () => next(true));
	dotsWrap.addEventListener('click', (e) => {
		const dot = e.target.closest('.t-dot');
		if (dot) goTo(Number(dot.dataset.i), true);
	});

	// Drag / swipe
	let startX = 0;
	let dragging = false;
	const onDown = (x) => { startX = x; dragging = true; };
	const onUp = (x) => {
		if (!dragging) return;
		dragging = false;
		const dx = x - startX;
		if (dx < -30) next(true);
		else if (dx > 30) prev(true);
	};
	track.addEventListener('pointerdown', (e) => onDown(e.clientX));
	window.addEventListener('pointerup', (e) => onUp(e.clientX));

	let rT;
	window.addEventListener('resize', () => {
		clearTimeout(rT);
		rT = setTimeout(render, 120);
	});

	render();
	startAuto();
}

// ---- Career Opportunities: reveal, stat counters, parallax ----
const careerRoot = document.querySelector('.career .reveal-root');
if (careerRoot) {
	const revealObserver = new IntersectionObserver(
		(entries) => entries.forEach((e) => e.target.classList.toggle('in', e.isIntersecting)),
		{ threshold: 0.12 }
	);
	revealObserver.observe(careerRoot);

	// Animated count-up
	const statValues = Array.from(document.querySelectorAll('.career .stat-value'));
	const runCount = (el) => {
		const target = Number(el.dataset.value) || 0;
		const suffix = el.dataset.suffix || '';
		const duration = 1600;
		let startTime = null;
		const step = (ts) => {
			if (startTime === null) startTime = ts;
			const p = Math.min((ts - startTime) / duration, 1);
			const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
			el.textContent = Math.floor(eased * target) + suffix;
			if (p < 1) requestAnimationFrame(step);
			else el.textContent = target + suffix;
		};
		requestAnimationFrame(step);
	};
	const statsWrap = document.getElementById('co-stats');
	if (statsWrap) {
		const statObserver = new IntersectionObserver(
			(entries) => entries.forEach((e) => {
				if (e.isIntersecting) {
					statValues.forEach(runCount);
					statObserver.disconnect();
				}
			}),
			{ threshold: 0.3 }
		);
		statObserver.observe(statsWrap);
	}

	// Parallax on decorative blurs
	const careerSection = document.getElementById('career');
	const blur1 = careerSection.querySelector('.co-blur-1');
	const blur2 = careerSection.querySelector('.co-blur-2');
	const onCareerScroll = () => {
		const rect = careerSection.getBoundingClientRect();
		const vh = window.innerHeight;
		// -1 (below) .. 1 (above) relative progress
		const prog = (vh - rect.top) / (vh + rect.height) - 0.5;
		if (blur1) blur1.style.transform = `translateY(${prog * -60}px)`;
		if (blur2) blur2.style.transform = `translateY(${prog * 60}px)`;
	};
	window.addEventListener('scroll', onCareerScroll, { passive: true });
	onCareerScroll();
}

// ---- Placement: container scroll (3D rotate-in card) ----
const csContainer = document.getElementById('container-scroll');
const csHeader = document.getElementById('cs-header');
const csCard = document.getElementById('cs-card');
if (csContainer && csCard && csHeader) {
	const lerp = (a, b, t) => a + (b - a) * t;

	const updateCS = () => {
		// On mobile we show the card flat in normal flow (CSS handles it) — no transforms
		if (window.innerWidth <= 767) {
			csHeader.style.transform = '';
			csCard.style.transform = '';
			return;
		}
		const rect = csContainer.getBoundingClientRect();
		const stage = csContainer.querySelector('.cs-perspective');
		// the stage pins at `top: var(--header-h)`, so progress is measured
		// from that line rather than the viewport edge
		const pinTop = stage ? (parseFloat(getComputedStyle(stage).top) || 0) : 0;
		const stageH = stage ? stage.offsetHeight : window.innerHeight;
		const range = rect.height - stageH - pinTop;
		const p = range > 0 ? Math.min(Math.max((pinTop - rect.top) / range, 0), 1) : 1;

		const rotate = lerp(20, 0, p);          // rotateX 20deg -> 0
		const scale = lerp(1.05, 1, p);
		const translateY = lerp(0, -50, p);     // header drifts up slightly

		csHeader.style.transform = `translateY(${translateY}px)`;
		csCard.style.transform = `rotateX(${rotate}deg) scale(${scale})`;
	};
	window.addEventListener('scroll', updateCS, { passive: true });
	window.addEventListener('resize', updateCS);
	updateCS();
}

// ---- FAQ accordion ----
const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length) {
	faqItems.forEach((item) => {
		const btn = item.querySelector('.faq-q');
		btn.addEventListener('click', () => {
			const isOpen = item.classList.contains('open');
			// close others (single-open accordion); remove this loop for multi-open
			faqItems.forEach((other) => {
				other.classList.remove('open');
				other.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
			});
			if (!isOpen) {
				item.classList.add('open');
				btn.setAttribute('aria-expanded', 'true');
			}
		});
	});
}

// ---- Generic scroll reveal (slide in from sides) ----
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
	const revealObs = new IntersectionObserver(
		(entries) => entries.forEach((e) => {
			if (e.isIntersecting) {
				e.target.classList.add('in');
				revealObs.unobserve(e.target);
			}
		}),
		{ threshold: 0.2 }
	);
	revealEls.forEach((el) => revealObs.observe(el));
}

// ---- Blog category filter ----
const blogCats = document.querySelectorAll('.blog-cat');
if (blogCats.length) {
	const cards = Array.from(document.querySelectorAll('.blog-card'));
	const featured = document.querySelector('.blog-featured');
	const tagText = (el) => {
		const tag = el.querySelector('.bc-tag, .bf-tag');
		return tag ? tag.textContent.trim().toLowerCase() : '';
	};
	blogCats.forEach((btn) => {
		btn.addEventListener('click', () => {
			blogCats.forEach((b) => b.classList.remove('active'));
			btn.classList.add('active');
			const cat = btn.textContent.trim().toLowerCase();
			cards.forEach((c) => { c.style.display = (cat === 'all' || tagText(c) === cat) ? '' : 'none'; });
			if (featured) featured.style.display = (cat === 'all' || tagText(featured) === cat) ? '' : 'none';
		});
	});
}

// ---- Contact form ----
const contactForm = document.getElementById('contact-form');
if (contactForm) {
	contactForm.addEventListener('submit', (e) => {
		e.preventDefault();
		const btn = contactForm.querySelector('.cf-submit');
		const original = btn.textContent;
		btn.textContent = 'Thank you! We’ll call you back ✓';
		btn.disabled = true;
		contactForm.reset();
		setTimeout(() => {
			btn.textContent = original;
			btn.disabled = false;
		}, 3500);
	});
}

// ---- Active nav highlighting (current page) ----
(function () {
	const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
	const coursePages = ['courses.html', 'makeup-artist.html', 'hair-stylist.html', 'cosmetologist.html', 'beautician.html', 'nail.html', 'skin-specialist.html'];
	const blogPages = ['blog.html', 'blog-post.html'];
	const mark = (sel) => {
		document.querySelectorAll(sel).forEach((a) => {
			const href = (a.getAttribute('href') || '').split('/').pop().toLowerCase();
			if (!href || href.charAt(0) === '#') return;
			if (href === path || (blogPages.includes(path) && href === 'blog.html')) a.classList.add('active');
		});
	};
	mark('.nav-link');
	mark('.mobile-link');
	if (coursePages.includes(path)) {
		const item = document.querySelector('.nav-item[data-menu="product"]');
		if (item) item.classList.add('active');
		const msec = document.querySelector('.mobile-section');
		if (msec) msec.classList.add('active');
	}
})();

// ---- Smooth in-page anchor scroll offset for the sticky header ----
(function () {
	const header = document.querySelector('.header');
	document.querySelectorAll('a[href^="#"]').forEach((a) => {
		const hash = a.getAttribute('href');
		if (!hash || hash.length < 2) return; // skip bare "#"
		a.addEventListener('click', (e) => {
			const target = document.getElementById(hash.slice(1));
			if (!target) return;
			e.preventDefault();
			const offset = (header ? header.offsetHeight : 0) + 16;
			const y = target.getBoundingClientRect().top + window.scrollY - offset;
			window.scrollTo({ top: y, behavior: 'smooth' });
			history.pushState(null, '', hash);
		});
	});
})();

// ---- Custom select dropdown (gold hover instead of native blue popup) ----
document.querySelectorAll('.da-form select').forEach(function (sel) {
	const wrap = document.createElement('div');
	wrap.className = 'cselect';
	const btn = document.createElement('button');
	btn.type = 'button';
	btn.className = 'cselect-btn';
	const label = document.createElement('span');
	label.className = 'cselect-label';
	btn.appendChild(label);
	btn.insertAdjacentHTML('beforeend', '<svg class="cselect-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>');
	const list = document.createElement('div');
	list.className = 'cselect-list';
	list.setAttribute('role', 'listbox');
	Array.prototype.forEach.call(sel.options, function (o) {
		const item = document.createElement('div');
		item.className = 'cselect-opt' + (o.disabled ? ' disabled' : '');
		item.setAttribute('role', 'option');
		item.textContent = o.textContent;
		if (o.selected) {
			label.textContent = o.textContent;
			if (o.value === '') label.classList.add('placeholder');
			if (!o.disabled) item.classList.add('sel');
		}
		item.addEventListener('click', function () {
			if (o.disabled) return;
			sel.value = o.value;
			sel.dispatchEvent(new Event('change', { bubbles: true }));
			label.textContent = o.textContent;
			label.classList.remove('placeholder');
			list.querySelectorAll('.cselect-opt').forEach(function (x) { x.classList.remove('sel'); });
			item.classList.add('sel');
			wrap.classList.remove('open');
		});
		list.appendChild(item);
	});
	sel.classList.add('cselect-native');
	sel.setAttribute('tabindex', '-1');
	sel.parentNode.insertBefore(wrap, sel);
	wrap.appendChild(btn);
	wrap.appendChild(list);
	wrap.appendChild(sel);
	btn.addEventListener('click', function (e) {
		e.stopPropagation();
		document.querySelectorAll('.cselect.open').forEach(function (w) { if (w !== wrap) w.classList.remove('open'); });
		wrap.classList.toggle('open');
	});
	document.addEventListener('click', function () { wrap.classList.remove('open'); });
});

/* ---- Hero slideshow: cross-fade every 5s, with prev/next controls ---- */
(function () {
	var photo = document.querySelector('.hero-photo');
	if (!photo) return;
	var slides = photo.querySelectorAll('.hero-slide');
	if (slides.length < 2) return;

	var hero = photo.closest('.hero');
	var prev = hero.querySelector('.hero-nav--prev');
	var next = hero.querySelector('.hero-nav--next');
	var index = 0;
	var timer = null;
	var PHONE = window.matchMedia('(max-width: 640px)');
	var DELAY = 3000;

	// some slides only earn their place on a phone — CSS hides them above the
	// breakpoint, so the rotation has to skip them or it plays a blank beat
	function reel() {
		return [].filter.call(slides, function (s) {
			return PHONE.matches || !s.classList.contains('hero-slide--phone');
		});
	}
	function show(i) {
		var list = reel();
		index = (i + list.length) % list.length;
		slides.forEach(function (s) { s.classList.remove('is-active'); });
		list[index].classList.add('is-active');
	}
	function go(step) { show(index + step); start(); }
	function start() {
		stop();
		// autoplay is motion the visitor did not ask for — honour the setting
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		timer = setInterval(function () { show(index + 1); }, DELAY);
	}
	function stop() { if (timer) { clearInterval(timer); timer = null; } }

	if (prev) prev.addEventListener('click', function () { go(-1); });
	if (next) next.addEventListener('click', function () { go(1); });

	// pause while the visitor is reading or tabbing through the hero
	hero.addEventListener('mouseenter', stop);
	hero.addEventListener('mouseleave', start);
	hero.addEventListener('focusin', stop);
	hero.addEventListener('focusout', start);
	document.addEventListener('visibilitychange', function () {
		if (document.hidden) stop(); else start();
	});

	// re-time the loop if the viewport crosses the breakpoint (rotation)
	// crossing the breakpoint changes both the pace and which slides are in
	// play, so re-seat the rotation from the top rather than only re-timing it
	if (PHONE.addEventListener) PHONE.addEventListener('change', function () { show(0); start(); });

	start();
})();
