const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
			perfil: null,
			categorias: [],
			cards: "",
			token: localStorage.getItem("token") || null
		},
		actions: {
			selectCategoria: (categoria) => {
				setStore({categoria: categoria})
			},
			verInfo: (cards) =>{
				setStore({cards: cards})
			},
			getProfileById: async (user_id) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + `/api/perfil/${user_id}`)
					const data = await resp.json()
					setStore({
						perfil: data
					})
				}
				catch (err) {
					console.log(err)
				}
			},
			newUsers: async (user) => { //registro-1
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/user", {
						method: "POST", 
						body: JSON.stringify(user),
						headers: {
							'Content-Type': 'application/json'
						}
					})
					if (resp.ok) {
						const data = await resp.json()
						setStore({
							user: data.user,
							token: data.token
						})
						localStorage.setItem("token", data.token)
						localStorage.setItem("user", JSON.stringify(data.user))
						console.log(data)
						return true
					}
					else {
						return false;
					}
				}
				catch (err) {
					console.log(err)
				}
			},
			newPerfil: async (perfil) => { //registro-2
				let store = getStore() //Trayendo info del store aca para pedirla abajo
				try {
					console.log(perfil)
					const resp = await fetch(process.env.BACKEND_URL + "/api/perfil", {
						method: "POST",
						body: JSON.stringify(perfil),
						headers: {
							//'Authorization': `Bearer ${store.token}`,
							'Content-Type': 'application/json'
						}
					})
					const data = await resp.json()
					setStore({
						perfil: data.results
					})
					localStorage.setItem("user", JSON.stringify(data.user))
					//localStorage.setItem("token", data.token)
					console.log(data);
				}
				catch (err) {
					console.log(err)
				}
			},
			 newTalento: async (talent) => { //registro-3
				let store = getStore() //Trayendo info del store aca para pedirla abajo
			try {
					console.log(talent)
					const resp = await fetch(process.env.BACKEND_URL + "/api/talent", {
						method: "POST",
						body: JSON.stringify(talent),
						headers: {
						   'Authorization': `Bearer ${store.token}`,
							'Content-Type': 'application/json'
						}
					})
				}
			catch (err) {
				console.log(err)
				}
			 },
			login: async (email, password) => {
				const opts = {
					method: "POST",
					headers: {
					  "Content-Type": "application/json"
					},
					body: JSON.stringify({
					  "email": email,
					  "password": password
					})
				  }
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/token`, opts)
					if (!response.ok) {
						alert("There has been some error");
						return false //no se repita
					}
					const data = await response.json();
					setStore({
						token: data.access_token, //Aca guarda la data del token en el store
						user: data.user
					})
					localStorage.setItem("token", data.access_token)
					localStorage.setItem("user", JSON.stringify(data.user))
					// console.log(data.access_token)
				}
				catch (err) {
					console.log(err)
				}
			},
			logout: () => {
				localStorage.removeItem("token")
				localStorage.removeItem("user")

				// console.log("Loging out")
				setStore({ token: null })
			},
			newimage: async (perfil) =>{

				let store = getStore()

				try {

					const apiUrl = `https://api.cloudinary.com/v1_1/datq8v8mk/image/upload`

					const formMultimedia = new FormData()

					formMultimedia.append("upload_preset", "v9oseeuk")
					formMultimedia.append("file", perfil.photo)

					const respMediaBucket = await fetch(apiUrl, {
						method: "POST",
						body: formMultimedia
					})

					const dataCloudinary = await respMediaBucket.json()

					console.log(dataCloudinary)

					const resp = await fetch(process.env.BACKEND_URL + "/api/perfil",{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							'Authorization': `Bearer ${store.token}`
						},
						body: JSON.stringify({
							"name": perfil.name,
							"last_name": perfil.last_name,
							"phone": perfil.phone,
							"age": perfil.age,
							"country": perfil.country,
							"state": perfil.state,
							//"user_id": user.state,
							"image_url": dataCloudinary.url
						})
					})
					
				} catch (error) {
					console.log(error)
				}
			},
			newimageTalent: async (talent) =>{
				console.log(talent)
				let store = getStore()

				try {

					const apiUrl = `https://api.cloudinary.com/v1_1/datq8v8mk/image/upload`

					const formMultimedia = new FormData()

					formMultimedia.append("upload_preset", "v9oseeuk")
					formMultimedia.append("file", talent.imagetalent_url)

					const respMediaBucket = await fetch(apiUrl, {
						method: "POST",
						body: formMultimedia
					})

					const dataCloudinary = await respMediaBucket.json()

					console.log(dataCloudinary)

					const resp = await fetch(process.env.BACKEND_URL + "/api/talent",{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							'Authorization': `Bearer ${store.token}`
						},
						body: JSON.stringify({
							"name": talent.name,
							"talent_name": talent.talent_name,
							"practice_time": talent.practice_time,
							"about_you": talent.about_you,
							"categories_talent": talent.categories_talent,
							"range_talent": talent.range_talent,
							"imagetalent_url": dataCloudinary.url
						})
					})
					
				} catch (error) {
					console.log(error)
				}
			},
			guardarcategoria: async (categoria)=>{
				try {

					const bodyfetch = {categorie_name: categoria }

					const resp = await fetch (process.env.BACKEND_URL + "/api/categories/seleccionar", {
						method: "POST",
						body: JSON.stringify(bodyfetch),
						headers: {
							'Content-Type': 'application/json'
						}
					})
					const data = await resp.json()
					console.log(data);
					
				} catch (error) {
					
				}
			},
			retornarcategoria: async (categoriaSeleccionada)=>{
				try {

					const bodyfetch = {categoria : categoriaSeleccionada}
					
					const resp = await fetch (process.env.BACKEND_URL + "api/categories",{
						method: "GET",
						body: JSON.stringify(bodyfetch),
						headers: {
							'Content-Type': 'application/json'
						}
					})
					const data = await resp.json()
					console.log(data)

				} catch (error) {
					
				}
			},
			enviarpeticion: async (peticionEnviada)=>{
				try {
					
					const bodyfetch = {peticion: peticionEnviada}

					const resp = await fetch (process.env.BACKEND_URL + "api/talentrequest",{
						method: "POST",
						body: JSON.stringify(bodyfetch),
						headers:{
							'Content-Type': 'application/json'
						}
					})
					const data = await resp.json()
					console.log(data)
				} catch (error) {
					
				}
			}
		}
	};
};

export default getState;



















// store: {
// 	message: null,
// 	demo: [
// 		{
// 			title: "FIRST",
// 			background: "white",
// 			initial: "white"
// 		},
// 		{
// 			title: "SECOND",
// 			background: "white",
// 			initial: "white"
// 		}
// 	]
// },

// actions: {
// 	// Use getActions to call a function within a fuction
// 	exampleFunction: () => {
// 		getActions().changeColor(0, "green");
// 	},

// 	getMessage: async () => {
// 		try{
// 			// fetching data from the backend
// 			const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
// 			const data = await resp.json()
// 			setStore({ message: data.message })
// 			// don't forget to return something, that is how the async resolves
// 			return data;
// 		}catch(error){
// 			console.log("Error loading message from backend", error)
// 		}
// 	},
// 	changeColor: (index, color) => {
// 		//get the store
// 		const store = getStore();

// 		//we have to loop the entire demo array to look for the respective index
// 		//and change its color
// 		const demo = store.demo.map((elm, i) => {
// 			if (i === index) elm.background = color;
// 			return elm;
// 		});

// 		//reset the global store
// 		setStore({ demo: demo });
// 	}
// }
