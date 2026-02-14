import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useLayoutEffect, useRef, useState } from "react"

gsap.registerPlugin(ScrollTrigger)

// Premium cosmetic product images
const IMAGES = {
	hero: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=90",
	product1:
		"https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&q=90",
	product2:
		"https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=90",
	product3:
		"https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&q=90",
	product4:
		"https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=90",
	testimonial1:
		"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=90",
	testimonial2:
		"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=90",
	testimonial3:
		"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=90",
}

// Icons
const SparkleIcon = () => (
	<svg
		className='w-7 h-7'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='1.5'
	>
		<path d='M12 3v2m0 14v2M5.636 5.636l1.414 1.414m9.9 9.9l1.414 1.414M3 12h2m14 0h2M5.636 18.364l1.414-1.414m9.9-9.9l1.414-1.414' />
		<circle cx='12' cy='12' r='3' />
	</svg>
)

const LeafIcon = () => (
	<svg
		className='w-7 h-7'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='1.5'
	>
		<path d='M12 21c-4-4-8-7-8-12a8 8 0 0116 0c0 5-4 8-8 12z' />
		<path d='M12 21V9' />
	</svg>
)

const DropletIcon = () => (
	<svg
		className='w-7 h-7'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='1.5'
	>
		<path d='M12 2.69l5.66 5.66a8 8 0 11-11.31 0z' />
	</svg>
)

const HeartIcon = () => (
	<svg
		className='w-7 h-7'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='1.5'
	>
		<path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
	</svg>
)

const StarIcon = ({ filled = true }) => (
	<svg
		className={`w-4 h-4 ${
			filled ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"
		}`}
		viewBox='0 0 24 24'
	>
		<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
	</svg>
)

const ArrowRightIcon = () => (
	<svg
		className='w-5 h-5'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		viewBox='0 0 24 24'
	>
		<path d='M5 12h14M12 5l7 7-7 7' />
	</svg>
)

const CheckIcon = () => (
	<svg
		className='w-5 h-5'
		fill='none'
		stroke='currentColor'
		strokeWidth='2.5'
		viewBox='0 0 24 24'
	>
		<path d='M5 13l4 4L19 7' />
	</svg>
)

// Benefits data
const benefits = [
	{
		icon: <SparkleIcon />,
		title: "Nurli porlash",
		subtitle: "Radikal xiralashtirish",
		description: "Vitamin boyitilgan formulamiz bilan teringiz yorqin porlaydi",
		color: "from-violet-500 to-purple-600",
		bgColor: "bg-violet-50",
	},
	{
		icon: <LeafIcon />,
		title: "100% Tabiiy",
		subtitle: "Organik tarkib",
		description: "Barqaror manbalardan olingan sof botanik ekstraktlar",
		color: "from-emerald-500 to-green-600",
		bgColor: "bg-emerald-50",
	},
	{
		icon: <DropletIcon />,
		title: "Chuqur namlik",
		subtitle: "48 soat davomida",
		description: "Innovatsion namlik saqlash texnologiyasi",
		color: "from-blue-500 to-cyan-600",
		bgColor: "bg-blue-50",
	},
	{
		icon: <HeartIcon />,
		title: "Dermatolog tasdiqlangan",
		subtitle: "Klinik sinovdan o'tgan",
		description: "Barcha teri turlari uchun xavfsiz va samarali",
		color: "from-rose-500 to-pink-600",
		bgColor: "bg-rose-50",
	},
]

// Products data
const products = [
	{
		id: 1,
		name: "Luminous Serum",
		subtitle: "Anti-aging formula",
		price: "$128",
		originalPrice: "$160",
		image: IMAGES.product1,
		tag: "Eng ko'p sotilgan",
		rating: 4.9,
		reviews: 2847,
		color: "from-amber-400 to-orange-500",
	},
	{
		id: 2,
		name: "Revive Cream",
		subtitle: "Intensive moisturizer",
		price: "$156",
		originalPrice: "$195",
		image: IMAGES.product2,
		tag: "Yangi",
		rating: 4.8,
		reviews: 1523,
		color: "from-rose-400 to-pink-500",
	},
	{
		id: 3,
		name: "Glow Essence",
		subtitle: "Brightening treatment",
		price: "$98",
		originalPrice: "$125",
		image: IMAGES.product3,
		tag: "Cheklangan",
		rating: 4.9,
		reviews: 3156,
		color: "from-violet-400 to-purple-500",
	},
	{
		id: 4,
		name: "Youth Elixir",
		subtitle: "Regenerating serum",
		price: "$189",
		originalPrice: "$240",
		image: IMAGES.product4,
		tag: "Premium",
		rating: 5.0,
		reviews: 892,
		color: "from-emerald-400 to-teal-500",
	},
]

// Testimonials data
const testimonials = [
	{
		id: 1,
		name: "Sophie Laurent",
		role: "Go'zallik muharriri",
		image: IMAGES.testimonial1,
		text: "Men ishlatgan eng hashamatli terini parvarish qilish vositasi. Terim hech qachon bunday ajoyib ko'rinmagan.",
		rating: 5,
	},
	{
		id: 2,
		name: "Emma Chen",
		role: "Vizajist",
		image: IMAGES.testimonial2,
		text: "Mijozlarim uchun o'yin o'zgartiruvchi. Porlash mutlaqo hayratlanarli.",
		rating: 5,
	},
	{
		id: 3,
		name: "Isabella Rose",
		role: "Model",
		image: IMAGES.testimonial3,
		text: "Nihoyat o'zimning muqaddas mahsulotlarimni topdim. Har bir tiyinga arziydi.",
		rating: 5,
	},
]

// Features for desktop
const features = [
	{ title: "Bepul yetkazib berish", desc: "$50 dan yuqori buyurtmalarga" },
	{ title: "30 kunlik qaytarish", desc: "Savolsiz kafolat" },
	{ title: "Premium sifat", desc: "100% original mahsulotlar" },
]

export default function App() {
	const containerRef = useRef(null)
	const heroRef = useRef(null)
	const heroImageRef = useRef(null)
	const benefitsRef = useRef(null)
	const productsRef = useRef(null)
	const testimonialsRef = useRef(null)
	const parallaxRef = useRef(null)
	const sliderRef = useRef(null)

	const [activeProduct, setActiveProduct] = useState(null)
	const [isNavVisible, setIsNavVisible] = useState(true)
	const [lastScrollY, setLastScrollY] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY
			if (currentScrollY > lastScrollY && currentScrollY > 100) {
				setIsNavVisible(false)
			} else {
				setIsNavVisible(true)
			}
			setLastScrollY(currentScrollY)
		}
		window.addEventListener("scroll", handleScroll, { passive: true })
		return () => window.removeEventListener("scroll", handleScroll)
	}, [lastScrollY])

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			// Hero animation
			const heroTl = gsap.timeline({ defaults: { ease: "power4.out" } })
			heroTl
				.fromTo(
					".hero-badge",
					{ opacity: 0, y: -20, scale: 0.9 },
					{ opacity: 1, y: 0, scale: 1, duration: 0.8 }
				)
				.fromTo(
					".hero-title-word",
					{ opacity: 0, y: 60, rotateX: -40 },
					{ opacity: 1, y: 0, rotateX: 0, duration: 1, stagger: 0.1 },
					"-=0.4"
				)
				.fromTo(
					".hero-subtitle",
					{ opacity: 0, y: 30 },
					{ opacity: 1, y: 0, duration: 0.8 },
					"-=0.5"
				)
				.fromTo(
					".hero-image",
					{ scale: 1.1, opacity: 0, y: 40 },
					{ scale: 1, opacity: 1, y: 0, duration: 1.2 },
					"-=0.8"
				)
				.fromTo(
					".hero-cta",
					{ opacity: 0, y: 20, scale: 0.9 },
					{
						opacity: 1,
						y: 0,
						scale: 1,
						duration: 0.6,
						stagger: 0.1,
						ease: "back.out(1.7)",
					},
					"-=0.5"
				)
				.fromTo(
					".hero-stats",
					{ opacity: 0, y: 20 },
					{ opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
					"-=0.3"
				)

			// Parallax on hero image
			gsap.to(".hero-image", {
				y: 50,
				ease: "none",
				scrollTrigger: {
					trigger: heroRef.current,
					start: "top top",
					end: "bottom top",
					scrub: 1,
				},
			})

			// Benefits animation
			gsap.fromTo(
				".benefit-card",
				{ opacity: 0, y: 80, scale: 0.9 },
				{
					opacity: 1,
					y: 0,
					scale: 1,
					duration: 0.8,
					ease: "power4.out",
					stagger: 0.12,
					scrollTrigger: {
						trigger: benefitsRef.current,
						start: "top 80%",
						toggleActions: "play none none reverse",
					},
				}
			)

			// Products animation
			gsap.fromTo(
				".product-card",
				{ opacity: 0, y: 100, scale: 0.95 },
				{
					opacity: 1,
					y: 0,
					scale: 1,
					duration: 0.9,
					ease: "power4.out",
					stagger: 0.15,
					scrollTrigger: {
						trigger: productsRef.current,
						start: "top 75%",
						toggleActions: "play none none reverse",
					},
				}
			)

			// Testimonials slider
			if (sliderRef.current) {
				const testimonialSlider = gsap.to(sliderRef.current, {
					xPercent: -50,
					ease: "none",
					duration: 25,
					repeat: -1,
				})
				ScrollTrigger.create({
					trigger: testimonialsRef.current,
					start: "top 90%",
					onEnter: () => testimonialSlider.play(),
					onLeaveBack: () => testimonialSlider.pause(),
				})
			}

			// Parallax section
			gsap.fromTo(
				".parallax-content",
				{ y: 80, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 1.2,
					ease: "power4.out",
					scrollTrigger: {
						trigger: parallaxRef.current,
						start: "top 85%",
						toggleActions: "play none none reverse",
					},
				}
			)

			// Section titles
			gsap.utils.toArray(".section-title").forEach((title) => {
				gsap.fromTo(
					title,
					{ opacity: 0, y: 50 },
					{
						opacity: 1,
						y: 0,
						duration: 0.8,
						ease: "power4.out",
						scrollTrigger: {
							trigger: title,
							start: "top 85%",
							toggleActions: "play none none reverse",
						},
					}
				)
			})

			// Features
			gsap.fromTo(
				".feature-item",
				{ opacity: 0, x: -30 },
				{
					opacity: 1,
					x: 0,
					duration: 0.6,
					stagger: 0.1,
					scrollTrigger: {
						trigger: ".features-section",
						start: "top 80%",
						toggleActions: "play none none reverse",
					},
				}
			)
		}, containerRef)

		return () => ctx.revert()
	}, [])

	const handleProductTap = (id) =>
		setActiveProduct(activeProduct === id ? null : id)

	return (
		<div ref={containerRef} className='min-h-screen bg-black'>
			{/* Navigation */}
			<nav
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
					isNavVisible ? "translate-y-0" : "-translate-y-full"
				}`}
			>
				<div className='bg-[rgba(29,29,31,0.72)] backdrop-blur-xl border-b border-white/10'>
					<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='flex items-center justify-between h-12 sm:h-14'>
							<span className='text-white font-semibold text-lg tracking-tight'>
								Lumière
							</span>
							<div className='hidden md:flex items-center gap-8'>
								<a
									href='#'
									className='text-gray-300 hover:text-white text-sm transition-colors'
								>
									Mahsulotlar
								</a>
								<a
									href='#'
									className='text-gray-300 hover:text-white text-sm transition-colors'
								>
									Haqida
								</a>
								<a
									href='#'
									className='text-gray-300 hover:text-white text-sm transition-colors'
								>
									Aloqa
								</a>
							</div>
							<button className='hidden sm:block px-4 py-1.5 bg-[#0071e3] text-white text-sm font-medium rounded-full hover:bg-[#0077ed] transition-colors'>
								Xarid qilish
							</button>
							<button className='sm:hidden text-white'>
								<svg
									className='w-6 h-6'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									viewBox='0 0 24 24'
								>
									<path d='M4 6h16M4 12h16M4 18h16' />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</nav>

			<main className='relative'>
				{/* Hero Section */}
				<section
					ref={heroRef}
					className='relative min-h-screen bg-gradient-to-b from-black via-[#1d1d1f] to-black overflow-hidden pt-12 sm:pt-14'
				>
					{/* Ambient Background */}
					<div className='absolute inset-0 overflow-hidden'>
						<div className='absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[120px]' />
						<div className='absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-rose-500/20 rounded-full blur-[100px]' />
						<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]' />
					</div>

					<div className='relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-20'>
						<div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
							{/* Hero Content */}
							<div className='text-center lg:text-left order-2 lg:order-1'>
								<div className='hero-badge inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-6'>
									<span className='w-2 h-2 bg-emerald-400 rounded-full animate-pulse' />
									<span className='text-xs sm:text-sm text-gray-300 font-medium'>
										Yangi kolleksiya mavjud
									</span>
								</div>

								<h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] tracking-tight mb-6'>
									<span className='hero-title-word block'>Go'zallikni</span>
									<span className='hero-title-word block bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400 bg-clip-text text-transparent'>
										qayta kashf
									</span>
									<span className='hero-title-word block'>eting</span>
								</h1>

								<p className='hero-subtitle text-gray-400 text-base sm:text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed'>
									Tabiat va ilm-fan uyg'unlashgan joyda. Teringizni yangilash
									uchun premium tarkiblar.
								</p>

								<div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10'>
									<button className='hero-cta group px-8 py-4 bg-[#0071e3] text-white font-medium rounded-full hover:bg-[#0077ed] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30'>
										Kolleksiyani ko'ring
										<ArrowRightIcon />
									</button>
									<button className='hero-cta px-8 py-4 bg-white/10 backdrop-blur-xl text-white font-medium rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95'>
										Batafsil ma'lumot
									</button>
								</div>

								<div className='flex items-center justify-center lg:justify-start gap-6 sm:gap-10'>
									<div className='hero-stats text-center'>
										<div className='text-2xl sm:text-3xl font-semibold text-white'>
											50K+
										</div>
										<div className='text-xs sm:text-sm text-gray-500'>
											Mamnun mijozlar
										</div>
									</div>
									<div className='w-px h-12 bg-white/20' />
									<div className='hero-stats text-center'>
										<div className='text-2xl sm:text-3xl font-semibold text-white'>
											4.9
										</div>
										<div className='text-xs sm:text-sm text-gray-500'>
											Reyting
										</div>
									</div>
									<div className='w-px h-12 bg-white/20' />
									<div className='hero-stats text-center'>
										<div className='text-2xl sm:text-3xl font-semibold text-white'>
											100%
										</div>
										<div className='text-xs sm:text-sm text-gray-500'>
											Tabiiy
										</div>
									</div>
								</div>
							</div>

							{/* Hero Image */}
							<div className='order-1 lg:order-2 flex justify-center'>
								<div className='hero-image relative'>
									<div className='absolute inset-0 bg-gradient-to-b from-violet-500/30 via-transparent to-rose-500/30 rounded-[2.5rem] blur-3xl scale-110' />
									<div className='relative w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem]'>
										<img
											ref={heroImageRef}
											src={IMAGES.hero}
											alt='Lumière Signature Serum'
											className='w-full h-full object-cover rounded-[2.5rem] shadow-2xl shadow-black/50'
										/>
										<div className='absolute inset-0 rounded-[2.5rem] ring-1 ring-white/20' />
										{/* Floating Rating Badge */}
										<div className='absolute -right-4 top-1/4 px-4 py-2 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl'>
											<div className='flex items-center gap-2'>
												<div className='flex'>
													{[...Array(5)].map((_, i) => (
														<StarIcon key={i} />
													))}
												</div>
												<span className='text-sm font-semibold text-gray-900'>
													4.9
												</span>
											</div>
										</div>
										{/* Floating Price Badge */}
										<div className='absolute -left-4 bottom-1/4 px-4 py-3 bg-black/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10'>
											<div className='text-xs text-gray-400 mb-1'>
												Boshlanish narxi
											</div>
											<div className='text-xl font-semibold text-white'>
												$98
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Scroll Indicator */}
					<div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60'>
						<div className='w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2'>
							<div className='w-1 h-3 bg-white/60 rounded-full animate-bounce' />
						</div>
					</div>
				</section>

				{/* Features Strip (Desktop) */}
				<section className='features-section hidden lg:block bg-[#f5f5f7] py-4 border-y border-gray-200'>
					<div className='max-w-6xl mx-auto px-8'>
						<div className='flex items-center justify-between'>
							{features.map((feature, index) => (
								<div
									key={index}
									className='feature-item flex items-center gap-3'
								>
									<div className='w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm'>
										<CheckIcon />
									</div>
									<div>
										<div className='font-medium text-gray-900 text-sm'>
											{feature.title}
										</div>
										<div className='text-gray-500 text-xs'>{feature.desc}</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Benefits Section */}
				<section
					ref={benefitsRef}
					className='py-16 sm:py-24 lg:py-32 bg-[#fbfbfd]'
				>
					<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='text-center mb-12 sm:mb-16'>
							<h2 className='section-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1d1d1f] mb-4'>
								Nima uchun{" "}
								<span className='bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent'>
									Lumière
								</span>
								?
							</h2>
							<p className='text-gray-500 text-base sm:text-lg max-w-2xl mx-auto'>
								Premium sifat va ilmiy innovatsiyalar bilan teringizni parvarish
								qiling
							</p>
						</div>

						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
							{benefits.map((benefit, index) => (
								<div
									key={index}
									className='benefit-card group relative p-6 sm:p-8 bg-white rounded-3xl border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer'
								>
									<div
										className={`w-14 h-14 sm:w-16 sm:h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
									>
										<div
											className={`bg-gradient-to-br ${benefit.color} bg-clip-text text-transparent`}
										>
											{benefit.icon}
										</div>
									</div>
									<div className='text-xs font-medium text-gray-400 uppercase tracking-wider mb-2'>
										{benefit.subtitle}
									</div>
									<h3 className='font-semibold text-lg sm:text-xl text-[#1d1d1f] mb-2'>
										{benefit.title}
									</h3>
									<p className='text-sm text-gray-500 leading-relaxed'>
										{benefit.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Products Section */}
				<section ref={productsRef} className='py-16 sm:py-24 lg:py-32 bg-white'>
					<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='text-center mb-12 sm:mb-16'>
							<h2 className='section-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1d1d1f] mb-4'>
								Eng{" "}
								<span className='bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent'>
									mashhur
								</span>{" "}
								mahsulotlar
							</h2>
							<p className='text-gray-500 text-base sm:text-lg max-w-2xl mx-auto'>
								Mijozlarimiz sevgan va tavsiya qilgan mahsulotlar
							</p>
						</div>

						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
							{products.map((product) => (
								<div
									key={product.id}
									onClick={() => handleProductTap(product.id)}
									className='product-card group relative bg-[#f5f5f7] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-3'
								>
									<div
										className={`absolute top-4 left-4 z-10 px-3 py-1.5 bg-gradient-to-r ${product.color} text-white text-xs font-semibold rounded-full shadow-lg`}
									>
										{product.tag}
									</div>
									<div className='relative h-48 sm:h-56 overflow-hidden'>
										<img
											src={product.image}
											alt={product.name}
											className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
										/>
										<div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
									</div>
									<div className='p-5'>
										<div className='flex items-center gap-1 mb-2'>
											{[...Array(5)].map((_, i) => (
												<StarIcon
													key={i}
													filled={i < Math.floor(product.rating)}
												/>
											))}
											<span className='text-xs text-gray-500 ml-1'>
												({product.reviews})
											</span>
										</div>
										<h3 className='font-semibold text-lg text-[#1d1d1f] mb-1'>
											{product.name}
										</h3>
										<p className='text-sm text-gray-500 mb-3'>
											{product.subtitle}
										</p>
										<div className='flex items-center justify-between'>
											<div className='flex items-baseline gap-2'>
												<span className='text-xl font-semibold text-[#1d1d1f]'>
													{product.price}
												</span>
												<span className='text-sm text-gray-400 line-through'>
													{product.originalPrice}
												</span>
											</div>
										</div>
										{/* Add to Cart (Mobile tap, Desktop hover) */}
										<div
											className={`mt-4 overflow-hidden transition-all duration-300 ${
												activeProduct === product.id
													? "max-h-20 opacity-100"
													: "max-h-0 opacity-0 lg:group-hover:max-h-20 lg:group-hover:opacity-100"
											}`}
										>
											<button className='w-full py-3 bg-[#0071e3] text-white font-medium rounded-xl hover:bg-[#0077ed] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2'>
												Savatga qo'shish
												<svg
													className='w-4 h-4'
													fill='none'
													stroke='currentColor'
													strokeWidth='2'
													viewBox='0 0 24 24'
												>
													<path d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' />
												</svg>
											</button>
										</div>
									</div>
								</div>
							))}
						</div>

						<div className='text-center mt-12'>
							<button className='px-8 py-4 bg-[#1d1d1f] text-white font-medium rounded-full hover:bg-[#424245] transition-all duration-300 hover:scale-105 active:scale-95'>
								Barcha mahsulotlarni ko'rish
							</button>
						</div>
					</div>
				</section>

				{/* Parallax Banner Section */}
				<section
					ref={parallaxRef}
					className='relative py-20 sm:py-32 lg:py-40 overflow-hidden'
					style={{
						background:
							"linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
					}}
				>
					<div className='absolute inset-0 overflow-hidden'>
						<div className='absolute top-0 left-0 w-full h-full opacity-30'>
							<div className='absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse' />
							<div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000' />
						</div>
					</div>

					<div className='parallax-content relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
						<div className='inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-xl rounded-full mb-6'>
							<span className='text-white/90 text-sm font-medium'>
								✨ Maxsus taklif
							</span>
						</div>
						<h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6'>
							Birinchi xaridingizga
							<span className='block mt-2'>20% chegirma oling</span>
						</h2>
						<p className='text-white/80 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-8'>
							GLOW20 kodini qo'llang va go'zallik sayohatingizni boshlang
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<button className='px-8 py-4 bg-white text-[#764ba2] font-semibold rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl'>
								Hoziroq xarid qiling
							</button>
							<div className='flex items-center justify-center gap-3 px-6 py-4 bg-white/20 backdrop-blur-xl rounded-full border border-white/30'>
								<span className='text-white font-mono text-lg tracking-wider'>
									GLOW20
								</span>
								<button className='text-white/80 hover:text-white transition-colors'>
									<svg
										className='w-5 h-5'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
										viewBox='0 0 24 24'
									>
										<path d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z' />
									</svg>
								</button>
							</div>
						</div>
					</div>
				</section>

				{/* Testimonials Section */}
				<section
					ref={testimonialsRef}
					className='py-16 sm:py-24 lg:py-32 bg-[#fbfbfd] overflow-hidden'
				>
					<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='text-center mb-12 sm:mb-16'>
							<h2 className='section-title text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1d1d1f] mb-4'>
								Mijozlarimiz{" "}
								<span className='bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent'>
									fikrlari
								</span>
							</h2>
							<p className='text-gray-500 text-base sm:text-lg max-w-2xl mx-auto'>
								50,000 dan ortiq mamnun mijozlarimizning fikrlari
							</p>
						</div>
					</div>

					{/* Infinite Slider */}
					<div className='relative'>
						<div
							ref={sliderRef}
							className='flex gap-6 px-4'
							style={{ width: "max-content" }}
						>
							{[...testimonials, ...testimonials, ...testimonials].map(
								(testimonial, index) => (
									<div
										key={`${testimonial.id}-${index}`}
										className='w-80 sm:w-96 shrink-0 p-6 sm:p-8 bg-white rounded-3xl shadow-lg border border-gray-100'
									>
										<div className='flex gap-1 mb-4'>
											{[...Array(testimonial.rating)].map((_, i) => (
												<StarIcon key={i} />
											))}
										</div>
										<p className='text-[#1d1d1f] text-base sm:text-lg leading-relaxed mb-6'>
											"{testimonial.text}"
										</p>
										<div className='flex items-center gap-4'>
											<img
												src={testimonial.image}
												alt={testimonial.name}
												className='w-12 h-12 object-cover rounded-full ring-2 ring-gray-100'
											/>
											<div>
												<p className='font-semibold text-[#1d1d1f]'>
													{testimonial.name}
												</p>
												<p className='text-sm text-gray-500'>
													{testimonial.role}
												</p>
											</div>
										</div>
									</div>
								)
							)}
						</div>
						{/* Fade edges */}
						<div className='absolute top-0 left-0 w-20 sm:w-32 h-full bg-gradient-to-r from-[#fbfbfd] to-transparent pointer-events-none' />
						<div className='absolute top-0 right-0 w-20 sm:w-32 h-full bg-gradient-to-l from-[#fbfbfd] to-transparent pointer-events-none' />
					</div>
				</section>

				{/* Newsletter Section */}
				<section className='py-16 sm:py-24 bg-white'>
					<div className='max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
						<h2 className='text-2xl sm:text-3xl font-semibold text-[#1d1d1f] mb-4'>
							Yangiliklardan xabardor bo'ling
						</h2>
						<p className='text-gray-500 mb-8'>
							Maxsus takliflar va yangi mahsulotlar haqida birinchi bo'lib
							biling
						</p>
						<div className='flex flex-col sm:flex-row gap-3'>
							<input
								type='email'
								placeholder='Email manzilingiz'
								className='flex-1 px-6 py-4 bg-[#f5f5f7] rounded-full border border-transparent focus:border-[#0071e3] focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all'
							/>
							<button className='px-8 py-4 bg-[#0071e3] text-white font-medium rounded-full hover:bg-[#0077ed] transition-all duration-300 hover:scale-105 active:scale-95'>
								Obuna bo'lish
							</button>
						</div>
					</div>
				</section>

				{/* Footer */}
				<footer className='bg-[#1d1d1f] text-white'>
					<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16'>
						<div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'>
							<div className='col-span-2 md:col-span-1'>
								<h3 className='text-xl font-semibold mb-4'>Lumière</h3>
								<p className='text-gray-400 text-sm leading-relaxed'>
									Premium terini parvarish qilish mahsulotlari. Tabiat va
									ilm-fan uyg'unligi.
								</p>
							</div>
							<div>
								<h4 className='font-semibold mb-4'>Mahsulotlar</h4>
								<ul className='space-y-2 text-gray-400 text-sm'>
									<li>
										<a href='#' className='hover:text-white transition-colors'>
											Serumlar
										</a>
									</li>
									<li>
										<a href='#' className='hover:text-white transition-colors'>
											Kremlar
										</a>
									</li>
									<li>
										<a href='#' className='hover:text-white transition-colors'>
											Niqoblar
										</a>
									</li>
									<li>
										<a href='#' className='hover:text-white transition-colors'>
											To'plamlar
										</a>
									</li>
								</ul>
							</div>
							<div>
								<h4 className='font-semibold mb-4'>Kompaniya</h4>
								<ul className='space-y-2 text-gray-400 text-sm'>
									<li>
										<a href='#' className='hover:text-white transition-colors'>
											Haqimizda
										</a>
									</li>
									<li>
										<a href='#' className='hover:text-white transition-colors'>
											Blog
										</a>
									</li>
									<li>
										<a href='#' className='hover:text-white transition-colors'>
											Karyera
										</a>
									</li>
									<li>
										<a href='#' className='hover:text-white transition-colors'>
											Aloqa
										</a>
									</li>
								</ul>
							</div>
							<div>
								<h4 className='font-semibold mb-4'>Yordam</h4>
								<ul className='space-y-2 text-gray-400 text-sm'>
									<li>
										<a href='#' className='hover:text-white transition-colors'>
											FAQ
										</a>
									</li>
									<li>
										<a href='#' className='hover:text-white transition-colors'>
											Yetkazib berish
										</a>
									</li>
									<li>
										<a href='#' className='hover:text-white transition-colors'>
											Qaytarish
										</a>
									</li>
									<li>
										<a href='#' className='hover:text-white transition-colors'>
											Maxfiylik
										</a>
									</li>
								</ul>
							</div>
						</div>

						<div className='flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/10'>
							<p className='text-gray-400 text-sm mb-4 sm:mb-0'>
								© 2026 Lumière. Barcha huquqlar himoyalangan.
							</p>
							<div className='flex gap-4'>
								<a
									href='#'
									className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors'
								>
									<svg
										className='w-5 h-5'
										fill='currentColor'
										viewBox='0 0 24 24'
									>
										<path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
									</svg>
								</a>
								<a
									href='#'
									className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors'
								>
									<svg
										className='w-5 h-5'
										fill='currentColor'
										viewBox='0 0 24 24'
									>
										<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
									</svg>
								</a>
								<a
									href='#'
									className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors'
								>
									<svg
										className='w-5 h-5'
										fill='currentColor'
										viewBox='0 0 24 24'
									>
										<path d='M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z' />
									</svg>
								</a>
							</div>
						</div>
					</div>
				</footer>

				{/* Mobile Sticky CTA */}
				<div className='fixed bottom-0 left-0 right-0 lg:hidden z-50 p-4 bg-gradient-to-t from-black via-black/90 to-transparent'>
					<button className='w-full py-4 bg-[#0071e3] text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/30 flex items-center justify-center gap-3 active:scale-95 transition-transform'>
						<span>Kolleksiyani ko'ring</span>
						<ArrowRightIcon />
					</button>
				</div>

				{/* Spacer for mobile sticky CTA */}
				<div className='h-24 lg:hidden bg-[#1d1d1f]' />
			</main>
		</div>
	)
}
