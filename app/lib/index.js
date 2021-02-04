export const sleep = delay => new Promise(
	resolve => setTimeout(resolve, delay)
)

export const waitRippleEffect = () => sleep(300)

