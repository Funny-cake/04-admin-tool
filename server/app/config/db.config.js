const dbConfig = {
	HOST: "eu-cdbr-west-03.cleardb.net",
	USER: "b9ac5fe09ec6ae",
	PASSWORD: "0620796e",
	DB: "heroku_5de42b046ce2b4e",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
};

export default dbConfig;

//mysql:\b9ac5fe09ec6ae:0620796e@eu-cdbr-west-03.cleardb.net\heroku_5de42b046ce2b4e?reconnect=true