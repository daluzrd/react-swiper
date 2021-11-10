import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'

import 'swiper/swiper.scss'

import './assets/style.css'

function App() {
	SwiperCore.use([Autoplay])

	const [content, setContent] = useState<string[]>([])

	const generateContent = () => {
		const tempContent: string[] = []

		for (let i = 0; i < 20; i++) {
			tempContent.push(`oláaaaaaa${i}`)
		}

		setContent(tempContent)
	}

	useEffect(() => {
		generateContent()
	}, [])

	return (
		<div className='App'>
			<Swiper
				loop
				grabCursor
				mousewheel
				direction='vertical'
				speed={1000}
				slidesPerView={10}
				autoplay={{ delay: 0, pauseOnMouseEnter: true, disableOnInteraction: false, waitForTransition: false }}
			>
				{content.map((value, index) => (
					<SwiperSlide key={`${value}_${index}`}>
						<div className='tag'>
							<div>{value}</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default App
