module.exports = {
	HOST: "localhost",
	USER: "root",
	PASSWORD: "1234",
	DB: "04_admin_tool_bd",
	dialect: "mysql",
	pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
	}
  };