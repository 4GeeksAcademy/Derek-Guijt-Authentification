const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			syncSessionToken: () => {
				const token = sessionStorage.getItem('token');
				if (token && token !== '' && token !== undefined){
					setStore({token:token})
				}
			} , 
			login

			logout
			
			sign up
		}
	};
};

export default getState;
