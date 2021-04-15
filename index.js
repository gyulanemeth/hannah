const title = '5 reasons why I love YOU.'

async function pause({ time }) {
	return new Promise((resolve) => {
		setTimeout(resolve, time)
	})
}

async function blinkingCursor({ cursor, times }) {
	for (let idx = 0; idx < times; idx += 1) {
		await pause({ time: 300 })
		cursor.style.opacity = 0
		await pause({ time: 300 })
		cursor.style.opacity = 1
	}
}

async function typewriter({ textNode, text }) {
	for (let idx = 0; idx < text.length; idx += 1) {
		await pause({ time: 100 })
		const current = text.slice(0, idx + 1)
		textNode.nodeValue = `${current}`
	}
}

async function deleteBack({ textNode, text, times }) {
	for (let idx = 0; idx < times; idx += 1) {
		await pause({ time: 200 })
		const current = text.slice(0, text.length - idx)
		textNode.nodeValue = `${current}`
	}
}

async function addSlowly({ textNode, originalText, text }) {
	for (let idx = 0; idx < text.length; idx += 1) {
		await pause({ time: 400 })
		const current = text.slice(0, idx + 1)
		textNode.nodeValue = `${originalText}${current}`
	}
}

async function deleteAll({ textNode }) {
	const length = textNode.nodeValue.length;
	for (let idx = 0; idx < length; idx += 1) {
		await pause({ time: 75 })
		const current = textNode.nodeValue.slice(0, textNode.nodeValue.length - 2)
		textNode.nodeValue = current
	}
}

async function waitForClick() {
	await new Promise(resolve => {
		document.body.onclick = () => {
			resolve()
			document.body.onclick = null
		}
	})
}

const typewriterElem = document.getElementById('typewriter')
const typewriterText = document.createTextNode('')
typewriterElem.appendChild(typewriterText)

const cursorElem = document.getElementById('cursor')

async function main() {
	/*
	await typewriter({ textNode: typewriterText, text: '5 reasons why I love you.' })
	await blinkingCursor({ cursor: cursorElem, text: '5 reasons why I love you.', times: 5 })
	await deleteBack({ textNode: typewriterText, text: '5 reasons why I love you.', times: 5 })
	await addSlowly({ textNode: typewriterText, originalText: '5 reasons why I love ', text: 'YOU!' })
	await blinkingCursor({ cursor: cursorElem, times: 5 })

	await waitForClick()
	await deleteAll({ textNode: typewriterText })
	await typewriter({ textNode: typewriterText, text: 'Since the very first time we met, there is an unexplainable connection between us.' })
	await blinkingCursor({ cursor: cursorElem, times: 5 })

	await waitForClick()
	await deleteAll({ textNode: typewriterText })
	await typewriter({ textNode: typewriterText, text: 'When you smile at me and look at me with your beautiful eyes, I\'m feeling loved.' })
	await blinkingCursor({ cursor: cursorElem, times: 5 })

	await waitForClick()
	await deleteAll({ textNode: typewriterText })
	await typewriter({ textNode: typewriterText, text: 'You amaze me with your intellect.' })
	await blinkingCursor({ cursor: cursorElem, times: 5 })

	await waitForClick()
	await deleteAll({ textNode: typewriterText })
	await typewriter({ textNode: typewriterText, text: 'You motivate me to be a better person.' })
	await blinkingCursor({ cursor: cursorElem, times: 5 })

	await waitForClick()
	await deleteAll({ textNode: typewriterText })
	await typewriter({ textNode: typewriterText, text: 'You make me happy.' })
	await blinkingCursor({ cursor: cursorElem, times: 5 })
	

	await waitForClick()
	await deleteAll({ textNode: typewriterText })
	await typewriter({ textNode: typewriterText, text: 'Now, that you know all of this, I want to' })
	await addSlowly({ textNode: typewriterText, originalText: 'Now, that you know all of this, I want to', text: '...' })
	await blinkingCursor({ cursor: cursorElem, times: 5 })
	await deleteAll({ textNode: typewriterText })
	
	*/
	await typewriter({ textNode: typewriterText, text: 'Wish you a HAPPY BIRTHDAY!' })
	await blinkingCursor({ cursor: cursorElem, times: 5 })

	const text = document.getElementById('text')
	text.style.opacity = 0

	await pause({ time: 1000 })

	text.remove()


	const miluvAndMe = document.createElement('img')
	miluvAndMe.id = 'miluvandme'
	miluvAndMe.src = 'miluvandme.jpeg'
	miluvAndMe.style.opacity = 0
	miluvAndMe.style.transition = 'all 5s ease-in'
	document.body.appendChild(miluvAndMe)

	await pause({ time: 1000 })

	miluvAndMe.style.opacity = 1
}



main()
