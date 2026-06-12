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
	<a href="${item.href}" class="list-item">
		<div class="icon-box">${svg(item.icon)}</div>
		<div class="text">
			<span class="title">${item.title}</span>
			${item.description ? `<span class="desc">${item.description}</span>` : ''}
		</div>
	</a>`;

const listLink = (item) => `
	<a href="${item.href}" class="list-link">${svg(item.icon)}<span>${item.title}</span></a>`;

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
	{ key: 'makeup', title: 'Makeup Artist', href: 'makeup-artist.html', img: 'assets/img/imgi_21_g2.png', description: 'Bridal, HD, party, fashion & airbrush makeup with hands-on training and pro kits.' },
	{ key: 'hair', title: 'Hair Stylist', href: 'hair-stylist.html', img: 'assets/img/imgi_22_g3.png', description: 'Haircuts, coloring, keratin, smoothening & bridal hair styling techniques.' },
	{ key: 'cosmo', title: 'Cosmetologist', href: 'cosmetologist.html', img: 'assets/img/imgi_24_g5.png', description: 'Advanced skin, hair & beauty therapy that blends science with practical skill.' },
	{ key: 'beautician', title: 'Beautician', href: 'beautician.html', img: 'assets/img/imgi_25_g6.png', description: 'Facials, waxing, threading, grooming & basic makeup — ideal for beginners.' },
	{ key: 'nail', title: 'Nail Art', href: 'nail.html', img: 'assets/img/imgi_26_g7.png', description: 'Manicure, pedicure, gel, acrylic extensions & creative nail art designs.' },
	{ key: 'skin', title: 'Skin Specialist', href: 'skin-specialist.html', img: 'assets/img/imgi_27_g8.png', description: 'Facials, peels, clean-ups & advanced treatments for healthy, glowing skin.' },
];

const featureGrid = document.getElementById('feature-grid');
if (featureGrid) {
	featureGrid.innerHTML = courses
		.map(
			(c) => `
		<a class="course-img-card reveal reveal-up" href="${c.href}">
			<div class="cic-media">
				<img src="${c.img}" alt="${c.title}" loading="lazy">
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
	{ url: 'assets/img/imgi_21_g2.png', title: 'Bridal Makeup' },
	{ url: 'assets/img/imgi_22_g3.png', title: 'Hair Styling' },
	{ url: 'assets/img/imgi_24_g5.png', title: 'HD Makeup' },
	{ url: 'assets/img/imgi_25_g6.png', title: 'Nail Art' },
	{ url: 'assets/img/imgi_26_g7.png', title: 'Skin & Facial' },
	{ url: 'assets/img/imgi_27_g8.png', title: 'Student Showcase' },
	{ url: 'assets/img/imgi_28_g9.png', title: 'Salon Training' },
	{ url: 'assets/img/imgi_29_g10.png', title: 'Cosmetology Lab' },
	{ url: 'assets/img/imgi_30_g11.png', title: 'Airbrush Makeup' },
	{ url: 'assets/img/imgi_31_g12.png', title: 'Graduation Day' },
];

const rotator = document.getElementById('cg-rotator');
if (rotator) {
	const AUTO_SPEED = 0.03;
	const anglePerItem = 360 / galleryItems.length;
	let radius = 600;

	// Build items
	rotator.innerHTML = galleryItems
		.map(
			(item, i) => `
		<div class="cg-item" role="group" aria-label="${item.title}" data-angle="${i * anglePerItem}">
			<div class="cg-card">
				<img src="${item.url}" alt="${item.title}" loading="lazy">
				<div class="cg-caption">
					<h3>${item.title}</h3>
					<p>Venera Academy, Dilsukhnagar</p>
				</div>
			</div>
		</div>`
		)
		.join('');

	const cgItems = Array.from(rotator.querySelectorAll('.cg-item'));

	const computeRadius = () => {
		const w = window.innerWidth;
		radius = w < 640 ? 320 : w < 1024 ? 460 : 600;
	};
	computeRadius();
	window.addEventListener('resize', computeRadius);

	const positionItems = () => {
		cgItems.forEach((el) => {
			const angle = Number(el.dataset.angle);
			el.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
		});
	};

	const SPIN_SPEED = 0.12; // degrees per frame for the automatic spin
	let rotation = 0;
	let dragging = false;
	let dragStartX = 0;
	let dragStartRotation = 0;

	const updateOpacity = () => {
		const total = ((rotation % 360) + 360) % 360;
		cgItems.forEach((el) => {
			const itemAngle = Number(el.dataset.angle);
			const rel = (itemAngle + total + 360) % 360;
			const norm = Math.abs(rel > 180 ? 360 - rel : rel);
			// keep cards mostly opaque (less see-through) while the full ring still rotates
			el.style.opacity = String(Math.max(0.82, 1 - norm / 360));
			// layer front cards above back cards so they overlap cleanly
			el.style.zIndex = String(Math.round(360 - norm));
		});
	};

	const loop = () => {
		// automatic spin whenever the user isn't dragging
		if (!dragging) rotation += SPIN_SPEED;
		rotator.style.transform = `rotateY(${rotation}deg)`;
		updateOpacity();
		requestAnimationFrame(loop);
	};

	// Manual spin via drag (mouse + touch)
	const stage = document.getElementById('circular-gallery');
	stage.addEventListener('pointerdown', (e) => {
		dragging = true;
		dragStartX = e.clientX;
		dragStartRotation = rotation;
		stage.setPointerCapture?.(e.pointerId);
	});
	stage.addEventListener('pointermove', (e) => {
		if (!dragging) return;
		// 0.4° of spin per pixel dragged
		rotation = dragStartRotation + (e.clientX - dragStartX) * 0.4;
	});
	const endDrag = () => { dragging = false; };
	stage.addEventListener('pointerup', endDrag);
	stage.addEventListener('pointercancel', endDrag);
	stage.addEventListener('pointerleave', endDrag);

	// keep items positioned (radius can change on resize)
	const reposition = () => positionItems();
	window.addEventListener('resize', reposition);
	positionItems();
	requestAnimationFrame(loop);
}

// ---- Why Choose Us: reasons grid + scroll text reveal ----
const whyReasons = [
	'Lakmé-certified experienced trainers',
	'100% practical-based learning',
	'Real model practice',
	'Student portfolio photoshoots',
	'Placement support',
	'Centrally located in Dilsukhnagar',
	'Certification recognized across India',
];

const whyGrid = document.getElementById('why-grid');
if (whyGrid) {
	const check = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
	whyGrid.innerHTML = whyReasons
		.map((r) => `<li class="why-item"><span class="why-check">${check}</span><span>${r}</span></li>`)
		.join('');
}

// Scroll-driven word-by-word reveal
const trText = document.getElementById('tr-text');
const trWrap = document.getElementById('text-reveal');
if (trText && trWrap) {
	const words = (trText.dataset.text || '').split(' ');
	// highlight the brand-relevant words
	const brandWords = new Set(['Venera', 'Academy', 'Dilsukhnagar,', 'Lakmé-certified', '100%', 'India.']);
	trText.innerHTML = words
		.map((w) => {
			const cls = brandWords.has(w) ? ' brand' : '';
			return `<span class="tr-word"><span class="tr-base">${w}</span><span class="tr-fill${cls}">${w}</span></span>`;
		})
		.join(' ');

	const sticky = trWrap.querySelector('.tr-sticky');
	const fills = Array.from(trText.querySelectorAll('.tr-fill'));
	const n = fills.length;

	const updateReveal = () => {
		const rect = trWrap.getBoundingClientRect();
		// the block is pinned for (container height - sticky height) of scrolling
		const stickyH = sticky ? sticky.offsetHeight : window.innerHeight;
		const scrollable = trWrap.offsetHeight - stickyH;
		const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);
		const progress = scrollable > 0 ? scrolled / scrollable : 0;
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
	{ quote: 'Lakmé-powered curriculum plus placement support — I got hired right after my course ended.', name: 'Divya Naidu', role: 'Cosmetologist' },
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
		const vh = window.innerHeight;
		// progress 0 when container top hits viewport top, 1 when bottom hits viewport bottom
		const range = rect.height - vh;
		const p = range > 0 ? Math.min(Math.max(-rect.top / range, 0), 1) : 1;

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
