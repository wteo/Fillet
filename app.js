const navPs = document.querySelectorAll("nav p");
const footerPs = document.querySelectorAll(".footer p")


function getLoop (pElements) {
	for (let p of pElements) {
		p.addEventListener("mouseover", () => {
			p.style.textDecoration = "underline";
		})
		p.addEventListener("mouseout", () => {
			p.style.textDecoration = "";
		})
	}
}

getLoop(navPs);
getLoop(footerPs);

const textarea = document.querySelector("textarea");
const form = document.querySelector("form");

textarea.addEventListener("keypress", function(e) {
	if (e.key === "Enter") {
		const addComment = document.createElement("p");
		addComment.innerText = this.value;
		form.append(addComment);
		this.value = "";
	}
	})






                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   