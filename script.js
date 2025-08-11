// your code here
const url = document.getElementById("url");
		const name = document.getElementById("name");
		const year = document.getElementById("year");
		const button = document.getElementById("button");
		button.addEventListener("click",()=>{
			if(name.value.trim()!=="" && year.value.trim()==""){
				url.innerHTML = `https://localhost:8080/?name=${encodedURIComponent(name.value)}`
			}
			if(year.value.trim()!=="" && name.value.trim()==""){
				url.innerHTML = `https://localhost:8080/?year=${encodedURIComponent(year.value)}`;
			}
			if(year.value.trim()!=="" && name.value.trim()!==""){
				url.innerHTML = `https://localhost:8080/?name=${encodedURIComponent(name.value)}/?year=${encodedURIComponent(year.value)}`;
			}
		})